import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="container">
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Enhance Your Communication Strategy?
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Let's discuss how we can help you achieve your communication goals and create impactful strategies for your organization.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 