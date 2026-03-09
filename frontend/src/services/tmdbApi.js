const TOKEN = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

const headers = {
    Authorization: `Bearer ${TOKEN}`,
    "Content-Type": "application/json"
}

// CACHE STORAGE
const cache = {}

// CACHE TTL (15 minutes)
const CACHE_TTL = 1000 * 60 * 15

async function fetchWithCache(url) {

    const now = Date.now()

    const cached = cache[url]

    if (cached && now - cached.time < CACHE_TTL) {
        return cached.data
    }

    try {

        const res = await fetch(url, { headers })

        if (!res.ok) {
            throw new Error(`TMDB error ${res.status}`)
        }

        const data = await res.json()

        cache[url] = {
            data,
            time: now
        }

        return data

    } catch (err) {

        console.error("TMDB API error:", err)

        // don't cache failed responses
        return { results: [] }

    }

}


// Trending Movies
export async function fetchTrendingMovies() {

    const data = await fetchWithCache(`${BASE_URL}/trending/movie/day`)

    return data.results || []

}


// Popular Movies
export async function fetchPopularMovies() {

    const data = await fetchWithCache(`${BASE_URL}/movie/popular`)

    return data.results || []

}


// Top Rated Movies
export async function fetchTopRatedMovies() {

    const data = await fetchWithCache(`${BASE_URL}/movie/top_rated`)

    return data.results || []

}


// Trending TV Shows
export async function fetchTrendingTV() {

    const data = await fetchWithCache(`${BASE_URL}/trending/tv/day`)

    return data.results || []

}


// Search Movies
export async function searchMovies(query, page = 1) {

    const url = `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}`

    const data = await fetchWithCache(url)

    return data

}


// Movie Details
export async function fetchMovieDetails(id) {

    const data = await fetchWithCache(`${BASE_URL}/movie/${id}?language=en-US`)

    return data

}


// Movie Cast
export async function fetchMovieCredits(id) {

    const data = await fetchWithCache(`${BASE_URL}/movie/${id}/credits`)

    return data.cast || []

}


// Similar Movies
export async function fetchSimilarMovies(id) {

    const data = await fetchWithCache(`${BASE_URL}/movie/${id}/similar`)

    return data.results || []

}


// Recommended Movies
export async function fetchRecommendedMovies(id) {

    const data = await fetchWithCache(`${BASE_URL}/movie/${id}/recommendations`)

    return data.results || []

}


// Upcoming Movies
export async function fetchUpcomingMovies() {

    const data = await fetchWithCache(`${BASE_URL}/movie/upcoming`)

    return data.results || []

}


// Movie Trailer
export async function fetchMovieTrailer(id) {

    const data = await fetchWithCache(`${BASE_URL}/movie/${id}/videos`)

    const trailer = (data.results || []).find(
        video => video.type === "Trailer" && video.site === "YouTube"
    )

    return trailer?.key || null

}