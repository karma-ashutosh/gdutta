import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ConsultingHero() {
  return (
    <section className="container">
      <div className="max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Strategic Communications Consulting
        </h1>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Expert consulting services in strategic communications, content development, and stakeholder engagement. Helping organizations build effective communication strategies and strengthen their messaging.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 