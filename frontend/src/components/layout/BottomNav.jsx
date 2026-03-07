import { NavLink } from "react-router-dom"

function BottomNav() {

    const isLoggedIn = false

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark px-4 pb-4 pt-3">

            {/* Home */}
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `flex flex-1 flex-col items-center justify-center gap-1 ${isActive ? "text-primary" : "text-slate-500 dark:text-slate-400"
                    }`
                }
            >
                <span className="material-symbols-outlined">home</span>

                <p className="text-[10px] font-bold uppercase tracking-wider">
                    Home
                </p>
            </NavLink>


            {/* Discover */}
            <NavLink
                to="/discover"
                className={({ isActive }) =>
                    `flex flex-1 flex-col items-center justify-center gap-1 ${isActive ? "text-primary" : "text-slate-500 dark:text-slate-400"
                    }`
                }
            >
                <span className="material-symbols-outlined">explore</span>

                <p className="text-[10px] font-bold uppercase tracking-wider">
                    Discover
                </p>
            </NavLink>


            {/* Favorites */}
            <NavLink
                to="/favorites"
                className={({ isActive }) =>
                    `flex flex-1 flex-col items-center justify-center gap-1 ${isActive ? "text-primary" : "text-slate-500 dark:text-slate-400"
                    }`
                }
            >
                <span className="material-symbols-outlined">favorite</span>

                <p className="text-[10px] font-bold uppercase tracking-wider">
                    Favorites
                </p>
            </NavLink>


            {/* Profile / Login */}
            <NavLink
                to={isLoggedIn ? "/profile" : "/login"}
                className={({ isActive }) =>
                    `flex flex-1 flex-col items-center justify-center gap-1 ${isActive ? "text-primary" : "text-slate-500 dark:text-slate-400"
                    }`
                }
            >
                <span className="material-symbols-outlined">person</span>

                <p className="text-[10px] font-bold uppercase tracking-wider">
                    Profile
                </p>
            </NavLink>

        </div>
    )
}

export default BottomNav