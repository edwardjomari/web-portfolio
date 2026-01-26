export default function TechStackCard() {
    const technologies = ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Next.js', 'MySQL'];

    return (
        <div className="md:col-span-1 md:row-span-2 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-between">
            <div>
                <h3 className="text-gray-400 text-sm mb-6">Tech Stack</h3>
                <div className="flex flex-row flex-wrap gap-3">
                    {technologies.map((tech) => (
                        <div key={tech} className="bg-white/10 backdrop-blur-md hover:bg-white/20 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border border-white/20">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-gray-500 text-sm">
                Always learning and exploring new technologies
            </p>
        </div>
    );
}