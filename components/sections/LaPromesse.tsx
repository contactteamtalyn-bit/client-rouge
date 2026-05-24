'use client'

import { TextEffect } from '@/components/ui/text-effect'
import { Reveal } from '@/components/ui/Reveal'
import { SmartImage } from '@/components/ui/SmartImage'

export function LaPromesse() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#1A1210] py-28">
      {/* photo salle flottante (décorative) */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 hidden w-[34%] lg:block"
        style={{ transform: 'translateY(-50%) rotate(-2deg)', opacity: 0.7, clipPath: 'polygon(0 8%, 100% 0, 92% 100%, 0 92%)' }}
        aria-hidden
      >
        <SmartImage src="/images/salle/salle-main.jpg" alt="" className="h-[460px] w-full object-cover" />
      </div>

      <div className="wrap relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="eyebrow text-[#B22333]">← La philosophie</p>
        <span className="my-7 block h-px w-10 bg-[#B22333]" />

        <div className="font-garamond italic text-[#FBF7F2]" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1.08 }}>
          <TextEffect as="p" per="word" preset="blur" delay={0.1}>La chaleur,</TextEffect>
          <TextEffect as="p" per="word" preset="blur" delay={0.35}>la chair</TextEffect>
          <TextEffect as="p" per="word" preset="blur" delay={0.6} className="text-[#B22333]">et le partage.</TextEffect>
        </div>

        <span className="my-10 block h-px w-full max-w-xs bg-[#FBF7F2]/15" />

        <Reveal delay={120}>
          <p className="max-w-2xl font-garamond text-[20px] leading-relaxed text-[#FBF7F2]/70">
            ROUGE ouvre avenue de Suffren, à Paris. Un lieu intimiste, feutré et sensuel, centré sur la viande
            rouge et la convivialité gourmande.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 font-garamond text-[18px] italic text-[#FBF7F2]/50">
            Ce n&apos;est ni un bistrot, ni une brasserie, ni un restaurant français classique.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
