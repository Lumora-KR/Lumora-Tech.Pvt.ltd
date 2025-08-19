"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Clock, Award } from "lucide-react"

const caseStudies = [
  {
    title: "Global E-Commerce Transformation",
    client: "Fortune 500 Retailer",
    challenge: "Legacy system modernization and scalability issues",
    solution: "Cloud-native microservices architecture with AI-powered recommendations",
    results: [
      { metric: "Performance Increase", value: "300%", icon: TrendingUp },
      { metric: "User Engagement", value: "+150%", icon: Users },
      { metric: "Load Time Reduction", value: "75%", icon: Clock },
      { metric: "Revenue Growth", value: "+45%", icon: Award },
    ],
    image: "/case-study-ecommerce.png",
  },
  {
    title: "Healthcare Digital Revolution",
    client: "Regional Healthcare Network",
    challenge: "Fragmented patient data and inefficient workflows",
    solution: "Integrated healthcare management platform with AI diagnostics",
    results: [
      { metric: "Efficiency Gain", value: "200%", icon: TrendingUp },
      { metric: "Patient Satisfaction", value: "+90%", icon: Users },
      { metric: "Processing Time", value: "-60%", icon: Clock },
      { metric: "Cost Reduction", value: "35%", icon: Award },
    ],
    image: "/case-study-healthcare.png",
  },
]

export function CaseStudies() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Case Studies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world success stories showcasing measurable impact and transformative results
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{study.title}</h3>
                      <p className="text-indigo-400 font-medium mb-6">{study.client}</p>

                      <div className="space-y-4 mb-8">
                        <div>
                          <h4 className="font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-gray-400">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Solution</h4>
                          <p className="text-gray-400">{study.solution}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {study.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                          >
                            <result.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                            <div className="text-sm text-gray-400">{result.metric}</div>
                          </div>
                        ))}
                      </div>

                      <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                        Read Full Case Study
                      </Button>
                    </div>

                    <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <img
                        src={`/abstract-geometric-shapes.png?height=500&width=600&query=${study.title.toLowerCase().replace(/\s+/g, "-")}-dashboard-analytics`}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20" />
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
