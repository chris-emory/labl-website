"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-[95vh] px-6 md:px-20 py-16 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100">
      {/* === Soft Particle Background === */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-indigo-300/20 rounded-full blur-sm"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* === Left Content === */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-start text-left max-w-xl"
      >
        {/* Floating LABL Logo */}
        <motion.div
          animate={{
            x: [-25, 25, -25],
            scale: [1, 1.08, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-6"
        >
          <Image
            src="/labl-full-logo.png"
            alt="LaBL Full Logo"
            width={260}
            height={120}
            className="drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug"
        >
        <span
            className="inline-block bg-gradient-to-r from-blue-500 via-white to-red-500 bg-[length:200%_auto] text-transparent bg-clip-text animate-textShine"
        >
            Unlocking
        </span>{" "}
        Insights with <br />
        <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Language Biomarkers and Advanced NLP
        </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-6 text-lg text-gray-700 leading-relaxed"
        >
          The{" "}
          <strong>Language Biomarker Lab (LaBL)</strong> explores how language
          reflects cognition and mental health. We leverage{" "}
          <strong>natural language processing (NLP)</strong> and{" "}
          <strong>artificial intelligence (AI)</strong> to uncover measurable
          indicators of psychological and neurological conditions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex gap-4"
        >
          <motion.a
            href="/research"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-indigo-600 text-white px-8 py-3 font-medium shadow-lg hover:shadow-xl hover:bg-indigo-700 transition"
          >
            Explore Research
          </motion.a>
          <motion.a
            href="/people"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-indigo-200 px-8 py-3 font-medium text-gray-800 hover:bg-indigo-50 transition"
          >
            Meet the Team
          </motion.a>
        </motion.div>
      </motion.div>

      {/* === Right Image (Head Logo with Depth) === */}
        <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="relative z-10 flex justify-center md:justify-end w-full md:w-1/2"
        >
        <Image
            src="/labl-logo.png"
            alt="LaBL Symbol"
            width={420}
            height={420}
            className="rounded-xl drop-shadow-2xl border border-indigo-200 shadow-[0_0_25px_rgba(99,102,241,0.3)]"
        />
        </motion.div>

      {/* === Gradient Overlay for Depth === */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-50/70 pointer-events-none" />
    </section>
  );
}
