"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative flex flex-col lg:flex-row items-center justify-between
        w-full min-h-screen
        px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-40
        bg-gradient-to-br from-[#f3f6fa] via-[#eef2f7] to-[#e8edf5]
      "
    >
      {/* === Left Content === */}
      <div
        className="
          flex flex-col justify-center
          text-left max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-[42rem] xl:max-w-[48rem]
          py-16 sm:py-20 lg:py-24
        "
      >
        <h1
          className="
            font-bold text-gray-900 leading-snug mb-5
            text-4xl sm:text-5xl md:text-6xl xl:text-7xl
          "
        >
          Language Biomarker Lab
        </h1>

        <p
          className="
            text-base sm:text-lg md:text-[1.1rem] xl:text-xl
            text-gray-700 leading-relaxed mb-8
          "
        >
          The <strong>Language Biomarker Lab (LaBL)</strong> investigates how linguistic signals reflect
          cognition and mental health. Our team combines <strong>psychology</strong>,{" "}
          <strong>linguistics</strong>, and <strong>artificial intelligence</strong> to identify measurable
          indicators of cognitive and emotional processes.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/research"
            className="
              rounded-md bg-[#2e4a7d] text-white font-semibold
              px-6 sm:px-8 md:px-10 py-3
              text-sm sm:text-base md:text-lg
              hover:bg-[#253a63] transition-colors duration-200
            "
          >
            Explore Research
          </a>
          <a
            href="/people"
            className="
              rounded-md border border-[#2e4a7d] text-[#2e4a7d] font-semibold
              px-6 sm:px-8 md:px-10 py-3
              text-sm sm:text-base md:text-lg
              hover:bg-[#2e4a7d]/10 transition-colors duration-200
            "
          >
            Meet the Team
          </a>
        </div>
      </div>

      {/* === Right Hero Image === */}
      <div
        className="
          relative flex justify-center lg:justify-end items-center
          w-full lg:w-[45%] h-[360px] sm:h-[420px] md:h-[500px] lg:h-[600px] xl:h-[680px]
          mt-10 lg:mt-0
        "
      >
        <div className="relative w-full max-w-[480px] sm:max-w-[540px] md:max-w-[600px] lg:max-w-[720px] xl:max-w-[780px]">
          <Image
            src="/labl-logo.png"
            alt="LaBL Symbol"
            width={780}
            height={780}
            className="
              w-full h-auto object-contain
              drop-shadow-[0_20px_40px_rgba(46,74,125,0.25)]
            "
            priority
          />
        </div>
      </div>
    </section>
  );
}
