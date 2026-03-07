function AdminMovieTable() {

    const movies = [
        {
            title: "Inception",
            studio: "Warner Bros.",
            date: "July 16, 2010",
            genre: "Sci-Fi",
            image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
        },
        {
            title: "Interstellar",
            studio: "Paramount",
            date: "Nov 7, 2014",
            genre: "Adventure",
            image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
        },
        {
            title: "The Godfather",
            studio: "Paramount",
            date: "Mar 24, 1972",
            genre: "Crime",
            image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
        }
    ]


    return (

        <section className="xl:col-span-2 space-y-4">

            {/* Header */}
            <div className="flex items-center justify-between">

                <h3 className="text-xl font-bold text-white">
                    Movie Management
                </h3>

                <div className="relative">

                    <span className="material-symbols-outlined absolute left-3 top-2 text-slate-500 text-sm">
                        search
                    </span>

                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="pl-10 py-2 bg-surface-dark border border-primary/10 rounded-lg text-sm text-white focus:ring-primary w-64"
                    />

                </div>

            </div>


            {/* Table Container */}
            <div className="bg-surface-dark rounded-xl border border-primary/10 shadow-xl overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[700px] text-left">

                        {/* Table Header */}
                        <thead>

                            <tr className="bg-primary/5 text-slate-400 text-xs uppercase tracking-widest border-b border-primary/10">

                                <th className="px-6 py-4 font-semibold">
                                    Poster
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Title
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Release Date
                                </th>

                                <th className="px-6 py-4 font-semibold">
                                    Genre
                                </th>

                                <th className="px-6 py-4 font-semibold text-right">
                                    Actions
                                </th>

                            </tr>

                        </thead>


                        {/* Table Body */}
                        <tbody className="divide-y divide-primary/5">

                            {movies.map((movie, index) => (

                                <tr key={index} className="hover:bg-primary/5 transition-colors">

                                    {/* Poster */}
                                    <td className="px-6 py-4">

                                        <div
                                            className="size-14 rounded-lg bg-center bg-cover border border-primary/10"
                                            style={{ backgroundImage: `url(${movie.image})` }}
                                        />

                                    </td>


                                    {/* Title */}
                                    <td className="px-6 py-4">

                                        <p className="font-bold text-white">
                                            {movie.title}
                                        </p>

                                        <p className="text-xs text-slate-500">
                                            {movie.studio}
                                        </p>

                                    </td>


                                    {/* Date */}
                                    <td className="px-6 py-4 text-slate-300 text-sm">
                                        {movie.date}
                                    </td>


                                    {/* Genre */}
                                    <td className="px-6 py-4">

                                        <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase rounded-full">
                                            {movie.genre}
                                        </span>

                                    </td>


                                    {/* Actions */}
                                    <td className="px-6 py-4 text-right">

                                        <div className="flex justify-end gap-2">

                                            <button className="p-2 hover:bg-primary/20 rounded-lg text-slate-400 hover:text-primary transition-colors">

                                                <span className="material-symbols-outlined text-xl">
                                                    edit
                                                </span>

                                            </button>

                                            <button className="p-2 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-500 transition-colors">

                                                <span className="material-symbols-outlined text-xl">
                                                    delete
                                                </span>

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>


                {/* Pagination */}
                <div className="px-6 py-4 bg-primary/5 border-t border-primary/10 flex items-center justify-between">

                    <p className="text-sm text-slate-500">
                        Showing 1 to 3 of 1,240 results
                    </p>

                    <div className="flex gap-2">

                        <button className="p-2 rounded-lg bg-background-dark border border-primary/10 text-white disabled:opacity-50">

                            <span className="material-symbols-outlined">
                                chevron_left
                            </span>

                        </button>

                        <button className="p-2 rounded-lg bg-background-dark border border-primary/10 text-white">

                            <span className="material-symbols-outlined">
                                chevron_right
                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default AdminMovieTable