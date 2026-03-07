function WatchHistoryCard({ title, image, progress }) {
    return (
        <div className="flex flex-col gap-2 group shrink-0 w-[190px]">

            {/* Poster */}
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-slate-800">

                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Progress */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black/50">
                    <div
                        className="h-full bg-primary"
                        style={{ width: `${progress}%` }}
                    />
                </div>

            </div>

            {/* Title */}
            <h3 className="text-sm font-bold truncate">
                {title}
            </h3>

        </div>
    )
}

export default WatchHistoryCard