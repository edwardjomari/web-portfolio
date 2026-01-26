import HeroCard from './components/HeroCard';
import TechStackCard from './components/TechStackCard';
import LocationCard from './components/LocationCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import ConnectCard from './components/ConnectCard';
import CTACard from './components/CTACard';

function App() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          <HeroCard />
          <TechStackCard />
          <LocationCard />
          <ExperienceCard />
          <ProjectCard />
          <ConnectCard />
          <CTACard />
        </div>

        <footer className="mt-8 text-center text-gray-600 text-sm">
          <p>© 2026 Edward Jomari Garcia. Built with passion.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;