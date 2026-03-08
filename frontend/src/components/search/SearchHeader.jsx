import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

function SearchHeader({ query = "" }) {

    const navigate = useNavigate()
    const [params] = useSearchParams()

    const type = params.get("type") || "all"

    const [search, setSearch] = useState(query)

    useEffect(() => {

        const timer = setTimeout(() => {

            if (!search.trim()) {
                navigate("/search", { replace: true })
                return
            }

            navigate(`/search?q=${search}&type=${type}`, { replace: true })

        }, 500)

        return () => clearTimeout(timer)

    }, [search, type])



    function changeFilter(newType) {
        navigate(`/search?q=${search}&type=${newType}`)
    }


    return (
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-accent-dark px-4 py-3">
            <div className="max-w-7xl mx-auto flex flex-col gap-4">

                {/* Top bar */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            movie_filter
                        </span>
                        <Link to="/" className="text-xl font-bold tracking-tight">CineScope</Link>
                    </div>

                    <Link to="/profile" className="hidden md:block h-8 w-8 rounded-full bg-primary/20 border border-primary/30 overflow-hidden">
                        <img
                            alt="Profile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP6KWn50pnStxFK-5hLZQRhAqegw-OK2vPFZT2IwFpAAMG4svl-ort-mtL-cINJaXYuqS72ZfBq685qoDBlbLT6ArGEpgC9GxBFwHXvcvTENJXJwxZRimgXatEBI7aqT1OEO0kbYTzKXIb6D3w7-G6wQ-wEY_vbJ1pau4io0nZm3tJSoDwAshd9iA0-_umKUIylWp7dD1C2Cui5vbWWVri7XUV-GgxOxO7YRqVZNbXd8RY_teYQ4mCcnsAO3CWjDt97yChy9_hx5iu"
                        />
                    </Link>
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            type="button"
                            onClick={() => setSearch("")}
                            className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-background-dark text-slate-400"
                        >
                            <span className="material-symbols-outlined">cancel</span>
                        </button>
                    </div>

                </div>


                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">

                    <button
                        onClick={() => changeFilter("all")}
                        className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-semibold
                        ${type === "all"
                                ? "bg-primary text-white"
                                : "bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700"
                            }`}
                    >
                        All Results
                    </button>

                    <button
                        onClick={() => changeFilter("movie")}
                        className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-medium
                        ${type === "movie"
                                ? "bg-primary text-white"
                                : "bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700"
                            }`}
                    >
                        Movies
                    </button>

                    <button
                        onClick={() => changeFilter("tv")}
                        className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-medium
                        ${type === "tv"
                                ? "bg-primary text-white"
                                : "bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700"
                            }`}
                    >
                        TV Shows
                    </button>

                    <button
                        onClick={() => changeFilter("person")}
                        className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-medium
                        ${type === "person"
                                ? "bg-primary text-white"
                                : "bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700"
                            }`}
                    >
                        Cast & Crew
                    </button>

                </div>

            </div>
        </header>
    )
}

export default SearchHeader