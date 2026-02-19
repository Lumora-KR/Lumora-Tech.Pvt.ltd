"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Globe, Linkedin, Twitter, Github } from "lucide-react"

const contactDetails = [
  {
    icon: MapPin,
    title: "Office Location",
    details: ["VNTC White Villa ,West Tambaram", "Chennai"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91 7904154527", "+91 95857 38902"],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: ["heylumoratech@gmail.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
  },
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Globe, href: "#", label: "Website" },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {contactDetails.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 hover:border-emerald-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 overflow-hidden">
          <CardContent className="p-0">
            <div className="h-48 bg-gradient-to-br from-emerald-900/20 to-blue-900/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                <p className="text-gray-400">Interactive Map</p>
                <p className="text-sm text-gray-500">Coming Soon</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
