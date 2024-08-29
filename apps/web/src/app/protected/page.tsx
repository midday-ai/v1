import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protected",
  description: "Protected",
};

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="text-2xl font-bold">Protected</div>
    </div>
  );
}
