import { Link, NavLink } from "react-router-dom"
function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            movie
                        </span>
                        <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                            CineScope
                        </h1>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary font-semibold"
                                    : "text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/discover"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary font-semibold"
                                    : "text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                            }
                        >
                            Discover
                        </NavLink>

                        <NavLink
                            to="/favorites"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary font-semibold"
                                    : "text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                            }
                        >
                            Favorites
                        </NavLink>

                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/search" className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors">
                        <span className="material-symbols-outlined">search</span>
                    </Link>

                    <Link to="/profile" className="hidden md:block h-8 w-8 rounded-full bg-primary/20 border border-primary/30 overflow-hidden">
                        <img
                            alt="Profile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP6KWn50pnStxFK-5hLZQRhAqegw-OK2vPFZT2IwFpAAMG4svl-ort-mtL-cINJaXYuqS72ZfBq685qoDBlbLT6ArGEpgC9GxBFwHXvcvTENJXJwxZRimgXatEBI7aqT1OEO0kbYTzKXIb6D3w7-G6wQ-wEY_vbJ1pau4io0nZm3tJSoDwAshd9iA0-_umKUIylWp7dD1C2Cui5vbWWVri7XUV-GgxOxO7YRqVZNbXd8RY_teYQ4mCcnsAO3CWjDt97yChy9_hx5iu"
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar