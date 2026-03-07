function Footer() {
    return (
        <footer className="bg-surface-dark py-12 px-4 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">
                            movie
                        </span>
                        <h1 className="text-lg font-bold tracking-tight uppercase">
                            CineScope
                        </h1>
                    </div>

                    <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                        The ultimate platform for movie lovers to discover and track their
                        favorite films and TV shows.
                    </p>
                </div>

                <div className="flex gap-8 text-slate-400">
                    <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                    <a className="hover:text-primary transition-colors" href="#">Terms</a>
                    <a className="hover:text-primary transition-colors" href="#">Help</a>
                </div>

                <div className="flex gap-4">
                    <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                        <span className="material-symbols-outlined text-xl">brand_family</span>
                    </a>

                    <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                        <span className="material-symbols-outlined text-xl">share</span>
                    </a>

                    <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                        <span className="material-symbols-outlined text-xl">alternate_email</span>
                    </a>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
                © 2024 CineScope. Data provided by TMDB.
            </div>
        </footer>
    )
}

export default Footer