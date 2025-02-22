export function HeroSection() {
  return (
    <section className="relative py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Communications Strategy & 
            <span className="text-primary"> Consulting</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced communications officer with multiple masters degrees, helping organizations develop effective communication strategies and content.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
              View Services
            </button>
            <button className="px-6 py-3 rounded-lg border border-input bg-background hover:bg-accent">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 