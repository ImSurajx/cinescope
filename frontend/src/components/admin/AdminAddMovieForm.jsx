import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabase"

function AdminAddMovieForm({ setMovies, editingMovie, setEditingMovie }) {

  const [title, setTitle] = useState("")
  const [poster, setPoster] = useState("")
  const [genre, setGenre] = useState("")
  const [releaseDate, setReleaseDate] = useState("")

  useEffect(() => {

    if (editingMovie) {

      setTitle(editingMovie.title || "")
      setPoster(editingMovie.poster || "")
      setGenre(editingMovie.genre || "")
      setReleaseDate(editingMovie.release_date || "")

    }

  }, [editingMovie])


  async function handleSubmit(e) {

    e.preventDefault()

    if (editingMovie) {

      const { error } = await supabase
        .from("movies")
        .update({
          title,
          poster,
          genre,
          release_date: releaseDate
        })
        .eq("id", editingMovie.id)

      if (!error) {

        setMovies(prev =>
          prev.map(m =>
            m.id === editingMovie.id
              ? { ...m, title, poster, genre, release_date: releaseDate }
              : m
          )
        )

        setEditingMovie(null)
      }

    } else {

      const { data, error } = await supabase
        .from("movies")
        .insert([{ title, poster, genre, release_date: releaseDate }])
        .select()

      if (!error) {

        setMovies(prev => [data[0], ...prev])

      }

    }

    setTitle("")
    setPoster("")
    setGenre("")
    setReleaseDate("")

  }

  return (
    <section className="xl:col-span-1">

      <div className="bg-surface-dark rounded-xl border border-primary/10 overflow-hidden">

        <div className="p-6 border-b border-primary/10">
          <h3 className="text-lg font-bold text-white">
            {editingMovie ? "Edit Movie" : "Add New Movie"}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Movie title"
            className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2"
          />

          <input
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            placeholder="Poster URL"
            className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2"
          />

          <input
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Genre"
            className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2"
          />

          <input
            type="date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2"
          />

          <button className="w-full py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2">

            <span className="material-symbols-outlined">
              {editingMovie ? "edit" : "add_circle"}
            </span>

            {editingMovie ? "Modify Movie" : "Add Movie"}

          </button>

        </form>

      </div>

    </section>
  )
}

export default AdminAddMovieForm