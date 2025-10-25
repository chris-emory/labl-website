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
    <section className="relative py-28 bg-gradient-to-b from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-gray-900 mb-16 tracking-tight"
        >
          Featured Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -3,
                boxShadow: "0 15px 45px rgba(99,102,241,0.25)",
              }}
              className="group bg-white rounded-3xl p-8 shadow-lg border border-transparent hover:border-indigo-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Glow Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

              {/* Project Logo */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex justify-center mb-6"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={180}
                  height={180}
                  className="object-contain drop-shadow-md"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.a
            href="https://reporter.nih.gov/project-details/10093852"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-20 px-12 py-4 text-lg rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_45px_rgba(99,102,241,0.6)] transition"
            >
            View Project Details
        </motion.a>
      </div>

      {/* Floating Bokeh Lights */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-indigo-300 rounded-full opacity-20 blur-3xl top-[-100px] left-[-150px]"
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
