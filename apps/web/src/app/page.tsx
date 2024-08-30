import { AnimatedText } from "@/components/animated-text";
import { CopyText } from "@/components/copy-text";

export default function Page() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute -top-[118px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(1000px)_rotateX(-63deg)] h-[80%] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none -z-10" />

      <h1 className="font-departure text-[40px] md:text-[84px] relative z-10 text-center h-[120px] md:h-auto">
        <AnimatedText text="Production ready code" />
      </h1>

      <p className="relative z-10 text-center text-[#878787] leading-relaxed max-w-[80%] mt-2 md:mt-0">
        Kickstart your next SaaS with battle-tested code from{" "}
        <a href="https://midday.ai?utm_source=v1" className="underline">
          Midday
        </a>
        .
      </p>

      <span className="relative z-10 text-center text-[#878787] text-xs mt-2">
        Security verified by Kenshū.
      </span>

      <div className="mt-8">
        <CopyText value="npx @midday/v1@latest create" />
      </div>

      <div className="absolute -bottom-[280px] inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4.5rem_2rem] -z-10 [transform:perspective(560px)_rotateX(63deg)] pointer-events-none" />
      <div className="absolute w-full bottom-[100px] h-1/2  bg-gradient-to-b from-background to-transparent pointer-events-none -z-10" />
    </div>
  );
}
