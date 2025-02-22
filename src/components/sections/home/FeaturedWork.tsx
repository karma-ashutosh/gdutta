export function FeaturedWork() {
  const works = [
    {
      title: "Communication Strategy Development",
      description: "Developed comprehensive communication strategies for major organizations",
      category: "Strategy"
    },
    {
      title: "Content Development & Management",
      description: "Created and managed content strategies across multiple platforms",
      category: "Content"
    },
    {
      title: "Research Publications",
      description: "Published research work in leading academic journals",
      category: "Research"
    }
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-primary mb-2">{work.category}</div>
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-muted-foreground">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 