import { Tinybird } from "@chronark/zod-bird";

let tinybird: Tinybird | null = null;

export function getTinybird() {
  if (!tinybird) {
    const token = process.env.TINYBIRD_TOKEN;
    if (!token) {
      console.warn("TINYBIRD_TOKEN is not set");
      return null;
    }
    tinybird = new Tinybird({ token });
  }
  return tinybird;
}
