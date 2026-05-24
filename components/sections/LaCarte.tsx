import { Reveal } from '@/components/ui/Reveal'

type Item = { n: string; d?: string; p: string; signature?: boolean }

const entrees: Item[] = [
  { n: 'Tartare de bœuf façon maison', d: 'Coupé au couteau, assaisonné minute.', p: '16€' },
  { n: 'Burrata, tomates confites', d: 'Crémeuse, huile d’olive, basilic.', p: '14€' },
  { n: 'Os à moelle rôti', d: 'Sel de Guérande, pain grillé.', p: '12€' },
  { n: 'Foie gras de canard maison', d: 'Mi-cuit, chutney de saison.', p: '18€' },
]

const desserts: Item[] = [
  { n: 'Mousse au chocolat maison', d: 'Chocolat noir intense.', p: '10€' },
  { n: 'Crème brûlée vanille bourbon', d: 'Croûte caramélisée minute.', p: '9€' },
  { n: 'Fondant chocolat', d: 'Cœur coulant, glace vanille.', p: '11€' },
  { n: 'Plateau de fromages affinés', d: 'Sélection du moment.', p: '14€' },
]

const viandes: Item[] = [
  { n: 'Entrecôte maturée 28 jours', d: 'La signature de la maison.', p: '38€', signature: true },
  { n: 'Côte de bœuf (pour 2)', d: 'À partager, grillée à la braise.', p: '78€', signature: true },
  { n: 'Faux-filet de Black Angus', d: 'Tendre, persillé.', p: '36€' },
  { n: 'Pièce du boucher', d: 'Selon arrivage, demandez-nous.', p: 'var.' },
]

const accompagnements = ['Frites maison', 'Purée à la truffe', 'Légumes de saison', 'Salade verte']

function Ligne({ it }: { it: Item }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-[#FBF7F2]/10 pb-4">
      <div>
        <h4 className={`font-garamond text-[18px] italic ${it.signature ? 'text-[#FBF7F2]' : 'text-[#FBF7F2]/90'}`}>
          {it.n}
          {it.signature && <span className="ml-2 align-middle font-outfit text-[9px] font-semibold uppercase not-italic tracking-wider text-[#B22333]">★ signature</span>}
        </h4>
        {it.d && <p className="mt-1 font-outfit text-[13px] font-light text-[#FBF7F2]/50">{it.d}</p>}
      </div>
      <span className="shrink-0 font-outfit text-[15px] font-bold text-[#C4862A]">{it.p}</span>
    </div>
  )
}

function Bloc({ title, items }: { title: string; items: Item[] }) {
  return (
    <div>
      <p className="mb-5 font-outfit text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B22333]">{title}</p>
      <div className="space-y-4">
        {items.map((it) => (
          <Ligne key={it.n} it={it} />
        ))}
      </div>
    </div>
  )
}

export function LaCarte() {
  return (
    <section id="carte" className="bg-[#221510] py-24 text-[#FBF7F2] md:py-28">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow text-[#B22333]">← La carte</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 font-garamond text-[3rem] font-medium italic leading-tight text-[#FBF7F2]">Ce soir, on mange.</h2>
        </Reveal>

        <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-2">
          <Reveal delay={80} className="space-y-12">
            <Bloc title="Entrées" items={entrees} />
            <Bloc title="Desserts" items={desserts} />
          </Reveal>

          <Reveal delay={140} className="space-y-12">
            <Bloc title="Les viandes" items={viandes} />
            <div>
              <p className="mb-5 font-outfit text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B22333]">Accompagnements</p>
              <div className="flex flex-wrap gap-2.5">
                {accompagnements.map((a) => (
                  <span key={a} className="rounded-full border border-[#FBF7F2]/15 px-4 py-2 font-outfit text-[13px] font-light text-[#FBF7F2]/80">
                    {a}
                  </span>
                ))}
              </div>
              <p className="mt-4 font-outfit text-[13px] font-light text-[#FBF7F2]/40">Chaque accompagnement : 6 – 9€</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
