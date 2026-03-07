function AdminAddMovieForm() {
  return (
    <section className="xl:col-span-1">

      <div className="bg-surface-dark rounded-xl border border-primary/10 overflow-hidden">

        <div className="p-6 border-b border-primary/10">
          <h3 className="text-lg font-bold text-white">
            Add New Movie
          </h3>
        </div>

        <form className="p-6 space-y-4">

          {/* Title */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Title
            </label>

            <input
              type="text"
              placeholder="Movie title"
              className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2 focus:ring-primary focus:border-primary"
            />
          </div>

          {/* Poster URL */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Poster URL
            </label>

            <input
              type="url"
              placeholder="https://..."
              className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2"
            />
          </div>

          {/* Genre + Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>
              <label className="block text-sm text-slate-400 mb-1">
                Genre
              </label>

              <select className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2">
                <option>Action</option>
                <option>Sci-Fi</option>
                <option>Drama</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-1">
                Category
              </label>

              <select className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2">
                <option>Movie</option>
                <option>TV Show</option>
              </select>
            </div>

          </div>

          {/* Release Date */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Release Date
            </label>

            <input
              type="date"
              className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2"
            />
          </div>

          {/* Trailer */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Trailer URL
            </label>

            <input
              type="url"
              placeholder="YouTube link"
              className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">
              Description
            </label>

            <textarea
              rows="3"
              placeholder="Short movie plot..."
              className="w-full bg-background-dark border border-primary/10 rounded-lg text-white px-3 py-2"
            />
          </div>

          {/* Button */}
          <button className="w-full py-3 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2">

            <span className="material-symbols-outlined">
              add_circle
            </span>

            Add Movie

          </button>

        </form>

      </div>

    </section>
  )
}

export default AdminAddMovieForm