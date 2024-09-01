import { POST as customerRoute } from "./api/customer";
import {
  POST as subscriptionRoute,
  PATCH as manageSubscriptionRoute,
} from "./api/subscription";
import { POST as paymentIntentRoute } from "./api/payment-intent";
import { POST as checkoutRoute } from "./api/checkout";
import { POST as webhookRoute } from "./webhooks/stripe";

export const routes = {
  customer: customerRoute,
  subscription: subscriptionRoute,
  manageSubscription: manageSubscriptionRoute,
  paymentIntent: paymentIntentRoute,
  checkout: checkoutRoute,
  webhook: webhookRoute,
};
