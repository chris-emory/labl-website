import { wolffGrants } from "../wolffData";

export default function WolffGrants() {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Active</h3>
          {wolffGrants.active.map((grant, i) => (
            <div key={i} className="mb-8 p-6 bg-white shadow rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">
                Project Number: {grant.number}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Name of PD/PI:</strong> {grant.investigators}
              </p>
              <p className="italic text-gray-700">{grant.title}</p>
              <p className="mt-2 text-gray-600 text-sm">
                {grant.dates}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Grants Overview
          </h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Work in the lab focuses on machine-learning and AI analyses of NIH-funded projects 
            identifying linguistic biomarkers in neurodegenerative diseases such as Alzheimer’s, 
            Primary Progressive Aphasia, and psychosis. These projects are part of the Accelerating 
            Medicines Partnership for Schizophrenia (AMP SCZ).
          </p>

          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Recently Completed
          </h3>
          {wolffGrants.completed.map((grant, i) => (
            <div key={i} className="mb-8 p-6 bg-white shadow rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">
                Project Number: {grant.number}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Name of PD/PI:</strong> {grant.investigators}
              </p>
              <p className="italic text-gray-700">{grant.title}</p>
              <p className="mt-2 text-gray-600 text-sm">
                {grant.dates}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
