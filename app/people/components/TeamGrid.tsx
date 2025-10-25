"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { people } from "../peopleData";

export default function TeamGrid() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* === Soft Background Glow === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(147,51,234,0.15)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* === Title === */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900 mb-16 relative z-10"
      >
        Meet the Team
      </motion.h2>

      {/* === Grid === */}
      <div className="relative z-10 max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 justify-items-center">
        {people.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="flex flex-col items-center text-center group"
          >
            {/* === Portrait with Smooth Morph === */}
            <div
              className="relative w-56 h-56 mb-6 transition-transform duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
            >
              {/* Border glow */}
              <div
                className="absolute inset-0 rounded-full group-hover:rounded-[2rem] p-[2px] bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-400
                transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                {/* Image wrapper */}
                <div
                  className="relative w-full h-full rounded-full group-hover:rounded-[2rem] bg-white/90 overflow-hidden
                  shadow-[0_0_20px_rgba(147,51,234,0.15)] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
                  transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-full group-hover:rounded-[2rem]
                    transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  />
                </div>
              </div>

              {/* Glow aura */}
              <div
                className="absolute inset-0 rounded-full group-hover:rounded-[2rem]
                bg-[radial-gradient(circle,rgba(147,51,234,0.12)_0%,transparent_70%)]
                blur-xl opacity-0 group-hover:opacity-100
                transition-opacity duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              ></div>
            </div>

            {/* === Name & Role === */}
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-700">
              {person.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
