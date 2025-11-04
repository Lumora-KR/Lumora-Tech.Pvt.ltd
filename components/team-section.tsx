"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Ram Kumar",
    role: "Founder & Full Stack Developer",
    image: "/professional-man-avatar.png",
    bio: "Visionary leader with 10+ years in tech innovation",
  },
  {
    name: "Kerthik Rosan",
    role: "Founder & AI Specialist & Cyber Security Expert",
    image: "/professional-man-avatar.png",

    bio: "Expert in AI and machine learning technologies",
  },
  {
    name: "Dinesh Kumar",
    role: "CTO & ML Engineer",
    image: "/professional-man-avatar.png",
    bio: "Machine learning engineer with a passion for AI solutions",
  },
  {
    name: "Renuga",
    role: "Lead Developer",
    image: "/professional-woman-tech-avatar.png",
    bio: "Full-stack developer specializing in modern frameworks",
  },
  {
    name: "Mohammad Hithyathulla",
    role: "UI/UX Designer",
    image: "/professional-man-avatar.png",
    bio: "Creative designer focused on user-centered experiences",
  },

  {
    name: "Vinoth Kumar",
    role: "Data Scientist",
    image: "/professional-man-avatar.png",
    bio: "Data analyst with a passion for turning data into insights",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the brilliant minds behind LUMORA TECH's innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
