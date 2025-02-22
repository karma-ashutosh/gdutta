import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesList() {
  const services = [
    {
      title: "Communication Strategy Development",
      description: "Develop comprehensive communication strategies aligned with organizational goals and objectives.",
      features: [
        "Stakeholder analysis and mapping",
        "Communication needs assessment",
        "Strategy development and planning",
        "Implementation roadmap",
        "Monitoring and evaluation framework"
      ]
    },
    {
      title: "Content Strategy & Development",
      description: "Create engaging and effective content strategies across multiple platforms and channels.",
      features: [
        "Content strategy development",
        "Editorial planning",
        "Content creation and curation",
        "Multi-platform content management",
        "Content performance analysis"
      ]
    },
    {
      title: "Stakeholder Engagement",
      description: "Build and maintain strong relationships with key stakeholders through effective engagement strategies.",
      features: [
        "Stakeholder identification",
        "Engagement strategy development",
        "Communication channel optimization",
        "Relationship management",
        "Feedback mechanisms"
      ]
    },
    {
      title: "Training & Capacity Building",
      description: "Enhance your team's communication capabilities through specialized training programs.",
      features: [
        "Communication skills workshops",
        "Media training",
        "Crisis communication preparation",
        "Digital communication training",
        "Team capability assessment"
      ]
    }
  ]

  return (
    <section className="container" id="services">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Consulting Services</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Comprehensive communication consulting services tailored to your organization's needs.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 