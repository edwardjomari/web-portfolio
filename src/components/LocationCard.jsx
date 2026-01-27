export default function LocationCard() {
    return (
        <div className="col-span-1 bg-white rounded-3xl p-6 border border-gray-200 flex flex-col justify-between shadow-sm opacity-90 hover:opacity-100 transition-all ease-out duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            <div>
                <div className="flex items-start gap-2 text-gray-700 text-sm font-medium mb-3">
                    <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Location</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Guiguinto, Bulacan, Philippines</h3>
            </div>
            <p className="text-gray-600 text-sm font-medium">Open to remote opportunities worldwide</p>
        </div>
    );
}