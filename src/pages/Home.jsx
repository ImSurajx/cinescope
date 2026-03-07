import Navbar from "../components/Navbar"

function Home() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="p-10">
                <h1 className="text-4xl font-bold">
                    Welcome to CineScope 🎬
                </h1>
            </div>
        </div>
    )
}

export default Home