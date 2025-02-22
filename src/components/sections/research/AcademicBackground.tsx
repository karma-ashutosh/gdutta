"use client"

import { motion } from "framer-motion"
import { staggerContainer, slideIn } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Variants } from 'framer-motion'

const fadeInVariant: Variants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3
    }
  }
}

export function AcademicBackground() {
  const education = [
    {
      degree: "Master's in Communication",
      institution: "Top University",
      year: "2018",
      focus: "Strategic Communications and Digital Media",
      achievements: [
        "Research focus on organizational communication",
        "Thesis on digital transformation in communications",
        "Academic excellence award"
      ]
    },
    {
      degree: "Master's in International Relations",
      institution: "Leading University",
      year: "2016",
      focus: "Global Communications and Policy",
      achievements: [
        "Specialized in international development",
        "Research on cross-cultural communication",
        "Merit scholarship recipient"
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
        variants={fadeInVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        Academic Background
      </motion.h2>
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <motion.div key={index} variants={slideIn}>
            <Card className="hover:shadow-lg transition-shadow">
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
                <p className="font-medium mb-2">Focus: {edu.focus}</p>
                <ul className="space-y-1 text-muted-foreground">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {achievement}
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