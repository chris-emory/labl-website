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
    <section className="relative py-28 bg-gradient-to-b from-[#eef2f7] via-[#f5f7fb] to-[#f3f6fa] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Research Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our current projects bring together neuroscience, linguistics, and
            AI to uncover language-based insights into mental health.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl bg-white border border-gray-200 hover:border-[#607ea6] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-full h-56 flex items-center justify-center bg-gradient-to-t from-[#e8edf5] to-white rounded-t-2xl border-b border-gray-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#2e4a7d] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
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
