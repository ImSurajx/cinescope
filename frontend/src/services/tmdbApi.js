const TOKEN = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

const headers = {
    Authorization: `Bearer ${TOKEN}`,
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

// Search Data
export async function searchMovies(query, page = 1) {

    const res = await fetch(
        `${BASE_URL}/search/movie?query=${query}&page=${page}`,
        { headers }
    )

    const data = await res.json()

    return data
}

// Movie Details
export async function fetchMovieDetails(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, { headers })
    const data = await res.json()
    return data
}

// Movie Cast
export async function fetchMovieCredits(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}/credits`, { headers })
    const data = await res.json()
    return data.cast
}

// Similar Movies
export async function fetchSimilarMovies(id) {
    const res = await fetch(`${BASE_URL}/movie/${id}/similar`, { headers })
    const data = await res.json()
    return data.results
}

// RecommendedMovies
export async function fetchRecommendedMovies(id) {
    const res = await fetch(
        `${BASE_URL}/movie/${id}/recommendations`,
        { headers }
    )

    const data = await res.json()
    return data.results
}


