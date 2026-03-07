import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import BottomNav from "../components/layout/BottomNav"

import MovieHero from "../components/movie/MovieHero"
import MovieActions from "../components/movie/MovieActions"
import PlotSummary from "../components/movie/PlotSummary"

import CastCard from "../components/movie/CastCard"
import MovieRow from "../components/movie/MovieRow"
import MovieCard from "../components/movie/MovieCard"
function MovieDetails() {
    return (
        <>
            <Navbar />
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* Header / Navigation */}
                {/* Hero Section with Poster Overlay */}
                <MovieHero
                    title="Interstellar"
                    rating="8.7"
                    year="2014"
                    runtime="2h 49m"
                    genres={["Sci-Fi", "Adventure", "Drama"]}
                    backdrop="https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
                    poster="https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
                />
                {/* Action Buttons */}
                <MovieActions />
                {/* Main Content Area */}
                <main className="px-6 space-y-10">
                    {/* Plot Summary */}
                    <PlotSummary overview="When Earth becomes uninhabitable..." />
                    {/* Cast Row */}
                    <section className="space-y-4">
                        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">

                            <CastCard
                                name="Matthew McConaughey"
                                character="Cooper"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBva-GOSnyRqQBBvn1hAstCmX2OdyNtdU1M-P5j1NLkxl0BGgWd8BkoEtjcESIuUhDt4r7RvZzp_9aRaPjfkizYFpNZODd35KJpQ-FpgNj9nUB9vCrKu3tSbVQBf6bpbxgX0Ho5SdrsC_WI4viqm8Wb5xRdwZUZBvhsagGiMR3xKZ5-54jg7JM4wa_nox3vtrKEB_QqyZg3gjTjtc-brXTdBqWJ0HRvx0YEe1mNSxWR2v3OkZbMfLKC_MPF3a1C6GWwKyzKs2OuTd_D"
                            />

                            <CastCard
                                name="Anne Hathaway"
                                character="Brand"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDpjFUOh4T9slb5RNFUectsRpKoJ0VD9zjFZhYrSsZfMvd7jvdqp4HxjXJboDXprsCiwVvwUsoXHv7KkSGe-Hk3mAt1MnxWRfOyBpcGsSh5qepAH_5b33k_gC3pwva25_FMDcM1Emz8_uWrjLvN6-5JR1GAdgvtbibaTiqZJtRk_T-FX-n-qLZ3PdeQkI-hOQPhjHzs2G7i3SObEYI4XkyGgGj1zO-Q54ZnqsUx2GFaBd9-tdoG34t0rnDF59fQYH2iMqanYoL3_9XN"
                            />

                            <CastCard
                                name="Jessica Chastain"
                                character="Murphy"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDevsF5S4jDrAHrRwJXOIqMPYLpux5NJF-eC-qZebpbx8GTZrK3DuCvl9M7aUpkiCGaQVaqFZWNVtybupuZVolFTDJ9lp88cmx_mlwoIEadLBHf97qG2qOtBXrffjcb50w5xC9wbX6uB_vx4Qz4OF1tDhQjGmDDKh5Fn57c87nYwnKDg-LXbuuCIThXX6dWw_oW5EGLAAVBJ_aktawHMb0Vcfd66bQsDvdreyidZowPgrx6LOms8FaIUlLI5J0R53dlsuKLB51LlTeC"
                            />

                            <CastCard
                                name="Michael Caine"
                                character="Prof. Brand"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAcPcflmp1zMwzWdn5dZoNMs3nuqao0HRreYVTsbtUxz8Bux_8_dBlnJNaX5-BJRgwiFzN16y8OC_21vVXulBVcMmJy_HzpvYrxkvHu8sRykjRN-1j7znDu0cIMzbP_1giNcRQu5WCshua6gvj_J0D7B1WgWcTPCJOnG1DO2kg38xSIBABjIsLDMbRr8fDiy7a9ppKpr2YKP6hUHJfhDt-6xyPtouVbqBctkrVPkFDvRddn7kAD-vT_0lRuPgoBaIxvF_XgHvABlJv5"
                            />

                            <CastCard
                                name="Matt Damon"
                                character="Mann"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDhaIWVQfVzosywCk9JF-Ftaj80i0P4rPxi9BJj7r1DfZvupIxalZaBYACV41M_5Y0YjM3Z4aBMTPr3w02AgfyS8sPHJi3Bj5auzfwGiRJf5ttTO7wdkNN0atR2I9dhLUkrUAfSaDmFBksEzlx5FbWS3l2RaQ5oSBzCZN21ui_TTOWbjlGHoPrsv4a0y3ltGruZC3V7-JLF4Amxojz-lwK87senuRrVMFj5t2wCh9NcqjMlITOzCqdgulm0thwu_Rxm3ZmXi1Swyn4m"
                            />

                        </div>
                    </section>
                    {/* Similar Movies Row */}
                    <MovieRow title="You Might Also Like">

                        <MovieCard
                            title="The Martian"
                            year="2015"
                            rating="8.0"
                            image="https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg"
                        />

                        <MovieCard
                            title="Inception"
                            year="2010"
                            rating="8.8"
                            image="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
                        />

                        <MovieCard
                            title="Gravity"
                            year="2013"
                            rating="7.7"
                            image="https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg"
                        />

                        <MovieCard
                            title="Blade Runner 2049"
                            year="2017"
                            rating="8.0"
                            image="https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
                        />

                    </MovieRow>
                    <MovieRow title="Recommend">

                        <MovieCard
                            title="The Martian"
                            year="2015"
                            rating="8.0"
                            image="https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg"
                        />

                        <MovieCard
                            title="Inception"
                            year="2010"
                            rating="8.8"
                            image="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
                        />

                        <MovieCard
                            title="Gravity"
                            year="2013"
                            rating="7.7"
                            image="https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg"
                        />

                        <MovieCard
                            title="Blade Runner 2049"
                            year="2017"
                            rating="8.0"
                            image="https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
                        />

                    </MovieRow>
                </main>
                {/* Bottom Navigation Bar */}
                <Footer />
                <BottomNav />
            </div>
        </>
    )
}

export default MovieDetails