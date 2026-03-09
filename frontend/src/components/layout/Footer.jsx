import { motion } from "framer-motion"

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface-dark py-12 px-4 border-t border-white/5"
        >

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start gap-4">

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-primary text-2xl">
                            movie
                        </span>

                        <h1 className="text-lg font-bold tracking-tight uppercase">
                            CineScope
                        </h1>
                    </motion.div>

                    <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                        The ultimate platform for movie lovers to discover and track their
                        favorite films and TV shows.
                    </p>

                </div>


                {/* Links */}
                <div className="flex gap-8 text-slate-400">

                    <FooterLink label="Privacy" />
                    <FooterLink label="Terms" />
                    <FooterLink label="Help" />

                </div>


                {/* Social Icons */}
                <div className="flex gap-4">

                    <SocialIcon icon="brand_family" />
                    <SocialIcon icon="share" />
                    <SocialIcon icon="alternate_email" />

                </div>

            </div>


            {/* Bottom Text */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600 text-xs"
            >
                © 2024 CineScope. Data provided by TMDB.
            </motion.div>

        </motion.footer>
    )
}


/* Footer Link Component */

function FooterLink({ label }) {

    return (

        <motion.a
            href="#"
            whileHover={{ y: -2 }}
            className="relative hover:text-primary transition-colors"
        >
            {label}

            <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.25 }}
            />

        </motion.a>

    )

}


/* Social Icon Component */

function SocialIcon({ icon }) {

    return (

        <motion.a
            href="#"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
        >
            <span className="material-symbols-outlined text-xl">
                {icon}
            </span>
        </motion.a>

    )

}

export default Footer