import { supabase } from "../lib/supabase"

// in-memory cache
let favoriteCache = []

export async function addFavorite(movie, user) {

    if (!user) return

    const { data } = await supabase
        .from("Favorites")
        .upsert({
            user_id: user.id,
            movie_id: movie.id,
            title: movie.title,
            poster: movie.poster_path
        })
        .select()

    // update cache
    if (data?.[0]) {
        favoriteCache.push(data[0])
    }

}

export async function getFavorites(userId) {

    const { data } = await supabase
        .from("Favorites")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

    favoriteCache = data || []

    return favoriteCache

}

export async function removeFavorite(movieId, userId) {

    await supabase
        .from("Favorites")
        .delete()
        .eq("movie_id", movieId)
        .eq("user_id", userId)

    // update cache
    favoriteCache = favoriteCache.filter(
        item => item.movie_id !== movieId
    )

}

export function checkFavorite(movieId) {

    // check locally instead of DB
    return favoriteCache.some(
        item => item.movie_id === movieId
    )

}