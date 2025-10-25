import WolffHero from "./components/WolffHero";
import WolffResearch from "./components/WolffResearch";
import WolffGrants from "./components/WolffGrants";

export default function Page() {
  return (
    <main className="bg-gray-50 text-gray-800">
      <WolffHero />
      <WolffResearch />
      <WolffGrants />
    </main>
  );
}
