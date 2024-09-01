import { z } from "zod";

export const activitySummarySchema = z.object({
  user_id: z.string(),
  date: z.string(),
  opens: z.number(),
  clicks: z.number(),
  replies: z.number(),
});

export const emailEventSchema = z.object({
  userId: z.string(),
  emailId: z.string(),
  eventType: z.enum(["open", "click", "reply"]),
  timestamp: z.number(),
  metadata: z.string().optional(),
});

export type ActivitySummary = z.infer<typeof activitySummarySchema>;
export type EmailEvent = z.infer<typeof emailEventSchema>;

export { z };
