import { useNavigate } from 'react-router-dom';

export default function HeroCard() {
    const navigate = useNavigate();

    return (
        <div className="h-full bg-white dark:bg-[#1e1e1e] rounded-3xl p-6 sm:p-8 lg:p-6 border border-gray-200 dark:border-[#2a2a2a] flex flex-col justify-between gap-6 sm:gap-8 lg:gap-4 shadow-sm opacity-90 hover:opacity-100 transition-all ease-out duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            <div className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 font-medium bg-transparent rounded-full px-4 py-2 border border-gray-300 dark:border-[#3a3a3a] w-fit">
                <div className="w-2 h-2 bg-green-600 dark:bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Available for work</span>
            </div>
            <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent">Edward</span>
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-lg leading-relaxed font-medium">
                    A passionate developer crafting digital experience<br />
                    with clean code and creative design.
                </p>
            </div>
            <div className="flex gap-3 flex-wrap">
                <button
                    onClick={() => navigate('/about')}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition-colors font-medium flex items-center gap-2"
                >
                    About Me
                    <svg className="w-4 h-4 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </button>
                <a
                    href="/Garcia_Resume.pdf"
                    download="Garcia_Resume.pdf"
                    className="bg-transparent hover:bg-blue-600 dark:hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-full transition-all duration-300 font-medium border border-gray-300 dark:border-[#3a3a3a] text-gray-800 dark:text-gray-200 flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                </a>
            </div>
        </div>
    );
}