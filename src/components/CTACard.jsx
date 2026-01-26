export default function CTACard() {
    return (
        <div className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-teal-900/40 to-emerald-900/40 rounded-3xl p-8 border border-zinc-800 flex items-center justify-between">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Let's work together</h3>
                <p className="text-gray-400">Have a project in mind? I'd love to hear about it.</p>
            </div>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition-colors font-medium whitespace-nowrap flex items-center gap-2">
                Send a Message
            </button>
        </div>
    );
}
