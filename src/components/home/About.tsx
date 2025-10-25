import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/about-illustration.png"
          alt="About LaBL"
          width={500}
          height={400}
          className="rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Us: The Language Biomarker Lab
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Nestled within the Psychology Department at Emory University and
            directed by Dr. Phillip Wolff, our interdisciplinary lab bridges
            psychology, linguistics, and computer science to advance the science
            of language biomarkers.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We collaborate with leading institutions including the NIH, NIMH,
            and the World Economic Forum to push the boundaries of computational
            psychology.
          </p>
        </div>
      </div>

      {/* Partner logos */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-wrap justify-center gap-10 px-6">
        <Image src="/partner-nih.png" alt="NIH" width={140} height={60} />
        <Image src="/partner-nimh.png" alt="NIMH" width={140} height={60} />
        <Image src="/partner-emory.png" alt="Emory University" width={120} height={60} />
        <Image src="/partner-wef.png" alt="World Economic Forum" width={120} height={60} />
        <Image src="/partner-sciencedaily.png" alt="Science Daily" width={120} height={60} />
      </div>
    </section>
  );
}
