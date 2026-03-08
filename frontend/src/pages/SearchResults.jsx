import { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"

import { searchMovies } from "../services/tmdbApi"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"

import SearchHeader from "../components/search/SearchHeader"
import MovieCard from "../components/movie/MovieCard"

function SearchResults() {

    const navigate = useNavigate()
    const [params] = useSearchParams()

    const query = params.get("q") || ""
    const type = params.get("type") || "all"
    const sort = params.get("sort") || "relevance"

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(false)


    async function loadMovies(newPage = 1) {

        if (!query) return

        try {

            setLoading(true)

            const data = await searchMovies(query, newPage, type)

            if (newPage === 1) {
                setMovies(data.results)
            } else {
                setMovies(prev => [...prev, ...data.results])
            }

            setPage(data.page)
            setTotalPages(data.total_pages)
            setTotalResults(data.total_results)

        } catch (error) {

            console.error("Search API Error:", error)

        } finally {

            setLoading(false)

        }

    }


    useEffect(() => {

        if (!query.trim()) {
            setMovies([])
            setTotalResults(0)
            setPage(1)
            return
        }

        setPage(1)
        loadMovies(1)

    }, [query, type])


    function handleLoadMore() {

        if (page < totalPages) {
            loadMovies(page + 1)
        }

    }


    // SORTING LOGIC
    function sortMovies(list) {

        if (sort === "rating") {
            return [...list].sort((a, b) => b.vote_average - a.vote_average)
        }

        if (sort === "newest") {
            return [...list].sort(
                (a, b) => new Date(b.release_date) - new Date(a.release_date)
            )
        }

        if (sort === "oldest") {
            return [...list].sort(
                (a, b) => new Date(a.release_date) - new Date(b.release_date)
            )
        }

        return list
    }


    function handleSortChange(e) {

        const newSort = e.target.value

        navigate(`/search?q=${query}&type=${type}&sort=${newSort}`)

    }


    return (
        <>

            <SearchHeader query={query} />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-lg font-bold">
                        Results for "{query}"
                        <span className="text-slate-500 font-normal ml-2">
                            ({totalResults} results)
                        </span>
                    </h2>

                    <div className="flex items-center gap-2 text-sm font-medium text-slate-500">

                        <span className="material-symbols-outlined text-base">
                            tune
                        </span>

                        <select
                            value={sort}
                            onChange={handleSortChange}
                            className="bg-transparent outline-none cursor-pointer"
                        >
                            <option value="relevance">Relevance</option>
                            <option value="rating">Rating</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>

                    </div>

                </div>


                {/* Movie Grid */}

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">

                    {sortMovies(movies).map(movie => (

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


                {/* Load More */}

                {page < totalPages && (

                    <div className="mt-12 mb-20 flex justify-center">

                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 bg-slate-800 border border-slate-700 hover:bg-slate-700 rounded-full font-bold text-sm transition-all flex items-center gap-2 text-white"
                        >

                            <span className="material-symbols-outlined text-lg">
                                expand_more
                            </span>

                            {loading ? "Loading..." : "Show More Results"}

                        </button>

                    </div>

                )}

            </main>

            <Footer />
            <BottomNav />

        </>
    )
}

export default SearchResults