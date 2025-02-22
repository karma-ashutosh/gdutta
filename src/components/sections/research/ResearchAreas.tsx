"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ResearchAreas() {
  const areas = [
    {
      title: "Strategic Communications",
      description: "Investigating effective communication strategies in organizational contexts.",
    },
    {
      title: "Digital Transformation",
      description: "Studying the impact of digital technologies on communication practices.",
    },
    {
      title: "Cross-Cultural Communication",
      description: "Analyzing communication patterns across different cultural contexts.",
    }
  ]

  return (
    <motion.section 
      className="container"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
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
          <motion.div key={index} variants={fadeIn}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 