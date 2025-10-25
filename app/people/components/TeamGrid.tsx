"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { people } from "../peopleData";

export default function TeamGrid() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-indigo-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900 mb-16"
      >
        Meet the Team
      </motion.h2>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 justify-items-center">
        {people.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Morphing Glow Portrait */}
            <div className="relative w-56 h-56 mb-6">
              <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-400 rounded-full 
                group-hover:rounded-2xl transition-all duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)] 
                shadow-[0_0_25px_rgba(99,102,241,0.25)] group-hover:shadow-[0_0_45px_rgba(147,51,234,0.35)]"
              ></div>
              <div
                className="relative w-full h-full p-1 rounded-full group-hover:rounded-2xl bg-white transition-all duration-[1200ms]"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full group-hover:rounded-2xl transition-all duration-[1200ms]"
                />
              </div>
            </div>

            {/* Name + Role */}
            <h3 className="text-lg font-semibold text-gray-900">
              {person.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{person.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
