"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-[85vh] px-6 md:px-20 py-20 bg-gradient-to-br from-[#f3f6fa] via-[#eef2f7] to-[#e8edf5]">
      {/* === Left Content === */}
      <div className="flex flex-col items-start text-left max-w-2xl">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
          Language Biomarker Lab
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          The <strong>Language Biomarker Lab (LaBL)</strong> investigates how
          linguistic signals reflect cognition and mental health. Our team
          combines <strong>psychology</strong>, <strong>linguistics</strong>, and{" "}
          <strong>artificial intelligence</strong> to identify measurable
          indicators of cognitive and emotional processes.
        </p>

        <div className="flex gap-4">
          <a
            href="/research"
            className="rounded-md bg-[#2e4a7d] text-white px-6 py-3 font-semibold hover:bg-[#253a63] transition-colors"
          >
            Explore Research
          </a>
          <a
            href="/people"
            className="rounded-md border border-[#2e4a7d] text-[#2e4a7d] px-6 py-3 font-semibold hover:bg-[#2e4a7d]/10 transition-colors"
          >
            Meet the Team
          </a>
        </div>
      </div>

      {/* === Right Hero Image === */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <Image
          src="/labl-logo.png"
          alt="LaBL Symbol"
          width={400}
          height={400}
          className="rounded-xl border border-gray-300 shadow-md"
        />
      </div>
    </section>
  );
}
