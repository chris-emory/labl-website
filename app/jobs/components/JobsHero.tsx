"use client";

import { motion } from "framer-motion";

export default function JobsHero() {
  return (
    <section className="relative overflow-hidden py-24 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Join the Language Biomarker Lab at Emory
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl max-w-2xl mx-auto text-indigo-100"
      >
        Be part of a multidisciplinary team advancing AI and psychology to understand language, mind, and mental health.
      </motion.p>

      {/* Decorative blurred shape */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,_white,_transparent_60%)]" />
    </section>
  );
}
