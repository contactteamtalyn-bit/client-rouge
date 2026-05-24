import { Hero } from '@/components/sections/Hero'
import { StatStrip } from '@/components/sections/StatStrip'
import { LaPromesse } from '@/components/sections/LaPromesse'
import { LExperience } from '@/components/sections/LExperience'
import { LesViandes } from '@/components/sections/LesViandes'
import { LaCarte } from '@/components/sections/LaCarte'
import { Terrasse } from '@/components/sections/Terrasse'
import { Avis } from '@/components/sections/Avis'
import { Horaires } from '@/components/sections/Horaires'
import { Reservation } from '@/components/sections/Reservation'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <StatStrip />
        <LaPromesse />
        <LExperience />
        <LesViandes />
        <LaCarte />
        <Terrasse />
        <Avis />
        <Horaires />
        <Reservation />
      </main>
      <Footer />
    </>
  )
}
