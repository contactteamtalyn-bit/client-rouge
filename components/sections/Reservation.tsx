import { AnimatedGroup } from '@/components/ui/animated-group'
import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function Reservation() {
  return (
    <section id="reservation" className="flex min-h-[70vh] items-center bg-[#B22333] py-24 text-[#FBF7F2]">
      <div className="wrap w-full text-center">
        <Reveal>
          <p className="font-outfit text-[12px] font-semibold uppercase tracking-[0.3em] text-[#FBF7F2]/60">Ce soir ?</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-6 font-garamond font-extrabold leading-[0.98] text-[#FBF7F2]" style={{ fontSize: 'clamp(3rem, 8.5vw, 7.5rem)' }}>
            Votre table
            <br />
            <em className="font-medium">vous attend.</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-7 max-w-xl font-outfit text-[18px] font-light text-[#FBF7F2]/70">
            Ouvert 7j/7 · 12h – 23h45 · 38 Avenue de Suffren, Paris 15e.
          </p>
        </Reveal>

        <AnimatedGroup preset="zoom" className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <DemoCTA
            ariaLabel="Réserver maintenant"
            className="rounded-xl bg-[#FBF7F2] px-8 py-4 font-outfit text-[14px] font-bold uppercase tracking-wide text-[#B22333] transition-transform hover:scale-[1.03]"
          >
            Réserver maintenant
          </DemoCTA>
          <DemoCTA
            ariaLabel="Appeler le restaurant"
            className="px-6 py-4 font-outfit text-[14px] font-semibold uppercase tracking-wide text-[#FBF7F2]/70 transition-colors hover:text-[#FBF7F2]"
          >
            09 86 16 63 64
          </DemoCTA>
        </AnimatedGroup>
      </div>
    </section>
  )
}
