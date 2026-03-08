import { useEffect, useState } from "react"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"
import MovieCard from "../components/movie/MovieCard"

import {
  fetchPopularMovies,
  fetchUpcomingMovies
} from "../services/tmdbApi"

function Discover() {

  const [popular, setPopular] = useState([])
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {

    async function loadDiscover() {

      try {

        const [popularData, upcomingData] = await Promise.all([
          fetchPopularMovies(),
          fetchUpcomingMovies()
        ])

        setPopular(popularData)
        setUpcoming(upcomingData)

      } catch (error) {

        console.error("Discover API Error:", error)

      }

    }

    loadDiscover()

  }, [])


  return (
    <>
      <Navbar />

      <div className="min-h-screen px-4 md:px-8 py-8 max-w-7xl mx-auto">

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            Discover Movies
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Explore trending and upcoming movies
          </p>
        </div>


        {/* Popular Movies */}
        <div className="mb-12">

          <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
            Popular Movies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

            {popular.map(movie => (

              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.release_date?.slice(0, 4)}
                rating={movie.vote_average?.toFixed(1)}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />

            ))}

          </div>

        </div>


        {/* Upcoming Movies */}
        <div>

          <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
            Upcoming Movies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

            {upcoming.map(movie => (

              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.release_date?.slice(0, 4)}
                rating={movie.vote_average?.toFixed(1)}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />

            ))}

          </div>

        </div>

      </div>

      <Footer />
      <BottomNav />
    </>
  )
}

export default Discover