import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

export function ResearchHero() {
  return (
    <motion.section 
      className="container"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="max-w-4xl">
        <motion.h1 
          className="text-3xl md:text-5xl font-bold mb-6"
          variants={fadeIn}
        >
          Research & Publications
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground mb-8 leading-relaxed"
          variants={fadeIn}
        >
          Exploring the intersection of communications, international relations, and organizational development through academic research and practical insights.
        </motion.p>
      </div>
    </motion.section>
  )
} 