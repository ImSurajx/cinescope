import { supabase } from "../lib/supabase"

export async function addFavorite(movie, user) {
    if (!user) return

    await supabase
        .from("Favorites")
        .upsert({
            user_id: user.id,
            movie_id: movie.id,
            title: movie.title,
            poster: movie.poster_path
        })
}

export async function getFavorites(userId) {
    const { data } = await supabase
        .from("Favorites")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

    return data || []
}

export async function removeFavorite(movieId, userId) {
    await supabase
        .from("Favorites")
        .delete()
        .eq("movie_id", movieId)
        .eq("user_id", userId)
}

export async function checkFavorite(movieId, userId) {

    const { data } = await supabase
        .from("Favorites")
        .select("id")
        .eq("movie_id", movieId)
        .eq("user_id", userId)
        .single()

    return !!data

}