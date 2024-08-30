import { WelcomeEmail } from "@v1/ui/emails/welcome";
import React from "react";
import { renderAsync } from "react-email/components";
import { Resend } from "resend";
import { Webhook } from "standardwebhooks";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") as string);
const hookSecret = Deno.env.get("SEND_EMAIL_HOOK_SECRET") as string;

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("not allowed", { status: 400 });
  }

  const payload = await req.text();
  const headers = Object.fromEntries(req.headers);
  const wh = new Webhook(hookSecret);
  try {
    const {
      user,
      email_data: { token, token_hash, redirect_to, email_action_type },
    } = wh.verify(payload, headers) as {
      user: {
        email: string;
      };
      email_data: {
        token: string;
        token_hash: string;
        redirect_to: string;
        email_action_type: string;
        site_url: string;
        token_new: string;
        token_hash_new: string;
      };
    };

    const html = await renderAsync(
      React.createElement(WelcomeEmail, {
        supabase_url: Deno.env.get("SUPABASE_URL") ?? "",
        token,
        token_hash,
        redirect_to,
        email_action_type,
      }),
    );

    const { error } = await resend.emails.send({
      from: "Create v1 <onboarding@resend.dev>",
      to: [user.email],
      subject: "Welcome to v1",
      html,
    });
    if (error) {
      throw error;
    }
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({
        error: {
          http_code: error.code,
          message: error.message,
        },
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const responseHeaders = new Headers();
  responseHeaders.set("Content-Type", "application/json");
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: responseHeaders,
  });
});
