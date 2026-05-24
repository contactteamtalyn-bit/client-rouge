export function DemoBanner() {
  return (
    <a
      href="https://instagram.com/maison.talyn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-0 right-0 top-0 z-[60] block border-b border-[#B22333] bg-[#1A1210] text-center"
    >
      <p className="overflow-hidden whitespace-nowrap px-4 py-2.5 font-outfit text-[10.5px] uppercase tracking-[0.16em] text-[#FBF7F2]/90 sm:text-[11px] sm:tracking-[0.2em]">
        Maquette démo
        <span className="hidden md:inline"> · Réalisée par Maison Talyn pour Rouge · Non finalisée</span>
        {' · '}
        <span className="text-[#C4862A]">@maison.talyn</span>
      </p>
    </a>
  )
}
