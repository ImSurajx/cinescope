function HeroBanner() {
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_1jdeJ3pFq8eEMhjVbCso7enmX-WDiS_hWjqqF6GiAiA62UZuIuKrHx-WJ1eIqR0qMqfYR4geZifvX4eTAd1b1OwtNKwQ4JyVIbSFpdtq9Zd0DPij7C0iAc555cLgFkhIeGOsqf-o4KnxUew0J2ZmOrQ04XcPlnXoHwAbQyFYgzVniC7OvU4vlBpv0Dk2LbHEU5i7ZyYb07CNOo04b9zuG-0V8WE-MUzkU4E8M0kxQS-kseW6bXv-D2sW9vsYouqY98JuhhYRwHe8")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/20 to-transparent"></div>
            </div>

            <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-12">
                <div className="max-w-2xl space-y-4">
                    <div className="flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                        <span className="material-symbols-outlined text-sm">
                            trending_up
                        </span>
                        Trending Now
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Dune: Part Two
                    </h2>

                    <p className="text-lg text-slate-300 line-clamp-3">
                        Paul Atreides unites with Chani and the Fremen while on a warpath of
                        revenge against the conspirators who destroyed his family.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-transform active:scale-95">
                            <span className="material-symbols-outlined">play_arrow</span>
                            Watch Trailer
                        </button>

                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-xl font-bold border border-white/20 flex items-center gap-2 transition-transform active:scale-95">
                            <span className="material-symbols-outlined">add</span>
                            Add to Favorites
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner