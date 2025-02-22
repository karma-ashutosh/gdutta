"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Calendar } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      title: "Email",
      description: "Send me a detailed message",
      icon: Mail,
      action: "Send Email",
      href: "mailto:contact@example.com"
    },
    {
      title: "Schedule a Call",
      description: "Book a consultation call",
      icon: Calendar,
      action: "Schedule",
      href: "#"
    },
    {
      title: "Quick Chat",
      description: "For brief inquiries",
      icon: MessageSquare,
      action: "Start Chat",
      href: "#"
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
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Let's discuss how we can work together to achieve your communication goals.
        </p>
      </motion.section>

      <section className="container">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <method.icon className="w-8 h-8 mb-4 text-primary" />
                  <CardTitle>{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="text-muted-foreground">{method.description}</p>
                  <Button asChild className="mt-auto">
                    <a href={method.href}>{method.action}</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
} 