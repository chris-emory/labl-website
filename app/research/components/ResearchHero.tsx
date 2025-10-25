"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ResearchHero() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-white to-blue-50 py-28 px-6 md:px-20 overflow-hidden">
      {/* === Ambient Light Background === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),transparent_70%)] blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center md:text-left">
        {/* === Header === */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Research Projects
        </motion.h1>

        {/* === Subheading === */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          <strong>At the Language Biomarker Lab (LaBL)</strong>, we explore how
          machine learning and language analysis can uncover insights into human
          cognition and mental health. Our research bridges psychology,
          linguistics, and AI to reveal patterns that reflect thought, emotion,
          and neurological processes.
        </motion.p>

        {/* === Description === */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-3xl text-gray-600"
        >
          We employ advanced deep learning models-including{" "}
          <strong>LLaMA-4</strong>, <strong>FLAN-UL2</strong>, and the latest{" "}
          <strong>GPT architectures</strong>-to study decision-making, syntax,
          semantics, and early language indicators of cognitive conditions such
          as Alzheimer’s and psychosis.
          <br />
          <br />
          <strong>
            Our work is supported by the National Institutes of Health,
            including the NIMH and NIA.
          </strong>
        </motion.p>
      </div>

        {/* === Interactive Morphing Image Grid (Full image visible + smooth morph) === */}
        <div className="relative mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
            { src: "/research-1.png", alt: "AI Language Model" },
            { src: "/research-2.png", alt: "Cognition Analysis" },
            { src: "/research-3.png", alt: "Language and Brain" },
        ].map((img, i) => (
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
            className="relative flex justify-center group"
            >
            {/* === Glow Border Container === */}
            <div
                className="
                relative w-72 h-72 
                bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-400 
                rounded-[50%] group-hover:rounded-[1.5rem]
                transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]
                shadow-[0_0_25px_rgba(99,102,241,0.25)]
                group-hover:shadow-[0_0_45px_rgba(147,51,234,0.35)]
                flex items-center justify-center
                "
            >
                {/* === Image Wrapper (keeps full content visible) === */}
                <div
                className="
                    w-[calc(100%-8px)] h-[calc(100%-8px)] 
                    rounded-[50%] group-hover:rounded-[1.5rem]
                    overflow-hidden bg-white
                    transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]
                    flex items-center justify-center
                "
                >
                <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={400}
                    className="
                    object-contain w-full h-full 
                    rounded-[50%] group-hover:rounded-[1.5rem]
                    transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)]
                    scale-100 group-hover:scale-105
                    "
                />
                </div>
            </div>
            </motion.div>
        ))}
        </div>

      {/* === Subtle Bottom Light === */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-indigo-100/80 to-transparent pointer-events-none" />
    </section>
  );
}
