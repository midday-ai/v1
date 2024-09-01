import { getTinybird } from "./tinybird";
import { emailEventSchema, EmailEvent } from "./types";

const tb = getTinybird();

export const publishEmailEvent = tb?.buildIngestEndpoint({
  datasource: "email_events",
  event: emailEventSchema,
});

export { EmailEvent };
