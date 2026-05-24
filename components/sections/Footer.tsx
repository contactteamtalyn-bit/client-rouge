import { MapPin, Phone, Clock, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0A0806] text-[#FBF7F2]">
      <div className="wrap py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-garamond text-[22px] font-extrabold tracking-wide text-[#FBF7F2]">ROUGE</p>
            <p className="mt-1 font-outfit text-[14px] italic text-[#B22333]">Viandes d&apos;exception · Paris</p>
            <p className="mt-5 max-w-xs font-outfit text-[14px] font-light leading-relaxed text-[#FBF7F2]/50">
              La chaleur, la chair et le partage. Un lieu intimiste, feutré et sensuel, avenue de Suffren.
            </p>
          </div>

          {/* Contact */}
          <div className="font-outfit text-[14px] font-light text-[#FBF7F2]/60">
            <p className="mb-4 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4862A]">Adresse</p>
            <p className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#B22333]" />
              38 Avenue de Suffren
              <br />
              75015 Paris
            </p>
            <a href="tel:0986166364" className="mt-3 flex items-center gap-2.5 transition-colors hover:text-[#FBF7F2]">
              <Phone size={15} className="shrink-0 text-[#B22333]" />
              09 86 16 63 64
            </a>
          </div>

          {/* Horaires / social */}
          <div className="font-outfit text-[14px] font-light text-[#FBF7F2]/60">
            <p className="mb-4 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4862A]">Horaires</p>
            <p className="flex items-center gap-2.5">
              <Clock size={15} className="shrink-0 text-[#B22333]" />
              Lun – Dim · 12h – 23h45
            </p>
            <a
              href="https://instagram.com/rouge.suffren"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2.5 transition-colors hover:text-[#FBF7F2]"
            >
              <Instagram size={15} className="shrink-0 text-[#B22333]" />
              @rouge.suffren
            </a>
          </div>
        </div>
      </div>

      {/* Bandeau anti-vol */}
      <div className="border-t border-[#FBF7F2]/10">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-outfit text-[11px] uppercase tracking-[0.16em] text-[#FBF7F2]/40">
            ⚠ Maquette démonstration non finale
          </p>
          <p className="font-outfit text-[11px] uppercase tracking-[0.16em] text-[#FBF7F2]/40">
            Site créé par Maison Talyn ·{' '}
            <a href="https://instagram.com/maison.talyn" target="_blank" rel="noopener noreferrer" className="text-[#C4862A] hover:underline">
              @maison.talyn
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
