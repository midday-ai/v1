"use server";

import { authActionClient } from "@/actions/safe-action";
import { updateUserSchema } from "./schema";

export const updateUser = authActionClient
  .schema(updateUserSchema)
  .metadata({
    name: "update-user",
  })
  .action(async ({ parsedInput: input, ctx: { user, supabase } }) => {
    const { data } = await supabase
      .from("users")
      .update(input)
      .eq("id", user.id);

    return data;
  });
