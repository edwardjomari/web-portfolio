export default function ExperienceCard() {
    const experiences = [
        {
            title: "Software Engineer Intern",
            company: "Argon Software Development Service",
            year: "2025",
            current: true
        },
        {
            title: "BS Information Technology",
            company: "National University Baliwag",
            year: "2022"
        },
        {
            title: "Information and Communication Technology",
            company: "Jesus Is Lord Colleges Foundation, Inc.",
            year: "2019"
        }
    ];

    return (
        <div className="md:col-span-1 md:row-span-3 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                <div className="bg-emerald-500/10 p-2 rounded-full">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <span>Experience</span>
            </div>

            <div className="space-y-6 overflow-y-auto flex-1 pr-2 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative flex gap-4">
                        <div className="flex flex-col items-center">
                            <div className={`w-2 h-2 rounded-full mt-2 ${exp.current ? 'bg-emerald-500' : 'bg-gray-600'}`}></div>
                            {index !== experiences.length - 1 && (
                                <div className="w-px h-full bg-gray-800 mt-1"></div>
                            )}
                        </div>

                        <div className="flex-1 pb-2">
                            <h3 className="text-white font-semibold text-base mb-1">
                                {exp.title}
                            </h3>
                            <p className="text-emerald-500 text-sm mb-1">{exp.company}</p>
                            <p className="text-gray-500 text-xs">{exp.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}