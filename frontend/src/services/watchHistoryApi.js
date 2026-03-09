import { supabase } from "../lib/supabase"

export async function addToWatchHistory(movie, user) {

    if (!user || !movie) return

    const { error } = await supabase
        .from("WatchHistory")
        .upsert(
            {
                user_id: user.id,
                movie_id: movie.id,
                title: movie.title,
                poster: movie.poster_path,
                progress: 100
            },
            {
                onConflict: "user_id,movie_id"
            }
        )

    if (error) {
        console.error("WatchHistory error:", error)
    }

}


export async function fetchWatchHistory(userId) {

    if (!userId) return []

    const { data, error } = await supabase
        .from("WatchHistory")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(20)

    if (error) {

        console.error(error)
        return []

    }

    return data || []

}