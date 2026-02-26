const Marquee = () => {
  const text = 'SELECTED WORKS \u2022 FEATURE PROJECTS \u2022 CASE STUDIES \u2022 '

  return (
    <div className="bg-[#c8ff00] py-3 overflow-hidden border-y-2 border-black">
      <div className="animate-marquee whitespace-nowrap flex">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-sm md:text-base font-black uppercase tracking-widest text-black mx-4"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
