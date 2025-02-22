import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  const education = [
    {
      degree: "Master's in Communication",
      institution: "Top University",
      year: "2018",
      description: "Focused on strategic communications and digital media"
    },
    {
      degree: "Master's in International Relations",
      institution: "Leading University",
      year: "2016",
      description: "Specialized in global communications and cross-cultural engagement"
    }
  ]

  return (
    <section className="container">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
                <span className="text-sm text-muted-foreground">{edu.year}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p>{edu.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 