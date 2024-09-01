import { z } from "zod";
import { getTinybird } from "./tinybird";
import { activitySummarySchema } from "./types";

const tb = getTinybird();

const getActivitySummaryParameters = z.object({
  user_id: z.string(),
  start_date: z.string(),
  end_date: z.string(),
});

export const getActivitySummary = tb?.buildPipe({
  pipe: "email_activity_summary",
  parameters: getActivitySummaryParameters,
  data: activitySummarySchema.array(),
});

// You can add more query functions here as needed
