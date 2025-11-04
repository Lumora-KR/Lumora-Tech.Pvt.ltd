"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AboutHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          style={{ left: "10%", top: "20%" }}
        />
        <motion.div
          className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          style={{ right: "10%", bottom: "20%" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About LUMORA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Lumora Tech was born from a dream — a dream to build something meaningful and powerful with smart, passionate people. I started Lumora Tech by connecting creative minds from different fields, bringing together a team that believes in innovation, growth, and real impact. We’re a youth-driven company focused on developing massive programs and groundbreaking solutions that push limits and shape the digital future. At Lumora Tech, we don’t just work — we build, learn, and grow together as one team with one vision.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-3xl font-bold text-purple-400">5+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-3xl font-bold text-blue-400">100+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-3xl font-bold text-pink-400">50+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
