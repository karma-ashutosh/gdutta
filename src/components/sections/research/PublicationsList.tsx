"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PublicationsList() {
  const publications = [
    {
      title: "Strategic Communication in International Development",
      type: "Research Paper",
      year: "2023",
      journal: "Journal of International Communication",
      tags: ["Strategic Communication", "International Development", "Policy"]
    },
    {
      title: "Digital Transformation of Organizational Communication",
      type: "Case Study",
      year: "2022",
      journal: "Communication Management Quarterly",
      tags: ["Digital Communication", "Organizational Change", "Technology"]
    },
    {
      title: "Stakeholder Engagement in Crisis Communication",
      type: "Research Article",
      year: "2021",
      journal: "Crisis Management Review",
      tags: ["Crisis Communication", "Stakeholder Management"]
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
        Publications
      </motion.h2>
      <div className="grid gap-6">
        {publications.map((pub, index) => (
          <motion.div key={index} variants={fadeIn}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                    <p className="text-muted-foreground">
                      {pub.journal} • {pub.year}
                    </p>
                  </div>
                  <Badge>{pub.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
} 