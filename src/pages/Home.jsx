import HeroCard from '../components/HeroCard';
import TechStackCard from '../components/TechStackCard';
import LocationCard from '../components/LocationCard';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import ConnectCard from '../components/ConnectCard';
import CTACard from '../components/CTACard';

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 auto-rows-[minmax(180px,auto)]">
                <HeroCard />
                <TechStackCard />
                <LocationCard />
                <ConnectCard />
                <ExperienceCard />
                <ProjectCard />
                <CTACard />
            </div>

            <footer className="mt-6 lg:mt-5 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-[#2a2a2a] pt-5 lg:pt-4">
                <p>© 2026 Edward Jomari Garcia. All rights reserved.</p>
            </footer>
        </>
    );
}
