function MovieRow({ title, children }) {
    return (
        <section className="mt-12 px-4 max-w-7xl mx-auto">

            {/* Row Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    {title}
                </h3>

                <a
                    className="text-primary text-sm font-semibold hover:underline"
                    href="#"
                >
                    View All
                </a>
            </div>

            {/* Movie List */}
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">
                {children}
            </div>

        </section>
    )
}

export default MovieRow