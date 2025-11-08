"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/demos/shadcn", label: "shadcn" },
  { href: "/demos/nyx", label: "Nyx UI" },
  { href: "/demos/prime", label: "PrimeReact" },
  { href: "/demos/mui", label: "Material UI" },
  { href: "/demos/antd", label: "Ant Design" },
  { href: "/demos/antd-pro", label: "AntD Pro" },
  { href: "/demos/novu", label: "Novu" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[color:var(--bg)]/80 border-b">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">❄️ Snow & 🌙 Moon</Link>
        <nav className="hidden md:flex gap-4">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm ${pathname === item.href ? "underline" : "opacity-80 hover:opacity-100"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
