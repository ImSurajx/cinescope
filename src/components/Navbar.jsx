import SearchBar from "./SearchBar"

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-gray-900">
            <h1 className="text-2xl font-bold text-red-500">
                CineScope
            </h1>

            <SearchBar />
        </nav>
    )
}

export default Navbar