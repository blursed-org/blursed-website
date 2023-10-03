import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { TechStack } from '@/components/tech-stack'
import { WhoWeAre } from '@/components/who-we-are'

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <WhoWeAre />
      <TechStack />
    </main>
  )
}
