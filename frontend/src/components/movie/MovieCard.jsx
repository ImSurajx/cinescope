import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useAuth } from "../../context/AuthContext"
import { addFavorite, removeFavorite, checkFavorite } from "../../services/favoritesApi"

function MovieCard({ id, title, year, rating, image, showFavorite = false, onRemove }) {

  const { user } = useAuth()
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {

    async function loadFavorite() {

      if (!user || !id) return

      try {

        const exists = await checkFavorite(id, user.id)
        setIsFavorite(exists)

      } catch (err) {

        console.error("Favorite check failed:", err)

      }

    }

    loadFavorite()

  }, [id, user])


  async function handleFavorite(e) {

    e.preventDefault()
    e.stopPropagation()

    if (!user) return

    const newState = !isFavorite
    setIsFavorite(newState) // optimistic UI

    try {

      if (newState) {

        await addFavorite(
          { id, title, poster_path: image.split("/w500")[1] },
          user
        )

      } else {

        await removeFavorite(id, user.id)

        // remove instantly from Favorites page
        if (onRemove) {
          onRemove(id)
        }

      }

    } catch (error) {

      console.error("Favorite action failed:", error)

      setIsFavorite(!newState)

    }

  }


  return (

    <Link
      to={`/movie/${id}`}
      className="flex flex-col gap-2 group shrink-0 w-[170px] md:w-[190px]"
    >

      {/* Poster */}
      <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-slate-800">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Rating */}
        {rating && (
          <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md text-xs flex items-center gap-1 text-white">
            ⭐ {rating}
          </div>
        )}

        {/* Favorite Button */}
        {showFavorite && (

          <button
            onClick={handleFavorite}
            className="absolute top-2 right-2 flex items-center justify-center w-9 h-9 rounded-full bg-black/70 border border-slate-600 backdrop-blur-md text-primary hover:bg-primary hover:text-white transition-all shadow-lg"
          >

            <span
              className="material-symbols-outlined text-[20px] transition-transform duration-200"
              style={{
                fontVariationSettings: `'FILL' ${isFavorite ? 1 : 0}`,
                transform: isFavorite ? "scale(1.2)" : "scale(1)"
              }}
            >
              favorite
            </span>

          </button>

        )}

      </div>

      {/* Movie Info */}
      <div>

        <h3 className="font-bold text-sm truncate">
          {title}
        </h3>

        {year && (
          <div className="text-xs text-slate-400 mt-1">
            {year}
          </div>
        )}

      </div>

    </Link>

  )

}

export default MovieCard