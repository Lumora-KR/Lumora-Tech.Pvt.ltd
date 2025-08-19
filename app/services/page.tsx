import { Navigation } from "@/components/navigation"
import { ParticlesBackground } from "@/components/particles-background"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Navigation />
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <Footer />
    </main>
  )
}
