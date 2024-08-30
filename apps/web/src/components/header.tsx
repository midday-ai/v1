import Image from "next/image";

export function Header() {
  return (
    <header className="absolute top-0 w-full flex items-center justify-between p-6">
      <span>v1.run</span>
      <Image
        src="/logo.png"
        alt="V1 logo"
        width={60}
        height={60}
        className="absolute left-1/2 top-5 -translate-x-1/2"
      />

      <nav className="mt-2">
        <ul className="flex gap-4">
          <li>
            <a
              href="/"
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
