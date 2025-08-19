import { Navigation } from "@/components/navigation"
import { ParticlesBackground } from "@/components/particles-background"
import { FuturisticHeroSection } from "@/components/futuristic-hero-section"
import { TechServicesGrid } from "@/components/tech-services-grid"
import { StatsSection } from "@/components/stats-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Navigation />
      <FuturisticHeroSection />
      <TechServicesGrid />
      <StatsSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
