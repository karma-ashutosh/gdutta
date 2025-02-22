import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MessageSquare, Users } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Communications Strategy",
      description: "Develop comprehensive communication strategies aligned with your organizational goals.",
      icon: MessageSquare
    },
    {
      title: "Content Development",
      description: "Create engaging content that connects with your audience and drives results.",
      icon: FileText
    },
    {
      title: "Stakeholder Engagement",
      description: "Build and maintain strong relationships with key stakeholders through effective communication.",
      icon: Users
    }
  ]

  return (
    <section className="container py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <service.icon className="w-10 h-10 mb-4 text-primary" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 