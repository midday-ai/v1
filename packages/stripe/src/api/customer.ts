import { createCustomer } from "../index";
import { getUser } from "@v1/supabase/queries";
import { NextResponse } from "next/server";
import { z } from "zod";

const createCustomerSchema = z.object({
  fullName: z.string(),
});

export async function POST(request: Request) {
  const {
    data: { user },
  } = await getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const result = createCustomerSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const customer = await createCustomer(
      user.id,
      user.email!,
      result.data.fullName,
    );
    return NextResponse.json(customer);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create customer" },
      { status: 500 },
    );
  }
}
