export default function CTACard() {
    return (
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-6 sm:p-8 border border-blue-600 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm opacity-90 hover:opacity-100 transition-all ease-out duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Let's work together</h3>
                <p className="text-blue-100">Have a project in mind? I'd love to hear about it.</p>
            </div>
            <button className="bg-white hover:bg-blue-50 text-blue-600 px-6 py-3 rounded-full transition-colors font-medium whitespace-nowrap flex items-center gap-2">
                Send a Message
            </button>
        </div>
    );
}
