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
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 lg:row-span-2 bg-white rounded-3xl p-6 border border-gray-200 flex flex-col shadow-sm opacity-90 hover:opacity-100 transition-all ease-out duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-6">
                <div className="bg-blue-600/10 p-2 rounded-full">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <span>Experience</span>
            </div>

            <div className="block flex-1 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative flex gap-4 group pb-6 last:pb-0">
                        <div className="flex flex-col items-center relative">
                            {index !== experiences.length - 1 && (
                                <div className="absolute w-px bg-gray-300 top-4 bottom-[-16px] left-1/2 -translate-x-1/2"></div>
                            )}
                            <div className={`w-3 h-3 rounded-full mt-2 relative z-10 transition-all duration-300 ${exp.current ? 'bg-blue-600' : 'bg-gray-300 group-hover:bg-blue-600'}`}></div>
                        </div>

                        <div className="flex-1 pb-2">
                            <h3 className="text-gray-900 font-semibold text-base mb-1">
                                {exp.title}
                            </h3>
                            <p className="text-blue-600 text-sm font-medium mb-1">{exp.company}</p>
                            <p className="text-gray-600 text-xs font-medium">{exp.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}