export default function LocationCard() {
    return (
        <div className="md:col-span-1 md:row-span-1 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 flex flex-col justify-between">
            <div>
                <div className="flex items-start gap-2 text-gray-400 text-sm mb-3">
                    <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Location</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Guiguinto, Bulacan, Philippines</h3>
            </div>
            <p className="text-gray-500 text-sm">Open to remote opportunities worldwide</p>
        </div>
    );
}