import Navbar from "../components/Navbar"
import BottomNav from "../components/BottomNav"
import Footer from "../components/Footer"

import MovieCard from "../components/MovieCard"
import MovieRow from "../components/MovieRow"
import WatchHistoryCard from "../components/WatchHistoryCard"

function Profile() {
    return (
        <>
            <Navbar />

            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

                {/* Profile Header */}
                <header className="flex flex-col items-center px-6 py-8">

                    <div className="relative group">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full border-4 border-primary p-1 h-32 w-32 shadow-xl shadow-primary/20"
                            style={{
                                backgroundImage:
                                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXKWi6YufVwDzAUPfoGnV_Kw0LfUFYmXKLoxq16y4twEx8T6KLvUl7z70GPLV-aY5QjlJpwSjV2R9wndXYM-SCEazamr-LLtchvPbAY5oUjzXjo-EWp-TSTkmU8DwwjH22nyd0FxiAIY8I7epuJMQXRX2W_twJ0Pv08jxKYWFAxYMQvR5hiKGFdiNlR5bPXbHdjk96tLZAQmpdLdnmSkhA5aMjVEpcWqg3Gz36_kB7wiUISwnk_IDci5_L_eip8Ks6ak9kFoTlCJlG")'
                            }}
                        />
                    </div>

                    <div className="mt-4 text-center">
                        <h2 className="text-2xl font-extrabold tracking-tight">
                            Alex Cinephile
                        </h2>

                        <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                            Premium Member
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
                <section className="grid grid-cols-3 gap-3 px-4 py-4">

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
                <main className="px-4">
                    <MovieRow title="Watch History">

                        <WatchHistoryCard
                            title="Inception"
                            image="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
                            progress={80}
                        />

                        <WatchHistoryCard
                            title="Dune"
                            image="https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
                            progress={50}
                        />

                        <WatchHistoryCard
                            title="The Batman"
                            image="https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
                            progress={100}
                        />

                        <WatchHistoryCard
                            title="Pulp Fiction"
                            image="https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
                            progress={25}
                        />

                    </MovieRow>

                </main>

                {/* Settings */}
                <section className="px-4 py-4 space-y-2">

                    <h3 className="text-lg font-bold tracking-tight mb-4 px-2">
                        Settings
                    </h3>

                    {/* Personal Info */}
                    <button className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 hover:bg-primary/5 transition-colors w-full">

                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">
                                person
                            </span>

                            <span className="text-sm font-semibold">
                                Personal Information
                            </span>
                        </div>

                        <span className="material-symbols-outlined text-slate-400">
                            chevron_right
                        </span>

                    </button>


                    {/* Notifications */}
                    <button className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 hover:bg-primary/5 transition-colors w-full">

                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">
                                notifications_active
                            </span>

                            <span className="text-sm font-semibold">
                                Notifications
                            </span>
                        </div>

                        <span className="material-symbols-outlined text-slate-400">
                            chevron_right
                        </span>

                    </button>


                    {/* Security */}
                    <button className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 hover:bg-primary/5 transition-colors w-full">

                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">
                                security
                            </span>

                            <span className="text-sm font-semibold">
                                Security & Privacy
                            </span>
                        </div>

                        <span className="material-symbols-outlined text-slate-400">
                            chevron_right
                        </span>

                    </button>


                    {/* Logout */}
                    <button className="w-full flex items-center gap-3 p-4 mt-4 rounded-xl border-2 border-primary/20 text-primary hover:bg-primary/10 transition-colors">

                        <span className="material-symbols-outlined">
                            logout
                        </span>

                        <span className="text-sm font-bold">
                            Logout
                        </span>

                    </button>

                </section>

                <Footer />
                <BottomNav />

            </div>
        </>
    )
}

export default Profile