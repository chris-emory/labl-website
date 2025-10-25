"use client";

import { motion } from "framer-motion";
import { wolffGrants } from "../wolffData";

export default function WolffGrants() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-purple-50 py-28">
      {/* Background gradient blobs */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full -z-10" />
      <div className="absolute top-40 right-0 w-[28rem] h-[28rem] bg-purple-300/30 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-pink-200/20 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900"
        >
          Research Grants & Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* === Left Column (Active Grants) === */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold mb-8 text-gray-900"
            >
              🧬 Active
            </motion.h3>

            <div className="space-y-6">
              {wolffGrants.active.map((grant, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white to-indigo-50/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-indigo-100 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="text-lg font-semibold text-indigo-700 mb-1">
                    Project Number: {grant.number}
                  </h4>
                  <p className="text-gray-700 mb-2">
                    <strong>Name of PD/PI:</strong> {grant.investigators}
                  </p>
                  <p className="italic text-gray-800 mb-2">{grant.title}</p>
                  <p className="text-sm text-gray-600">{grant.dates}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* === Right Column (Overview + Completed) === */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold mb-6 text-gray-900"
            >
              📘 Grants Overview
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-gray-700 leading-relaxed mb-12 text-[1.05rem] bg-white/70 backdrop-blur-sm border border-gray-100 p-6 rounded-2xl shadow-sm"
            >
              Work in the lab focuses on <span className="font-medium text-indigo-700">machine learning</span> and{" "}
              <span className="font-medium text-purple-700">AI analyses</span> of NIH-funded projects identifying
              linguistic biomarkers of{" "}
              <span className="font-semibold text-indigo-700">
                Primary Progressive Aphasia (PPA)
              </span>
              ,{" "}
              <span className="font-semibold text-indigo-700">
                Alzheimer’s disease (AD)
              </span>
              ,{" "}
              <span className="font-semibold text-indigo-700">
                Frontotemporal Lobar Degeneration (FTLD)
              </span>
              , and{" "}
              <span className="font-semibold text-indigo-700">
                Lewy Body Dementia (LBD)
              </span>
              . The lab also contributes to the{" "}
              <span className="font-semibold text-purple-700">AMP SCZ</span>{" "}
              initiative, focusing on deep phenotyping and AI modeling of
              high-risk individuals for psychosis.
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold mb-8 text-gray-900"
            >
              🧾 Recently Completed
            </motion.h3>

            {wolffGrants.completed.map((grant, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-purple-50/60 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-purple-100 hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)] transition-all duration-300 hover:-translate-y-1"
              >
                <h4 className="text-lg font-semibold text-purple-700 mb-1">
                  Project Number: {grant.number}
                </h4>
                <p className="text-gray-700 mb-2">
                  <strong>Name of PD/PI:</strong> {grant.investigators}
                </p>
                <p className="italic text-gray-800 mb-2">{grant.title}</p>
                <p className="text-sm text-gray-600">{grant.dates}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
