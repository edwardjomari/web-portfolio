export default function HeroCard() {
    return (
        <div className="md:col-span-2 md:row-span-2 bg-zinc-900 rounded-3xl p-8 border border-zinc-800 flex flex-col justify-between">
            <div className="flex items-start gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 animate-pulse"></div>
                <span>Available for work</span>
            </div>
            <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    Hi, I'm <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Your Name</span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed">
                    A passionate developer crafting digital experiences<br />
                    with clean code and creative design.
                </p>
            </div>
            <div className="flex gap-3">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl transition-colors font-medium flex items-center gap-2">
                    View Projects
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl transition-colors font-medium">
                    Get in Touch
                </button>
            </div>
        </div>
    );
}
