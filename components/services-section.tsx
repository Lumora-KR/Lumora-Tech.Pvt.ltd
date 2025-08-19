import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Cloud, Code, Database, Server, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect your business with our advanced security solutions. We offer comprehensive protection against cyber threats and vulnerabilities.",
      features: ["Threat Detection", "Security Audits", "Compliance Management"],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description:
        "Leverage the power of cloud computing with our scalable and reliable cloud solutions designed for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Management", "Backup Solutions"],
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom software solutions built to address your specific business challenges and drive digital transformation.",
      features: ["Web Applications", "Mobile Apps", "API Development"],
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "Optimize your data infrastructure with our comprehensive data management services and analytics solutions.",
      features: ["Data Analytics", "Database Design", "Business Intelligence"],
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description:
        "Build a robust IT foundation with our infrastructure services, ensuring reliability, scalability, and performance.",
      features: ["Network Setup", "Server Management", "Monitoring"],
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Transform your business with our strategic digital solutions that drive innovation and competitive advantage.",
      features: ["Process Automation", "Digital Strategy", "Technology Consulting"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive IT solutions tailored to meet your business needs. Our expert team delivers
            cutting-edge services to help you stay ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:scale-105"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full hover:bg-primary/10 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
