"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const stats = [
  { number: 50, suffix: "+", label: "Projects Completed", description: "Successfully delivered solutions" },
  { number: 50, suffix: "+", label: "Happy Clients", description: "Satisfied customers worldwide" },
  { number: 99.9, suffix: "%", label: "Uptime", description: "Reliable service guarantee" },
  { number: 24, suffix: "/7", label: "Support", description: "Round-the-clock assistance" },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, hasStarted])

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true)
    }
  }, [inView, hasStarted])

  return <span ref={ref}>{count}</span>
}

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional results
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center group hover:scale-105 transition-all duration-500 ${
                inView ? "animate-in fade-in-0 slide-in-from-bottom-4" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative p-8 rounded-2xl glass-effect hover:bg-primary/5 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
                  <CountUp end={stat.number} />
                  {stat.suffix}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground">{stat.description}</p>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
