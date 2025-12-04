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
    <section className="relative w-full bg-gradient-to-b from-[#e8edf5] via-[#f3f6fa] to-[#eef2f7] py-24 md:py-28 border-t border-gray-200 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 grid md:grid-cols-2 gap-10 items-center">
        
        {/* === Left Illustration — flush with section edge === */}
        <div className="relative flex justify-start">
          <div className="relative w-full sm:w-[90%] md:w-[95%] lg:w-[100%] rounded-3xl bg-white border border-gray-200 shadow-md overflow-hidden">
            <Image
              src="/about-illustration.png"
              alt="Language Biomarker Lab"
              width={600}
              height={440}
              className="object-cover object-left w-full h-auto rounded-3xl"
              priority
            />
          </div>
        </div>

        {/* === Right Content === */}
        <div className="max-w-xl lg:max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            About the Language Biomarker Lab
          </h2>

          <p className="text-base sm:text-lg md:text-[1.1rem] text-gray-700 leading-relaxed mb-6">
            Located in the <strong>Department of Psychology at Emory University</strong>, and directed by{" "}
            <strong>Dr. Phillip Wolff</strong>, the Language Biomarker Lab explores how language reflects thought,
            cognition, and mental health. We integrate psychology, linguistics, and computer science to advance the
            science of language biomarkers.
          </p>

          <p className="text-sm sm:text-base md:text-[1rem] text-gray-700 leading-relaxed mb-10">
            Our collaborations include the <strong>NIH</strong>, <strong>NIMH</strong>, and the{" "}
            <strong>World Economic Forum</strong>, driving innovation in computational mental health research and early
            detection of psychiatric conditions.
          </p>

          <a
            href="https://linguistics.emory.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2e4a7d] hover:bg-[#253a63] text-white px-7 py-3 rounded-md font-semibold shadow-sm transition-colors"
          >
            Learn More →
          </a>
        </div>
      </div>

      {/* === Partner Logos === */}
      <div className="relative mt-24 md:mt-28 overflow-hidden border-t border-gray-200 pt-12">
        <div className="flex w-max animate-scrollSmooth gap-16 px-6">
          {[...partners, ...partners].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:border-[#607ea6] transition-colors"
            >
              <Image src={logo.src} alt={logo.alt} width={140} height={70} className="object-contain" />
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-[#e8edf5] via-[#f3f6fa] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-[#e8edf5] via-[#f3f6fa] to-transparent pointer-events-none" />
      </div>

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
