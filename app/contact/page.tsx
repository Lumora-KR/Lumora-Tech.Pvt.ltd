import { Navigation } from "@/components/navigation"
import { ParticlesBackground } from "@/components/particles-background"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Navigation />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </main>
  )
}
