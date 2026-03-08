function MovieHero({
    title,
    rating,
    year,
    runtime,
    genres,
    backdrop,
    poster
}) {

    return (
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">

            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backdrop})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/20 to-transparent"></div>
            </div>

            {/* Content container (same as HeroBanner) */}
            <div className="relative h-full max-w-7xl mx-auto px-4 flex items-end pb-12">

                <div className="flex gap-8 items-end">

                    {/* Poster */}
                    <img
                        src={poster}
                        alt={title}
                        className="w-40 md:w-52 rounded-xl shadow-2xl hidden md:block"
                    />

                    {/* Movie Info */}
                    <div className="max-w-2xl space-y-4">

                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            {title}
                        </h1>

                        <div className="flex items-center gap-4 text-slate-300 text-sm font-semibold">

                            <span className="text-primary font-bold">
                                ⭐ {rating}
                            </span>

                            <span>{year}</span>

                            <span>{runtime}</span>

                        </div>

                        <div className="flex flex-wrap gap-2">

                            {genres?.map((g, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white"
                                >
                                    {g}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default MovieHero