function MovieCard({ title, year, rating, image, showFavorite = false }) {
  return (
    <div className="flex flex-col gap-2 group shrink-0 w-full max-w-[190px]">

      {/* Poster */}
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-slate-800">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Rating */}
        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md text-xs flex items-center gap-1 text-white">
          ⭐ {rating}
        </div>

        {showFavorite && (
          <button className="absolute top-2 right-2 flex items-center justify-center w-9 h-9 rounded-full bg-black/70 border border-slate-600 backdrop-blur-md text-primary hover:bg-primary hover:text-white transition-all shadow-lg">
            <span className="material-symbols-outlined material-symbols-fill text-[20px]">
              favorite
            </span>
          </button>
        )}

      </div>

      {/* Info */}
      <div>
        <h3 className="font-bold text-sm truncate">{title}</h3>
        <div className="text-xs text-slate-400 mt-1">{year}</div>
      </div>

    </div>
  )
}

export default MovieCard