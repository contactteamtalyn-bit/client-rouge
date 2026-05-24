import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'
import { DemoCTA } from '@/components/DemoModal'

export function Terrasse() {
  return (
    <section id="terrasse" className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#E8D4C4] py-20 text-[#1A1210]">
      {/* Photo diagonale — desktop */}
      <div
        className="absolute inset-y-0 left-0 hidden w-[65%] md:block"
        style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)' }}
      >
        <SmartImage src="/images/salle/terrasse.jpg" alt="La terrasse de Rouge, avenue de Suffren" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="wrap relative z-10 w-full">
        {/* Photo — mobile */}
        <div className="mb-8 overflow-hidden rounded-xl md:hidden">
          <SmartImage src="/images/salle/terrasse.jpg" alt="La terrasse de Rouge" className="h-56 w-full object-cover" />
        </div>

        <div className="md:ml-auto md:w-[42%]">
          <Reveal>
            <p className="eyebrow text-[#B22333]">← La terrasse</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-garamond text-[3rem] font-medium italic leading-[1.05] text-[#1A1210]">
              La terrasse.
              <br />
              <em className="text-[#B22333]">Privatisez-nous.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-md font-outfit text-[16px] font-light leading-relaxed text-[#1A1210]/75">
              Terrasse sur l&apos;avenue de Suffren. Privatisation possible pour vos événements, anniversaires et
              dîners d&apos;entreprise.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DemoCTA
                ariaLabel="Réserver la terrasse"
                className="rounded-xl bg-[#B22333] px-6 py-3.5 font-outfit text-[13px] font-semibold uppercase tracking-wide text-[#FBF7F2] transition-colors hover:bg-[#9B1E2A]"
              >
                Réserver la terrasse
              </DemoCTA>
              <DemoCTA
                ariaLabel="Demander une privatisation"
                className="rounded-xl border border-[#1A1210]/25 px-6 py-3.5 font-outfit text-[13px] font-semibold uppercase tracking-wide text-[#1A1210] transition-colors hover:border-[#B22333] hover:text-[#B22333]"
              >
                Privatisation
              </DemoCTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
