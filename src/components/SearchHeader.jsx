function SearchHeader({ query = "Inception" }) {
    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-accent-dark px-4 py-3">
            <div className="max-w-7xl mx-auto flex flex-col gap-4">

                {/* Top bar */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            movie_filter
                        </span>
                        <h1 className="text-xl font-bold tracking-tight">CineScope</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-accent-dark transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>

                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                            <span className="material-symbols-outlined text-primary text-sm">
                                person
                            </span>
                        </div>
                    </div>
                </div>

                {/* Search Input */}
                <div className="relative w-full">

                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400">
                            search
                        </span>
                    </div>

                    <input
                        className="block w-full pl-11 pr-12 py-3 bg-slate-800 text-white placeholder-slate-400 border-none rounded-xl focus:ring-2 focus:ring-primary text-base font-medium"
                        placeholder="Search movies, actors, directors..."
                        type="text"
                        defaultValue={query}
                    />

                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-background-dark text-slate-400">
                            <span className="material-symbols-outlined">cancel</span>
                        </button>
                    </div>

                </div>

                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">

                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 text-sm font-semibold">
                        All Results
                    </button>

                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-800 border border-slate-700 px-5 text-sm font-medium text-slate-200 hover:bg-slate-700">
                        Movies
                    </button>

                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-800 border border-slate-700 px-5 text-sm font-medium text-slate-200 hover:bg-slate-700">
                        TV Shows
                    </button>

                    <button className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-800 border border-slate-700 px-5 text-sm font-medium text-slate-200 hover:bg-slate-700">
                        Cast & Crew
                    </button>
                </div>

            </div>
        </header>
    )
}

export default SearchHeader