import HeroCard from './components/HeroCard';
import TechStackCard from './components/TechStackCard';
import LocationCard from './components/LocationCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import ConnectCard from './components/ConnectCard';
import CTACard from './components/CTACard';

function App() {
  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden bg-white text-gray-900 p-4 sm:p-6 md:p-8 lg:p-8">
      <div className="max-w-7xl mx-auto lg:h-full lg:flex lg:flex-col">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)] lg:auto-rows-fr lg:flex-1 lg:min-h-0">
          <HeroCard />
          <TechStackCard />
          <LocationCard />
          <ConnectCard />
          <ExperienceCard />
          <ProjectCard />
          <CTACard />
        </div>

        <footer className="mt-6 lg:mt-4 lg:flex-shrink-0 text-center text-gray-500 text-sm border-t border-gray-200 pt-6 lg:pt-4">
          <p>© 2026 Edward Jomari Garcia. Built with passion.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;