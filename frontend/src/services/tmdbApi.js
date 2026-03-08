const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

const headers = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json"
}

// Trending Movies
export async function fetchTrendingMovies() {
    const res = await fetch(`${BASE_URL}/trending/movie/day`, { headers })
    const data = await res.json()
    return data.results
}

// Popular Movies
export async function fetchPopularMovies() {
    const res = await fetch(`${BASE_URL}/movie/popular`, { headers })
    const data = await res.json()
    return data.results
}

// Top Rated Movies
export async function fetchTopRatedMovies() {
    const res = await fetch(`${BASE_URL}/movie/top_rated`, { headers })
    const data = await res.json()
    return data.results
}

// Trending TV Shows
export async function fetchTrendingTV() {
    const res = await fetch(`${BASE_URL}/trending/tv/day`, { headers })
    const data = await res.json()
    return data.results
}

// Search Movies
export async function searchMovies(query) {
    const res = await fetch(
        `${BASE_URL}/search/movie?query=${query}`,
        { headers }
    )
    const data = await res.json()
    return data.results
}

// Movie Details
export async function fetchMovieDetails(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}`, { headers })
    const data = await res.json()
    return data
}