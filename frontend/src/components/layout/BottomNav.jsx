import { NavLink } from "react-router-dom"
function BottomNav() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background-dark/90 backdrop-blur-xl border-t border-white/10 px-6 py-3">

            <div className="flex items-center justify-between">

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-slate-500"
                        }`
                    }
                >
                    <span className="material-symbols-outlined fill-1">home</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                        Home
                    </span>
                </NavLink>

                <NavLink
                    to="/discover"
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-slate-500"
                        }`
                    }
                >
                    <span className="material-symbols-outlined">explore</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                        Discover
                    </span>
                </NavLink>

                <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-slate-500"
                        }`
                    }
                >
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                        Favorites
                    </span>
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `flex flex-col items-center gap-1 ${isActive ? "text-primary" : "text-slate-500"
                        }`
                    }
                >
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                        Profile
                    </span>
                </NavLink>

            </div>

        </div>
    )
}

export default BottomNav