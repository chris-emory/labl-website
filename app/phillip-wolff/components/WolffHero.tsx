"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WolffHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Dr. Phillip Wolff
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Dr. Wolff is a Professor of Psychology at Emory University, where he
            contributes to the Cognitive and Computational Science and Clinical
            Science concentrations. He also serves as core faculty in the
            Program in Linguistics and is associated with the Department of
            Computer Science.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            His expertise spans{" "}
            <span className="font-medium text-indigo-700">
              language semantics
            </span>
            ,{" "}
            <span className="font-medium text-indigo-700">
              natural language processing (NLP)
            </span>
            ,{" "}
            <span className="font-medium text-indigo-700">
              digital phenotyping of mental illness
            </span>
            , and the application of{" "}
            <span className="font-medium text-indigo-700">
              machine learning
            </span>{" "}
            to cognition and neurodegenerative diseases.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="/publications"
              className="inline-block mt-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-purple-500 transition"
            >
              View Publications →
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25" />
            <Image
              src="/phillip-wolff.jpg"
              alt="Dr. Phillip Wolff"
              width={420}
              height={500}
              className="relative rounded-xl shadow-2xl border border-gray-100 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
