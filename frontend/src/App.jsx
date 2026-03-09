import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Home from "./pages/Home"
import Discover from "./pages/Discover"
import SearchResults from "./pages/SearchResults"
import MovieDetails from "./pages/MovieDetails"
import Favorites from "./pages/Favorites"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import AdminDashboard from "./pages/admin/AdminDashboard"

import ProtectedRoute from "./components/auth/ProtectedRoute"

function App() {

  const location = useLocation()

  return (

    <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* Protected Pages */}
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

    </AnimatePresence>

  )
}

export default App