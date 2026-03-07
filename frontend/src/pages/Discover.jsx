import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"
import MovieCard from "../components/movie/MovieCard"

function Discover() {
    return (
        <>
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

                {/* Page Header */}
                <header className="py-8">
                    <h1 className="text-3xl font-bold mb-6">
                        Discover Movies
                    </h1>
                </header>

                {/* Filters */}
                {/* keep your filter buttons here */}

                {/* Movies Grid */}
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">

                    <MovieCard
                        title="Interstellar"
                        year="2014"
                        rating="8.7"
                        image="https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
                    />

                    <MovieCard
                        title="The Dark Knight"
                        year="2008"
                        rating="9.0"
                        image="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                    />

                </section>

            </main>

            <Footer />
            <BottomNav />
        </>
    )
}

export default Discover