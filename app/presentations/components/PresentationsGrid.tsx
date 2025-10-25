"use client";
import { motion } from "framer-motion";
import presentations from "../presentationsData";

export default function PresentationsGrid() {
  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50/30 to-purple-50 py-24 px-6 md:px-20 overflow-hidden">
      {/* === Glow Background === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.1),transparent_70%),radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.1),transparent_70%)] blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Featured Presentations
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {presentations.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white/70 backdrop-blur-xl border border-indigo-100 shadow-[0_0_25px_rgba(99,102,241,0.1)] hover:shadow-[0_0_40px_rgba(147,51,234,0.25)] transition-all duration-500 rounded-2xl p-8"
            >
              {/* Year Badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                {p.year}
              </div>

                {/* Conference Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3">{p.conference}</h3>

                {/* Type Badge */}
                <span
                className={`inline-block text-xs font-semibold px-3 py-1 mb-3 rounded-full tracking-wide shadow-sm ${
                    p.type.includes("Poster")
                    ? "bg-indigo-100 text-indigo-700"
                    : "bg-pink-100 text-pink-700"
                }`}
                >
                {p.type}
                </span>

                {/* Title */}
                <p className="text-indigo-700 font-medium mb-3">{p.title}</p>

                {/* Authors */}
                <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Authors:</strong> {p.authors}
                </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
