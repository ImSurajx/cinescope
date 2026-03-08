function CastCard({ name, character, image }) {
  return (
    <div className="flex flex-col gap-2 flex-shrink-0 w-24 items-start">
      
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={name}
        />
      </div>

      <p className="text-xs font-bold text-slate-100 text-left">
        {name}
      </p>

      <p className="text-[10px] text-slate-400 text-left">
        {character}
      </p>

    </div>
  )
}

export default CastCard