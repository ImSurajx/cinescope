function AdminSidebar() {
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

        <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white font-semibold">
          <span className="material-symbols-outlined">dashboard</span>
          Dashboard
        </a>

        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">movie_filter</span>
          Movies
        </a>

        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-primary/10 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">group</span>
          Users
        </a>

      </nav>

      <div className="p-4 mt-auto border-t border-primary/10">

        <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-colors">
          <span className="material-symbols-outlined">logout</span>
          Logout
        </a>

      </div>

    </aside>
  )
}

export default AdminSidebar