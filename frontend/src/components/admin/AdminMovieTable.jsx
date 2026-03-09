import { useState, useEffect } from "react"
import AdminMovieRow from "./AdminMovieRow"
import { supabase } from "../../lib/supabase"

function AdminMovieTable({ movies, setMovies, setEditingMovie }) {

    const [search, setSearch] = useState("")

    useEffect(() => {

        async function loadMovies() {

            const { data, error } = await supabase
                .from("movies")
                .select("*")
                .order("created_at", { ascending: false })

            if (!error) {
                setMovies(data)
            }

        }

        loadMovies()

    }, [setMovies])


    const filteredMovies = movies.filter(movie =>
        movie.title?.toLowerCase().includes(search.toLowerCase())
    )


    // ✏️ EDIT MOVIE
    function handleEdit(movie) {

        setEditingMovie(movie)

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }


    // 🗑 DELETE MOVIE
    async function handleDelete(movie) {

        await supabase
            .from("movies")
            .delete()
            .eq("id", movie.id)

        setMovies(prev =>
            prev.filter(m => m.id !== movie.id)
        )

    }


    return (

        <section className="xl:col-span-2 space-y-4">

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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search movies..."
                        className="pl-10 py-2 bg-surface-dark border border-primary/10 rounded-lg text-sm text-white focus:ring-primary w-64"
                    />

                </div>

            </div>


            <div className="bg-surface-dark rounded-xl border border-primary/10 shadow-xl overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full min-w-[700px] text-left">

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

                        <tbody className="divide-y divide-primary/5">

                            {filteredMovies.map((movie) => (

                                <AdminMovieRow
                                    key={movie.id}
                                    movie={movie}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />

                            ))}

                        </tbody>

                    </table>

                </div>


                <div className="px-6 py-4 bg-primary/5 border-t border-primary/10 flex items-center justify-between">

                    <p className="text-sm text-slate-500">
                        Showing {filteredMovies.length} movies
                    </p>

                </div>

            </div>

        </section>

    )

}

export default AdminMovieTable