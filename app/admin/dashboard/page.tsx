import { AdminDashboard } from "@/components/admin-dashboard"
import { Navigation } from "@/components/navigation"

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AdminDashboard />
    </main>
  )
}
