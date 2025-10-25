"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ResearchSummary() {
  return (
    <section className="relative py-28 px-6 md:px-20 bg-gradient-to-b from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* === Ambient Gradient Background === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.15),transparent_70%)] blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* === Left Floating Image === */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:shadow-[0_0_40px_rgba(147,51,234,0.35)] transition-all duration-700"
          >
            <Image
              src="/research-left.jpg"
              alt="Cognitive Research Visualization"
              width={450}
              height={320}
              className="rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent rounded-2xl" />
          </motion.div>
        </motion.div>

        {/* === Text Section === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Bridging Minds and Machines
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The <strong>Language Biomarker Lab (LaBL)</strong> combines cutting-edge technology with cognitive science to explore how language reflects and shapes the mind. Equipped with a high-performance Microway compute server and four NVIDIA A100 GPUs, the lab supports large-scale AI research, including the training and deployment of advanced natural language models.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            This computational power enables the analysis of vast language datasets to uncover biomarkers of mental health. Complementing this are high-resolution haptic devices-such as the Force Dimension Omega.3 and Novint Falcon controllers-which allow researchers to study perception, cognition, and motor interaction through precise force-feedback. Together, these tools enable LaBL to push the boundaries of language, AI, and brain research.
          </p>

          {/* Optional poetic tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="mt-10 italic text-indigo-500 font-medium text-lg"
          >
            “Turning language into light for the mind.”
          </motion.p>
        </motion.div>

        {/* === Right Floating Image === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:shadow-[0_0_40px_rgba(147,51,234,0.35)] transition-all duration-700"
          >
            <Image
              src="/research-right.jpg"
              alt="AI Language Interface Visualization"
              width={450}
              height={320}
              className="rounded-2xl object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent rounded-2xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* === Subtle bottom light === */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-indigo-100/80 to-transparent pointer-events-none" />
    </section>
  );
}
