"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PublicationsHero() {
  const images = [
    { src: "/publications-art-1.png", alt: "Publication Art 1" },
    { src: "/publications-art-2.png", alt: "Publication Art 2" },
    { src: "/LaBL-brain.jpg", alt: "Publication Art 3" },
    { src: "/LaBL-ball.jpg", alt: "Publication Art 4" },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* ===== Floating Background Lights ===== */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[25rem] h-[25rem] bg-indigo-400/30 blur-3xl rounded-full"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[28rem] h-[28rem] bg-purple-400/30 blur-3xl rounded-full"
        animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== Main Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">
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

        {/* ===== Animated Image Row ===== */}
        <div className="flex flex-row justify-center items-center gap-10 flex-wrap">
          {images.map((img, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, index % 2 === 0 ? -15 : 15, 0],
                rotate: [0, index % 2 === 0 ? 1 : -1, 0],
              }}
              transition={{
                duration: 6 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative group w-[280px] h-[380px] rounded-2xl overflow-hidden"
            >
              {/* Shimmering Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 animate-gradient-x"
                style={{
                  backgroundSize: "400% 400%",
                  animation: "gradientShift 8s ease infinite",
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-xl">
                  {/* Image */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-2xl transform transition-all duration-700 group-hover:scale-[1.07]"
                  />

                  {/* Light reflection sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ["-150%", "150%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.6,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Soft glow underneath */}
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[70%] h-[50px] bg-indigo-400/20 blur-2xl rounded-full"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "80%" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-[2px] bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 rounded-full mt-12"
        />
      </div>

      {/* ===== Custom Animation Keyframes ===== */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
