"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries to deliver cutting-edge solutions that drive digital transformation.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Our commitment to quality ensures every project exceeds expectations and delivers measurable results.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, understanding their unique needs and challenges.",
  },
  {
    icon: Zap,
    title: "Agility",
    description: "Our flexible approach allows us to adapt quickly to changing requirements and market demands.",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and
                create meaningful digital experiences for users worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Vision</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the leading technology partner that transforms ideas into reality, shaping the future of digital
                innovation across industries.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <value.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
