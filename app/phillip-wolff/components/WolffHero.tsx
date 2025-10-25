import Image from "next/image";

export default function WolffHero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Dr. Phillip Wolff
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Dr. Wolff is a Professor of Psychology at Emory University, where he
          contributes to the Cognitive and Computational Science and Clinical
          Science concentrations. He also serves as core faculty in the Program
          in Linguistics and is associated with the Department of Computer
          Science.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Dr. Wolff is recognized for his expertise in research domains
          including language semantics, natural language processing, digital
          phenotyping of mental illness, and the application of machine learning
          to understanding cognition and neurodegenerative diseases.
        </p>
      </div>

      <div className="flex justify-center">
        <Image
          src="/phillip-wolff.jpg"
          alt="Dr. Phillip Wolff"
          width={400}
          height={480}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
