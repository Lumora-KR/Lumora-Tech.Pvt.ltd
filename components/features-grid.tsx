"use client"

import { useInView } from "react-intersection-observer"
import { Zap, Shield, Cpu, Rocket, Brain, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for modern businesses with cutting-edge infrastructure",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Advanced security solutions you can trust with enterprise-grade protection",
    color: "from-green-400 to-blue-500",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Next-generation technology solutions powered by artificial intelligence",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description: "Future-proof architecture that grows with your business needs",
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: Cpu,
    title: "Advanced Computing",
    description: "High-performance computing solutions for complex business challenges",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Worldwide deployment capabilities with 24/7 support and monitoring",
    color: "from-emerald-400 to-teal-500",
  },
]

export function FeaturesGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Why Choose LUMORA TECH
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of technology with our innovative solutions designed for tomorrow's challenges
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group relative p-8 rounded-2xl glass-effect hover:scale-105 transition-all duration-500 cursor-pointer ${
                  inView ? "animate-in fade-in-0 slide-in-from-bottom-4" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                />

                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
