import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08
        }
    }
}

const item = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: "easeOut"
        }
    }
}

function MovieRow({ title, children }) {

    return (

        <section className="mt-12 px-4 max-w-7xl mx-auto">

            {/* Row Header */}
            <div className="flex items-center justify-between mb-6">

                <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    {title}
                </h3>

                <Link
                    to={`/discover?type=${title}`}
                    className="text-primary text-sm font-semibold hover:underline"
                >
                    View All
                </Link>

            </div>


            {/* Movie List */}
            <motion.div
                className="flex gap-4 overflow-x-auto overflow-y-visible hide-scrollbar pt-4 pb-4 -mx-4 px-4"
                variants={container}
                initial="hidden"
                animate="show"
            >

                {Array.isArray(children)
                    ? children.map((child, index) => (
                        <motion.div key={index} variants={item}>
                            {child}
                        </motion.div>
                    ))
                    : (
                        <motion.div variants={item}>
                            {children}
                        </motion.div>
                    )}

            </motion.div>

        </section>

    )
}

export default MovieRow