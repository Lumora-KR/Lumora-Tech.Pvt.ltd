import { Navigation } from "@/components/navigation"
import { ParticlesBackground } from "@/components/particles-background"
import { AdminLogin } from "@/components/admin-login"

export default function AdminPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <ParticlesBackground />
      <Navigation />
      <AdminLogin />
    </main>
  )
}
