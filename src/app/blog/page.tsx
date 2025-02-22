"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const posts = [
    {
      title: "Effective Communication Strategies in Digital Age",
      date: "2024-02-20",
      excerpt: "Exploring how organizations can adapt their communication strategies for the digital era.",
      tags: ["Strategy", "Digital", "Communication"],
      readTime: "5 min read"
    },
    {
      title: "Building Cross-Cultural Communication Bridges",
      date: "2024-02-15",
      excerpt: "Understanding the nuances of communication across different cultural contexts.",
      tags: ["Culture", "International", "Communication"],
      readTime: "4 min read"
    }
  ]

  return (
    <main className="flex flex-col gap-16">
      <motion.section 
        className="container py-16 md:py-24"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Thoughts and insights on communications, strategy, and organizational development.
        </p>
      </motion.section>

      <section className="container">
        <div className="grid gap-8 max-w-3xl">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {post.readTime}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{post.excerpt}</p>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
} 