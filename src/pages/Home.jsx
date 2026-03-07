import Navbar from "../components/Navbar"

function Home() {
    return (
        <>
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-3xl">
                                movie
                            </span>
                            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                                CineScope
                            </h1>
                        </div>
                        <nav className="hidden md:flex items-center gap-6">
                            <a className="text-primary font-semibold" href="#">
                                Home
                            </a>
                            <a
                                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                                href="#"
                            >
                                Discover
                            </a>
                            <a
                                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                                href="#"
                            >
                                Favorites
                            </a>
                            <a
                                className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                                href="#"
                            >
                                TV Shows
                            </a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        <div className="hidden md:block h-8 w-8 rounded-full bg-primary/20 border border-primary/30 overflow-hidden">
                            <img
                                alt="Profile"
                                data-alt="User profile avatar"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP6KWn50pnStxFK-5hLZQRhAqegw-OK2vPFZT2IwFpAAMG4svl-ort-mtL-cINJaXYuqS72ZfBq685qoDBlbLT6ArGEpgC9GxBFwHXvcvTENJXJwxZRimgXatEBI7aqT1OEO0kbYTzKXIb6D3w7-G6wQ-wEY_vbJ1pau4io0nZm3tJSoDwAshd9iA0-_umKUIylWp7dD1C2Cui5vbWWVri7XUV-GgxOxO7YRqVZNbXd8RY_teYQ4mCcnsAO3CWjDt97yChy9_hx5iu"
                            />
                        </div>
                    </div>
                </div>
            </header>
            <main className="pb-24">
                {/* Hero Section */}
                <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        data-alt="Epic cinematic movie background with blue and orange lighting"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_1jdeJ3pFq8eEMhjVbCso7enmX-WDiS_hWjqqF6GiAiA62UZuIuKrHx-WJ1eIqR0qMqfYR4geZifvX4eTAd1b1OwtNKwQ4JyVIbSFpdtq9Zd0DPij7C0iAc555cLgFkhIeGOsqf-o4KnxUew0J2ZmOrQ04XcPlnXoHwAbQyFYgzVniC7OvU4vlBpv0Dk2LbHEU5i7ZyYb07CNOo04b9zuG-0V8WE-MUzkU4E8M0kxQS-kseW6bXv-D2sW9vsYouqY98JuhhYRwHe8")'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/20 to-transparent" />
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
                                revenge against the conspirators who destroyed his family. Facing a
                                choice between the love of his life and the fate of the known
                                universe, he endeavors to prevent a terrible future only he can
                                foresee.
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
                {/* Movie Row: Trending */}
                <section className="mt-12 px-4 max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full" />
                            Trending Now
                        </h3>
                        <a
                            className="text-primary text-sm font-semibold hover:underline"
                            href="#"
                        >
                            View All
                        </a>
                    </div>
                    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">
                        {/* Movie Cards */}
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for Oppenheimer"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjv2rEC_ZL2Q5szuiJpFDzVnw0sKkdIx-921BwIppGkleStojknEN75nSky_UrCnsQTZ_pzIT3fU8rB0vz_luy0RZq9H_t5ToL1huCpS51wN41ITpeMxHkhZsvGAN0uDRfIHblotiJ9e_8Nll7WM5iOjI3rdXiCnvhVxVPJPvt0gjj1KdUA5co5sK7kAYduttDpF3OHYrPXZ9hhSmnsT0q6DFwPXM8hKfN2glYQaE2PYG6XEUoeHD0pDd7UiQKmuJWAqrVnJqt0bEk"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.4
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">Oppenheimer</h4>
                            <p className="text-xs text-slate-500">2023</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for Fast X"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCuvYDQxEQeARJO1bhzkZsp4Jjtyo8Tmo2J7gNdenj_CXJqR6xTEnuXntni4dYUyVHYsGEdp6-J24E3Ts9hif3dAbd_I9cay6ad9aqfnB4WdYuKmnsQfFybriMd7GK5LIhdPNwpAhWiMDJ7Vyn_NjBdMMl4mQMPu5B8Gu3lBjq1vWQIYMQ1hXTPO9ueyrV6ruzybZYqgVo_5rYhAgftiKUnPomloIyFVCF6fmI_EZoi95LD0xZ959MYLnD51q8W49mXFiv0-er1IWa"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    7.2
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">Fast X</h4>
                            <p className="text-xs text-slate-500">2023</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for The Creator"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSWS2IAKKBjOs_660eXRzVX-LTTVuHbc6rxhQ_02B2bJCHYvhWxgQzRvICf1WcQU8bfpxxfr7eiygr1ooGGxe-HvCV8im6L9Jp3XLTEaNcy-YobTrY45uKOO0lVx3W8ZMoA2McxKN8ekTxWclIvxgYZH80UhDmA5jqMV_yLakkzOEfm8OGFIYzw_dgrPCyacHe5xVrILMcEVrirg1mw97xsY-Ll4qM06M6J8U--AFvV_tOyd1pjwj6maIcftl8-oaHuczv6kaUK4OJ"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    7.1
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">The Creator</h4>
                            <p className="text-xs text-slate-500">2023</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for Spider-Man: Across the Spider-Verse"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjwTrqaQWUAuj6AG2W9V5eCXZ9EXK_th0XH6lLW_QdVjnqj7rfznl3dYuhL5OUgDoqVvUsJYURdx04p1BwuWxzinQ-hV-bCh9eA4Hf5xYnvUh0D4smUhxkv-narNPHqWDJRZsluwNkjhcghRTlWQQ8SjUPDiyMZWHij3h3C7vP-U15B20UDZF_dMl_Ijp8AjwPm9UkVmANsd3i_eJ_WIt91eywv-3yOioEw9XWK3Zq_owA5znoC9SoEsRjyGjGoRVHXLHnhClROLiM"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.9
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">
                                Across the Spider-Verse
                            </h4>
                            <p className="text-xs text-slate-500">2023</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for Barbie"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-JUPVvnKA_DcKXZvt-u4F0zrzdsRMa3m4MRAnJEFCAbcDI01Qb9dyL1ApPRIiZ47l_yVOWTLpiitSXRz66hO_CX9YjbmFVyiCfcnkXdOPtNhTwlQoBPsuaohd4mxs7zrQypb8Iz9CmbEXYpG__Rf-oWnXUBlX-a54ASXmtmyLkL34swUACbaQm52OR0jJaljF2LFhZH21mIVIa6WQec4Jiii9ik6mV0TuIfDNB_5wNpKdhPO_3g6xqc_gRJUqL9JbzkwH-2Ia83e5"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    7.5
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">Barbie</h4>
                            <p className="text-xs text-slate-500">2023</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for Guardians of the Galaxy Vol. 3"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU40BLAXNzNqfxVSw3cxEfBwK0BAlOhpkcWIGujqbE6T8BNI-Zade2mLbz2BZ4MLihBSTdwGB0VOVshDzAqRwBC2cN42cU-tnBRWJDNhypp9Ltdht4KddFbToqq9TP3q24oq0MeWGSBDfP3w8fp-ySOomwKwG2T1Fb_drrRs3118dzKpyn4CrzB3s782ilNJdJqm7hRrGG75Eb_j7vbwI6g_dsntXVAYjn6uREHePFNeQ3d1qdhhAEWLTApmjMAko8zVd962X7e78c"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.1
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">GOTG Vol. 3</h4>
                            <p className="text-xs text-slate-500">2023</p>
                        </div>
                    </div>
                </section>
                {/* Movie Row: Popular */}
                <section className="mt-8 px-4 max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full" />
                            Popular Movies
                        </h3>
                        <a
                            className="text-primary text-sm font-semibold hover:underline"
                            href="#"
                        >
                            View All
                        </a>
                    </div>
                    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">
                        {/* More Movie Cards */}
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for John Wick: Chapter 4"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo0vPXpgw-twPAuVpJ6JEBYDG75lZ7fgp5AwKvY494wvgmh4yDigSjurHTCXbzGF14rdtEvf1yQnQmtKXeuxr_oY8giVPnnRXtu-mIhNJ7DuJxzCgFuXkYRnCpP_YIns_KOXDsaZoP0_3zliq1SPqRwEQBXOGi-5zH8wsS46XVcqiMbqAUiLrxmlgGly5-9kbUU5Ww55tuRE-RFyGluSqKgm1xjRdxKl-coWzd-9yU_odTdD0IHtF47v9xBmQs3ruSm7sSC49Xkg26"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    7.9
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">John Wick 4</h4>
                            <p className="text-xs text-slate-500">2023</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for The Batman"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNYmYHq5hma2B-cjm2TYNubyhlhMq1hTSRIn6fDLOPNr63JX3hDSzstQt1Kv6BSYAMcGtI0J7LgsNw8Q3h4GlMBL1PksjcFUUE4LkyBpR-en38fid5QQZbfcn-6Jli4dfWsatm31GVacLwW38Nl4TA-xHlxIGromlMCTCVQzqhMWnaImxMWpIbaB2HfLHZLTuKqmdbwFkrlamn3EmP3ixHoeeDvw0wwR4OZiweMwSKlmEupSWORU2A1E97f5GJwsy_ol_uuIMRUQDx"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.2
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">The Batman</h4>
                            <p className="text-xs text-slate-500">2022</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for Dune"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKwO3JPSeR7P-YSGrJLIGF7mWpWh7_owN9xudGNyaQDGnLU9as_1BH7INwyOpvnOXf53KxkjIsT9dgViCHF4VIBnEp_5oyhbJognlKLKQj047PJ9-aEwf3m4XgGF3ab2d1M6sBr1VEjJ-5yVKR0wiVFE-qx6srdUgnut71_176LDg8gyhOmxcgjS9ndIKlSKuEkuwUpfA26hy5Mq787TL0UYeG3vvw1axZo-CBAdV9GMiDaHZPRFe-kA4pE_hdtyAQKwDUVpvdB16Z"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.0
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">Dune: Part One</h4>
                            <p className="text-xs text-slate-500">2021</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for Top Gun: Maverick"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuARbwcn3BREG2RrR2q9miM2ZB58JEdzDfjicmWTzv_Lw-vth0pw8whebbhZ7nC8pqAAD8aHK7aV1ADYxXL8llyZ55Eklz6vEVXHl4mWJozDz3u_VI8PWc0CUL64VoWj_gNQvgqs2ZG8vx9xYT6JFW9C0GpxX90bIr1oydrx5dd1JAlEHU7Cadd5tT-eM2xo9If1aKiLJ9hpa0nICWrhoyGIj5GhCv_EenJFI0litPew16GEvXSDwPYlcgPbqjROYLqetqcFcqzj8UMM"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.3
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">Top Gun: Maverick</h4>
                            <p className="text-xs text-slate-500">2022</p>
                        </div>
                        {/* Duplicate for length */}
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Movie poster for Avatar"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD19gRWAWAJPOn-5Q7aYFitlNx7GOcAulaPo8laBIWEFSqvNuzPGGz8JazCV7w_-ZOobdF1s24K8B2PJgQV9Nt6GBaPeBbH4O_JgFghpJjc8veITkvjVeiViOcmHC_aGsoCtq2X_Y6UNfopEMlQgcKrpS1jcHc2DtHvVQGipyLiHAkF-7w0HVRhT0V7gyZWNiOp8j1mr3llmdyUhA9K_ddeOzsQv33dti9jwKpDIQmROREP1PLCLMN_xM8u7N-dy35GNnik8dlTyYKu"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    7.8
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">Avatar: Water</h4>
                            <p className="text-xs text-slate-500">2022</p>
                        </div>
                    </div>
                </section>
                {/* TV Shows Section */}
                <section className="mt-8 px-4 max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            <span className="w-1 h-6 bg-primary rounded-full" />
                            Top TV Shows
                        </h3>
                        <a
                            className="text-primary text-sm font-semibold hover:underline"
                            href="#"
                        >
                            View All
                        </a>
                    </div>
                    <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="TV Show poster for The Last of Us"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3B2G-ciMR7vZ1SjfCMG5q-lCLCQ6k-tre4VzWIGTWyRg-yfdX5WxjWO7qdHE0LGSh7TVFZ7g6Y-dfAsOxxvI-mLlnWatthBD1UAFnyVa6vdDtFSzdfIrIZSvqf12SBahYiw7lgmfGVjWxuJI8oK9owmx0YPBvIFWkHyovEZKZ6sHYna24Pki5pnAZXdarHY4PxCWkla3gogS26j8cFC3t5JB6BgCwy1tgwj6zUPQofSCXB9i_PUj10tv4q3WLQPPXpUlL1PDCvgO1"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.8
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">The Last of Us</h4>
                            <p className="text-xs text-slate-500">2023 • S1</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="TV Show poster for Succession"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd-FZYKulxtEhHXGPQK1r60sxwzRDVlNu-VAPkOtCt_3XdVO2fUvK2GPVl3omscsQ2e9Iu3BV7Ij7maJurW_N5wpQU830d1G3U9F6IoJkIl6Kh3QqYtPAIdWyYDVn5i9kUEXD0JpwNwYVG_J63-CPpPE6B59n5dLzo8fXVbtnE9QhHtZVy5k9VKSSeu02Z3kT5nGWr-uD0Qi4pDzYp4LgB4ZcgpmWwHvQCFU2jBu9mNI3kCGkfT_DJZrlyhbLI9rMM5748hljOjV9L"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.7
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">Succession</h4>
                            <p className="text-xs text-slate-500">2023 • S4</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="TV Show poster for Beef"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-c68NjaJqKShUgxdT00Nr2mTNPhm9RWxE_5XhrYZbikbJTpeYW3w3DAcbEeo55N4LCmCzb7VMCjYD5dKXTl6M2hYdhOYcqOefFVpDUrQpFm_AfyM34rN5FgTuTlnSVt3PjbadaDBQQImiOM-OduAQ63l5KSHqIPu2GGbBKEwPX89ky3lXwW70SyDnECP6BYdKFM0HOYhakJLVJHIR2_FUbPHIs0wienSkMx03MVpPpOeDMIl3wu_iji75ar6dl2ckr5Uo31VpwOp-"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.1
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">Beef</h4>
                            <p className="text-xs text-slate-500">2023 • S1</p>
                        </div>
                        <div className="flex-none w-40 md:w-48 group cursor-pointer">
                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3">
                                <img
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="TV Show poster for The Bear"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVJGwD6m4dv76IkMpf0xOJRyC3RyUWJWju11UmUpQyGSNljxEqv1VNvs_6gIuDExf39hp6LFyF8fbeaNFJAOxx7HnoipTYp_RBmBofeVlHp4pHnvy3e7FIdLrA026cgbMif6_ABd-3G1ZXq4zodwz_cHN7ssYfk1_1GnsNJZlfCDV30t0rWzY-XH5t730oZW6VRkaM0-XZvVfNFCOuYq99MIA1uJbGO_hXGC56ysT65d-CbKGXss4xL5kZwthX-V-LJLcOHJ6ph9qO"
                                />
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-yellow-500 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px] fill-1">
                                        star
                                    </span>{" "}
                                    8.6
                                </div>
                            </div>
                            <h4 className="font-bold text-sm truncate">The Bear</h4>
                            <p className="text-xs text-slate-500">2023 • S2</p>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="bg-surface-dark py-12 px-4 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-2xl">
                                movie
                            </span>
                            <h1 className="text-lg font-bold tracking-tight uppercase">
                                CineScope
                            </h1>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                            The ultimate platform for movie lovers to discover and track their
                            favorite films and TV shows.
                        </p>
                    </div>
                    <div className="flex gap-8 text-slate-400">
                        <a className="hover:text-primary transition-colors" href="#">
                            Privacy
                        </a>
                        <a className="hover:text-primary transition-colors" href="#">
                            Terms
                        </a>
                        <a className="hover:text-primary transition-colors" href="#">
                            Help
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <a
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-xl">
                                brand_family
                            </span>
                        </a>
                        <a
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-xl">share</span>
                        </a>
                        <a
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-xl">
                                alternate_email
                            </span>
                        </a>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
                    © 2024 CineScope. Data provided by TMDB.
                </div>
            </footer>
            {/* Mobile Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background-dark/90 backdrop-blur-xl border-t border-white/10 px-6 py-3">
                <div className="flex items-center justify-between">
                    <a className="flex flex-col items-center gap-1 text-primary" href="#">
                        <span className="material-symbols-outlined fill-1">home</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                            Home
                        </span>
                    </a>
                    <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
                        <span className="material-symbols-outlined">explore</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                            Discover
                        </span>
                    </a>
                    <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
                        <span className="material-symbols-outlined">favorite</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                            Favorites
                        </span>
                    </a>
                    <a className="flex flex-col items-center gap-1 text-slate-500" href="#">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                            Profile
                        </span>
                    </a>
                </div>
            </div>
        </>

    )
}

export default Home