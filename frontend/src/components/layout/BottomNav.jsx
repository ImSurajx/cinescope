import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useAuth } from "../../context/AuthContext"

function BottomNav() {

    const { user } = useAuth()

    return (
        <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-0 left-0 right-0 z-50 flex h-20 md:hidden border-t border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl px-4 pb-2 pt-2"
        >

            <NavItem icon="home" label="Home" to="/" />
            <NavItem icon="explore" label="Discover" to="/discover" />
            <NavItem icon="favorite" label="Favorites" to="/favorites" />
            <NavItem icon="person" label="Profile" to={user ? "/profile" : "/login"} />

        </motion.div>
    )
}


function NavItem({ to, icon, label }) {

    return (
        <NavLink
            to={to}
            className="flex flex-1 items-center justify-center"
        >
            {({ isActive }) => (

                <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={`flex flex-col items-center justify-center gap-1 transition-all
                    ${isActive
                            ? "text-primary"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                >

                    <motion.span
                        animate={{
                            scale: isActive ? 1.15 : 1
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="material-symbols-outlined"
                    >
                        {icon}
                    </motion.span>

                    <p className="text-[10px] font-bold uppercase tracking-wider">
                        {label}
                    </p>

                </motion.div>

            )}
        </NavLink>
    )
}

export default BottomNav