import JobsHero from "./components/JobsHero";
import JobsAccordion from "./components/JobsAccordion";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-purple-50 text-gray-800">
      <JobsHero />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <JobsAccordion />
      </section>
    </main>
  );
}
