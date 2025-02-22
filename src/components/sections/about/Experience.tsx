import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Communications Officer",
      organization: "UNDP",
      period: "2020 - Present",
      description: "Led strategic communications initiatives, developed comprehensive communication strategies, and managed stakeholder relationships.",
      highlights: [
        "Developed and implemented communication strategies",
        "Managed media relations and stakeholder engagement",
        "Created content for various platforms and audiences",
        "Led training workshops and capacity building programs"
      ]
    },
    {
      title: "Communications Consultant",
      organization: "Independent",
      period: "2018 - 2020",
      description: "Provided strategic communications consulting to organizations, focusing on content strategy and stakeholder engagement.",
      highlights: [
        "Advised on communication strategies",
        "Developed content frameworks",
        "Conducted communications audits",
        "Led stakeholder workshops"
      ]
    }
  ]

  return (
    <section className="container">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Professional Experience</h2>
      <div className="grid gap-6">
        {experiences.map((experience, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                  <p className="text-muted-foreground">{experience.organization}</p>
                </div>
                <span className="text-sm text-muted-foreground">{experience.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{experience.description}</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {experience.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 