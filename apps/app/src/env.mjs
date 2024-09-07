import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    VERCEL_URL: z
      .string()
      .optional()
      .transform((v) => (v ? `https://${v}` : undefined)),
    PORT: z.coerce.number().default(3000),
  },
  server: {
    SUPABASE_SERVICE_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    NEXT_PUBLIC_SUPABASE_URL: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    PORT: process.env.PORT,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
    VERCEL_URL: process.env.VERCEL_URL,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
