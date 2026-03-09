import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useAuth } from "../../context/AuthContext"

function Navbar() {

    const { user, logout } = useAuth()

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10"
        >

            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* Left Section */}
                <div className="flex items-center gap-8">

                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Link to="/" className="flex items-center gap-2">

                            <span className="material-symbols-outlined text-primary text-3xl">
                                movie
                            </span>

                            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                                CineScope
                            </h1>

                        </Link>
                    </motion.div>

                    <nav className="hidden md:flex items-center gap-6">

                        <NavItem to="/" label="Home" />
                        <NavItem to="/discover" label="Discover" />
                        <NavItem to="/favorites" label="Favorites" />

                    </nav>

                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">

                    {/* Search */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link
                            to="/search"
                            className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors flex"
                        >
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </Link>
                    </motion.div>


                    {/* Auth UI */}
                    {user ? (

                        <div className="flex items-center gap-3">

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >

                                <Link
                                    to="/profile"
                                    className="hidden md:block h-8 w-8 rounded-full bg-primary/20 border border-primary/30 overflow-hidden"
                                >

                                    <img
                                        alt="Profile"
                                        src={user.user_metadata?.avatar_url || "https://i.pravatar.cc/40"}
                                    />

                                </Link>

                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={logout}
                                className="hidden md:block text-sm text-slate-400 hover:text-white"
                            >
                                Logout
                            </motion.button>

                        </div>

                    ) : (

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >

                            <Link
                                to="/login"
                                className="hidden md:block bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-primary/90"
                            >
                                Login
                            </Link>

                        </motion.div>

                    )}

                </div>

            </div>

        </motion.header>
    )
}


/* Navigation Item Component */

function NavItem({ to, label }) {

    return (

        <motion.div
            whileHover={{ y: -2 }}
            className="relative"
        >

            <Link
                to={to}
                className="text-slate-500 hover:text-primary transition-colors"
            >
                {label}
            </Link>

            <motion.div
                className="absolute left-0 -bottom-1 h-[2px] bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.25 }}
            />

        </motion.div>

    )

}

export default Navbar