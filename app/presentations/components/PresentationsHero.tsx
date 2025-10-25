"use client";
import { motion } from "framer-motion";

export default function PresentationsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24 px-6 md:px-20 text-center">
      {/* === Gradient glows === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-indigo-300/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-pink-300/20 blur-3xl rounded-full" />
      </div>

      {/* === Title === */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
      >
        Presentations & Conferences
      </motion.h1>

      {/* === Subtitle === */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 max-w-2xl mx-auto text-gray-700 text-lg leading-relaxed"
      >
        Discover the Language Biomarker Lab’s presentations at global conferences,
        where we showcase advances in generative AI, language modeling, and
        cognitive neuroscience.
      </motion.p>

      {/* === Decorative divider === */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "6rem", opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 mx-auto h-[3px] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 rounded-full"
      />
    </section>
  );
}
