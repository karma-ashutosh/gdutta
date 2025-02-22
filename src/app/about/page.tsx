import { AboutHero } from "@/components/sections/about/AboutHero"
import { Experience } from "@/components/sections/about/Experience"
import { Education } from "@/components/sections/about/Education"
import { Skills } from "@/components/sections/about/Skills"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-8 md:py-16">
      <AboutHero />
      <Experience />
      <Education />
      <Skills />
    </div>
  )
} 