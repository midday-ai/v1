import { createSubscription, manageSubscription } from "../index";
import { getUser } from "@v1/supabase/queries";
import { NextResponse } from "next/server";
import { createSubscriptionSchema, manageSubscriptionSchema } from "../types";

export async function POST(request: Request) {
  const {
    data: { user },
  } = await getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const result = createSubscriptionSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const subscription = await createSubscription(user.id, result.data.priceId);
    return NextResponse.json(subscription);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create subscription" },
      { status: 500 },
    );
  }
}

export async function PATCH(request: Request) {
  const {
    data: { user },
  } = await getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const result = manageSubscriptionSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const updatedSubscription = await manageSubscription(
      result.data.subscriptionId,
      result.data.action,
    );
    return NextResponse.json(updatedSubscription);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to manage subscription" },
      { status: 500 },
    );
  }
}
