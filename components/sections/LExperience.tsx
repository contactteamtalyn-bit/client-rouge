import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'

const badges = ['Terrasse', 'Privatisation', '7j/7']

export function LExperience() {
  return (
    <section className="bg-[#FBF7F2] py-24 text-[#1A1210] md:py-28">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[35fr_65fr] lg:gap-16">
        {/* Texte */}
        <div>
          <Reveal>
            <p className="eyebrow text-[#B22333]">← L&apos;endroit</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-garamond text-[2.5rem] font-medium italic leading-[1.05] text-[#1A1210]">
              Intime.
              <br />
              Feutré.
              <br />
              <em className="text-[#B22333]">Sensuel.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-sm font-outfit text-[16px] font-light leading-relaxed text-[#1A1210]/75">
              Un restaurant pensé pour ceux qui veulent que chaque repas soit une expérience. Les lumières sont
              basses, la musique choisie, les tables espacées.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-[#1A1210]/15 px-4 py-2 font-outfit text-[12px] font-medium uppercase tracking-wide text-[#1A1210]/70"
                >
                  {b}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Offset stack — desktop */}
        <div className="relative hidden h-[560px] lg:block">
          <Reveal className="absolute left-0 top-[40px] z-10 w-[68%]">
            <div className="overflow-hidden rounded-xl shadow-2xl shadow-black/25">
              <SmartImage src="/images/salle/salle-main.jpg" alt="La salle de Rouge" className="h-[480px] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="absolute right-0 top-0 z-20 w-[44%]" delay={150}>
            <div className="rotate-2 overflow-hidden rounded-xl border-2 border-[#B22333]/30 shadow-xl shadow-black/40">
              <SmartImage src="/images/details/detail-01.jpg" alt="Le partage, un verre de vin" className="h-[280px] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal className="absolute bottom-0 left-[6%] z-20 w-[40%]" delay={300}>
            <div className="-rotate-2 overflow-hidden rounded-xl shadow-xl shadow-black/40">
              <SmartImage src="/images/salle/salle-detail.jpg" alt="Détail de la salle" className="h-[220px] w-full object-cover" />
            </div>
          </Reveal>
        </div>

        {/* Stack — mobile */}
        <Reveal className="grid grid-cols-2 gap-3 lg:hidden">
          <div className="col-span-2 overflow-hidden rounded-xl">
            <SmartImage src="/images/salle/salle-main.jpg" alt="La salle de Rouge" className="h-64 w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl border-2 border-[#B22333]/30">
            <SmartImage src="/images/details/detail-01.jpg" alt="Le partage" className="h-44 w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-xl">
            <SmartImage src="/images/salle/salle-detail.jpg" alt="Détail de la salle" className="h-44 w-full object-cover" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
