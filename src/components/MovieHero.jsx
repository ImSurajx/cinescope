function MovieHero({ title, rating, year, runtime, genres, backdrop, poster }) {
    return (
        <div className="relative w-full h-[450px]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{   backgroundImage: `url(${backdrop || "https://via.placeholder.com/1920x1080"})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col md:flex-row gap-6 items-end">

                <div className="relative shrink-0 hidden sm:block">
                    <img
                        className="w-40 h-60 object-cover rounded-xl shadow-2xl border-2 border-primary/20"
                        src={poster}
                        alt={title}
                    />
                </div>

                <div className="flex-1 space-y-3">

                    <div className="flex flex-wrap gap-2">
                        {genres.map((genre, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-[10px] font-bold uppercase"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-slate-100">
                        {title}
                    </h1>

                    <div className="flex items-center gap-4 text-sm text-slate-300">

                        <div className="flex items-center gap-1">
                            ⭐
                            <span className="font-bold text-slate-100">{rating}</span>
                            <span className="text-slate-400">/10</span>
                        </div>

                        <span className="w-1 h-1 rounded-full bg-slate-500" />
                        <span>{runtime}</span>

                        <span className="w-1 h-1 rounded-full bg-slate-500" />
                        <span>{year}</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieHero