"use client"

import { useInView } from "react-intersection-observer"

const technologies = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    color: "from-blue-400 to-cyan-500",
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Java", "Go", "PostgreSQL"],
    color: "from-green-400 to-emerald-500",
  },
  {
    category: "Cloud & DevOps",
    techs: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
    color: "from-purple-400 to-pink-500",
  },
  {
    category: "AI & ML",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "LangChain"],
    color: "from-orange-400 to-red-500",
  },
]

export function TechnologiesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Technologies We Master
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge tools and frameworks to build tomorrow's solutions
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`group ${inView ? "animate-in fade-in-0 slide-in-from-bottom-4" : "opacity-0"}`}
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="p-6 rounded-2xl glass-effect hover:scale-105 transition-all duration-500 h-full">
                <div
                  className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.category}
                </div>

                <div className="space-y-3">
                  {category.techs.map((tech, techIndex) => (
                    <div
                      key={tech}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${categoryIndex * 150 + techIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-foreground hover:text-primary transition-colors duration-300">{tech}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
