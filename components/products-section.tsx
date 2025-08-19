import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Cloud, BarChart3 } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: Shield,
      title: "LumoraSecure",
      description: "Advanced security solution with real-time threat detection and automated response capabilities.",
      features: ["Real-time Monitoring", "AI-Powered Detection", "Automated Response", "Compliance Reports"],
      badge: "Enterprise",
    },
    {
      icon: Cloud,
      title: "LumoraCloud",
      description: "Scalable cloud platform with integrated tools for seamless deployment and management.",
      features: ["Auto-scaling", "Load Balancing", "Backup & Recovery", "Multi-region Support"],
      badge: "Popular",
    },
    {
      icon: BarChart3,
      title: "LumoraAnalytics",
      description: "Data analytics platform with AI-powered insights to drive informed business decisions.",
      features: ["Predictive Analytics", "Custom Dashboards", "Real-time Reports", "Data Visualization"],
      badge: "New",
    },
  ]

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our innovative IT products designed to enhance your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {product.badge}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <product.icon className="h-16 w-16 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6">{product.description}</p>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button className="w-full animate-glow">Learn More</Button>
                  <Button variant="outline" className="w-full hover:bg-primary/10 bg-transparent">
                    Request Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
