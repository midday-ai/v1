"use client";

import { subscribeAction } from "@/actions/subscribe-action";
import { Button } from "@v1/ui/button";
import { Icons } from "@v1/ui/icons";
import { Input } from "@v1/ui/input";
import { useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="ml-auto rounded-full">
      {pending ? <Icons.Loader className="size-4" /> : "Subscribe"}
    </Button>
  );
}

type Props = {
  group: string;
  placeholder: string;
  className?: string;
};

export function SubscribeForm({ group, placeholder, className }: Props) {
  const [isSubmitted, setSubmitted] = useState(false);

  return (
    <div>
      <div>
        {isSubmitted ? (
          <div className="border border-[#2C2C2C] text-sm text-primary h-9 w-[290px] flex items-center py-0.5 px-2 justify-between">
            <p>Subscribed</p>

            <svg
              width="17"
              height="17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Check</title>
              <path
                d="m14.546 4.724-8 8-3.667-3.667.94-.94 2.727 2.72 7.06-7.053.94.94Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            action={async (formData) => {
              setSubmitted(true);
              await subscribeAction(formData, group);

              setTimeout(() => {
                setSubmitted(false);
              }, 5000);
            }}
          >
            <Input
              placeholder={placeholder}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              aria-label="Email address"
              required
              className={className}
            />

            <SubmitButton />
          </form>
        )}
      </div>
    </div>
  );
}
