function Login() {
    return (
        <div
            className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKX7ENA_IjmHvXmYo1wvS4rMYheJffpAWoKASMF43oUScQ7VwIIjhJQOj-DpHfxF9AEFxZ86ivXEjLpv5jhmCdDpkpTyRUjT_azxEwycaW2YciFRkyFMIZ2UUb_ywWMgNqg2S2ciTTGvWcu_Xw_gVvEDkYcfZMyZ82IE7bMR-tAWtCe-TCetLfdBKA9q6Tde-wN2q6D_SzTPMt-NWKiZHYMLNNe2J2jRNgKn2PWonZTFc5zogO4BPVJQBBAzCR0ZvnCQpFnL1TKnb0")'
            }}
        >

            {/* Background Glow Effects */}
            <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full -top-40 -left-40"></div>

            <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full -bottom-40 -right-40"></div>

            <div className="absolute w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>


            {/* Login Card */}
            <div className="relative w-full max-w-md overflow-hidden bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl">

                {/* Header Image */}
                <div className="relative h-48 w-full overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>

                    <div
                        className="w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNfD-hZGT2SAWy_JFq_Vru_pZuwhWgGdynD9JPq2YvbctSjYKOMEHPlw1yL7uxWTDTc79XDvzmPDB13gR5t1Q7-zs-l_upmNxEc6ysNMQhcbV_GBPZsVleJCI6nJO0Baxpw_8RSPJuW3QCviT8IexH36cg0m-W5-4xUqSgQ54UlHat6Wk8lncWKa0X7SGKFMrEVVi-FbMKYMwnwQIW_JVxpuxgOnd-NpgmE7qgXv5DdJNWm0gyl828MnOLySoSWhk1fcz-9gMifNT9")'
                        }}
                    ></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">

                        <div className="flex items-center gap-2 mb-2">

                            <span className="material-symbols-outlined text-primary text-3xl">
                                movie
                            </span>

                            <h2 className="text-white text-2xl font-bold tracking-tight">
                                CineScope
                            </h2>

                        </div>

                    </div>

                </div>


                {/* Form Section */}
                <div className="p-6 sm:p-8">

                    <h1 className="text-white text-2xl font-bold mb-1">
                        Welcome Back
                    </h1>

                    <p className="text-slate-400 text-sm mb-8">
                        Log in to your CineScope account to continue
                    </p>


                    <form className="space-y-4">

                        {/* Email */}
                        <div className="flex flex-col gap-2">

                            <label className="text-slate-300 text-sm font-medium px-1">
                                Email Address
                            </label>

                            <div className="relative">

                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">
                                    mail
                                </span>

                                <input
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl h-12 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder:text-slate-600"
                                />

                            </div>

                        </div>


                        {/* Password */}
                        <div className="flex flex-col gap-2">

                            <div className="flex justify-between items-center px-1">

                                <label className="text-slate-300 text-sm font-medium">
                                    Password
                                </label>

                                <span className="text-primary text-xs font-semibold cursor-pointer hover:underline">
                                    Forgot password?
                                </span>

                            </div>

                            <div className="relative">

                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">
                                    lock
                                </span>

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl h-12 pl-12 pr-12 focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder:text-slate-600"
                                />

                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                                >
                                    <span className="material-symbols-outlined text-lg">
                                        visibility
                                    </span>
                                </button>

                            </div>

                        </div>


                        {/* Login Button */}
                        <div className="pt-4">

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-primary/20"
                            >
                                Login
                            </button>

                        </div>

                    </form>


                    {/* Signup */}
                    <div className="mt-8 text-center">

                        <p className="text-slate-400 text-sm">

                            Don't have an account?

                            <span className="text-primary font-bold hover:underline ml-1 cursor-pointer">
                                Sign Up
                            </span>

                        </p>

                    </div>

                </div>


                {/* Decorative Glow */}
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            </div>

        </div>
    )
}

export default Login