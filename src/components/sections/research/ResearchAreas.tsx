import { motion } from "framer-motion"
import { fadeIn, staggerContainer, scaleIn } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResearchAreas() {
  const areas = [
    {
      title: "Strategic Communications",
      description: "Research focusing on strategic communication approaches in organizational contexts.",
      topics: [
        "Communication Strategy Development",
        "Organizational Communication",
        "Change Management Communication"
      ]
    },
    {
      title: "International Relations",
      description: "Studies on communication in international development and cross-cultural contexts.",
      topics: [
        "Cross-cultural Communication",
        "Development Communication",
        "International Policy Communication"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Research on digital communication technologies and organizational adaptation.",
      topics: [
        "Digital Communication Strategies",
        "Technology Adoption",
        "Digital Transformation Impact"
      ]
    }
  ]

  return (
    <motion.section 
      className="container"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-8"
        variants={fadeIn}
      >
        Research Areas
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {areas.map((area, index) => (
          <motion.div key={index} variants={scaleIn}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 