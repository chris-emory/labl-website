"use client";
import { motion } from "framer-motion";

export default function ResearchAreas() {
  const researchTopics = [
    {
      title: "Linguistic Biomarkers and AI: Uncovering the Language of Mental Health",
      description: `Dr. Phillip Wolff leads research at the forefront of using machine learning and natural language processing to identify linguistic markers of mental illness. His work includes developing algorithms to measure semantic density, analyze latent content, and decode time-related language. These methods have been applied to diverse contexts-from Reddit posts to transformer models like T5-to reveal how subtle patterns in language reflect cognitive and emotional states. Through this research, Dr. Wolff is helping to redefine how we detect and understand mental health conditions through the lens of language.`,
      papers: [
        "Rezaii, N., Wolff, P., & Price, B. (2023). Natural Language Processing in Psychiatry: The Promises and Perils of a Transformative Approach. British Journal of Psychiatry, 220, 251-253.",
        "Rezaii, N., Walker, E. & Wolff, P. A machine learning approach to predicting psychosis using semantic density and latent content analysis. npj Schizophr 5, 9 (2019) doi:10.1038/s41537-019-0077-9.",
        "Thorstad, R. & Wolff, P. Predicting future mental illness from social media: A big-data approach. Behav Res (2019) 51: 1586.",
        "Thorstad, R. & Wolff, P. Big data analysis of the relationship between future thinking and decision making. Proceedings of the National Academy of Sciences Feb 2018, 115 (8) E1740-E1748; DOI: 10.1073/pnas.1706589115.",
      ],
    },
    {
      title: "Causal Cognition: From Language to Perception",
      description: `LaBL’s research on causal cognition spans three core areas: how causal meaning is encoded in language, how causation is perceived from sensory experience, and how people reason about causal relationships. Over the past decade, he has advanced the idea that causal understanding is grounded in force dynamics-reflected both in linguistic semantics and neural processes. Using methods such as computational modeling, computer visualization, haptic rendering, and corpus analysis, his work reveals the deep interconnection between language, perception, and reasoning. This body of research remains among his most widely cited contributions.`,
      papers: [
        "Wolff, P. Direct causation in the linguistic coding and individuation of causal events. Cognition volume 88, issue 1, P1-48 (2003) DOI: 10.1016/s0010-0277(03)00004-0.",
        "Wolff, P., & Song, G. Models of causation and the semantics of causal verbs. Cognitive Psychology volume 47, issue 3, P276-332 (2003) DOI: 10.1016/s0010-0285(03)00036-7.",
        "Wolff, P. Representing causation. Journal of Experimental Psychology: General volume 136, issue 1, P82-111 (2007) DOI: 10.1037/0096-3445.136.1.82.",
        "Wolff, P., & Barbey, A. K. Causal reasoning with forces. Frontiers in Human Neuroscience (2015) DOI: 10.3389/fnhum.2015.00001.",
      ],
    },
    {
      title: "Language and Thought: Tracing the Cognitive Impact of Words",
      description: `LaBL’s early work on linguistic biomarkers stems from a broader investigation into the relationship between language and thought. A central focus of this research has been how word meanings reveal the structure of conceptual representations. Co-editing a foundational volume with Dr. Barbara Malt on the language-thought interface, Dr. Wolff explored whether the language we speak shapes how we think-a question he addressed through cross-linguistic studies on the encoding of causation. His research demonstrates how subtle linguistic differences across languages like English, Korean, Chinese, and Russian can influence cognitive processes, including event perception and categorical thinking.`,
      papers: [
        "Wolff, P., Jeon, G., & Yu, L. Causers in English, Korean, and Chinese and the individuation of events. Language and Cognition volume 1, issue 2, P167-196 2009 DOI: 10.1515/langcog.2009.009.",
        "Wolff, P., & Holmes, K. (2011). Linguistic Relativity. Wiley Interdisciplinary Reviews: Cognitive Science volume 2, issue 3, P253-265 (2010) DOI: 10.1002/wcs.104.",
        "Holmes, K. J., & Wolff, P. Does categorical perception in the left hemisphere depend on language? Journal of Experimental Psychology: General volume 141, issue 3, P439-443 (2012) DOI: 10.1037/a0027289.",
        "Wolff, P., & Ventura, T. (2009). When Russians learn English: How the semantics of causation may change. Bilingualism: Language and Cognition volume 12, issue 2, P153-176 (2009) DOI: 10.1017/s1366728909004040.",
      ],
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-16 bg-gradient-to-b from-white via-indigo-50/30 to-purple-50 overflow-hidden">
      {/* === Background Ambient Glow === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.12),transparent_70%)] blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* === Section Heading === */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Core Research Areas
        </motion.h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-20">
          Exploring the frontiers of language, cognition, and artificial intelligence - uniting data, psychology, and computational science.
        </p>

        {/* === Research Area Cards === */}
        <div className="grid md:grid-cols-3 gap-12">
          {researchTopics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-indigo-100 p-8 rounded-3xl shadow-[0_0_25px_rgba(99,102,241,0.08)] hover:shadow-[0_0_40px_rgba(147,51,234,0.25)] transition-all duration-500"
            >
              {/* Decorative Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 via-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 relative z-10 group-hover:text-indigo-600 transition-colors duration-300">
                {topic.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                {topic.description}
              </p>

              {/* Papers */}
              <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 relative z-10">
                {topic.papers.map((p, j) => (
                  <li key={j} className="hover:text-indigo-600 transition-colors duration-200">
                    {p}
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === Subtle Glow at Bottom === */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-indigo-100/70 to-transparent pointer-events-none" />
    </section>
  );
}
