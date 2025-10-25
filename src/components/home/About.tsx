"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const partners = [
    { src: "/partner-nih.png", alt: "NIH" },
    { src: "/partner-nimh.png", alt: "NIMH" },
    { src: "/partner-emory.png", alt: "Emory University" },
    { src: "/partner-wef.png", alt: "World Economic Forum" },
    { src: "/partner-sciencedaily.png", alt: "Science Daily" },
    { src: "/partner-newscientist.png", alt: "New Scientist" },
    { src: "/partner-psychcentral.png", alt: "Psych Central" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-purple-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* === Left Image === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <Image
              src="/about-illustration.png"
              alt="About LaBL"
              width={480}
              height={400}
              className="rounded-3xl shadow-lg border border-indigo-100"
            />

            {/* Gentle floating aura glow */}
            <motion.div
              className="absolute -inset-6 bg-gradient-to-tr from-indigo-400/25 via-purple-300/25 to-pink-300/25 rounded-3xl blur-3xl opacity-40"
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* === Right Text === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Us:{" "}
            <span className="bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
              The Language Biomarker Lab
            </span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nestled within the Psychology Department at{" "}
            <strong>Emory University</strong> and directed by{" "}
            <strong>Dr. Phillip Wolff</strong>, our interdisciplinary lab bridges
            psychology, linguistics, and computer science to advance the science
            of language biomarkers and cognitive insight.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            We collaborate with leading institutions including the{" "}
            <strong>NIH</strong>, <strong>NIMH</strong>, and the{" "}
            <strong>World Economic Forum</strong> to push the boundaries of
            computational psychology and mental health research.
          </p>

        <motion.a
            href="https://linguistics.emory.edu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition"
            >
            Learn More →
        </motion.a>
        </motion.div>
      </div>

      {/* === Partner Logos Slider === */}
      <div className="relative mt-24 overflow-hidden">
        <motion.div
          className="flex gap-16 items-center justify-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...partners, ...partners].map((logo, i) => (
            <div
              key={i}
              className="p-4 bg-white/70 backdrop-blur-md rounded-xl shadow-sm border border-gray-100 flex items-center justify-center min-w-[160px] hover:shadow-xl hover:border-indigo-200 transition-all"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={130}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-indigo-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-purple-50 to-transparent pointer-events-none" />
      </div>

      {/* === Floating Background Lights === */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-400 rounded-full opacity-20 blur-3xl top-[-150px] left-[-150px]"
        animate={{ x: [0, 120, 0], y: [0, 80, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-300 rounded-full opacity-20 blur-3xl bottom-[-120px] right-[-120px]"
        animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
