import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center">
        {/* Left column */}
        <div>
          <Image
            src="/labl-full-logo.png"
            alt="Language Biomarker Lab logo"
            width={300}
            height={120}
            className="mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Unlocking Insights with <br /> Language Biomarkers and Advanced NLP
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A biomarker serves as a measurable indicator of an organism's
            physiological and mental conditions. Our lab utilizes advances in
            natural language processing (NLP) and artificial intelligence (AI)
            to discover how language may reveal health and cognition.
          </p>
          <button className="mt-8 rounded-md border border-gray-800 px-6 py-3 text-gray-800 hover:bg-gray-900 hover:text-white transition">
            Learn more
          </button>
        </div>

        {/* Right column */}
        <div className="flex justify-center">
          <Image
            src="/labl-logo.png"
            alt="LaBL head gear icon"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
