"use client"

import { ResearchHero } from "@/components/sections/research/ResearchHero"
import { PublicationsList } from "@/components/sections/research/PublicationsList"
import { ResearchAreas } from "@/components/sections/research/ResearchAreas"
import { AcademicBackground } from "@/components/sections/research/AcademicBackground"

export default function ResearchPage() {
  return (
    <main className="flex flex-col gap-16">
      <ResearchHero />
      <PublicationsList />
      <ResearchAreas />
      <AcademicBackground />
    </main>
  )
} 