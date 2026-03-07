function AdminMovieRow({ title, studio, date, genre, image }) {
  return (
    <tr className="hover:bg-primary/5 transition-colors">

      <td className="px-6 py-4">
        <div
          className="size-14 rounded-lg bg-center bg-cover border border-primary/10"
          style={{ backgroundImage: `url(${image})` }}
        />
      </td>

      <td className="px-6 py-4">
        <p className="font-bold text-white">{title}</p>
        <p className="text-xs text-slate-500">{studio}</p>
      </td>

      <td className="px-6 py-4 text-slate-300 text-sm">
        {date}
      </td>

      <td className="px-6 py-4">
        <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase rounded-full">
          {genre}
        </span>
      </td>

      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">

          <button className="p-2 hover:bg-primary/20 rounded-lg text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-xl">edit</span>
          </button>

          <button className="p-2 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-500 transition-colors">
            <span className="material-symbols-outlined text-xl">delete</span>
          </button>

        </div>
      </td>

    </tr>
  )
}

export default AdminMovieRow