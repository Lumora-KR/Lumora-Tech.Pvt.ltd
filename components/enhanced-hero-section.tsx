"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"
import Link from "next/link"

export function EnhancedHeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPos = (clientX / innerWidth) * 100
      const yPos = (clientY / innerHeight) * 100

      heroRef.current.style.background = `radial-gradient(circle at ${xPos}% ${yPos}%, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 25%, transparent 50%)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          {/* Floating icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="animate-float">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="animate-float delay-500">
              <Zap className="w-8 h-8 text-purple-500 animate-pulse" />
            </div>
            <div className="animate-float delay-1000">
              <Shield className="w-8 h-8 text-blue-500 animate-pulse" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif">
            <span className="block animate-pulse-neon bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              LUMORA
            </span>
            <span className="block animate-pulse-neon delay-300 bg-gradient-to-r from-blue-500 via-purple-500 to-primary bg-clip-text text-transparent">
              TECH
            </span>
          </h1>

          <div className="space-y-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="text-2xl md:text-3xl font-medium text-muted-foreground">Transforming Business with</p>
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Advanced Technology
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
            We deliver cutting-edge IT services and products to help businesses thrive in the digital era. Our solutions
            are designed to optimize performance, enhance security, and drive innovation through artificial intelligence
            and advanced technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1000">
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-lg px-8 py-4 animate-glow hover:scale-105 transition-all duration-300"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Floating tech badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1200">
            {["AI/ML", "Cloud Computing", "Cybersecurity", "DevOps", "Blockchain"].map((tech, index) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-full glass-effect text-sm font-medium animate-float hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
