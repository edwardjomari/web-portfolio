export default function TechStackCard() {
    const technologies = ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'React', 'Node.js', 'Express.js', 'Next.js', 'PHP', 'Laravel', 'MySQL', 'Firebase', 'Git', 'GitHub'];

    return (
        <div className="col-span-1 sm:row-span-2 lg:col-span-1 bg-white dark:bg-[#1e1e1e] rounded-3xl p-6 lg:p-5 border border-gray-200 dark:border-[#2a2a2a] flex flex-col justify-between gap-4 sm:gap-6 lg:gap-4 shadow-sm opacity-90 hover:opacity-100 transition-all ease-out duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-gray-700 dark:text-gray-300 text-sm font-medium">Tech Stack</h3>
                    <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-emerald-400 transition-colors text-sm">
                        View All
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                    {technologies.map((tech) => (
                        <div key={tech} className="bg-transparent hover:bg-blue-600 dark:hover:bg-emerald-600 hover:text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border border-gray-300 dark:border-[#3a3a3a] text-gray-800 dark:text-gray-200">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Always learning and exploring new technologies
            </p>
        </div>
    );
}