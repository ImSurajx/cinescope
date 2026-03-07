function MovieCard({ title, year, rating, image }) {
    return (
        <div className="flex-none w-40 md:w-48 group cursor-pointer">
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={image}
                    alt={title}
                />

                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] fill-1">
                        star
                    </span>
                    {rating}
                </div>
            </div>

            <h4 className="font-bold text-sm truncate">{title}</h4>
            <p className="text-xs text-slate-500">{year}</p>
        </div>
    )
}

export default MovieCard