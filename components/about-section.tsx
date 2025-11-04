import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Rocket } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, label: "Clients Served", value: "500+" },
    { icon: Rocket, label: "Projects Completed", value: "1000+" },
    { icon: Globe, label: "IT Products", value: "50+" },
    { icon: Award, label: "Industry Awards", value: "25+" },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            About <span className="text-primary">LUMORA TECH</span>
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking IT company dedicated to transforming businesses through innovative technology
            solutions. Our expert team combines cutting-edge technology with deep industry knowledge to deliver
            exceptional results.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">About the Founder's and Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6">
              To empower businesses with advanced technology solutions that drive growth, enhance efficiency, and create
              competitive advantages in the digital landscape.
            </p>
            <h3 className="text-3xl font-bold mb-6">Our Vision </h3>
            <p className="text-lg text-muted-foreground">
              To be the leading provider of innovative IT solutions, setting new standards for excellence in technology
              services and products worldwide.
            </p>
          </div>

          <div className="relative">
            <div className="glass-effect p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4 text-primary">Why Choose Us?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Expert team with 10+ years experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Cutting-edge technology solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Proven track record of success
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section >
  )
}
