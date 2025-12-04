"use client";
import Image from "next/image";

export default function About() {
  const partners = [
    { src: "/partner-nih.png", alt: "NIH" },
    { src: "/partner-nimh.png", alt: "NIMH" },
    { src: "/partner-emory.png", alt: "Emory University" },
    { src: "/partner-wef.png", alt: "World Economic Forum" },
    { src: "/partner-sciencedaily.png", alt: "Science Daily" },
    { src: "/partner-newscientist.png", alt: "New Scientist" },
    { src: "/partner-psychcentral.png", alt: "Psych Central" },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#e8edf5] via-[#f3f6fa] to-[#eef2f7] py-28 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Illustration */}
        <div className="flex justify-center">
          <div className="relative rounded-3xl bg-white border border-gray-200 shadow-md overflow-hidden">
            <Image
              src="/about-illustration.png"
              alt="Language Biomarker Lab"
              width={520}
              height={400}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            About the Language Biomarker Lab
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Located in the <strong>Department of Psychology at Emory University</strong>, and directed by{" "}
            <strong>Dr. Phillip Wolff</strong>, the Language Biomarker Lab explores how language reflects thought,
            cognition, and mental health. We integrate psychology, linguistics, and computer science to advance the
            science of language biomarkers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Our collaborations include the <strong>NIH</strong>, <strong>NIMH</strong>, and the{" "}
            <strong>World Economic Forum</strong>, driving innovation in computational mental health research and early
            detection of psychiatric conditions.
          </p>

          <a
            href="https://linguistics.emory.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2e4a7d] hover:bg-[#253a63] text-white px-8 py-3 rounded-md font-semibold shadow-sm transition-colors"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* Partner Logos (Smooth Slide) */}
      <div className="relative mt-28 overflow-hidden border-t border-gray-200 pt-12">
        <div className="flex w-max animate-scrollSmooth gap-16 px-6">
          {[...partners, ...partners].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[180px] bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:border-[#607ea6] transition-colors"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Gradient edges */}
        <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-[#e8edf5] via-[#f3f6fa] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-[#e8edf5] via-[#f3f6fa] to-transparent pointer-events-none" />
      </div>

      {/* Safe global CSS */}
      <style jsx global>{`
        @keyframes scrollSmooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scrollSmooth {
          animation: scrollSmooth 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
