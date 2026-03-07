import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"

import MovieCard from "../components/movie/MovieCard"

function Favorites() {
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

                        <button className="border-b-2 border-primary text-primary pb-3 pt-4 text-sm font-bold uppercase tracking-wider">
                            Movies
                        </button>

                        <button className="border-b-2 border-transparent text-slate-400 hover:text-primary pb-3 pt-4 text-sm font-bold uppercase tracking-wider">
                            TV Shows
                        </button>

                        <button className="border-b-2 border-transparent text-slate-400 hover:text-primary pb-3 pt-4 text-sm font-bold uppercase tracking-wider">
                            Actors
                        </button>

                        <button className="border-b-2 border-transparent text-slate-400 hover:text-primary pb-3 pt-4 text-sm font-bold uppercase tracking-wider">
                            Watchlist
                        </button>

                    </div>
                </nav>


                {/* Favorites Grid */}
                <main className="flex-1 pb-16 pt-16">
                    <div className="max-w-7xl mx-auto px-4">

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                            <MovieCard
                                title="Inception"
                                year="2010"
                                rating="8.8"
                                image="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
                                showFavorite
                            />

                            <MovieCard
                                title="The Dark Knight"
                                year="2008"
                                rating="9.0"
                                image="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                            />

                            <MovieCard
                                title="Interstellar"
                                year="2014"
                                rating="8.7"
                                image="https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
                            />

                            <MovieCard
                                title="The Godfather"
                                year="1972"
                                rating="9.2"
                                image="https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
                            />

                            <MovieCard
                                title="Blade Runner 2049"
                                year="2017"
                                rating="8.0"
                                image="https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
                            />

                            <MovieCard
                                title="Dune"
                                year="2021"
                                rating="8.0"
                                image="https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
                            />

                        </div>

                    </div>
                </main>


                <Footer />
                <BottomNav />

            </div>
        </>
    )
}

export default Favorites