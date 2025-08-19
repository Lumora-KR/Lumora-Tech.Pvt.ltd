"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Brain, Cloud, Database, Smartphone } from "lucide-react"
import { useState } from "react"
import { ProductModal } from "./product-modal"

const products = [
  {
    icon: Brain,
    title: "AI Analytics Platform",
    description: "Advanced machine learning algorithms for business intelligence and predictive analytics.",
    features: ["Real-time data processing", "Predictive modeling", "Custom dashboards", "API integration"],
    image: "/ai-analytics-dashboard.png",
    detailedDescription:
      "Our AI Analytics Platform leverages cutting-edge machine learning algorithms to transform raw data into actionable business insights. Built for enterprise-scale operations, it processes millions of data points in real-time.",
    technicalSpecs: [
      "Support for 50+ data sources",
      "Sub-second query response time",
      "99.99% accuracy in predictions",
      "Enterprise-grade security",
      "Custom ML model training",
      "RESTful API integration",
    ],
    pricing: "Starting at $299/month",
    demoUrl: "#demo-ai-analytics",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure Suite",
    description: "Scalable cloud solutions for modern businesses with enterprise-grade security.",
    features: ["Auto-scaling", "99.9% uptime", "Global CDN", "Backup & recovery"],
    image: "/cloud-infrastructure.png",
    detailedDescription:
      "Enterprise-grade cloud infrastructure that scales automatically based on demand. Our global network ensures optimal performance and reliability for mission-critical applications.",
    technicalSpecs: [
      "Multi-region deployment",
      "Kubernetes orchestration",
      "Load balancing & auto-scaling",
      "24/7 monitoring & alerts",
      "Disaster recovery",
      "SOC 2 Type II compliant",
    ],
    pricing: "Starting at $199/month",
    demoUrl: "#demo-cloud-suite",
  },
  {
    icon: Smartphone,
    title: "Mobile App Framework",
    description: "Cross-platform mobile development framework for rapid app deployment.",
    features: ["React Native", "Native performance", "Push notifications", "Offline support"],
    image: "/mobile-app-framework.png",
    detailedDescription:
      "Accelerate mobile app development with our comprehensive framework. Build once, deploy everywhere with native performance and seamless user experience.",
    technicalSpecs: [
      "iOS & Android support",
      "Hot reload development",
      "Native module integration",
      "Offline-first architecture",
      "Push notification service",
      "App store optimization",
    ],
    pricing: "Starting at $149/month",
    demoUrl: "#demo-mobile-framework",
  },
  {
    icon: Shield,
    title: "Cybersecurity Shield",
    description: "Comprehensive security solution protecting against modern cyber threats.",
    features: ["Threat detection", "Real-time monitoring", "Incident response", "Compliance reporting"],
    image: "/cybersecurity-shield.png",
    detailedDescription:
      "Advanced cybersecurity platform that provides comprehensive protection against evolving threats. AI-powered threat detection with automated response capabilities.",
    technicalSpecs: [
      "AI-powered threat detection",
      "Zero-day vulnerability protection",
      "SIEM integration",
      "Automated incident response",
      "Compliance reporting",
      "24/7 security operations center",
    ],
    pricing: "Starting at $399/month",
    demoUrl: "#demo-cybersecurity",
  },
  {
    icon: Database,
    title: "Data Management System",
    description: "Enterprise data management with advanced analytics and visualization tools.",
    features: ["Data warehousing", "ETL pipelines", "Business intelligence", "Data governance"],
    image: "/data-management.png",
    detailedDescription:
      "Comprehensive data management solution that centralizes, processes, and visualizes your enterprise data. Transform raw data into strategic business intelligence.",
    technicalSpecs: [
      "Petabyte-scale storage",
      "Real-time ETL processing",
      "Advanced data visualization",
      "Data lineage tracking",
      "GDPR compliance tools",
      "Machine learning integration",
    ],
    pricing: "Starting at $249/month",
    demoUrl: "#demo-data-management",
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Intelligent process automation to streamline business operations.",
    features: ["Workflow automation", "RPA integration", "Custom triggers", "Performance metrics"],
    image: "/automation-engine.png",
    detailedDescription:
      "Intelligent automation platform that streamlines complex business processes. Reduce manual work and increase efficiency with AI-powered workflow automation.",
    technicalSpecs: [
      "Visual workflow designer",
      "RPA bot integration",
      "API-first architecture",
      "Custom trigger conditions",
      "Performance analytics",
      "Integration with 200+ apps",
    ],
    pricing: "Starting at $179/month",
    demoUrl: "#demo-automation",
  },
]

export function ProductsShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLearnMore = (product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Product Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our comprehensive suite of technology products designed to accelerate your digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <CardContent className="p-6">
                  <div className="mb-6 relative overflow-hidden rounded-lg">
                    <img
                      src={`/abstract-geometric-shapes.png?height=200&width=400&query=${product.title.toLowerCase().replace(/\s+/g, "-")}-technology-product`}
                      alt={product.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <product.icon className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{product.description}</p>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleLearnMore(product)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}
