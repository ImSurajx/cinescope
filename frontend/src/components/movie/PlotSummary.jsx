function PlotSummary({ overview }) {
    return (
        <section className="space-y-3">

            <h3 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">
                Plot Summary
            </h3>

            <p className="text-slate-300 leading-relaxed text-lg max-w-3xl">
                {overview}
            </p>

        </section>
    )
}

export default PlotSummary