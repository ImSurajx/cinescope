import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"
import MovieCard from "../components/movie/MovieCard"

import { useAuth } from "../context/AuthContext"
import { getFavorites, removeFavorite } from "../services/favoritesApi"

import { useEffect, useState } from "react"

function Favorites() {

    const { user } = useAuth()

    const [favorites, setFavorites] = useState([])
    const [activeFilter, setActiveFilter] = useState("movie")
    const [visibleCount, setVisibleCount] = useState(10)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFavorites() {

            if (!user) {
                setLoading(false)
                return
            }

            try {

                const data = await getFavorites(user.id)
                setFavorites(data || [])

            } catch (err) {

                console.error("Failed to load favorites:", err)

            } finally {

                setLoading(false)

            }

        }

        loadFavorites()

    }, [user])


    useEffect(() => {
        setVisibleCount(10)
    }, [activeFilter])


    const filteredFavorites = favorites.filter((item) => {

        if (activeFilter === "movie") return item.type === "movie" || !item.type
        if (activeFilter === "tv") return item.type === "tv"
        if (activeFilter === "actor") return item.type === "actor"
        if (activeFilter === "watchlist") return item.type === "watchlist"

        return true

    })


    const visibleFavorites = filteredFavorites.slice(0, visibleCount)


    async function handleRemove(movieId) {

        if (!user) return

        try {

            await removeFavorite(movieId, user.id)

            setFavorites(prev =>
                prev.filter(item => item.movie_id !== movieId)
            )

        } catch (err) {

            console.error("Failed to remove favorite:", err)

        }

    }


    return (
        <>
            <Navbar />

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

                {/* Page Title */}
                <header className="border-b border-slate-800">
                    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                        <h1 className="text-xl font-bold tracking-tight">
                            My Favorites
                        </h1>
                    </div>
                </header>


                {/* Category Tabs */}
                <nav className="border-b border-slate-800 pb-3">
                    <div className="max-w-7xl mx-auto px-4 flex gap-8 overflow-x-auto no-scrollbar">

                        {["movie", "tv", "actor", "watchlist"].map(tab => (

                            <button
                                key={tab}
                                onClick={() => setActiveFilter(tab)}
                                className={`border-b-2 pb-3 pt-4 text-sm font-bold uppercase tracking-wider ${activeFilter === tab
                                        ? "border-primary text-primary"
                                        : "border-transparent text-slate-400 hover:text-primary"
                                    }`}
                            >
                                {tab === "movie" && "Movies"}
                                {tab === "tv" && "TV Shows"}
                                {tab === "actor" && "Actors"}
                                {tab === "watchlist" && "Watchlist"}

                            </button>

                        ))}

                    </div>
                </nav>


                {/* Favorites Section */}
                <main className="flex-1 pb-16 pt-16">

                    <div className="max-w-7xl mx-auto px-4">

                        {loading ? (

                            <div className="text-center py-20 text-slate-400">
                                Loading favorites...
                            </div>

                        ) : filteredFavorites.length === 0 ? (

                            <div className="text-center py-20 text-slate-400">
                                No favorites yet
                            </div>

                        ) : (

                            <>
                                {/* Favorites Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                                    {visibleFavorites.map(movie => (

                                        <MovieCard
                                            key={movie.movie_id}
                                            id={movie.movie_id}
                                            title={movie.title}
                                            image={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                                            showFavorite={true}
                                            onRemove={handleRemove}
                                        />

                                    ))}

                                </div>


                                {/* View More Button */}
                                {filteredFavorites.length > visibleCount && (

                                    <div className="mt-12 mb-20 flex justify-center">

                                        <button
                                            onClick={() => setVisibleCount(prev => prev + 10)}
                                            className="px-8 py-3 bg-slate-800 border border-slate-700 hover:bg-slate-700 rounded-full font-bold text-sm transition-all flex items-center gap-2 text-white"
                                        >
                                            <span className="material-symbols-outlined text-lg">
                                                expand_more
                                            </span>

                                            View More

                                        </button>

                                    </div>

                                )}

                            </>

                        )}

                    </div>

                </main>

                <Footer />
                <BottomNav />

            </div>
        </>
    )
}

export default Favorites