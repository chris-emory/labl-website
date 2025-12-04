"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Research Projects", href: "/research" },
  { name: "Phillip Wolff", href: "/phillip-wolff" },
  { name: "Publications", href: "/publications" },
  { name: "Presentations", href: "/presentations" },
  { name: "People", href: "/people" },
  { name: "Job Posting", href: "/jobs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/40 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-white/10 backdrop-blur-lg border-b border-transparent"
      }`}
    >
      <nav className="flex flex-wrap items-center justify-between mx-auto max-w-[95%] sm:max-w-7xl px-4 sm:px-6 py-3 sm:py-4">
        {/* === Logo === */}
        <Link
          href="/"
          className="relative flex items-center gap-2 group flex-shrink-0"
        >
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-[#2e4a7d] via-[#607ea6] to-[#8ca6db] opacity-30 blur-md"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative overflow-hidden rounded-md shadow-sm">
              <Image
                src="/labl-logo.png"
                alt="Language Biomarker Lab logo"
                width={42}
                height={42}
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-150%", "150%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          <motion.span
            className="relative text-2xl font-extrabold bg-gradient-to-r from-[#2e4a7d] via-[#607ea6] to-[#8ca6db] bg-clip-text text-transparent"
            animate={{
              backgroundPositionX: ["0%", "100%"],
              opacity: [1, 0.95, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            LaBL
          </motion.span>
        </Link>

        {/* === Navigation Items === */}
        <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 mt-3 sm:mt-0 text-[0.95rem] font-semibold tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-all duration-300 ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2e4a7d] via-[#607ea6] to-[#8ca6db] scale-105"
                    : "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#2e4a7d] hover:via-[#607ea6] hover:to-[#8ca6db] hover:scale-105"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#2e4a7d] via-[#607ea6] to-[#8ca6db] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* === Decorative gradient line === */}
      <div className="h-[3px] bg-gradient-to-r from-[#2e4a7d] via-[#607ea6] to-[#8ca6db] opacity-70" />
    </header>
  );
}
