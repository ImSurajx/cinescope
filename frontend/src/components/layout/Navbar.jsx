import { Link } from "react-router-dom"

function Navbar() {

    const isLoggedIn = false

    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">

            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Left Section */}
                <div className="flex items-center gap-8">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            movie
                        </span>

                        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                            CineScope
                        </h1>
                    </Link>


                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-6">

                        <Link
                            to="/"
                            className="text-slate-500 hover:text-primary transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            to="/discover"
                            className="text-slate-500 hover:text-primary transition-colors"
                        >
                            Discover
                        </Link>

                        <Link
                            to="/favorites"
                            className="text-slate-500 hover:text-primary transition-colors"
                        >
                            Favorites
                        </Link>

                    </nav>

                </div>


                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* Search Icon (UNCHANGED) */}
                    <button className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors">
                        <Link to="/search" className="material-symbols-outlined">
                            search
                        </Link>
                    </button>


                    {/* Auth UI */}
                    {isLoggedIn ? (

                        <Link
                            to="/profile"
                            className="hidden md:block h-8 w-8 rounded-full bg-primary/20 border border-primary/30 overflow-hidden"
                        >
                            <img
                                alt="Profile"
                                src="https://i.pravatar.cc/40"
                            />
                        </Link>

                    ) : (

                        <Link
                            to="/login"
                            className="hidden md:block bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-primary/90"
                        >
                            Login
                        </Link>

                    )}

                </div>

            </div>

        </header>
    )
}

export default Navbar