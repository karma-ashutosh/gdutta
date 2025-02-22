import { ConsultingHero } from "@/components/sections/consulting/ConsultingHero"
import { ServicesList } from "@/components/sections/consulting/ServicesList"
import { ProcessSection } from "@/components/sections/consulting/ProcessSection"
import { CTASection } from "@/components/sections/consulting/CTASection"

export default function ConsultingPage() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-16">
      <ConsultingHero />
      <ServicesList />
      <ProcessSection />
      <CTASection />
    </div>
  )
} 