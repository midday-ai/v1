import Stripe from "stripe";
import { logger } from "@v1/logger";
import { createClient } from "@v1/supabase/server";
import { routes } from "./routes";
import { UserDetails, Product, Price, Subscription } from "./types";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

/**
 * Creates a new customer in Stripe and stores the mapping in Supabase.
 * @param userId - The user's ID in the system.
 * @param email - The user's email address.
 * @param fullName - The user's full name.
 * @returns A Promise that resolves to the created Stripe customer object.
 * @throws Will throw an error if the customer creation fails.
 */
export async function createCustomer(
  userId: string,
  email: string,
  fullName: string,
) {
  const supabase = createClient();

  try {
    const customer = await stripe.customers.create({ email });

    // Insert into users table
    await supabase
      .from("users")
      .upsert({ id: userId, full_name: fullName }, { onConflict: "id" });

    // Insert into customers table
    await supabase
      .from("customers")
      .insert({ id: userId, stripe_customer_id: customer.id });

    return customer;
  } catch (error) {
    logger.error("Error creating Stripe customer", error);
    throw error;
  }
}

/**
 * Creates a new subscription in Stripe and stores the details in Supabase.
 * @param customerId - The ID of the customer in Stripe.
 * @param priceId - The ID of the price to subscribe to.
 * @returns A Promise that resolves to the created Stripe subscription object.
 * @throws Will throw an error if the subscription creation fails.
 */
export async function createSubscription(customerId: string, priceId: string) {
  const supabase = createClient();

  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      expand: ["latest_invoice.payment_intent"],
    });

    await supabase.from("subscriptions").insert({
      id: subscription.id,
      user_id: customerId,
      status: subscription.status,
      price_id: priceId,
      quantity: subscription.items.data[0]?.quantity ?? 1,
      cancel_at_period_end: subscription.cancel_at_period_end ?? false,
      created: new Date(subscription.created * 1000).toISOString(),
      current_period_start: new Date(
        subscription.current_period_start * 1000,
      ).toISOString(),
      current_period_end: new Date(
        subscription.current_period_end * 1000,
      ).toISOString(),
      ended_at: subscription.ended_at
        ? new Date(subscription.ended_at * 1000).toISOString()
        : null,
      cancel_at: subscription.cancel_at
        ? new Date(subscription.cancel_at * 1000).toISOString()
        : null,
      canceled_at: subscription.canceled_at
        ? new Date(subscription.canceled_at * 1000).toISOString()
        : null,
      trial_start: subscription.trial_start
        ? new Date(subscription.trial_start * 1000).toISOString()
        : null,
      trial_end: subscription.trial_end
        ? new Date(subscription.trial_end * 1000).toISOString()
        : null,
    });

    return subscription;
  } catch (error) {
    logger.error("Error creating Stripe subscription", error);
    throw error;
  }
}

/**
 * Creates a new payment intent in Stripe and stores the details in Supabase.
 * @param customerId - The ID of the customer in Stripe.
 * @param amount - The amount to charge in cents.
 * @param currency - The currency to use for the payment.
 * @returns A Promise that resolves to the created Stripe payment intent object.
 * @throws Will throw an error if the payment intent creation fails.
 */
export async function createPaymentIntent(
  customerId: string,
  amount: number,
  currency: string,
) {
  const supabase = createClient();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      customer: customerId,
      amount,
      currency,
    });

    await supabase.from("payments").insert({
      customer_id: customerId,
      stripe_payment_intent_id: paymentIntent.id,
      amount,
      currency,
      status: paymentIntent.status,
    });

    return paymentIntent;
  } catch (error) {
    logger.error("Error creating Stripe payment intent", error);
    throw error;
  }
}

/**
 * Retrieves all subscriptions for a given customer from Supabase.
 * @param customerId - The ID of the customer in the system.
 * @returns A Promise that resolves to an array of Subscription objects.
 * @throws Will throw an error if the subscription retrieval fails.
 */
export async function getCustomerSubscriptions(
  customerId: string,
): Promise<Subscription[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", customerId);

  if (error) {
    logger.error("Error fetching customer subscriptions", error);
    throw error;
  }

  return data as Subscription[];
}

/**
 * Retrieves all active products from Supabase.
 * @returns A Promise that resolves to an array of Product objects.
 * @throws Will throw an error if the product retrieval fails.
 */
export async function getProducts(): Promise<Product[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("active", true)
    .order("metadata->index");

  if (error) {
    logger.error("Error fetching products", error);
    throw error;
  }

  return data as Product[];
}

/**
 * Retrieves all active prices from Supabase.
 * @returns A Promise that resolves to an array of Price objects.
 * @throws Will throw an error if the price retrieval fails.
 */
export async function getPrices(): Promise<Price[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("prices")
    .select("*")
    .eq("active", true)
    .order("unit_amount");

  if (error) {
    logger.error("Error fetching prices", error);
    throw error;
  }

  return data as Price[];
}

/**
 * Creates a new Stripe Checkout session for subscription purchase.
 * @param customerId - The ID of the customer in Stripe.
 * @param price - The ID of the price to use for the checkout.
 * @param quantity - The quantity of the item to purchase (default: 1).
 * @param metadata - Additional metadata to attach to the subscription.
 * @returns A Promise that resolves to the created Stripe Checkout session object.
 * @throws Will throw an error if the session creation fails.
 */
export async function createCheckoutSession(
  customerId: string,
  price: string,
  quantity: number = 1,
  metadata?: { [key: string]: string },
) {
  const checkoutSession = await stripe.checkout.sessions.create({
    customer: customerId,
    line_items: [{ price, quantity }],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/account`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    subscription_data: { metadata },
  });

  return checkoutSession;
}

/**
 * Manages an existing subscription by canceling or reactivating it.
 * @param subscriptionId - The ID of the subscription to manage.
 * @param action - The action to perform ('cancel' or 'reactivate').
 * @returns A Promise that resolves to the updated Stripe subscription object.
 * @throws Will throw an error if the subscription management fails.
 */
export async function manageSubscription(
  subscriptionId: string,
  action: "cancel" | "reactivate",
) {
  if (action === "cancel") {
    return await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });
  } else if (action === "reactivate") {
    return await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: false,
    });
  }
}

export { routes };
