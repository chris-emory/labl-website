import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Featured Projects
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-12 mb-16">
          <Image src="/project-pronet.png" alt="ProNET" width={160} height={80} />
          <Image src="/project-early.png" alt="Early Intervention" width={160} height={80} />
          <Image src="/project-predict.png" alt="Predict" width={160} height={80} />
        </div>

        {/* Project descriptions */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="font-semibold text-lg">
              ProNET (Psychosis Risk Outcomes Network)
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              A global effort funded by NIH to better understand and prevent
              psychosis through multi-site language biomarker data.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              ANNA-PR (Automated Neural Network Assessment)
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              An AI system automating the assessment of psychosis risk across
              youth populations using linguistic and cognitive markers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              PReDICT (Predictive Remission Detection)
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              A generative-AI-driven initiative identifying language-based
              biomarkers of depression and treatment resistance.
            </p>
          </div>
        </div>

        <button className="mt-12 rounded-md border border-gray-800 px-6 py-3 text-gray-800 hover:bg-gray-900 hover:text-white transition">
          Project Details
        </button>
      </div>
    </section>
  );
}
