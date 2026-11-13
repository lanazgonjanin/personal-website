"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/beyond-code", label: "Beyond Code" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link
            aria-current={pathname === item.href ? "page" : undefined}
            className={pathname === item.href ? "active" : undefined}
            href={item.href}
            key={item.href}
            scroll
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
