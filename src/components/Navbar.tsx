"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Research Projects", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "Presentations", href: "/presentations" },
  { name: "People", href: "/people" },
  { name: "Job Posting", href: "/jobs" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/labl-logo.png"
            alt="Language Biomarker Lab logo"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="text-xl font-bold text-gray-800">LaBL</span>
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${
                pathname === item.href
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              } transition-colors`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
