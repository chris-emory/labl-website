"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { publicationsData } from "../publicationsData";

interface Publication {
  authors: string;
  year: string;
  title: string;
  link?: string;
  linkLabel?: string;
  abstract?: string;
}

export default function PublicationsGrid() {
  const [openSection, setOpenSection] = useState<"prep" | "refereed" | null>("prep");

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-indigo-50 via-white to-purple-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        {/* === Section Buttons === */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <button
            onClick={() => setOpenSection(openSection === "prep" ? null : "prep")}
            className={`px-7 py-3 rounded-full font-medium transition-all duration-300 shadow-md ${
              openSection === "prep"
                ? "bg-indigo-600 text-white"
                : "bg-white text-indigo-700 border border-indigo-300 hover:bg-indigo-50"
            }`}
          >
            In Preparation
          </button>

          <button
            onClick={() => setOpenSection(openSection === "refereed" ? null : "refereed")}
            className={`px-7 py-3 rounded-full font-medium transition-all duration-300 shadow-md ${
              openSection === "refereed"
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-700 border border-purple-300 hover:bg-purple-50"
            }`}
          >
            Refereed Papers
          </button>
        </div>

        {/* === Publications Section === */}
        <AnimatePresence mode="wait">
          {openSection && (
            <motion.div
              key={openSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-left bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-10 border border-gray-100"
            >
              <h3 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {openSection === "prep" ? "In Preparation" : "Refereed Papers"}
              </h3>

              <motion.ul
                className="grid gap-8 md:grid-cols-2"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
                }}
              >
                {publicationsData[openSection].map((pub: Publication, i: number) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0px 10px 25px rgba(99,102,241,0.15)",
                    }}
                    className="relative p-6 rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 transition-all duration-300"
                  >
                    {/* Accent bar */}
                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl" />

                    {/* Year + Link Row */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-indigo-600 tracking-wide">
                        {pub.year}
                      </span>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-indigo-600 hover:text-purple-600 transition flex items-center gap-1"
                        >
                          🔗 {pub.linkLabel ?? "View"}
                        </a>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                      {pub.title}
                    </h4>

                    {/* Authors */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-2">
                      <span className="font-medium">{pub.authors}</span>
                    </p>

                    {/* Optional abstract */}
                    {pub.abstract && (
                      <p className="text-gray-600 italic text-sm leading-relaxed">
                        {pub.abstract}
                      </p>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative gradient bar at bottom */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 h-[5px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      />
    </section>
  );
}
