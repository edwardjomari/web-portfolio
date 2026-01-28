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
                <div className="animate-fade-in-up col-span-1 sm:col-span-2 sm:row-span-2" style={{ animationDelay: '0ms' }}>
                    <HeroCard />
                </div>
                <div className="animate-fade-in-up col-span-1 sm:row-span-2 lg:col-span-1" style={{ animationDelay: '100ms' }}>
                    <TechStackCard />
                </div>
                <div className="animate-fade-in-up col-span-1" style={{ animationDelay: '200ms' }}>
                    <LocationCard />
                </div>
                <div className="animate-fade-in-up col-span-1" style={{ animationDelay: '300ms' }}>
                    <ConnectCard />
                </div>
                <div className="animate-fade-in-up col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2" style={{ animationDelay: '400ms' }}>
                    <ExperienceCard />
                </div>
                <div className="animate-fade-in-up col-span-1 sm:col-span-2 lg:col-span-3" style={{ animationDelay: '500ms' }}>
                    <ProjectCard />
                </div>
                <div className="animate-fade-in-up col-span-1 sm:col-span-2 lg:col-span-2" style={{ animationDelay: '600ms' }}>
                    <CTACard />
                </div>
            </div>

            <footer className="animate-fade-in-up mt-6 lg:mt-5 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-[#2a2a2a] pt-5 lg:pt-4" style={{ animationDelay: '700ms' }}>
                <p>© 2026 Edward Jomari Garcia. All rights reserved.</p>
            </footer>
        </>
    );
}
