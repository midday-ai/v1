import { UsersLoading } from "@/components/users.loading";
import { UsersServer } from "@/components/users.server";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings",
};

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Suspense fallback={<UsersLoading />}>
        <UsersServer />
      </Suspense>
    </div>
  );
}
