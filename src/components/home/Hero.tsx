"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative flex flex-col lg:flex-row items-center justify-between w-full
        min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh]
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-40
        py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24
        bg-gradient-to-br from-[#f3f6fa] via-[#eef2f7] to-[#e8edf5]
      "
    >
      {/* === Left Content === */}
      <div
        className="
          flex flex-col items-start text-left
          max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-[42rem] xl:max-w-[48rem]
        "
      >
        {/* Heading */}
        <h1
          className="
            font-bold text-gray-900 leading-snug mb-4 sm:mb-5 md:mb-6
            text-3xl sm:text-4xl md:text-5xl xl:text-6xl
          "
        >
          Language Biomarker Lab
        </h1>

        {/* Paragraph */}
        <p
          className="
            text-base sm:text-lg md:text-[1.1rem] xl:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8
          "
        >
          The <strong>Language Biomarker Lab (LaBL)</strong> investigates how
          linguistic signals reflect cognition and mental health. Our team
          combines <strong>psychology</strong>, <strong>linguistics</strong>, and{" "}
          <strong>artificial intelligence</strong> to identify measurable
          indicators of cognitive and emotional processes.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a
            href="/research"
            className="
              rounded-md bg-[#2e4a7d] text-white font-semibold
              px-5 sm:px-6 md:px-7 py-2.5 sm:py-3
              text-sm sm:text-base md:text-[1rem]
              hover:bg-[#253a63] transition-colors duration-200
            "
          >
            Explore Research
          </a>
          <a
            href="/people"
            className="
              rounded-md border border-[#2e4a7d] text-[#2e4a7d] font-semibold
              px-5 sm:px-6 md:px-7 py-2.5 sm:py-3
              text-sm sm:text-base md:text-[1rem]
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
          mt-8 sm:mt-10 md:mt-12 lg:mt-0 lg:ml-10 xl:ml-16
          flex justify-center lg:justify-end
        "
      >
        <Image
          src="/labl-logo.png"
          alt="LaBL Symbol"
          width={360}
          height={360}
          className="
            w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] xl:w-[460px]
            h-auto rounded-xl border border-gray-300 shadow-md
          "
          priority
        />
      </div>
    </section>
  );
}
