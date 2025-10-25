"use client";

import { motion } from "framer-motion";

export default function WolffResearch() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white py-24">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-200/30 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center"
        >
          Research Focus
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Language Semantics",
              desc: "Exploring the structure and meaning of language.",
            },
            {
              title: "Machine Learning and NLP",
              desc: "Utilizing algorithms to interpret and generate human language.",
            },
            {
              title: "Digital Phenotyping of Mental Illness",
              desc: "Studying linguistic biomarkers in conditions like psychosis.",
            },
            {
              title: "Neurodegenerative Diseases",
              desc: "Investigating language biomarkers in Alzheimer’s and Primary Progressive Aphasia.",
            },
            {
              title: "Causal Reasoning and Future Thinking",
              desc: "Examining how people predict and reason about future events.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-700 leading-relaxed text-lg bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100"
        >
          Dr. Wolff’s research endeavors concentrate on mining natural language
          data to identify biomarkers for psychosis, neurodegenerative diseases,
          and fundamental cognitive processes. His innovative,
          cross-disciplinary methodology integrates Psychology, Computer
          Science, and Linguistics, leading to presentations at over ten
          international conferences in the past six years.
          <br />
          <br />
          In addition to his role as Director of the Program in Cognition and
          Development, Dr. Wolff has served as the Interim Chair of Linguistics
          at Emory University and as faculty at the 2007 Summer Institute of
          Linguistics. He teaches Statistics in the Psychology Department,
          emphasizing computational statistics and the application of machine
          learning and AI in biomedical and psychological research.
          <br />
          <br />
          Dr. Wolff has also been an Associate Editor for the journal{" "}
          <span className="italic">Cognitive Science</span> and a member of four
          editorial boards. As a Principal Investigator for the{" "}
          <span className="font-semibold text-indigo-700">
            Accelerated Medicines Partnership in Schizophrenia (AMP® SCZ)
          </span>
          , he oversees an international project with over 42 participating
          sites worldwide, leading efforts in the collection and NLP analysis of
          language biomarkers.
        </motion.p>
      </div>
    </section>
  );
}
