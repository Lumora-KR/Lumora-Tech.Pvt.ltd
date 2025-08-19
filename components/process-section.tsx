"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Code2, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "We analyze your business requirements and identify the best technology solutions for your needs.",
    step: "01",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Our experts create a comprehensive roadmap and technical architecture for your project.",
    step: "02",
  },
  {
    icon: Code2,
    title: "Development & Testing",
    description: "We build your solution using cutting-edge technologies with rigorous testing at every stage.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing support to ensure optimal performance.",
    step: "04",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery and exceptional results for every client
            engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 border-2 border-purple-500 rounded-full flex items-center justify-center text-sm font-bold text-purple-400">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              {/* Connection line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent transform translate-x-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
