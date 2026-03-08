import { useAuth } from "../context/AuthContext"

import Navbar from "../components/layout/Navbar"
import BottomNav from "../components/layout/BottomNav"
import Footer from "../components/layout/Footer"

import MovieRow from "../components/movie/MovieRow"
import WatchHistoryCard from "../components/profile/WatchHistoryCard"

import { fetchWatchHistory } from "../services/watchHistoryApi"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

function Profile() {

    const { user, logout } = useAuth()

    const [history, setHistory] = useState([])

    const name =
        user?.user_metadata?.full_name ||
        user?.user_metadata?.name ||
        user?.email?.split("@")[0] ||
        "User"

    const avatar =
        user?.user_metadata?.avatar_url ||
        null


    // Load history initially
    useEffect(() => {

        async function loadHistory() {

            if (!user) return

            const data = await fetchWatchHistory(user.id)

            setHistory(data)

        }

        loadHistory()

    }, [user])


    // Realtime updates
    useEffect(() => {

        if (!user) return

        const channel = supabase
            .channel("watch-history-changes")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "WatchHistory",
                    filter: `user_id=eq.${user.id}`
                },
                (payload) => {

                    if (payload.eventType === "INSERT") {

                        setHistory(prev => [payload.new, ...prev])

                    }

                    if (payload.eventType === "UPDATE") {

                        setHistory(prev =>
                            prev.map(item =>
                                item.id === payload.new.id ? payload.new : item
                            )
                        )

                    }

                }
            )
            .subscribe()

        return () => {

            supabase.removeChannel(channel)

        }

    }, [user])


    if (!user) return null


    return (
        <>
            <Navbar />

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

                <div className="max-w-7xl mx-auto w-full px-4">

                    {/* Profile Header */}
                    <header className="flex flex-col items-center py-8">

                        <div className="relative group">

                            {avatar ? (

                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full border-4 border-primary p-1 h-32 w-32 shadow-xl shadow-primary/20"
                                    style={{ backgroundImage: `url(${avatar})` }}
                                />

                            ) : (

                                <div className="flex items-center justify-center rounded-full border-4 border-primary h-32 w-32 bg-slate-800 text-4xl font-bold text-white shadow-xl shadow-primary/20">
                                    {name.charAt(0).toUpperCase()}
                                </div>

                            )}

                        </div>

                        <div className="mt-4 text-center">

                            <h2 className="text-2xl font-extrabold tracking-tight">
                                {name}
                            </h2>

                            <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                                Member
                            </div>

                        </div>

                        <div className="mt-6 flex w-full max-w-md gap-4">

                            <button className="flex-1 flex items-center justify-center gap-2 rounded-lg h-11 bg-primary text-white text-sm font-bold">
                                Edit Profile
                            </button>

                            <button className="flex items-center justify-center rounded-lg h-11 px-4 bg-slate-800 text-sm font-bold">
                                Share
                            </button>

                        </div>

                    </header>


                    {/* Stats */}
                    <section className="grid grid-cols-3 gap-3 py-4">

                        <div className="flex flex-col gap-1 rounded-xl bg-slate-900/50 border border-primary/10 p-4 items-center text-center">
                            <p className="text-primary text-2xl font-black">124</p>
                            <p className="text-slate-400 text-[10px] font-bold uppercase">
                                Watched
                            </p>
                        </div>

                        <div className="flex flex-col gap-1 rounded-xl bg-slate-900/50 border border-primary/10 p-4 items-center text-center">
                            <p className="text-primary text-2xl font-black">12</p>
                            <p className="text-slate-400 text-[10px] font-bold uppercase">
                                Lists
                            </p>
                        </div>

                        <div className="flex flex-col gap-1 rounded-xl bg-slate-900/50 border border-primary/10 p-4 items-center text-center">
                            <p className="text-primary text-2xl font-black">850</p>
                            <p className="text-slate-400 text-[10px] font-bold uppercase">
                                Likes
                            </p>
                        </div>

                    </section>


                    {/* Watch History */}
                    <section className="py-4">

                        <MovieRow title="Watch History">

                            {history.map(movie => (

                                <WatchHistoryCard
                                    key={movie.id}
                                    title={movie.title}
                                    image={`https://image.tmdb.org/t/p/w500${movie.poster}`}
                                    progress={movie.progress}
                                />

                            ))}

                        </MovieRow>

                    </section>


                    {/* Settings */}
                    <section className="py-4 space-y-2">

                        <h3 className="text-lg font-bold tracking-tight mb-4">
                            Settings
                        </h3>


                        <button
                            className="w-full flex items-center gap-3 p-4 mt-4 rounded-xl border-2 border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                            onClick={logout}
                        >

                            <span className="material-symbols-outlined">
                                logout
                            </span>

                            <span className="text-sm font-bold">
                                Logout
                            </span>

                        </button>

                    </section>

                </div>

                <Footer />
                <BottomNav />

            </div>
        </>
    )
}

export default Profile