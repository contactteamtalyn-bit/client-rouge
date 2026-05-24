'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { SmartImage } from '@/components/ui/SmartImage'
import { useDemoModal } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const menuItems = [
  { label: 'La Carte', href: '#carte' },
  { label: 'Les Viandes', href: '#viandes' },
  { label: 'La Terrasse', href: '#terrasse' },
  { label: 'Réservation', href: '#reservation' },
]

const stats = [
  { num: '4,9★', label: 'Google' },
  { num: '352', label: 'Avis' },
  { num: '7j/7', label: 'Ouvert' },
  { num: '23h45', label: 'Dernier service' },
]

function HeroHeader() {
  const { open } = useDemoModal()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-[36px] z-50 transition-colors duration-300',
        scrolled ? 'border-b border-[#B22333]/30 bg-[#1A1210]/80 backdrop-blur-lg' : 'bg-transparent'
      )}
    >
      <nav className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="font-garamond text-2xl font-bold italic tracking-wide text-[#FBF7F2]">Rouge</a>

        <div className="hidden items-center gap-8 lg:flex">
          {menuItems.map((m) => (
            <a key={m.href} href={m.href} className="font-outfit text-[13px] tracking-wide text-[#FBF7F2]/70 transition-colors hover:text-[#B22333]">
              {m.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={open}
            className="hidden rounded-xl bg-[#B22333] px-5 py-2.5 font-outfit text-[12px] font-semibold uppercase tracking-wide text-[#FBF7F2] transition-colors hover:bg-[#9B1E2A] sm:block"
          >
            Réserver · 09 86 16 63 64
          </button>
          <button onClick={() => setMenuOpen((v) => !v)} className="text-[#FBF7F2] lg:hidden" aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#B22333]/20 bg-[#1A1210]/95 backdrop-blur-lg lg:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {menuItems.map((m) => (
              <a key={m.href} href={m.href} onClick={() => setMenuOpen(false)} className="py-2 font-outfit text-[14px] text-[#FBF7F2]/80">
                {m.label}
              </a>
            ))}
            <button onClick={open} className="mt-2 rounded-xl bg-[#B22333] px-5 py-3 font-outfit text-[12px] font-semibold uppercase tracking-wide text-[#FBF7F2]">
              Réserver · 09 86 16 63 64
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export function Hero() {
  const { open } = useDemoModal()
  return (
    <section id="top" className="relative overflow-hidden bg-[#1A1210] pb-20 pt-[150px] md:pt-[180px]">
      <HeroHeader />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: 'radial-gradient(60% 50% at 50% 0%, rgba(178,35,51,0.18), transparent 70%)' }}
      />

      <div className="wrap relative z-10">
        <AnimatedGroup preset="blur-slide" className="flex flex-col items-center text-center">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#B22333]/30 bg-[#B22333]/10 px-4 py-1.5">
            <span className="font-outfit text-sm text-[#C4862A]">7j/7 · 12h–23h45 · Avenue de Suffren</span>
          </div>

          <h1 className="mt-8 max-w-4xl font-garamond font-bold italic text-[#FBF7F2]" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 1.05 }}>
            La chaleur,
            <br />
            la chair
            <br />
            <em className="text-[#B22333]">et le partage.</em>
          </h1>

          <p className="mx-auto mt-6 max-w-xl font-outfit text-lg font-light text-[#FBF7F2]/60">
            Viandes d&apos;exception. Un lieu intimiste, feutré et sensuel. Ce n&apos;est ni un bistrot, ni une
            brasserie, ni un restaurant français classique.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="rounded-[14px] border border-[#B22333]/30 bg-[#B22333]/10 p-0.5">
              <Button size="lg" onClick={open} className="rounded-xl bg-[#B22333] px-6 font-outfit text-[#FBF7F2] hover:bg-[#9B1E2A]">
                Réserver une table
              </Button>
            </div>
            <Button size="lg" variant="ghost" onClick={open} className="font-outfit text-[#FBF7F2]/60 hover:bg-transparent hover:text-[#FBF7F2]">
              09 86 16 63 64
            </Button>
          </div>
        </AnimatedGroup>

        {/* Photo hero */}
        <div className="relative mt-16">
          <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-40% to-[#1A1210]" />
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-[#B22333]/20 shadow-2xl shadow-black/50">
            <SmartImage src="/images/hero/hero-main.jpg" alt="Restaurant Rouge — la salle" className="aspect-[15/8] w-full object-cover" />
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-8 gap-y-8 sm:gap-x-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <span className="font-garamond text-2xl font-bold text-[#FBF7F2]">{s.num}</span>
              <span className="mt-1 font-outfit text-xs uppercase tracking-wider text-[#FBF7F2]/40">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={open}
            className="font-outfit text-[13px] uppercase tracking-wider text-[#FBF7F2]/40 underline-offset-4 transition-colors hover:text-[#C4862A] hover:underline"
          >
            Voir nos avis Google →
          </button>
        </div>
      </div>
    </section>
  )
}
