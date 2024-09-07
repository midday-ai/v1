"use server";

import { authActionClient } from "@/actions/safe-action";
import { updateUser } from "@v1/supabase/mutations";
import { updateUserSchema } from "./schema";

export const updateUserAction = authActionClient
  .schema(updateUserSchema)
  .action(async ({ parsedInput: input, ctx: { user } }) => {
    const result = await updateUser(user.id, input);

    return result;
  });
