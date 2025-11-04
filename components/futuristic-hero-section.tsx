"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Brain, Activity, Cpu, Wifi } from "lucide-react"

import Link from "next/link"

export function FuturisticHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [aiActivity, setAiActivity] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAiActivity((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>

      {/* Enhanced Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: "10%",
            left: "10%",
          }}
        ></div>
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            top: "60%",
            right: "10%",
          }}
        ></div>
        <div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            top: "30%",
            left: "70%",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold font-serif">
                <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                  FUTURE
                </span>
                <br />
                <span className="text-foreground">TECHNOLOGY</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Pioneering tomorrow's solutions today. We deliver cutting-edge IT services and products that transform
                businesses in the digital era.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary text-white px-8 py-6 text-lg animate-glow hover:scale-105 transition-all duration-300"
              >
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 px-8 py-6 text-lg hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Enhanced Feature Pills with animations */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                <Zap className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm">Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                <Shield className="h-4 w-4 text-primary animate-bounce" />
                <span className="text-sm">Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
                <Brain className="h-4 w-4 text-primary animate-spin-slow" />
                <span className="text-sm">AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Astronaut Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Enhanced Glowing Ring Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-2xl animate-pulse"></div>
              <div
                className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main Astronaut Image with enhanced styling */}
              <div className="relative z-10 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 p-8 border border-primary/30">
                <img
                  src="/images/futuristic-astronaut.jpg"
                  alt="Futuristic Astronaut"
                  className="w-full h-auto rounded-full animate-float hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Enhanced Floating UI Elements */}
              <div className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-md border border-green-500/30 rounded-lg p-3 animate-float-delayed hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/20">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-30"></div>
                  </div>
                  <span className="text-sm font-medium text-green-400">System Online</span>
                  <Wifi className="h-3 w-3 text-green-400 animate-pulse" />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-md border border-primary/30 rounded-lg p-3 animate-float hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/20">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Brain className="h-4 w-4 text-primary animate-pulse" />
                    <div className="absolute -inset-1 bg-primary/20 rounded-full animate-ping"></div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-primary">AI Active</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-2 rounded-full transition-all duration-200 ${(aiActivity + i * 20) % 100 > 50 ? "bg-primary" : "bg-primary/30"
                            }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute top-1/2 -left-8 bg-background/90 backdrop-blur-md border border-blue-500/30 rounded-lg p-2 animate-float hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/20"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <Cpu className="h-3 w-3 text-blue-400 animate-spin-slow" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-blue-400">CPU</span>
                    <span className="text-xs text-blue-300">{Math.floor(aiActivity * 0.8 + 20)}%</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/4 -right-8 bg-background/90 backdrop-blur-md border border-purple-500/30 rounded-lg p-2 animate-float-delayed hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/20">
                <div className="flex items-center gap-2">
                  <Activity className="h-3 w-3 text-purple-400 animate-bounce" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-purple-400">Neural</span>
                    <span className="text-xs text-purple-300">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
