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
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-purple-50 py-28 overflow-hidden">
      {/* === Ambient Gradient Blobs === */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-3xl -top-40 -left-40"
        animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl bottom-0 right-0"
        animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* === Left Illustration === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.div
            className="absolute -inset-10 bg-gradient-to-tr from-indigo-400/40 via-purple-400/40 to-pink-400/40 rounded-[3rem] blur-3xl opacity-40"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 15, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 8 }}
            className="relative rounded-[2rem] bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-4 shadow-2xl border border-indigo-200/50"
            style={{ perspective: "1000px" }}
          >
            <Image
              src="/about-illustration.png"
              alt="About LaBL"
              width={520}
              height={400}
              className="rounded-2xl shadow-xl object-cover"
            />
          </motion.div>
        </motion.div>

        {/* === Right Content === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-gray-900">About Us:</span>{" "}
            <span className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 bg-clip-text text-transparent">
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

          <p className="text-gray-700 leading-relaxed mb-10">
            We collaborate with leading institutions including the{" "}
            <strong>NIH</strong>, <strong>NIMH</strong>, and the{" "}
            <strong>World Economic Forum</strong> to push the boundaries of
            computational psychology and mental health research.
          </p>

          <motion.a
            href="https://linguistics.emory.edu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.07,
              boxShadow:
                "0px 0px 25px rgba(99, 102, 241, 0.5), 0px 0px 50px rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
          >
            Learn More →
          </motion.a>
        </motion.div>
      </div>

      {/* === Seamless Partner Logo Carousel === */}
      <div className="relative mt-28 overflow-hidden">
        <div className="flex w-max animate-scroll-smooth gap-20">
          {[...partners, ...partners, ...partners].map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.1,
                boxShadow:
                  "0px 0px 25px rgba(99,102,241,0.4), 0px 0px 50px rgba(168,85,247,0.3)",
              }}
              className="p-6 bg-white/80 backdrop-blur-2xl rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center min-w-[200px] transition-all"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={70}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Fading edge gradients for luxury feel */}
        <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-white via-indigo-50/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white via-purple-50/80 to-transparent pointer-events-none" />
      </div>

      {/* Custom animation for continuous loop */}
      <style jsx global>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll-smooth {
          animation: scroll-smooth 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
