import type { Metadata } from 'next'
import { EB_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import { DemoModalProvider } from '@/components/DemoModal'
import { DemoBanner } from '@/components/DemoBanner'

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
  display: 'swap',
  adjustFontFallback: false,
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Rouge — Viandes d’exception · Paris 15e · Avenue de Suffren',
  description:
    'Rouge, restaurant de viandes d’exception au 38 Avenue de Suffren, Paris 15e. Un lieu intimiste, feutré et sensuel. Ouvert 7j/7, 12h–23h45. 4,9★ · 352 avis.',
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${garamond.variable} ${outfit.variable} font-outfit bg-[#1A1210] text-[#FBF7F2] antialiased`}>
        <DemoModalProvider>
          <DemoBanner />
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}
