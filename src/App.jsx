import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

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
    <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 p-4 sm:p-6 md:p-8 lg:p-6 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              <Home />
            </div>
          </div>
        } />
        <Route path="/about" element={<AboutMe darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
    </Routes>
  );
}

export default App;