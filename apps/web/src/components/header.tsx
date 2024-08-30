import Image from "next/image";

export function Header() {
  return (
    <header className="absolute top-0 w-full flex items-center justify-between p-4 z-10">
      <span className="hidden md:block text-sm font-medium">v1.run</span>

      <Image
        src="/logo.png"
        alt="V1 logo"
        width={60}
        quality={100}
        height={60}
        className="md:absolute md:left-1/2 md:top-5 md:-translate-x-1/2"
      />

      <nav className="md:mt-2">
        <ul className="flex gap-4">
          <li>
            <a
              href="https://github.com/midday-ai/v1"
              className="text-sm px-4 py-2 bg-primary text-secondary rounded-full font-medium"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm px-4 py-2 bg-secondary text-primary rounded-full font-medium"
            >
              Get updates
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
