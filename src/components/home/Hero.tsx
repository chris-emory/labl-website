"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  // === Parallax hooks (must come before any conditionals) ===
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  // === Mounted state to avoid hydration mismatch ===
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // === Mouse handler for parallax ===
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 20);
    y.set(offsetY / 20);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-[90vh] px-6 md:px-24 py-16 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100"
    >
      {/* === Background glow and ambient particles === */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-indigo-400/25 via-purple-400/20 to-pink-400/25 rounded-full blur-md"
            style={{
              width: Math.random() * 8 + 3 + "px",
              height: Math.random() * 8 + 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* === Left content === */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-start text-left max-w-xl"
      >
      {/* Floating LaBL Full Logo with shimmer effect */}
      <motion.div
        animate={{
          x: [-25, 25, -25],
          scale: [1, 1.06, 1],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-8 relative group"
      >
        {/* Glow aura */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-30 blur-2xl rounded-xl"
          animate={{
            opacity: [0.25, 0.4, 0.25],
            scale: [1, 1.04, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Shimmer overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-100%] animate-[shine_2.8s_linear_infinite]" />
        </div>

        {/* Main logo image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative z-10"
        >
          <Image
            src="/labl-full-logo.png"
            alt="LaBL Full Logo"
            width={260}
            height={120}
            className="rounded-lg drop-shadow-[0_6px_10px_rgba(0,0,0,0.3)]"
          />
        </motion.div>
      </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug"
        >
          <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-[length:200%_auto] text-transparent bg-clip-text animate-textShine">
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
          The <strong>Language Biomarker Lab (LaBL)</strong> explores how
          language reflects cognition and mental health. We leverage{" "}
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
            className="rounded-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Explore Research
          </motion.a>
          <motion.a
            href="/people"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-indigo-200 px-8 py-3 font-semibold text-gray-800 hover:bg-indigo-50 transition"
          >
            Meet the Team
          </motion.a>
        </motion.div>
      </motion.div>

      {/* === Right image (with parallax 3D glow) === */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 flex justify-center md:justify-end w-full md:w-[50%] max-w-[550px] mt-10 md:mt-0 perspective-1000"
      >
        {/* Glow halo behind the logo */}
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-40 blur-3xl"
          animate={{
            opacity: [0.25, 0.4, 0.25],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Logo itself */}
        <motion.div
          whileHover={{
            scale: 1.03,
            rotateY: 3,
            rotateX: -2,
          }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative rounded-3xl shadow-2xl overflow-hidden border border-white/60 backdrop-blur-sm"
        >
          <Image
            src="/labl-logo.png"
            alt="LaBL Symbol"
            width={460}
            height={460}
            className="rounded-3xl"
          />
        </motion.div>
      </motion.div>

      {/* === Subtle gradient overlay === */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo-50/60 pointer-events-none" />
    </section>
  );
}
