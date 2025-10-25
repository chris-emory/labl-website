"use client";
import { motion } from "framer-motion";

export default function TeamHero() {
  // Pre-generate fixed positions so they don't re-randomize between server & client
  const floatingDots = Array.from({ length: 25 }, (_, i) => ({
    width: 2 + ((i * 13) % 5),
    height: 2 + ((i * 17) % 5),
    top: `${(i * 23) % 100}%`,
    left: `${(i * 41) % 100}%`,
    delay: (i % 5) * 0.5,
    duration: 6 + (i % 4),
  }));

  return (
    <section className="relative py-32 px-6 text-center overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-purple-50/60">
      {/* === Animated background lights === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,transparent_70%)] blur-3xl animate-float-slow" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] blur-3xl animate-float-slower" />
      </div>

      {/* === Floating curved title === */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight"
        style={{
          transform: "rotateX(8deg) rotateZ(-1deg)",
          letterSpacing: "0.04em",
          textShadow:
            "0 0 20px rgba(99,102,241,0.15), 0 0 40px rgba(168,85,247,0.25)",
        }}
      >
        Team LaBL
      </motion.h1>

      {/* === Subtitle === */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="relative z-10 mt-8 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
      >
        Meet the{" "}
        <span className="font-semibold text-indigo-700">
          scientists, engineers, and dreamers
        </span>{" "}
        behind the{" "}
        <span className="font-semibold text-purple-700">
          Language Biomarker Lab
        </span>{" "}
        – advancing the future of{" "}
        <span className="font-semibold text-pink-600">AI and cognition.</span>
      </motion.p>

      {/* === Floating dots (hydration-safe) === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingDots.map((dot, i) => (
          <motion.span
            key={i}
            className="absolute bg-indigo-400/20 rounded-full blur-sm"
            style={{
              width: dot.width,
              height: dot.height,
              top: dot.top,
              left: dot.left,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
