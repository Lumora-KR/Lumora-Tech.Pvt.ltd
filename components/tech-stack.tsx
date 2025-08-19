"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const technologies = [
  { name: "React", logo: "⚛️", category: "Frontend" },
  { name: "Node.js", logo: "🟢", category: "Backend" },
  { name: "Python", logo: "🐍", category: "AI/ML" },
  { name: "AWS", logo: "☁️", category: "Cloud" },
  { name: "Docker", logo: "🐳", category: "DevOps" },
  { name: "MongoDB", logo: "🍃", category: "Database" },
  { name: "TypeScript", logo: "📘", category: "Language" },
  { name: "Kubernetes", logo: "⚙️", category: "Orchestration" },
]

export function TechStack() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built with cutting-edge technologies for maximum performance and scalability
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{tech.logo}</div>
                  <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-purple-400">{tech.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
