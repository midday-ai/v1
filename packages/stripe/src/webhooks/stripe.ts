import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@v1/supabase/server";
import { logger } from "@v1/logger";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    logger.error("Error verifying webhook signature", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = createClient();

  switch (event.type) {
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      const subscription = event.data.object as Stripe.Subscription;
      await supabase
        .from("subscriptions")
        .update({
          status: subscription.status,
          current_period_start: new Date(
            subscription.current_period_start * 1000,
          ),
          current_period_end: new Date(subscription.current_period_end * 1000),
        })
        .eq("stripe_subscription_id", subscription.id);
      break;
    case "payment_intent.succeeded":
    case "payment_intent.payment_failed":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      await supabase
        .from("payments")
        .update({ status: paymentIntent.status })
        .eq("stripe_payment_intent_id", paymentIntent.id);
      break;
    default:
      logger.info(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
