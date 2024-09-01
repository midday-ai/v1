import { Tinybird } from "@chronark/zod-bird";

export class TinybirdClient {
  private client: Tinybird;
  readonly baseUrl: string;
  readonly token: string;

  constructor(token: string, baseUrl: string) {
    this.token = token;
    this.baseUrl = baseUrl;
    this.client = new Tinybird({
      token,
      baseUrl,
    });
  }
}

let client: TinybirdClient;

export function getTinybirdClient(): TinybirdClient {
  if (!client) {
    const token = process.env.TINYBIRD_TOKEN;
    const baseUrl = process.env.TINYBIRD_BASE_URL;

    if (!token || !baseUrl) {
      throw new Error("Tinybird token or base URL is not defined");
    }

    client = new TinybirdClient(token, baseUrl);
  }
  return client;
}
