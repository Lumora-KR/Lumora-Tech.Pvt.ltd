import { Navigation } from "@/components/navigation"
import { ParticlesBackground } from "@/components/particles-background"
import { AboutHero } from "@/components/about-hero"
import { TeamSection } from "@/components/team-section"
import { MissionSection } from "@/components/mission-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Navigation />
      <AboutHero />
      <MissionSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
