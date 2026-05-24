const stats = [
  { num: '4,9★', label: 'Avis Google · Exceptionnel' },
  { num: '7j/7', label: '12h – 23h45' },
  { num: '352', label: 'Avis vérifiés' },
  { num: '∞', label: 'Viandes d’exception' },
]

export function StatStrip() {
  return (
    <section className="bg-[#B22333] text-[#FBF7F2]">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex min-h-[140px] flex-col items-center justify-center px-4 py-10 text-center ${
              i < stats.length - 1 ? 'border-b border-[#FBF7F2]/15 md:border-b-0 md:border-r' : ''
            } ${i === 0 ? 'border-r border-[#FBF7F2]/15 md:border-r' : ''} ${i === 1 ? 'md:border-r' : ''}`}
          >
            <span className="font-garamond text-[3.5rem] font-bold leading-none">{s.num}</span>
            <span className="mt-3 max-w-[12rem] font-outfit text-[11px] font-medium uppercase tracking-[0.18em] text-[#FBF7F2]/75">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
