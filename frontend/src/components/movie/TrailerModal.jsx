import { useEffect, useState } from "react"

function TrailerModal({ videoKey, onClose, title = "Trailer" }) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        function handleEsc(e) {
            if (e.key === "Escape") onClose()
        }

        document.addEventListener("keydown", handleEsc)

        return () => document.removeEventListener("keydown", handleEsc)

    }, [onClose])

    if (!videoKey) return null

    return (

        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4"
            onClick={onClose}
        >

            {/* Player Container */}
            <div
                className="relative w-full max-w-6xl bg-[#0b0b0b] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-white/5 backdrop-blur">

                    <div className="flex items-center gap-2 text-sm font-semibold text-white">

                        <span className="material-symbols-outlined text-primary">
                            play_circle
                        </span>

                        {title}

                    </div>

                    <button
                        onClick={onClose}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                    >
                        ✕
                    </button>

                </div>

                {/* Video Area */}
                <div className="relative w-full aspect-video bg-black">

                    {/* Loader */}
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black">
                            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}

                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0`}
                        title="Movie Trailer"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        onLoad={() => setLoading(false)}
                    />

                </div>

            </div>

        </div>

    )
}

export default TrailerModal