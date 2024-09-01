import { getTinybirdClient } from "./client";

async function deleteFromDatasource(
  datasource: string,
  deleteCondition: string,
): Promise<unknown> {
  const client = getTinybirdClient();
  const url = new URL(`/v0/datasources/${datasource}/delete`, client.baseUrl);

  const res = await fetch(url, {
    method: "POST",
    body: `delete_condition=(${deleteCondition})`,
    headers: {
      Authorization: `Bearer ${client.token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (!res.ok) {
    throw new Error(
      `Unable to delete for datasource ${datasource}: [${
        res.status
      }] ${await res.text()}`,
    );
  }

  return await res.json();
}

export async function deleteEmailEvents(options: {
  userId: string;
}): Promise<unknown> {
  return await deleteFromDatasource(
    "email_events",
    `userId='${options.userId}'`,
  );
}
