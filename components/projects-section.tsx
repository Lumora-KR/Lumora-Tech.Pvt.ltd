import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform Modernization",
      description:
        "Complete digital transformation of a legacy e-commerce system, improving performance by 300% and user experience.",
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      category: "Web Development",
      image: "/modern-ecommerce-dashboard.png",
    },
    {
      title: "Healthcare Data Analytics",
      description:
        "AI-powered analytics platform for healthcare providers to optimize patient care and operational efficiency.",
      technologies: ["Python", "TensorFlow", "Azure", "PostgreSQL"],
      category: "Data Analytics",
      image: "/healthcare-analytics-dashboard.png",
    },
    {
      title: "Financial Security System",
      description:
        "Enterprise-grade cybersecurity solution protecting financial transactions and sensitive customer data.",
      technologies: ["Java", "Spring", "Kubernetes", "Redis"],
      category: "Cybersecurity",
      image: "/financial-security-dashboard.png",
    },
    {
      title: "IoT Manufacturing Solution",
      description: "Smart manufacturing system with real-time monitoring and predictive maintenance capabilities.",
      technologies: ["IoT", "Python", "InfluxDB", "Grafana"],
      category: "IoT",
      image: "/iot-manufacturing-dashboard.png",
    },
    {
      title: "Cloud Migration Project",
      description:
        "Seamless migration of enterprise infrastructure to cloud, reducing costs by 40% and improving scalability.",
      technologies: ["AWS", "Docker", "Terraform", "Jenkins"],
      category: "Cloud Services",
      image: "/cloud-infrastructure-dashboard.png",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure and user-friendly mobile banking application with advanced features and biometric authentication.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      category: "Mobile Development",
      image: "/mobile-banking-app.png",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in delivering innovative technology
            solutions across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background/80 p-2 rounded-full">
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
