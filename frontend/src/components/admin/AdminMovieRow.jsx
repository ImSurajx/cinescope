function AdminMovieRow({ movie, onEdit, onDelete }) {
  return (
    <tr className="hover:bg-primary/5 transition-colors">

      <td className="px-6 py-4">
        <div
          className="size-14 rounded-lg bg-center bg-cover border border-primary/10"
          style={{ backgroundImage: `url(${movie.poster})` }}
        />
      </td>

      <td className="px-6 py-4">
        <p className="font-bold text-white">{movie.title}</p>
        <p className="text-xs text-slate-500">{movie.genre}</p>
      </td>

      <td className="px-6 py-4 text-slate-300 text-sm">
        {movie.release_date}
      </td>

      <td className="px-6 py-4">
        <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold uppercase rounded-full">
          {movie.genre}
        </span>
      </td>

      <td className="px-6 py-4 text-right">

        <div className="flex justify-end gap-2">

          <button
            onClick={() => onEdit(movie)}
            className="p-2 hover:bg-primary/20 rounded-lg text-slate-400 hover:text-primary"
          >
            <span className="material-symbols-outlined">edit</span>
          </button>

          <button
            onClick={() => onDelete(movie)}
            className="p-2 hover:bg-red-500/20 rounded-lg text-slate-400 hover:text-red-500"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>

        </div>

      </td>

    </tr>
  )
}

export default AdminMovieRow