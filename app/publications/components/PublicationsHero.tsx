"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PublicationsHero() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* ===== Floating Background Orbs ===== */}
      <motion.div
        className="absolute top-0 left-0 w-80 h-80 bg-indigo-300 opacity-20 blur-3xl rounded-full"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"
        animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== Main Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          The Publications of{" "}
          <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Language Biomarker Lab
          </span>
          <br />
          <span className="text-2xl text-gray-600">(2010 – 2024)</span>
        </motion.h1>

        {/* Images */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/publications-art-1.png"
              alt="Publication Art 1"
              width={320}
              height={320}
              className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/publications-art-2.png"
              alt="Publication Art 2"
              width={380}
              height={320}
              className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "80%" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-[2px] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 rounded-full mt-8"
        />
      </div>
    </section>
  );
}
