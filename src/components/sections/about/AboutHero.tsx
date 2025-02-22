export function AboutHero() {
  return (
    <section className="container">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Communications professional with extensive experience in strategic communications, content development, and stakeholder engagement. Specialized in developing and implementing comprehensive communication strategies for complex organizations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground">New Delhi, India</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Languages</h3>
            <p className="text-muted-foreground">English, Hindi</p>
          </div>
        </div>
      </div>
    </section>
  )
} 