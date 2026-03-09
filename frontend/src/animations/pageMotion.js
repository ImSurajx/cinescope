export const pageMotion = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.98
    },

    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.35,
            ease: "easeOut"
        }
    },

    exit: {
        opacity: 0,
        y: -30,
        scale: 0.98,
        transition: {
            duration: 0.25,
            ease: "easeIn"
        }
    }
}