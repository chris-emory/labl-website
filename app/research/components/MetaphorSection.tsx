"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MetaphorSection() {
  const textRef = useRef<SVGTextPathElement | null>(null);

  useEffect(() => {
    let offset = 0;
    const animate = () => {
      offset -= 0.5; // smooth continuous speed
      if (textRef.current) {
        textRef.current.setAttribute("startOffset", `${offset % 1600}`);
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-16 bg-gradient-to-br from-white via-indigo-50 to-purple-100">
      {/* === Radiant Animated Background === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.25),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.25),transparent_60%)] animate-pulse-slow blur-2xl opacity-80"></div>

      {/* === Smooth Continuous Curved Text === */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
        <svg
          viewBox="0 0 2000 250"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1600px] opacity-60"
        >
          <path id="curve" fill="transparent" d="M 100,200 Q 1000,0 1900,200" />
          <defs>
            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>

          <text
            fontSize="46"
            fill="url(#textGradient)"
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            letterSpacing="3"
          >
            <textPath
              ref={textRef}
              href="#curve"
              startOffset="0"
              textLength="4000"
              spacing="auto"
            >
              · Metaphor and Analogy · Metaphor and Analogy · Metaphor and Analogy · Metaphor and Analogy · Metaphor and Analogy · Metaphor and Analogy ·
            </textPath>
          </text>
        </svg>
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mt-28">
        {/* Left Logo with Subtle Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 rounded-2xl"></div>
          <Image
            src="/LaBL-Full.jpg"
            alt="LaBL Symbol"
            width={400}
            height={400}
            className="relative z-10 rounded-2xl border border-indigo-200 shadow-[0_0_50px_rgba(99,102,241,0.35)] hover:shadow-[0_0_70px_rgba(147,51,234,0.45)] transition duration-700"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Metaphor and Analogy: Mapping the Mind through Language
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Dr. Wolff’s early research explored how people comprehend metaphorical language, revealing that metaphor understanding unfolds in at least two distinct stages. First, individuals identify a shared relational structure between the metaphor’s base and target (comparison stage), followed by an inference stage where unique properties of the base are mapped onto the target.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            This two-stage model of metaphor processing has contributed to a deeper understanding of conceptual mapping in language. Dr. Wolff served as the primary investigator in several foundational studies that shaped this framework.
          </p>
        </motion.div>
      </div>

      {/* === Soft Bottom Gradient === */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-indigo-200/70 to-transparent pointer-events-none" />
    </section>
  );
}
