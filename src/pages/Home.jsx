import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import MovieCard from "../components/MovieCard";
import MovieRow from "../components/MovieRow";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
function Home() {
    return (
        <>
            {/* Sticky Header */}
            <Navbar />
            <main className="pb-24">
                {/* Hero Section */}
                <HeroBanner />
                {/* Movie Row: Trending */}
                <MovieRow title="Trending Now">

                    <MovieCard
                        title="Oppenheimer"
                        year="2023"
                        rating="8.4"
                        image="https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
                    />

                    <MovieCard
                        title="Fast X"
                        year="2023"
                        rating="7.2"
                        image="https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
                    />

                    <MovieCard
                        title="The Creator"
                        year="2023"
                        rating="7.1"
                        image="https://image.tmdb.org/t/p/w500/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg"
                    />

                </MovieRow>
                {/* Movie Row: Popular */}
                <MovieRow title="Popular Movies">

                    <MovieCard
                        title="John Wick 4"
                        year="2023"
                        rating="7.9"
                        image="https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
                    />

                    <MovieCard
                        title="The Batman"
                        year="2022"
                        rating="8.2"
                        image="https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
                    />

                    <MovieCard
                        title="Dune"
                        year="2021"
                        rating="8.0"
                        image="https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
                    />

                    <MovieCard
                        title="Top Gun Maverick"
                        year="2022"
                        rating="8.3"
                        image="https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
                    />

                </MovieRow>
                {/* TV Shows Section */}
                <MovieRow title="Top TV Shows">

                    <MovieCard
                        title="The Last of Us"
                        year="2023"
                        rating="8.8"
                        image="https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
                    />

                    <MovieCard
                        title="Succession"
                        year="2023"
                        rating="8.7"
                        image="https://image.tmdb.org/t/p/w500/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg"
                    />

                    <MovieCard
                        title="Stranger Things"
                        year="2022"
                        rating="8.6"
                        image="https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
                    />

                    <MovieCard
                        title="The Boys"
                        year="2024"
                        rating="8.5"
                        image="https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg"
                    />

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