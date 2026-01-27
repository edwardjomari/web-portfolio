export default function HeroCard() {
    return (
        <div className="col-span-1 sm:col-span-2 sm:row-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 flex flex-col justify-between gap-6 sm:gap-8 shadow-sm opacity-90 hover:opacity-100 transition-all ease-out duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            <div className="inline-flex items-center gap-2 text-sm text-gray-700 font-medium bg-transparent rounded-full px-4 py-2 border border-gray-300 w-fit">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                <span>Available for work</span>
            </div>
            <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Edward</span>
                </h1>
                <p className="text-gray-700 text-base md:text-lg max-w-lg leading-relaxed font-medium">
                    A passionate developer crafting digital experience<br />
                    with clean code and creative design.
                </p>
            </div>
            <div className="flex gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors font-medium flex items-center gap-2">
                    About Me
                    <svg className="w-4 h-4 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-full transition-colors font-medium border border-gray-300">
                    Get in Touch
                </button>
            </div>
        </div>
    );
}