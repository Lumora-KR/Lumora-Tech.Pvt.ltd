"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"

const projects = [
  {
    title: "E-Commerce AI Platform",
    description:
      "Advanced AI-powered e-commerce platform with personalized recommendations and automated inventory management.",
    image: "/ecommerce-ai-platform.png",
    category: "AI/ML",
    duration: "6 months",
    team: "8 developers",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    status: "Completed",
  },
  {
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare management solution with patient records, appointment scheduling, and telemedicine features.",
    image: "/healthcare-management.png",
    category: "Healthcare",
    duration: "8 months",
    team: "12 developers",
    technologies: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    status: "Completed",
  },
  {
    title: "FinTech Mobile App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
    image: "/fintech-mobile-app.png",
    category: "FinTech",
    duration: "4 months",
    team: "6 developers",
    technologies: ["React Native", "Firebase", "Blockchain", "Stripe"],
    status: "In Progress",
  },
  {
    title: "Smart City IoT Dashboard",
    description: "Real-time IoT dashboard for smart city management with traffic monitoring and environmental sensors.",
    image: "/smart-city-dashboard.png",
    category: "IoT",
    duration: "10 months",
    team: "15 developers",
    technologies: ["Angular", "Python", "MongoDB", "Azure IoT"],
    status: "Completed",
  },
  {
    title: "EdTech Learning Platform",
    description:
      "Interactive online learning platform with AI-powered personalized learning paths and virtual classrooms.",
    image: "/edtech-platform.png",
    category: "Education",
    duration: "7 months",
    team: "10 developers",
    technologies: ["Next.js", "GraphQL", "Redis", "WebRTC"],
    status: "Completed",
  },
  {
    title: "Logistics Optimization System",
    description: "AI-driven logistics and supply chain optimization system with route planning and inventory tracking.",
    image: "/logistics-system.png",
    category: "Logistics",
    duration: "5 months",
    team: "9 developers",
    technologies: ["Django", "PostgreSQL", "Machine Learning", "Google Maps API"],
    status: "In Progress",
  },
]

export function ProjectsGallery() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries and technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={`/abstract-geometric-shapes.png?height=250&width=400&query=${project.title.toLowerCase().replace(/\s+/g, "-")}-project-interface`}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-medium border border-indigo-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-indigo-400" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-indigo-400" />
                        {project.team}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 hover:border-indigo-500 bg-transparent"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
