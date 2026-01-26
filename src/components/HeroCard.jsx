export default function HeroCard() {
    return (
        <div className="md:col-span-2 md:row-span-2 bg-zinc-900 rounded-3xl p-8 border border-zinc-800 flex flex-col justify-between">
            <div className="inline-flex items-center gap-2 text-sm text-gray-400 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 w-fit">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span>Available for work</span>
            </div>
            <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Edward</span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
                    A passionate developer crafting digital experience<br />
                    with clean code and creative design.
                </p>
            </div>
            <div className="flex gap-3">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition-colors font-medium flex items-center gap-2">
                    About Me
                    <svg className="w-4 h-4 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </button>
                <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors font-medium border border-white/20">
                    Get in Touch
                </button>
            </div>
        </div>
    );
}