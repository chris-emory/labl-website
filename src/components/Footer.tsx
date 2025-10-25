"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-indigo-900 to-purple-900 text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Animated background circles */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl top-[-200px] left-[-100px]"
          animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"
          animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating logo */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-8"
        >
          <img
            src="/labl-logo.png"
            alt="LaBL Logo"
            className="w-20 h-20 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]"
          />
        </motion.div>

        {/* Footer text */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-semibold text-white mb-4"
        >
          Language Biomarker Lab · Emory University
        </motion.h3>

        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
          Advancing the science of language as a window into the mind.  
          Combining AI, psychology, and linguistics to unlock insights into cognition and mental health.
        </p>

        {/* Social / Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <Link
            href="/research"
            className="hover:text-indigo-400 transition"
          >
            Research
          </Link>
          <Link
            href="/publications"
            className="hover:text-indigo-400 transition"
          >
            Publications
          </Link>
          <Link
            href="/people"
            className="hover:text-indigo-400 transition"
          >
            Team
          </Link>
        </div>

        {/* Animated heart line */}
        <motion.div
          className="w-32 h-[2px] bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-600 mx-auto mb-4 rounded-full"
          animate={{ scaleX: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        />

        {/* Bottom copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-sm text-gray-400 mt-4"
        >
        </motion.p>
      </div>

      {/* Subtle top wave divider */}
      <svg
        className="absolute top-0 left-0 w-full text-indigo-950"
        viewBox="0 0 1440 120"
        fill="currentColor"
      >
        <path
          d="M0,32L48,48C96,64,192,96,288,101.3C384,107,480,85,576,96C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64V0H0Z"
          fill="currentColor"
        ></path>
      </svg>
    </footer>
  );
}
