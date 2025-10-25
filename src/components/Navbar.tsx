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
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-white/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <nav className="flex flex-wrap items-center justify-between mx-auto max-w-[95%] sm:max-w-7xl px-4 sm:px-6 py-3 sm:py-4">
        {/* === Elegant Shining Logo Section === */}
        <Link href="/" className="relative flex items-center gap-2 group flex-shrink-0">
          <div className="relative flex items-center justify-center">
            {/* Smooth pulsing ring glow */}
            <motion.div
              className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-30 blur-md"
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

            {/* Logo with light shimmer */}
            <div className="relative overflow-hidden rounded-md shadow-sm">
              <Image
                src="/labl-logo.png"
                alt="Language Biomarker Lab logo"
                width={42}
                height={42}
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              {/* Light sweep shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-150%", "150%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>

          {/* === LaBL Text with synchronized shimmer === */}
          <motion.span
            className="relative text-2xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            animate={{
              backgroundPositionX: ["0%", "100%"],
              opacity: [1, 0.95, 1],
              textShadow: [
                "0px 0px 0px rgba(147,51,234,0)",
                "0px 0px 8px rgba(147,51,234,0.4)",
                "0px 0px 0px rgba(147,51,234,0)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            LaBL
          </motion.span>
        </Link>

        {/* === Menu Items === */}
        <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 mt-3 sm:mt-0 text-[0.95rem] font-semibold tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-all duration-300 ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 scale-105"
                    : "text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:scale-105"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Decorative gradient line */}
      <div className="h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70" />
    </header>
  );
}
