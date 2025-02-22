import { HeroSection } from '@/components/sections/home/HeroSection'
import { ServicesSection } from '@/components/sections/home/ServicesSection'
import { FeaturedWork } from '@/components/sections/home/FeaturedWork'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FeaturedWork />
    </div>
  )
} 