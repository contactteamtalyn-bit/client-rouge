'use client'

import { useRef, useState } from 'react'
import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

type Viande = { num: string; n: string; d: string; p: string; img: string }

const viandes: Viande[] = [
  { num: '01', n: 'Côte de bœuf', d: 'Maturée, pour deux, grillée à la braise. Le partage par excellence.', p: '78€', img: '/images/viandes/viande-01.jpg' },
  { num: '02', n: 'Entrecôte maturée', d: '28 jours de maturation, persillée à cœur, fondante.', p: '38€', img: '/images/viandes/viande-02.jpg' },
  { num: '03', n: 'Faux-filet', d: 'Black Angus, tendre et puissant, frites maison.', p: '36€', img: '/images/viandes/viande-03.jpg' },
  { num: '04', n: 'Le Burger Rouge', d: 'Steak haché, pain brioché toasté, frites maison.', p: '19€', img: '/images/viandes/viande-04.jpg' },
]

export function LesViandes() {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    const el = scroller.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const prog = max > 0 ? el.scrollLeft / max : 0
    setActive(Math.round(prog * (viandes.length - 1)))
  }
  const goTo = (i: number) => {
    const el = scroller.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    el.scrollTo({ left: max * (i / (viandes.length - 1)), behavior: 'smooth' })
  }

  return (
    <section id="viandes" className="overflow-hidden bg-[#1A1210] py-24 md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-[#B22333]">← Nos viandes</p>
        </Reveal>
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal delay={60}>
            <h2 className="max-w-lg font-garamond text-[3rem] font-medium italic leading-[1.05] text-[#FBF7F2]">
              Des pièces d&apos;exception,
              <br />
              choisies pour vous.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-outfit text-[15px] font-light text-[#FBF7F2]/50">Glissez pour découvrir →</p>
          </Reveal>
        </div>
      </div>

      <div
        ref={scroller}
        onScroll={onScroll}
        className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:px-[max(1.5rem,calc((100vw-1200px)/2+48px))]"
      >
        {viandes.map((v) => (
          <div
            key={v.num}
            className="group relative h-[520px] w-[280px] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#B22333]/15 sm:w-[380px]"
          >
            <SmartImage src={v.img} alt={v.n} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <span
              className="pointer-events-none absolute right-3 top-0 font-garamond text-[8rem] italic leading-none"
              style={{ color: 'rgba(251,247,242,0.06)' }}
            >
              {v.num}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="font-outfit text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C4862A]">Viande d&apos;exception</span>
              <h3 className="mt-2 font-garamond text-[26px] italic text-[#FBF7F2]">{v.n}</h3>
              <p className="mt-1.5 font-outfit text-[13px] font-light leading-snug text-[#FBF7F2]/60">{v.d}</p>
              <p className="mt-3 font-outfit text-[18px] font-bold text-[#C4862A]">{v.p}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {viandes.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Voir la viande ${i + 1}`}
            className={cn('h-2 rounded-full transition-all duration-300', active === i ? 'w-6 bg-[#B22333]' : 'w-2 bg-[#FBF7F2]/25')}
          />
        ))}
      </div>
    </section>
  )
}
