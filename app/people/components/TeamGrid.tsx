"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { people } from "../peopleData";

export default function TeamGrid() {
  const director = people.find((p) => p.group === "director");
  const faculty = people.filter((p) => p.group === "faculty");
  const phd = people.filter((p) => p.group === "phd");
  const undergrad = people.filter((p) => p.group === "undergrad");

  const Section = ({ title, members }: { title: string; members: any[] }) => (
    <div className="mt-20">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-center text-indigo-700 mb-10"
      >
        {title}
      </motion.h3>
      <div className="flex flex-wrap justify-center gap-16">
        {members.map((person, i) => (
          <SmoothCard key={i} person={person} index={i} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-32 bg-gradient-to-b from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* === Background Gradient Glow === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(147,51,234,0.12)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(79,70,229,0.12)_0%,transparent_70%)] blur-3xl" />
      </div>

      {/* === Fixed Background “LaBL” Watermark === */}
      <h1
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  text-[16rem] md:text-[22rem] font-extrabold 
                  text-indigo-200/25 tracking-[0.1em] select-none pointer-events-none 
                  z-0"
        style={{
          lineHeight: "1",
          userSelect: "none",
        }}
      >
        LaBL
      </h1>

      {/* === Director (single spotlight) === */}
      {director && (
        <div className="relative z-10 mb-12 flex flex-col items-center">
          <SmoothCard person={director} index={0} />

          {/* ↓ Downward scroll indicator arrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="mt-6 text-indigo-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      )}

      {/* === Groups === */}
      <div className="relative z-10">
        {faculty.length > 0 && (
          <Section title="Faculty & Engineers" members={faculty} />
        )}
        {phd.length > 0 && (
          <Section title="Doctoral Students" members={phd} />
        )}
        {undergrad.length > 0 && (
          <Section title="Undergraduate Researchers" members={undergrad} />
        )}
      </div>
    </section>
  );
}

/* === Smooth morph card component === */
function SmoothCard({ person, index }: any) {
  if (!person) return null;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="flex flex-col items-center text-center group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* === Portrait === */}
      <motion.div
        animate={{
          borderRadius: hovered ? "1.5rem" : "50%",
          scale: hovered ? 1.05 : 1,
          boxShadow: hovered
            ? "0 0 40px rgba(168,85,247,0.35)"
            : "0 0 20px rgba(147,51,234,0.15)",
        }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative w-56 h-56 mb-6 p-[2px] bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 overflow-hidden"
      >
        <motion.div
          animate={{
            borderRadius: hovered ? "1.5rem" : "50%",
          }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="w-full h-full bg-white/90 overflow-hidden"
        >
          <Image
            src={person.image}
            alt={person.name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* === Name & Role === */}
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-700">
        {person.name}
      </h3>
      <p className="text-gray-600 text-sm mt-1">{person.role}</p>
    </motion.div>
  );
}
