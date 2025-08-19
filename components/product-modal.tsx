"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ExternalLink, Play, CheckCircle } from "lucide-react"

interface ProductModalProps {
  product: {
    icon: any
    title: string
    description: string
    detailedDescription: string
    features: string[]
    technicalSpecs: string[]
    pricing: string
    demoUrl: string
    image: string
  }
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
            <DialogHeader className="relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute right-0 top-0 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold text-white mb-2">{product.title}</DialogTitle>
                  <p className="text-gray-400">{product.description}</p>
                </div>
              </motion.div>
            </DialogHeader>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={`/abstract-geometric-shapes.png?height=300&width=600&query=${product.title.toLowerCase().replace(/\s+/g, "-")}-detailed-product-showcase`}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>

              {/* Detailed Description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                <p className="text-gray-300 leading-relaxed">{product.detailedDescription}</p>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {product.technicalSpecs.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-purple-600/20 text-purple-300 border-purple-500/30"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Pricing and Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-purple-500/20">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Pricing</p>
                  <p className="text-2xl font-bold text-white">{product.pricing}</p>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-600/20 bg-transparent"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Get Started
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}
