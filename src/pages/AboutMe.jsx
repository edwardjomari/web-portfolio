import { useNavigate } from 'react-router-dom';

export default function AboutMe({ darkMode, toggleDarkMode }) {
    const navigate = useNavigate();

    const achievements = [
        {
            title: "Finalist, AMY Innovation Awards",
            organization: "Alfredo M. Yao Foundation",
            year: "2025",
            description: "Recognized as a finalist for the project 'Enervisio AI'."
        },
        {
            title: "Published Researcher",
            organization: "International Journal Academic Multidisciplinary Research (IJAMR)",
            year: "2024",
            description: "Published 'Angels and Lemons’ E-Ordering' in Vol. 8 Issue 6."
        },
        {
            title: "Dean's List",
            organization: "National University Baliwag",
            year: "2023-2024",
            description: "Academic excellence recognition"
        }
    ];

    const galleryImages = [
        { id: 1, src: "/gallery/558894261_1137172438513330_850162699329479708_n.jpg", alt: "Gallery Image 1" },
        { id: 2, src: "/gallery/491776199_1207799328020892_5966470127247330306_n.jpg", alt: "Gallery Image 2" }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition-colors duration-300">
            {/* Header with Back Button and Theme Toggle */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-sm border-b border-gray-200 dark:border-[#2a2a2a]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors font-medium"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className="p-3 rounded-full bg-gray-200 dark:bg-[#1e1e1e] hover:bg-gray-300 dark:hover:bg-[#2a2a2a] transition-all duration-300 shadow-sm hover:shadow-md border border-transparent dark:border-[#2a2a2a]"
                            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        >
                            {darkMode ? (
                                // Sun icon for light mode
                                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                // Moon icon for dark mode
                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
                {/* Section 1: Profile & About */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Profile Picture */}
                        <div className="flex-shrink-0">
                            <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 dark:from-emerald-400 dark:to-emerald-600 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                                EG
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="flex-1">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                                About <span className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent">Me</span>
                            </h1>
                            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
                                Full Stack Developer & Creative Problem Solver
                            </p>
                            <div className="prose prose-lg dark:prose-invert max-w-none">
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    I'm Edward Jomari Garcia, a passionate full-stack developer with a love for creating
                                    beautiful and functional web applications. With expertise in modern technologies like
                                    React, Node.js, and Tailwind CSS, I bring ideas to life through clean code and
                                    innovative solutions.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    My journey in tech started with a curiosity about how things work and has evolved
                                    into a career focused on building user-centric applications that make a difference.
                                    I believe in continuous learning and staying updated with the latest industry trends.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    When I'm not coding, you can find me exploring new technologies, contributing to
                                    open-source projects, or sharing knowledge with the developer community. I'm always
                                    open to new opportunities and collaborations that challenge me to grow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Achievements */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-blue-600/10 dark:bg-emerald-500/20 p-2 rounded-full">
                            <svg className="w-6 h-6 text-blue-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            Achievements
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-[#1e1e1e] rounded-3xl p-6 border border-gray-200 dark:border-[#2a2a2a] shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="bg-blue-600/10 dark:bg-emerald-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-blue-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold mb-1.5 text-gray-900 dark:text-white">
                                    {achievement.title}
                                </h3>
                                <p className="text-blue-600 dark:text-emerald-400 font-medium text-xs mb-1.5">
                                    {achievement.organization} • {achievement.year}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-xs">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Gallery */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-blue-600/10 dark:bg-emerald-500/20 p-2 rounded-full">
                            <svg className="w-6 h-6 text-blue-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            Gallery
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-[#2a2a2a] hover:scale-105 transition-transform duration-300 cursor-pointer shadow-sm hover:shadow-lg"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="mt-16 border-t border-gray-200 dark:border-[#2a2a2a] py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-500 dark:text-gray-400 text-sm">
                    <p>© 2026 Edward Jomari Garcia. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
