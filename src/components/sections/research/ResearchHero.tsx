"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

export function ResearchHero() {
  return (
    <motion.section 
      className="container py-16 md:py-24"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Work</h1>
      <p className="text-xl text-muted-foreground max-w-2xl">
        Exploring the intersection of strategic communications, digital transformation, 
        and organizational development through academic research and practical applications.
      </p>
    </motion.section>
  )
} 