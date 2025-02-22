import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      category: "Communication",
      skills: [
        "Strategic Communications",
        "Content Strategy",
        "Media Relations",
        "Stakeholder Engagement",
        "Crisis Communications",
        "Public Relations"
      ]
    },
    {
      category: "Content Development",
      skills: [
        "Content Writing",
        "Editorial Planning",
        "Social Media Strategy",
        "Digital Content",
        "Technical Writing",
        "Storytelling"
      ]
    },
    {
      category: "Project Management",
      skills: [
        "Strategy Development",
        "Team Leadership",
        "Stakeholder Management",
        "Training & Development",
        "Project Planning",
        "Risk Management"
      ]
    }
  ]

  return (
    <section className="container mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Skills & Expertise</h2>
      <div className="grid gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 