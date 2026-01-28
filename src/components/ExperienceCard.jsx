export default function ExperienceCard() {
    const experiences = [
        {
            title: "Software Engineer Intern",
            company: "Argon Software Development Service",
            year: "November 2025 - Present",
            current: true
        },
        {
            title: "BS Information Technology",
            company: "National University Baliwag",
            year: "2022 - 2026"
        },
        {
            title: "Information and Communication Technology",
            company: "Jesus Is Lord Colleges Foundation, Inc.",
            year: "2019 - 2021"
        }
    ];

    return (
        <div className="h-full bg-white dark:bg-[#1e1e1e] rounded-3xl p-6 lg:p-5 border border-gray-200 dark:border-[#2a2a2a] flex flex-col shadow-sm opacity-90 hover:opacity-100 transition-all ease-out duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm font-medium mb-5 lg:mb-4">
                <div className="bg-blue-600/10 dark:bg-emerald-500/20 p-2 rounded-full">
                    <svg className="w-5 h-5 text-blue-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <span>Experience</span>
            </div>

            <div className="flex-1 pr-2">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative flex gap-4 group pb-5 lg:pb-4 last:pb-0">
                        <div className="flex flex-col items-center relative">
                            {index !== experiences.length - 1 && (
                                <div className="absolute w-0.5 bg-gray-200 dark:bg-[#3a3a3a] top-4 bottom-[-16px] lg:bottom-[-14px] left-1/2 -translate-x-1/2"></div>
                            )}
                            <div className={`w-3 h-3 rounded-full mt-2 relative z-10 transition-all duration-300 ring-4 ring-white dark:ring-[#1e1e1e] ${exp.current ? 'bg-blue-600 dark:bg-emerald-500' : 'bg-gray-300 dark:bg-gray-500 group-hover:bg-blue-600 dark:group-hover:bg-emerald-500'}`}></div>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-gray-900 dark:text-white font-semibold text-base leading-snug mb-1.5">
                                {exp.title}
                            </h3>
                            <p className="text-blue-600 dark:text-emerald-400 text-sm font-medium mb-1">{exp.company}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs font-medium tracking-wide">{exp.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}