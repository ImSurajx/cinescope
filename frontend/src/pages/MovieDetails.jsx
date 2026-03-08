import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {
    fetchMovieDetails,
    fetchMovieCredits,
    fetchSimilarMovies,
    fetchRecommendedMovies
} from "../services/tmdbApi"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"

import HeroBanner from "../components/movie/HeroBanner";
import MovieActions from "../components/movie/MovieActions"
import PlotSummary from "../components/movie/PlotSummary"

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

    async function loadMovie() {

        try {

            setLoading(true)

            const [movieData, castData, similarData, recommendedData] = await Promise.all([
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

    }

    useEffect(() => {
        loadMovie()
    }, [id])


    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center text-white">
                    <span className="animate-pulse text-lg font-bold">
                        Loading Movie...
                    </span>
                </div>
            </>
        )
    }


    return (
        <>
            <Navbar />

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

                {/* Hero */}
                <HeroBanner movie={movie} />

                {/* Container same as Home HeroBanner */}
                <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">

                    <section className="mt-12 px-4 max-w-7xl mx-auto">

                        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">

                            {cast.map(actor => (
                                <CastCard
                                    key={actor.id}
                                    name={actor.name}
                                    character={actor.character}
                                    image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                />
                            ))}

                        </div>

                    </section>

                </div>


                {/* Movie rows remain full width like Home */}
                <main className="max-w-7xl mx-auto px-4 space-y-10">

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


                    <MovieRow title="Recommend">

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

                </main>

                <Footer />
                <BottomNav />

            </div>
        </>
    )
}

export default MovieDetails