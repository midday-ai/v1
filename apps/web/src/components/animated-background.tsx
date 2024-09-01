import { cn } from "@v1/ui/cn";

type MovingLinesProps = {
  className?: string;
};

function MovingLines({ className }: MovingLinesProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto", className)}
      width="100%"
      viewBox="0 0 1500 500"
      fill="none"
      color="#6b7280"
    >
      <path stroke="currentColor" d="M654 498l96-465 96 465" />
      <path stroke="currentColor" d="M464 498L750.5 33 1037 498" />
      <path stroke="currentColor" d="M251 498L750.5 33 1250 498" />
      <path stroke="currentColor" d="M1 498L751 33l750 465" />
      <path stroke="currentColor" d="M-397 498L751 33l1148 465" />
      <path
        stroke="currentColor"
        d="M-128 500h1757M-128 400h1757"
        style={{ animation: "move-100 4s infinite linear" }}
      />
      <path
        stroke="currentColor"
        d="M-128 300h1757M-128 225h1757"
        style={{ animation: "move-75 4s infinite linear" }}
      />
      <path fill="url(#gradient)" d="M0 0h1501v500H0z" />
      <defs>
        <linearGradient
          id="gradient"
          x1="1500"
          x2="1500"
          y1={300}
          y2={600}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <style>
        {`
          @keyframes move-100 {
            from {
              transform: translateY(0);
            }

            to {
              transform: translateY(-100px);
            }
          }

          @keyframes move-75 {
            from {
              transform: translateY(0);
            }

            to {
              transform: translateY(-75px);
            }
          }
        `}
      </style>
    </svg>
  );
}

export function AnimatedBackground() {
  return (
    <div className="animate-in fade-in-0 pointer-events-none absolute inset-0 -z-10 duration-1000">
      <div className="absolute top-0 flex h-1/2 w-full rotate-180 md:items-end">
        <MovingLines className="scale-[3] md:scale-[2] lg:scale-150 xl:scale-100" />
      </div>

      <div className="absolute bottom-0 flex h-1/2 w-full md:items-end">
        <MovingLines className="scale-[3] md:scale-[2] lg:scale-150 xl:scale-100" />
      </div>
    </div>
  );
}
