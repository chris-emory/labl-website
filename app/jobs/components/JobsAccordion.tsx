"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jobsData } from "../jobsData";

export default function JobsAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {jobsData.map((job, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {job.title}
            </h3>
            <motion.span
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl text-indigo-600"
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="px-6 pb-6 text-gray-700 border-t border-gray-100"
              >
                <p className="leading-relaxed mb-4 whitespace-pre-line">{job.description}</p>

                {job.link && (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow hover:shadow-lg transition-all"
                  >
                    Apply Now
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
