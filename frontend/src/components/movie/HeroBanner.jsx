import { useState, useEffect } from "react"
import { fetchMovieTrailer } from "../../services/tmdbApi"
import TrailerModal from "./TrailerModal"
import { useAuth } from "../../context/AuthContext"
import { addFavorite, removeFavorite, checkFavorite } from "../../services/favoritesApi"

function HeroBanner({ movie }) {

    const { user } = useAuth()

    const [trailerKey, setTrailerKey] = useState(null)
    const [showTrailer, setShowTrailer] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [loadingFavorite, setLoadingFavorite] = useState(false)

    useEffect(() => {

        async function loadFavoriteState() {

            if (!user || !movie) return

            try {

                const exists = await checkFavorite(movie.id, user.id)
                setIsFavorite(exists)

            } catch (err) {

                console.error("Favorite check failed:", err)

            }

        }

        loadFavoriteState()

    }, [movie?.id, user])


    if (!movie) return null


    const backdrop = movie.backdrop_path
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : ""


    async function handleTrailer() {

        if (showTrailer || !movie) return

        try {

            const key = await fetchMovieTrailer(movie.id)

            if (key) {
                setTrailerKey(key)
                setShowTrailer(true)
            }

        } catch (err) {

            console.error("Trailer fetch failed:", err)

        }

    }


    async function handleFavorite() {

        if (!user || !movie) return

        if (loadingFavorite) return

        setLoadingFavorite(true)

        const newState = !isFavorite
        setIsFavorite(newState) // optimistic UI

        try {

            if (newState) {

                await addFavorite(movie, user)

            } else {

                await removeFavorite(movie.id, user.id)

            }

        } catch (err) {

            console.error("Favorite action failed:", err)

            setIsFavorite(!newState)

        } finally {

            setLoadingFavorite(false)

        }

    }


    return (
        <>
            <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backdrop})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/20 to-transparent"></div>
                </div>

                <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-12">

                    <div className="max-w-2xl space-y-4">

                        <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                            <span className="material-symbols-outlined text-sm">
                                trending_up
                            </span>
                            Trending Now
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            {movie.title}
                        </h2>

                        <p className="text-lg text-slate-300 line-clamp-3">
                            {movie.overview}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">

                            <button
                                onClick={handleTrailer}
                                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2"
                            >
                                <span className="material-symbols-outlined">
                                    play_arrow
                                </span>
                                Watch Trailer
                            </button>

                            <button
                                onClick={handleFavorite}
                                disabled={loadingFavorite}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold border border-white/20 flex items-center gap-2 transition-all"
                            >

                                <span
                                    className={`material-symbols-outlined transition-all duration-200 ${isFavorite ? "text-red-500 scale-110" : "text-white"
                                        }`}
                                    style={{
                                        fontVariationSettings: `'FILL' ${isFavorite ? 1 : 0}`
                                    }}
                                >
                                    favorite
                                </span>

                                {isFavorite ? "Remove Favorite" : "Add to Favorites"}

                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {showTrailer && (
                <TrailerModal
                    videoKey={trailerKey}
                    onClose={() => setShowTrailer(false)}
                />
            )}

        </>
    )

}

export default HeroBanner