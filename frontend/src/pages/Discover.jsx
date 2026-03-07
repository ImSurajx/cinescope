import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"
import MovieCard from "../components/movie/MovieCard"

function Discover() {
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
            Explore trending and popular movies
          </p>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          <MovieCard
            title="Inception"
            year="2010"
            rating="8.8"
            image="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
          />

          <MovieCard
            title="Interstellar"
            year="2014"
            rating="8.7"
            image="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
          />

          <MovieCard
            title="The Dark Knight"
            year="2008"
            rating="9.0"
            image="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
          />

          <MovieCard
            title="Dune"
            year="2021"
            rating="8.0"
            image="https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
          />

          <MovieCard
            title="Blade Runner 2049"
            year="2017"
            rating="8.0"
            image="https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
          />

        </div>

      </div>

      <Footer />
      <BottomNav />
    </>
  )
}

export default Discover