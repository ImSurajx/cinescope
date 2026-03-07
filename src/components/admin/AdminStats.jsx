function AdminStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {[
        { title: "Total Movies", value: "1,240", growth: "+5.2%" },
        { title: "Total Users", value: "45.2k", growth: "+12.4%" },
        { title: "Active Users", value: "12.8k", growth: "+8.1%" },
      ].map((stat, index) => (

        <div key={index} className="bg-surface-dark p-6 rounded-xl border border-primary/5 shadow-xl flex flex-col justify-between min-h-[140px]">

          <div>
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">
              {stat.title}
            </span>

            <p className="text-3xl font-bold text-white mt-1">
              {stat.value}
            </p>
          </div>

          <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>

            <span>{stat.growth}</span>
          </div>

        </div>

      ))}

    </div>
  )
}

export default AdminStats