import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroCard from './components/HeroCard';
import TechStackCard from './components/TechStackCard';
import LocationCard from './components/LocationCard';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import ConnectCard from './components/ConnectCard';
import CTACard from './components/CTACard';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Persist preference
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 p-4 sm:p-6 md:p-8 lg:p-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto lg:h-full lg:flex lg:flex-col">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 auto-rows-[minmax(180px,auto)] lg:auto-rows-fr lg:flex-1 lg:min-h-0">
          <HeroCard />
          <TechStackCard />
          <LocationCard />
          <ConnectCard />
          <ExperienceCard />
          <ProjectCard />
          <CTACard />
        </div>

        <footer className="mt-4 lg:mt-3 lg:flex-shrink-0 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-[#2a2a2a] pt-4 lg:pt-3">
          <p>© 2026 Edward Jomari Garcia. Built with passion.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;