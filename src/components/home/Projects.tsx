"use client";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "ProNET (Psychosis Risk Outcomes Network)",
      image: "/project-pronet.png",
      description:
        "A global NIH-funded initiative using multi-site language biomarker data to better understand and predict psychosis risk.",
      link: "https://reporter.nih.gov/project-details/10093852",
    },
    {
      title: "ANNA-PR (Automated Neural Network Assessment)",
      image: "/project-early.png",
      description:
        "An AI-driven system automating psychosis risk assessment using multimodal linguistic and cognitive indicators.",
      link: "#",
    },
    {
      title: "PReDICT (Predictive Remission Detection)",
      image: "/project-predict.png",
      description:
        "A generative-AI research initiative identifying language-based biomarkers of depression and treatment resistance.",
      link: "#",
    },
  ];

  return (
    <section
      className="
        relative w-full border-t border-gray-200
        bg-gradient-to-b from-[#eef2f7] via-[#f5f7fb] to-[#f3f6fa]
        py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28
      "
    >
      <div
        className="
          w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[90rem]
          mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20
        "
      >
        {/* === Section Header === */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2
            className="
              font-bold text-gray-900 mb-3 sm:mb-4
              text-3xl sm:text-4xl md:text-5xl
            "
          >
            Featured Research Projects
          </h2>
          <p
            className="
              text-gray-600 mx-auto
              text-base sm:text-lg md:text-[1.1rem]
              max-w-[40rem] leading-relaxed
            "
          >
            Our current projects bring together neuroscience, linguistics, and
            AI to uncover language-based insights into mental health.
          </p>
        </div>

        {/* === Responsive Grid === */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14
          "
        >
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex flex-col items-center
                rounded-2xl bg-white border border-gray-200
                hover:border-[#607ea6] shadow-sm hover:shadow-md
                transition-all duration-300
              "
            >
              {/* === Image === */}
              <div
                className="
                  w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px]
                  flex items-center justify-center
                  bg-gradient-to-t from-[#e8edf5] to-white
                  rounded-t-2xl border-b border-gray-100
                "
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={180}
                  height={180}
                  className="object-contain w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
                />
              </div>

              {/* === Content === */}
              <div className="p-5 sm:p-6 md:p-7 text-center">
                <h3
                  className="
                    text-lg sm:text-xl md:text-[1.25rem]
                    font-semibold text-gray-900 mb-2 sm:mb-3
                    group-hover:text-[#2e4a7d] transition-colors
                  "
                >
                  {p.title}
                </h3>
                <p
                  className="
                    text-gray-700 leading-relaxed
                    text-sm sm:text-[0.95rem] md:text-base
                  "
                >
                  {p.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
