import HeroCard from "./components/HeroCard";
import LocationCard from "./components/LocationCard";
import TechStackCard from "./components/TechStackCard";

function App() {
  return (
    <div className="min-h-screen bg-black text-white p6 md:p-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          <HeroCard />
          <TechStackCard />
          <LocationCard />
        </div>
      </div>
    </div>
  );
}

export default App;