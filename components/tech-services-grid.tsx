"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Cloud, Database, Shield, Cpu } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    image: "/web-dev-workspace.png",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions",
    image: "/futuristic-holographic-app.png",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment",
    image: "/images/cloud.png",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Advanced data processing and business intelligence",
    image: "/images/Data-analyst.png",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions and monitoring",
    image: "/cybersecurity-shield.png",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Machine learning and artificial intelligence solutions",
    image: "/ai-brain-neural-network.png",
    gradient: "from-cyan-500 to-blue-500",
  },
]

export function TechServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 group-hover:translate-x-2 transition-all duration-300"
                  asChild
                >
                  <Link href="/services">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>

              {/* Hover Effect Overlay */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 pointer-events-none"></div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary animate-glow"
          >
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
