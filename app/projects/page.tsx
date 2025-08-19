import { Navigation } from "@/components/navigation"
import { ParticlesBackground } from "@/components/particles-background"
import { ProjectsHero } from "@/components/projects-hero"
import { ProjectsGallery } from "@/components/projects-gallery"
import { CaseStudies } from "@/components/case-studies"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Navigation />
      <ProjectsHero />
      <ProjectsGallery />
      <CaseStudies />
      <Footer />
    </main>
  )
}
