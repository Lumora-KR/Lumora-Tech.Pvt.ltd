"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-purple-500/20 safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              LUMORA TECH
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Transforming businesses with advanced technology solutions. Your trusted partner in digital innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/Lumora-KR/" className="text-gray-400 hover:text-purple-400 transition-colors p-2 -ml-2 rounded-lg hover:bg-purple-400/10">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-400/10">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-400/10">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  Projects
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  Data Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm sm:text-base">
                  IT Infrastructure
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <a href="mailto:heylumoratech@gmail.com" className="flex items-start space-x-3 group">
                <Mail className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm group-hover:text-purple-400 transition-colors break-all">heylumoratech@gmail.com</span>
              </a>
              <a href="tel:+917904154527" className="flex items-center space-x-3 group">
                <Phone className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm group-hover:text-purple-400 transition-colors">+91-7904154527</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">vntc White Villa, Lumora Office, West Tambaram, Chennai</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-purple-500/20 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">© 2020 LUMORA TECH. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-xs sm:text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
