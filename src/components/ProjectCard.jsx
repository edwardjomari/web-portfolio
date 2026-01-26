export default function ProjectCard() {
    const projects = [
        {
            name: "CodeCred",
            description: "Online certifications for programmers",
            url: "codecred.dev"
        },
        {
            name: "BASE404",
            description: "Online coding bootcamp",
            url: "base-404.com"
        },
        {
            name: "DIIN.PH",
            description: "AI-powered wardrobe assistant",
            url: "diin.ph"
        },
        {
            name: "DYNAMIS Workout Tracker",
            description: "AI-powered workout tracker",
            url: "dynamis-app.online"
        }
    ];

    return (
        <div className="md:col-span-3 md:row-span-1 bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="bg-emerald-500/10 p-2 rounded-full">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                    </div>
                    <span className="text-white font-bold text-lg">Recent Projects</span>
                </div>
                <button className="flex items-center gap-1 text-gray-400 hover:text-emerald-500 transition-colors text-sm">
                    View All
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700 hover:border-emerald-500/50 transition-colors cursor-pointer"
                    >
                        <h3 className="text-white font-semibold text-base mb-2">
                            {project.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">
                            {project.description}
                        </p>
                        <p className="text-gray-500 text-xs font-mono">
                            {project.url}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}