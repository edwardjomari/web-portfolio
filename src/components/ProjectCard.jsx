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
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm opacity-90 hover:opacity-100 transition-all ease-out duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                    <div className="bg-blue-600/10 p-2 rounded-full">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                    </div>
                    <span>Recent Projects</span>
                </div>
                <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 transition-colors text-sm">
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
                        className="bg-transparent rounded-2xl p-4 border border-gray-300 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 cursor-pointer group"
                    >
                        <h3 className="text-gray-900 font-semibold text-base mb-2 group-hover:text-white transition-colors duration-300">
                            {project.name}
                        </h3>
                        <p className="text-gray-700 text-sm font-medium mb-3 group-hover:text-white transition-colors duration-300">
                            {project.description}
                        </p>
                        <p className="text-gray-600 text-xs font-mono font-medium group-hover:text-blue-100 transition-colors duration-300">
                            {project.url}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}