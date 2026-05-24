import { Clock, Phone, MapPin, Instagram, Check } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

const services = ['Terrasse', 'Privatisation', 'WiFi', 'Apple Pay', 'Groupes']

export function Horaires() {
  return (
    <section className="bg-[#F5EDE6] py-24 text-[#1A1210] md:py-28">
      <div className="wrap grid gap-12 md:grid-cols-3">
        {/* Ouverture */}
        <Reveal>
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B22333] text-[#FBF7F2]">
              <Clock size={19} />
            </span>
            <p className="mt-5 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B22333]">Ouverture</p>
            <p className="mt-3 font-garamond text-[1.6rem] italic leading-tight text-[#1A1210]">
              Lundi – Dimanche
            </p>
            <p className="mt-1 font-outfit text-[15px] font-light text-[#1A1210]/70">12h00 – 23h45</p>
            <span className="mt-4 inline-block rounded-full bg-[#1A1210] px-4 py-1.5 font-outfit text-[11px] font-bold uppercase tracking-wide text-[#FBF7F2]">
              Ouvert 7j/7
            </span>
          </div>
        </Reveal>

        {/* Contact */}
        <Reveal delay={80}>
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B22333] text-[#FBF7F2]">
              <Phone size={18} />
            </span>
            <p className="mt-5 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B22333]">Contact</p>
            <a href="tel:0986166364" className="mt-3 block font-garamond text-[1.6rem] italic leading-tight text-[#1A1210] transition-opacity hover:opacity-70">
              09 86 16 63 64
            </a>
            <a href="https://instagram.com/rouge.suffren" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-outfit text-[14px] text-[#1A1210]/70 transition-colors hover:text-[#B22333]">
              <Instagram size={15} /> @rouge.suffren
            </a>
            <p className="mt-3 flex items-start gap-2 font-outfit text-[14px] font-light text-[#1A1210]/70">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#B22333]" />
              38 Avenue de Suffren, 75015 Paris
            </p>
          </div>
        </Reveal>

        {/* Services */}
        <Reveal delay={160}>
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B22333] text-[#FBF7F2]">
              <Check size={19} />
            </span>
            <p className="mt-5 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B22333]">Services</p>
            <ul className="mt-3 space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2.5 font-outfit text-[15px] font-light text-[#1A1210]/75">
                  <Check size={15} className="text-[#C4862A]" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
