import AdminMovieRow from "../components/AdminMovieRow"

function AdminDashboard() {

    const movies = [
        {
            title: "Inception",
            studio: "Warner Bros.",
            date: "July 16, 2010",
            genre: "Sci-Fi",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2vDMEytazzHjYUOpC1fA_QMjFB_npjGekLh8G_E2uIeQggFDOcQuwBLCn2Z8mhJtZbbMIoL_hwRa8R_AYIn1r81SzNShu2tzgUQg7xgcrxHIU5qD2iYUbcxUD5dWGdET3E5ywb86sY9RTGfthtGerLyh1UvLN7bQUrxiaq_j9NO-0N8wfLFmB0Wc8m2Miz5RLXu9ozh5pftxdPxnRKmaBRkivgUWNco0dxyiyav42bHjD7wzNyWk36Nr_XdjKthisTY1WS9840Bp"
        },
        {
            title: "Interstellar",
            studio: "Paramount",
            date: "Nov 7, 2014",
            genre: "Adventure",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkAXsuTOT9aL7gxZqgLGoz_6YHS-shskN0uQF4GCydM5obhvas_ccRmaKDNVXcMEEC9Oufj5MXGMGZsuUvhQzudxrRDDXew-5WSVpybVYwO2DxPmanEyyCG-I1O8t4oD5ntFYKPFvAIUMfsx9GgFeYji-Xjlb4N_H1RqowTbnf3gQJ2wqrzGySPzTwVJf6C9PO-02OtpGSCbXzHW28yCvsUIP6dkbfW-7yuQiXKR9j7vQaiJASRVNNCwOVCo9KI4y8_n1e_Bt6jbOV"
        },
        {
            title: "The Godfather",
            studio: "Paramount",
            date: "Mar 24, 1972",
            genre: "Crime",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANRq8xkef1Yy0Pb4_F2DuKnQz544iZhA2SZrsEeGH4naY8IJ7kkuQ7Z2M7QQqtX4n9ACSPmVCvI34ANFM-x0zzeFVX2C-veYTtYPA-PMmU1arX_7WT3CbXYzOxyX1Frz1s6IGSsCD89xgu1yXQyGDOkwk1RjZ3AH8G_OofeZ6aLyJxKNWguaviWPALN8t0rQD3V0DuxBwTVMWBUfxAfdSc_KKWO85UkOMn_-MlQkP8LV_a4uCEjAzEIgTR4Mhe96Zy7p7yMa4Xsf_c"
        }
    ]


    return (

        <div className="flex min-h-screen overflow-hidden">

            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 w-64 bg-surface-dark border-r border-primary/10 hidden lg:flex flex-col">

                <div className="p-6 flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">movie</span>
                    </div>
                    <h1 className="text-xl font-bold text-white">CineScope</h1>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">

                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white">
                        <span className="material-symbols-outlined">dashboard</span>
                        Dashboard
                    </a>

                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-primary/10 hover:text-primary">
                        <span className="material-symbols-outlined">movie_filter</span>
                        Movies
                    </a>

                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-primary/10 hover:text-primary">
                        <span className="material-symbols-outlined">group</span>
                        Users
                    </a>

                </nav>

            </aside>


            {/* Main Content */}

            <main className="flex-1 lg:ml-64 p-10">

                <h2 className="text-3xl font-bold text-white mb-8">
                    Admin Dashboard
                </h2>


                {/* Movie Table */}

                <div className="bg-surface-dark rounded-xl border border-primary/10 overflow-hidden shadow-xl">

                    <table className="w-full text-left">

                        <thead>

                            <tr className="bg-primary/5 text-slate-400 text-xs uppercase border-b border-primary/10">

                                <th className="px-6 py-4">Poster</th>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4">Release Date</th>
                                <th className="px-6 py-4">Genre</th>
                                <th className="px-6 py-4 text-right">Actions</th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-primary/5">

                            {movies.map((movie, index) => (
                                <AdminMovieRow key={index} {...movie} />
                            ))}

                        </tbody>

                    </table>

                </div>

            </main>

        </div>

    )
}

export default AdminDashboard