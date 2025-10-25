import PublicationsHero from "./components/PublicationsHero";
import PublicationsGrid from "./components/PublicationsGrid";

export default function PublicationsPage() {
  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen">
      <PublicationsHero />
      <PublicationsGrid />
    </main>
  );
}
