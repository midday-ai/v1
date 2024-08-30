"use server";

export async function subscribeAction(formData: FormData, userGroup: string) {
  const email = formData.get("email") as string;

  const res = await fetch(
    `https://app.loops.so/api/newsletter-form/${process.env.NEXT_PUBLIC_LOOPS_FORM_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        userGroup,
      }),
    },
  );

  const json = await res.json();

  return json;
}
