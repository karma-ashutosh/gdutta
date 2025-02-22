import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedWork() {
  const projects = [
    {
      title: "Strategic Communications Plan",
      client: "International Organization",
      description: "Developed and implemented a comprehensive communications strategy.",
      tags: ["Strategy", "Planning", "International"]
    },
    {
      title: "Content Strategy Development",
      client: "Tech Company",
      description: "Created a content strategy to improve digital presence and engagement.",
      tags: ["Content", "Digital", "Strategy"]
    }
  ]

  return (
    <section className="container py-16 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of recent projects and collaborations.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{project.client}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 