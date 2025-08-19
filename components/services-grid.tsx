"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Cloud, Shield, Brain, Zap } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: ["React/Next.js", "Full-Stack Solutions", "Responsive Design", "SEO Optimization"],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
    features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Auto-scaling"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
    features: ["Penetration Testing", "Security Audits", "Compliance", "Threat Monitoring"],
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by artificial intelligence to automate processes and gain valuable insights.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automation"],
    gradient: "from-green-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation services to modernize your business and stay ahead of the competition.",
    features: ["Process Automation", "Legacy Modernization", "Digital Strategy", "Change Management"],
    gradient: "from-purple-500 to-pink-500",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive technology services designed to accelerate your business growth and digital
            transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
