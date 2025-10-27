"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { people } from "../peopleData";

export default function TeamGrid() {
  const [selected, setSelected] = useState<any>(null);

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
          <SmoothCard
            key={i}
            person={person}
            index={i}
            onSelect={() => setSelected(person)}
          />
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

      {/* === Director === */}
      {director && (
        <div className="relative z-10 mb-12 flex flex-col items-center">
          <SmoothCard person={director} index={0} onSelect={() => setSelected(director)} />

          {/* ↓ Downward scroll indicator */}
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

      {/* === Expanded Profile Modal === */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={selected.name}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-white/90 via-white/80 to-indigo-50/60 backdrop-blur-2xl rounded-3xl shadow-[0_8px_60px_rgba(99,102,241,0.15)] overflow-hidden w-[95%] md:w-[1200px] max-w-7xl p-12 flex flex-col md:flex-row items-center md:items-start gap-16 border border-white/40"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* === LEFT: Dynamic Image === */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex-shrink-0"
              >
                {/* Outer gradient halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 blur-3xl opacity-50 animate-pulse-slow"></div>

                {/* Circular frame with glow */}
                <div className="relative rounded-full p-[6px] bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-500 shadow-[0_0_40px_rgba(147,51,234,0.4)]">
                  <div className="rounded-full overflow-hidden bg-white shadow-2xl">
                    <motion.img
                      src={selected.image}
                      alt={selected.name}
                      className="w-[34rem] h-[34rem] object-cover rounded-full"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* === RIGHT: Text Content === */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 relative"
              >
                {/* Animated gradient underline accent */}
                <div className="absolute -top-2 left-0 w-32 h-[4px] bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full animate-gradient-x"></div>

                {/* Name */}
                <h2 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(147,51,234,0.3)] tracking-tight leading-tight mb-3">
                  {selected.name}
                </h2>

                {/* Role */}
                <div className="inline-block bg-gradient-to-r from-indigo-100 via-white to-pink-100 rounded-full px-6 py-2 shadow-inner mb-8">
                  <p className="text-indigo-700 text-lg font-semibold tracking-wide uppercase">
                    {selected.role}
                  </p>
                </div>

                {/* Bio */}
                {selected.bio && (
                  <p className="text-gray-800/90 text-lg leading-relaxed font-light mb-10">
                    {selected.bio}
                  </p>
                )}

                {/* Research Interests */}
                {selected.research && (
                  <div className="relative pl-6 border-l-[3px] border-gradient-to-b from-indigo-400 to-pink-400">
                    <h3 className="text-xl font-bold text-purple-700 mb-3 tracking-wider">
                      Research Interests
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed italic">
                      {selected.research}
                    </p>
                  </div>
                )}

                {/* Optional LinkedIn */}
                {selected.linkedin && (
                  <div className="mt-12">
                    <a
                      href={selected.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.238 5-5v-14c0-2.761-2.239-5-5-5zm-11.334 20h-2.666v-10h2.666v10zm-1.333-11.458c-.854 0-1.547-.693-1.547-1.547s.693-1.547 1.547-1.547 1.547.693 1.547 1.547-.693 1.547-1.547 1.547zm12.667 11.458h-2.666v-5.334c0-1.271-.025-2.904-1.771-2.904-1.771 0-2.043 1.385-2.043 2.813v5.425h-2.666v-10h2.561v1.366h.036c.357-.675 1.229-1.386 2.531-1.386 2.71 0 3.209 1.783 3.209 4.101v5.919z" />
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                )}
              </motion.div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-3xl"
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* === Smooth morph card component === */
function SmoothCard({ person, index, onSelect }: any) {
  if (!person) return null;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={index}
      layoutId={person.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="flex flex-col items-center text-center group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
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
