import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"

import SearchHeader from "../components/search/SearchHeader"

import MovieCard from "../components/movie/MovieCard"

function SearchResults() {

    return (
        <>

            <SearchHeader query="Inception" />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-bold">
                        Results for "Inception"
                        <span className="text-slate-500 font-normal ml-2">(24 results)</span>
                    </h2>

                    <button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary">
                        <span className="material-symbols-outlined text-base">tune</span>
                        Sort by: Relevance
                    </button>
                </div>


                {/* Movie Grid */}

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">

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
                        image="https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
                    />

                    <MovieCard
                        title="Tenet"
                        year="2020"
                        rating="7.9"
                        image="https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg"
                    />

                    <MovieCard
                        title="Shutter Island"
                        year="2010"
                        rating="8.2"
                        image="https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg"
                    />

                    <MovieCard
                        title="The Prestige"
                        year="2006"
                        rating="8.5"
                        image="https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg"
                    />

                </div>


                {/* Load More */}

                <div className="mt-12 mb-20 flex justify-center">
                    <button className="px-8 py-3 bg-slate-800 border border-slate-700 hover:bg-slate-700 rounded-full font-bold text-sm transition-all flex items-center gap-2 text-white">

                        <span className="material-symbols-outlined text-lg">
                            expand_more
                        </span>

                        Show More Results

                    </button>
                </div>

            </main>

            <Footer />
            <BottomNav />

        </>
    )
}

export default SearchResults