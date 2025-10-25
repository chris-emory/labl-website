"use client";
import TeamHero from "./components/TeamHero";
import TeamGallery from "./components/TeamGallery";
import TeamGrid from "./components/TeamGrid";

export default function PeoplePage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/30 overflow-hidden">
      <TeamHero />
      <TeamGallery />
      <TeamGrid />
    </main>
  );
}
