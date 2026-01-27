export default function TechStackCard() {
    const technologies = ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'MySQL'];

    return (
        <div className="col-span-1 sm:row-span-2 lg:col-span-1 bg-white dark:bg-[#1e1e1e] rounded-3xl p-6 lg:p-5 border border-gray-200 dark:border-[#2a2a2a] flex flex-col justify-between gap-4 sm:gap-6 lg:gap-4 shadow-sm opacity-90 hover:opacity-100 transition-all ease-out duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            <div>
                <h3 className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-6">Tech Stack</h3>
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