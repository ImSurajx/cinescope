import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

function AdminSidebar() {

  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuth()

  async function handleLogout() {

    await logout()
    navigate("/login")

  }

  const isActive = (path) => location.pathname === path

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-surface-dark border-r border-primary/10 hidden lg:flex flex-col">

      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined">movie</span>
        </div>

        <h1 className="text-xl font-bold tracking-tight text-white">
          CineScope
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">

        <Link
          to="/admin"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold ${isActive("/admin")
              ? "bg-primary text-white"
              : "text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors"
            }`}
        >
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </Link>


      </nav>

      <div className="p-4 mt-auto border-t border-primary/10">

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>

      </div>

    </aside>
  )
}

export default AdminSidebar