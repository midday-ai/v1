import { logger } from "@v1/logger";
import { createClient } from "@v1/supabase/server";

export async function getUser() {
  const supabase = createClient();

  try {
    const result = await supabase.auth.getUser();

    return result;
  } catch (error) {
    logger.error(error);

    throw error;
  }
}

export async function getUsers() {
  const supabase = createClient();

  try {
    const result = await supabase.from("users").select("*");

    return result;
  } catch (error) {
    logger.error(error);

    throw error;
  }
}
