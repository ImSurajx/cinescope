function SkeletonCard() {
  return (
    <div className="shrink-0 w-[170px] md:w-[190px] animate-pulse">

      {/* Poster Skeleton */}
      <div className="aspect-[2/3] rounded-xl bg-slate-800"></div>

      {/* Text Skeleton */}
      <div className="mt-2 space-y-2">

        <div className="h-4 bg-slate-700 rounded w-3/4"></div>

        <div className="h-3 bg-slate-700 rounded w-1/3"></div>

      </div>

    </div>
  )
}

export default SkeletonCard