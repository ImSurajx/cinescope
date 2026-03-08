import { useEffect, useState } from "react"

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
    useEffect(() => {
        async function loadMovies() {
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
            }
        }

        loadMovies()
    }, [])
    return (
        <>
            {/* Sticky Header */}
            <Navbar />
            <main className="pb-24">
                {/* Hero Section */}
                <HeroBanner movie={trending[0]} />
                {/* Movie Row: Trending */}
                <MovieRow title="Trending Now">

                    {trending.map(movie => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            year={movie.release_date?.slice(0, 4)}
                            rating={movie.vote_average?.toFixed(1)}
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        />
                    ))}

                </MovieRow>
                {/* Movie Row: Popular */}
                <MovieRow title="Popular Movies">

                    {popular.map(movie => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            year={movie.release_date?.slice(0, 4)}
                            rating={movie.vote_average?.toFixed(1)}
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        />
                    ))}

                </MovieRow>
                {/* Movie Row: Top Rated */}
                <MovieRow title="Top Rated Movies">

                    {topRated.map(movie => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            year={movie.release_date?.slice(0, 4)}
                            rating={movie.vote_average?.toFixed(1)}
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        />
                    ))}

                </MovieRow>
                {/* TV Shows Section */}
                <MovieRow title="Top TV Shows">

                    {tvShows.map(show => (
                        <MovieCard
                            key={show.id}
                            title={show.name}
                            year={show.first_air_date?.slice(0, 4)}
                            rating={show.vote_average?.toFixed(1)}
                            image={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                        />
                    ))}

                </MovieRow>
            </main>
            {/* Footer */}
            <Footer />
            {/* Mobile Bottom Navigation */}
            <BottomNav />
        </>

    )
}

export default Home