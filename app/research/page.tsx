import ResearchHero from "./components/ResearchHero";
import ResearchAreas from "./components/ResearchAreas";
import MetaphorSection from "./components/MetaphorSection";
import EquipmentSection from "./components/EquipmentSection";
import ResearchSummary from "./components/ResearchSummary";

export default function ResearchPage() {
  return (
    <main className="overflow-hidden">
      <ResearchHero />
      <ResearchAreas />
      <MetaphorSection />
      <EquipmentSection />
      <ResearchSummary />
    </main>
  );
}
