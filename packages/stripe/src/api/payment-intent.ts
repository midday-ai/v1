import { createPaymentIntent } from "../index";
import { getUser } from "@v1/supabase/queries";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    data: { user },
  } = await getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { amount, currency } = await request.json();

  try {
    const paymentIntent = await createPaymentIntent(user.id, amount, currency);
    return NextResponse.json(paymentIntent);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 },
    );
  }
}
