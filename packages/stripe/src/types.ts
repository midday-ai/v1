import Stripe from "stripe";
import { z } from "zod";

/**
 * Represents the details of a user in the system.
 * @interface UserDetails
 */
export interface UserDetails {
  /** Unique identifier for the user */
  id: string;
  /** User's first name */
  first_name: string;
  /** User's last name */
  last_name: string;
  /** User's full name (optional) */
  full_name?: string;
  /** URL to the user's avatar image (optional) */
  avatar_url?: string;
  /** User's billing address (optional) */
  billing_address?: Stripe.Address;
  /** User's payment method (optional) */
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
}

/**
 * Represents a product in the Stripe system.
 * @interface Product
 */
export interface Product {
  /** Unique identifier for the product */
  id: string;
  /** Indicates if the product is active */
  active?: boolean;
  /** Name of the product */
  name?: string;
  /** Description of the product */
  description?: string;
  /** URL to the product's image */
  image?: string;
  /** Additional metadata associated with the product */
  metadata?: Stripe.Metadata;
}

/**
 * Represents a price for a product in the Stripe system.
 * @interface Price
 */
export interface Price {
  /** Unique identifier for the price */
  id: string;
  /** ID of the product this price is associated with */
  product_id?: string;
  /** Indicates if the price is active */
  active?: boolean;
  /** Description of the price */
  description?: string;
  /** The amount in cents */
  unit_amount?: number;
  /** The currency of the price */
  currency?: string;
  /** The type of the price (one-time or recurring) */
  type?: Stripe.Price.Type;
  /** For recurring prices, the billing interval */
  interval?: Stripe.Price.Recurring.Interval;
  /** For recurring prices, the number of intervals between billings */
  interval_count?: number;
  /** Number of days in the trial period, if applicable */
  trial_period_days?: number | null;
  /** Additional metadata associated with the price */
  metadata?: Stripe.Metadata;
}

/**
 * Represents a subscription in the system.
 * @interface Subscription
 */
export interface Subscription {
  /** Unique identifier for the subscription */
  id: string;
  /** ID of the user who owns this subscription */
  user_id: string;
  /** Current status of the subscription */
  status?: Stripe.Subscription.Status;
  /** Additional metadata associated with the subscription */
  metadata?: Stripe.Metadata;
  /** ID of the price used for this subscription */
  price_id?: string;
  /** Quantity of the subscribed item */
  quantity?: number;
  /** Indicates if the subscription will be canceled at the end of the current period */
  cancel_at_period_end?: boolean;
  /** Timestamp of when the subscription was created */
  created: string;
  /** Timestamp of when the current period started */
  current_period_start: string;
  /** Timestamp of when the current period ends */
  current_period_end: string;
  /** Timestamp of when the subscription ended, if applicable */
  ended_at?: string;
  /** Timestamp of when the subscription is scheduled to cancel, if applicable */
  cancel_at?: string;
  /** Timestamp of when the subscription was canceled, if applicable */
  canceled_at?: string;
  /** Timestamp of when the trial period started, if applicable */
  trial_start?: string;
  /** Timestamp of when the trial period ends, if applicable */
  trial_end?: string;
}

/**
 * Zod schema for creating a subscription.
 * @constant
 */
export const createSubscriptionSchema = z.object({
  /** ID of the price to subscribe to */
  priceId: z.string(),
});

/**
 * Zod schema for managing a subscription.
 * @constant
 */
export const manageSubscriptionSchema = z.object({
  /** ID of the subscription to manage */
  subscriptionId: z.string(),
  /** Action to perform on the subscription */
  action: z.enum(["cancel", "reactivate"]),
});

/**
 * Zod schema for creating a checkout session.
 * @constant
 */
export const createCheckoutSessionSchema = z.object({
  /** ID of the price to use for the checkout session */
  price: z.string(),
  /** Quantity of the item to purchase */
  quantity: z.number().int().positive(),
  /** Additional metadata for the checkout session */
  metadata: z.record(z.string()).optional(),
});
