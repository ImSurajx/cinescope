function MovieActions() {
    return (
        <div className="px-6 py-4 flex flex-wrap gap-4">

            <button className="flex-1 sm:flex-none min-w-[160px] flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl">
                ▶ Watch Trailer
            </button>

            <button className="flex-1 sm:flex-none min-w-[160px] flex items-center justify-center gap-2 bg-slate-800 text-slate-100 font-bold py-3 px-6 rounded-xl">
                ❤ Add to Favorites
            </button>

            <button className="flex items-center justify-center p-3 rounded-xl bg-slate-800 text-slate-300">
                🔗
            </button>

        </div>
    )
}

export default MovieActions