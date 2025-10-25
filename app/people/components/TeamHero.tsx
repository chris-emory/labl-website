"use client";
import { motion } from "framer-motion";

export default function TeamHero() {
  return (
    <section className="relative py-24 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.25),transparent_70%)] blur-3xl"></div>

      {/* Floating curved title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        style={{
          transform: "rotateX(12deg) rotateZ(-2deg)",
          letterSpacing: "0.04em",
        }}
      >
        Team LaBL
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-gray-600 text-lg max-w-xl mx-auto"
      >
        Meet the scientists, engineers, and dreamers behind the Language Biomarker Lab - advancing the future of AI and cognition.
      </motion.p>
    </section>
  );
}
