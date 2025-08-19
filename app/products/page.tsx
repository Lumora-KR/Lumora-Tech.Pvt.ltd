import { Navigation } from "@/components/navigation"
import { ParticlesBackground } from "@/components/particles-background"
import { ProductsHero } from "@/components/products-hero"
import { ProductsShowcase } from "@/components/products-showcase"
import { TechStack } from "@/components/tech-stack"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Navigation />
      <ProductsHero />
      <ProductsShowcase />
      <TechStack />
      <Footer />
    </main>
  )
}
