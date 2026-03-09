import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { pageMotion } from "../animations/pageMotion"

import SkeletonCard from "../components/ui/SkeletonCard"

import {
    fetchTrendingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchTrendingTV
} from "../services/tmdbApi"

import Navbar from "../components/layout/Navbar"
import HeroBanner from "../components/movie/HeroBanner"
import MovieCard from "../components/movie/MovieCard"
import MovieRow from "../components/movie/MovieRow"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"

function Home() {

    const [trending, setTrending] = useState([])
    const [popular, setPopular] = useState([])
    const [topRated, setTopRated] = useState([])
    const [tvShows, setTvShows] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadMovies() {

            setLoading(true)

            try {

                const trendingData = await fetchTrendingMovies()
                const popularData = await fetchPopularMovies()
                const topRatedData = await fetchTopRatedMovies()
                const tvData = await fetchTrendingTV()

                setTrending(trendingData)
                setPopular(popularData)
                setTopRated(topRatedData)
                setTvShows(tvData)

            } catch (error) {

                console.error("API Error:", error)

            } finally {

                setLoading(false)

            }

        }

        loadMovies()

    }, [])


    return (

        <motion.div
            variants={pageMotion}
            initial="initial"
            animate="animate"
            exit="exit"
        >

            <Navbar />

            <main className="pb-24">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <HeroBanner movie={trending?.[0]} />
                </motion.div>


                {/* Trending */}
                <MovieRow title="Trending Now">

                    {loading
                        ? Array.from({ length: 10 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))
                        : trending.map(movie => (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.release_date?.slice(0, 4)}
                                rating={movie.vote_average?.toFixed(1)}
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                        ))
                    }

                </MovieRow>


                {/* Popular */}
                <MovieRow title="Popular Movies">

                    {loading
                        ? Array.from({ length: 10 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))
                        : popular.map(movie => (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.release_date?.slice(0, 4)}
                                rating={movie.vote_average?.toFixed(1)}
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                        ))
                    }

                </MovieRow>


                {/* Top Rated */}
                <MovieRow title="Top Rated Movies">

                    {loading
                        ? Array.from({ length: 10 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))
                        : topRated.map(movie => (
                            <MovieCard
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                year={movie.release_date?.slice(0, 4)}
                                rating={movie.vote_average?.toFixed(1)}
                                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                        ))
                    }

                </MovieRow>


                {/* TV Shows */}
                <MovieRow title="Top TV Shows">

                    {loading
                        ? Array.from({ length: 10 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))
                        : tvShows.map(show => (
                            <MovieCard
                                key={show.id}
                                id={show.id}
                                title={show.name}
                                year={show.first_air_date?.slice(0, 4)}
                                rating={show.vote_average?.toFixed(1)}
                                image={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                            />
                        ))
                    }

                </MovieRow>

            </main>

            <Footer />
            <BottomNav />

        </motion.div>

    )

}

export default Home