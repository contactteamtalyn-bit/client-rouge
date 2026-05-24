import { Star } from 'lucide-react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Reveal } from '@/components/ui/Reveal'

const avis = [
  {
    t: 'La meilleure viande de Paris 15. Entrecôte maturée parfaitement cuite, service irréprochable. On revient toutes les semaines.',
    n: 'Marc D.',
  },
  {
    t: 'Un endroit unique — l’ambiance est feutrée, la viande est exceptionnelle. La côte de bœuf pour deux est magistrale.',
    n: 'Sarah K.',
  },
  {
    t: 'Rouge est devenu notre restaurant préféré du quartier. Le service est aux petits soins.',
    n: 'Antoine B.',
  },
]

export function Avis() {
  return (
    <section id="avis" className="bg-[#1A1210] py-24 md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-[#B22333]">← Les avis</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 font-garamond text-[3rem] font-medium italic leading-tight text-[#FBF7F2]">
            4,9★ sur Google.
            <br />
            Ils sont revenus.
          </h2>
        </Reveal>

        <AnimatedGroup preset="slide" className="mt-12 grid gap-6 md:grid-cols-3">
          {avis.map((a) => (
            <figure key={a.n} className="flex h-full flex-col border border-[#B22333]/15 bg-[#221510] p-7">
              <span className="font-garamond text-[5rem] italic leading-[0.6] text-[#B22333]">“</span>
              <blockquote className="mt-3 flex-1 font-outfit text-[15px] font-light leading-relaxed text-[#FBF7F2]/80">
                {a.t}
              </blockquote>
              <span className="my-5 block h-px w-10 bg-[#C4862A]" />
              <figcaption className="flex items-center justify-between">
                <span className="font-outfit text-[14px] font-semibold text-[#FBF7F2]">{a.n}</span>
                <span className="flex gap-0.5 text-[#C4862A]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
