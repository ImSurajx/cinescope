function WatchHistoryCard({ title, year, image, progress }) {
  return (
    <div className="flex flex-col gap-2 group">

      {/* Poster */}
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-slate-800">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

      </div>

      {/* Movie Info */}
      <div>

        <h3 className="font-bold text-sm truncate">
          {title}
        </h3>

        <div className="text-xs text-slate-400 mt-1">
          {year}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
          <div
            className="bg-primary h-full"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

    </div>
  )
}

export default WatchHistoryCard