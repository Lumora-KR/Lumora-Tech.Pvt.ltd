"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

//import { Button } from "@/components/ui/button"
//import router from "next/router"


export function ServicesHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hasMounted, setHasMounted] = useState(false)
  const router = useRouter()
  useEffect(() => {
    setHasMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {hasMounted && (
          <>
            <motion.div
              className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x * 0.02,
                y: mousePosition.y * 0.02,
              }}
              style={{
                left: "10%",
                top: "20%",
              }}
            />
            <motion.div
              className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                x: mousePosition.x * -0.015,
                y: mousePosition.y * -0.015,
              }}
              style={{
                right: "10%",
                bottom: "20%",
              }}
            />
          </>
        )}
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          style={{
            left: "10%",
            top: "20%",
          }}

        />
        <motion.div
          className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          style={{
            right: "10%",
            bottom: "20%",
          }}
        />

      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Cutting-edge technology solutions designed to transform your business and accelerate your digital journey
            into the future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >

          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Explore Solutions
          </button>
          <button className="px-8 py-4 border border-purple-500/50 rounded-full text-white font-semibold hover:bg-purple-500/10 transition-all duration-300"
            onClick={() => router.push("/contact-page")}>
            Get Consultation
          </button>



        </motion.div>

      </div>
    </section>
  )
}
