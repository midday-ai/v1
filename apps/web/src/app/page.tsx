import { CopyText } from "@/components/copy-text";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-8 relative overflow-hidden">
      <div className="absolute -top-[118px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(1000px)_rotateX(-63deg)] h-[80%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none -z-10" />

      <h1 className="font-departure text-[84px] relative z-10">
        Production ready code
      </h1>
      <p className="relative z-10">
        Based on learnings from building{" "}
        <a href="https://midday.ai" className="underline">
          Midday
        </a>
        .
      </p>

      <CopyText value="git clone git@github.com:midday-ai/v1.git" />
    </div>
  );
}
