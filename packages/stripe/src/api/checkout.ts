import { createCheckoutSession } from "../index";
import { getUser } from "@v1/supabase/queries";
import { NextResponse } from "next/server";
import { createCheckoutSessionSchema } from "../types";

export async function POST(request: Request) {
  const {
    data: { user },
  } = await getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const result = createCheckoutSessionSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const session = await createCheckoutSession(
      user.id,
      result.data.price,
      result.data.quantity,
      result.data.metadata,
    );
    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
