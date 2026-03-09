import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"
import MovieCard from "../components/movie/MovieCard"

import { useAuth } from "../context/AuthContext"
import { getWatchHistory, clearWatchHistory } from "../services/watchHistoryApi"

import { useEffect, useState } from "react"

function WatchHistory() {

    const { user } = useAuth()

    const [history, setHistory] = useState([])
    const [visibleCount, setVisibleCount] = useState(10)
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        async function loadHistory() {

            if (!user) {
                setLoading(false)
                return
            }

            const data = await getWatchHistory(user.id)

            setHistory(data || [])
            setLoading(false)

        }

        loadHistory()

    }, [user])


    const visibleHistory = history.slice(0, visibleCount)


    async function handleClearHistory() {

        if (!user) return

        const confirmClear = confirm("Clear entire watch history?")

        if (!confirmClear) return

        await clearWatchHistory(user.id)

        setHistory([])

    }


    return (
        <>
            <Navbar />

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

                {/* Header */}
                <header className="border-b border-slate-800">

                    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                        <h1 className="text-xl font-bold tracking-tight">
                            Watch History
                        </h1>

                        {history.length > 0 && (

                            <button
                                onClick={handleClearHistory}
                                className="text-red-500 text-sm font-semibold hover:underline"
                            >
                                Clear All
                            </button>

                        )}

                    </div>

                </header>


                {/* Content */}
                <main className="flex-1 pb-16 pt-16">

                    <div className="max-w-7xl mx-auto px-4">

                        {loading ? (

                            <div className="text-center py-20 text-slate-400">
                                Loading watch history...
                            </div>

                        ) : history.length === 0 ? (

                            <div className="text-center py-20 text-slate-400">
                                No watch history yet
                            </div>

                        ) : (

                            <>

                                {/* Movie Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                                    {visibleHistory.map(movie => (

                                        <MovieCard
                                            key={movie.movie_id}
                                            id={movie.movie_id}
                                            title={movie.title}
                                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        />

                                    ))}

                                </div>


                                {/* View More */}
                                {history.length > visibleCount && (

                                    <div className="mt-12 mb-20 flex justify-center">

                                        <button
                                            onClick={() => setVisibleCount(prev => prev + 10)}
                                            className="px-8 py-3 bg-slate-800 border border-slate-700 hover:bg-slate-700 rounded-full font-bold text-sm transition-all flex items-center gap-2 text-white"
                                        >

                                            <span className="material-symbols-outlined text-lg">
                                                expand_more
                                            </span>

                                            View More

                                        </button>

                                    </div>

                                )}

                            </>

                        )}

                    </div>

                </main>

                <Footer />
                <BottomNav />

            </div>
        </>
    )
}

export default WatchHistory