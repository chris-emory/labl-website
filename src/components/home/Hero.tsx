"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="
        relative flex flex-col lg:flex-row items-center justify-between w-full
        min-h-[85vh]
        px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-44
        py-14 sm:py-18 md:py-20 lg:py-24
        bg-gradient-to-br from-[#c8d6f3] via-[#e4ebf8] to-[#f7f9fc]
        overflow-hidden
      "
    >
      {/* === Dynamic gradient overlays === */}
      <div className="absolute inset-0 -z-10">
        {/* top-right highlight */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gradient-to-bl from-[#f4f7ff]/60 to-transparent" />
        {/* soft diagonal gradient for depth */}
        <div className="absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-[#2e4a7d]/25 via-[#607ea6]/15 to-transparent blur-3xl rounded-full" />
        {/* faint grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(46,74,125,0.15) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      {/* === Left content === */}
      <div className="flex flex-col items-start text-left max-w-2xl lg:max-w-[42rem] xl:max-w-[48rem]">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1b2b4f] mb-5 leading-tight">
          Language Biomarker Lab
        </h1>

        <p className="text-lg md:text-xl font-medium text-[#2e4a7d] mb-6">
          Exploring how language reveals cognition, emotion, and mental health.
        </p>

        <p className="text-base sm:text-lg md:text-[1.1rem] xl:text-xl text-gray-700 leading-relaxed mb-8">
          The <strong>Language Biomarker Lab (LaBL)</strong> integrates{" "}
          <strong>psychology</strong>, <strong>linguistics</strong>, and{" "}
          <strong>artificial intelligence</strong> to uncover measurable
          indicators of cognitive and emotional processes.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/research"
            className="rounded-md bg-[#2e4a7d] text-white font-semibold px-6 py-3 shadow-md hover:bg-[#253a63] transition"
          >
            Explore Research
          </a>
          <a
            href="/people"
            className="rounded-md border border-[#2e4a7d] text-[#2e4a7d] font-semibold px-6 py-3 hover:bg-[#2e4a7d]/10 transition"
          >
            Meet the Team
          </a>
        </div>
      </div>

      {/* === Right visual === */}
      <div className="relative mt-10 lg:mt-0 lg:ml-16">
        <div className="absolute inset-0 bg-[#2e4a7d]/20 blur-3xl rounded-full scale-125" />
        <Image
          src="/labl-logo.png"
          alt="LaBL Symbol"
          width={420}
          height={420}
          className="relative rounded-xl shadow-lg border border-gray-200"
          priority
        />
      </div>
    </section>
  );
}
