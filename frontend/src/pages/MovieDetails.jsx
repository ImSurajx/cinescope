import { useEffect, useState, useCallback } from "react"
import { useParams } from "react-router-dom"
import { addToWatchHistory } from "../services/watchHistoryApi"
import { useAuth } from "../context/AuthContext"

import {
    fetchMovieDetails,
    fetchMovieCredits,
    fetchSimilarMovies,
    fetchRecommendedMovies
} from "../services/tmdbApi"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"

import HeroBanner from "../components/movie/HeroBanner"

import CastCard from "../components/movie/CastCard"
import MovieRow from "../components/movie/MovieRow"
import MovieCard from "../components/movie/MovieCard"

function MovieDetails() {

    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState(null)
    const [cast, setCast] = useState([])
    const [similar, setSimilar] = useState([])
    const [recommended, setRecommended] = useState([])

    const { user } = useAuth()

    const loadMovie = useCallback(async () => {

        try {

            setLoading(true)

            const [
                movieData,
                castData,
                similarData,
                recommendedData
            ] = await Promise.all([
                fetchMovieDetails(id),
                fetchMovieCredits(id),
                fetchSimilarMovies(id),
                fetchRecommendedMovies(id)
            ])

            setMovie(movieData)
            setCast(castData?.slice(0, 10) || [])
            setSimilar(similarData?.slice(0, 10) || [])
            setRecommended(recommendedData?.slice(0, 10) || [])

        } catch (error) {

            console.error("MovieDetails API Error:", error)

        } finally {

            setLoading(false)

        }

    }, [id])


    useEffect(() => {
        loadMovie()
    }, [loadMovie])


    useEffect(() => {

        if (movie) {
            window.scrollTo(0, 0)
        }

    }, [movie])


    useEffect(() => {

        if (!movie || !user) return

        addToWatchHistory({
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path
        }, user)

    }, [movie, user])


    if (loading) {

        return (
            <>
                <Navbar />

                <div className="min-h-screen flex items-center justify-center">

                    <div className="flex flex-col items-center gap-4">

                        <div className="w-12 h-12 border-4 border-gray-700 border-t-red-500 rounded-full animate-spin"></div>

                        <p className="text-gray-400 text-sm">
                            Loading movie...
                        </p>

                    </div>

                </div>
            </>
        )

    }


    return (
        <>
            <Navbar />

            <main className="pb-24">

                <HeroBanner movie={movie} />


                {cast.length > 0 && (

                    <section className="mt-12 px-4 max-w-7xl mx-auto">

                        <h2 className="text-xl font-bold mb-6">
                            Cast
                        </h2>

                        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">

                            {cast.map(actor => (

                                <CastCard
                                    key={actor.id}
                                    name={actor.name}
                                    character={actor.character}
                                    image={
                                        actor.profile_path
                                            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                                            : null
                                    }
                                    fallbackLetter={actor.name?.charAt(0)}
                                />

                            ))}

                        </div>

                    </section>

                )}


                {similar.length > 0 && (

                    <MovieRow title="You Might Also Like">

                        {similar.map(movie => (

                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.release_date?.slice(0, 4)}
                                rating={movie.vote_average?.toFixed(1)}
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />

                        ))}

                    </MovieRow>

                )}


                {recommended.length > 0 && (

                    <MovieRow title="Recommendations">

                        {recommended.map(movie => (

                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.release_date?.slice(0, 4)}
                                rating={movie.vote_average?.toFixed(1)}
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />

                        ))}

                    </MovieRow>

                )}

            </main>

            <Footer />
            <BottomNav />
        </>
    )
}

export default MovieDetails