"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "ProNET (Psychosis Risk Outcomes Network)",
      image: "/project-pronet.png",
      description:
        "A global NIH-funded initiative to better understand and prevent psychosis through multi-site language biomarker data and predictive modeling.",
    },
    {
      title: "ANNA-PR (Automated Neural Network Assessment)",
      image: "/project-early.png",
      description:
        "An AI-driven system automating the assessment of psychosis risk in youth populations using multimodal linguistic and cognitive features.",
    },
    {
      title: "PReDICT (Predictive Remission Detection)",
      image: "/project-predict.png",
      description:
        "A generative-AI research initiative identifying language-based biomarkers of depression and treatment resistance.",
    },
  ];

  return (
    <section className="relative py-36 overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      {/* ==== Background Floating Lights ==== */}
      <motion.div
        className="absolute w-[700px] h-[700px] bg-gradient-to-br from-purple-300 via-pink-300 to-indigo-300 opacity-25 blur-3xl rounded-full top-[-200px] left-[-150px]"
        animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-br from-indigo-300 via-blue-300 to-purple-300 opacity-25 blur-3xl rounded-full bottom-[-180px] right-[-150px]"
        animate={{ x: [0, -100, 0], y: [0, -60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        {/* ==== Section Title ==== */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-24 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm"
        >
          Featured Research Projects
        </motion.h2>

        {/* ==== Projects Grid ==== */}
        <div className="grid gap-16 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateY: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.25, duration: 0.9, ease: "easeOut" }}
              whileHover={{
                scale: 1.06,
                rotateX: 5,
                rotateY: -5,
                boxShadow: "0 25px 60px rgba(139,92,246,0.3)",
              }}
              className="relative group rounded-3xl overflow-hidden border border-transparent bg-white/70 backdrop-blur-xl shadow-[0_0_25px_rgba(0,0,0,0.05)] hover:shadow-[0_0_50px_rgba(139,92,246,0.25)] transition-all duration-700"
            >
              {/* ==== Animated Gradient Frame ==== */}
              <motion.div
                className="absolute inset-0 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-500 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10 flex flex-col items-center p-10 text-center">
                {/* ==== Floating Image ==== */}
                <motion.div
                  whileHover={{
                    y: -10,
                    rotateX: 8,
                    rotateY: -6,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative mb-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-300/40 to-pink-300/40 blur-xl rounded-2xl"></div>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={200}
                    height={200}
                    className="relative z-10 object-contain drop-shadow-lg"
                  />
                </motion.div>

                {/* ==== Glowing Title ==== */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-snug relative">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    {p.title}
                  </span>
                  <div className="absolute -inset-x-4 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-40"></div>
                </h3>

                {/* ==== Description ==== */}
                <p className="text-gray-700 text-sm leading-relaxed px-3">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==== CTA Button ==== */}
        <motion.a
          href="https://reporter.nih.gov/project-details/10093852"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 40px rgba(255,255,255,0.8)",
            boxShadow: "0 0 40px rgba(147,51,234,0.5)",
          }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-24 px-16 py-5 text-lg rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold tracking-wide shadow-lg transition-all duration-500"
        >
          Explore Project Details →
        </motion.a>
      </div>
    </section>
  );
}
