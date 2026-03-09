import { useState, useEffect } from "react"
import { motion } from "framer-motion"

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

    // prevent repeated DB checks
    const [favoriteChecked, setFavoriteChecked] = useState(false)

    useEffect(() => {

        async function loadFavoriteState() {

            if (!user || !movie || favoriteChecked) return

            try {

                const exists = await checkFavorite(movie.id, user.id)
                setIsFavorite(exists)
                setFavoriteChecked(true)

            } catch (err) {

                console.error("Favorite check failed:", err)

            }

        }

        loadFavoriteState()

    }, [movie?.id, user])


    // reset check when movie changes
    useEffect(() => {
        setFavoriteChecked(false)
    }, [movie?.id])


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
        setIsFavorite(newState)

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
            <section className="relative w-full min-h-[600px] overflow-hidden pt-28 md:pt-32">

                {/* Background */}
                <motion.div
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center md:bg-top bg-no-repeat"
                    style={{ backgroundImage: `url(${backdrop})` }}
                >

                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/30 to-transparent"></div>

                </motion.div>


                <div className="relative max-w-7xl mx-auto px-4 flex flex-col justify-end pb-16">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6 max-w-4xl"
                    >

                        {/* Trending */}
                        <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                            <span className="material-symbols-outlined text-sm">
                                trending_up
                            </span>
                            Trending Now
                        </div>


                        {/* Layout */}
                        <div className="flex flex-col md:flex-row items-start gap-6">

                            {/* Poster */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="w-[150px] md:w-[200px] flex-shrink-0 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-md"
                            >

                                <img
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                            : "/no-poster.png"
                                    }
                                    alt={movie.title}
                                    className="w-full h-full object-cover"
                                />

                            </motion.div>


                            {/* Content */}
                            <div className="space-y-4">

                                <h2 className="text-3xl md:text-6xl font-black text-white leading-tight">
                                    {movie.title}
                                </h2>


                                <p className="text-base md:text-lg text-slate-300 line-clamp-3 max-w-xl">
                                    {movie.overview}
                                </p>


                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">

                                    <button
                                        onClick={handleTrailer}
                                        className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">
                                            play_arrow
                                        </span>
                                        Watch Trailer
                                    </button>


                                    <button
                                        onClick={handleFavorite}
                                        disabled={loadingFavorite}
                                        className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold border border-white/20 flex items-center justify-center gap-2"
                                    >

                                        <span
                                            className={`material-symbols-outlined ${isFavorite ? "text-red-500" : "text-white"}`}
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

                    </motion.div>

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