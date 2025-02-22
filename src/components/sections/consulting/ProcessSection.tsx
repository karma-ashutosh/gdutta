import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "Initial consultation to understand your needs, challenges, and objectives."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Creating tailored solutions and strategies based on the assessment."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Executing the strategies with clear milestones and deliverables."
    },
    {
      number: "04",
      title: "Evaluation & Refinement",
      description: "Measuring results and refining approaches for optimal outcomes."
    }
  ]

  return (
    <section className="container">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Consulting Process</h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        A structured approach to delivering effective communication solutions.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <span className="text-4xl font-bold text-primary/50">{step.number}</span>
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 