export function ServicesSection() {
  const services = [
    {
      title: "Communication Strategy",
      description: "Develop comprehensive communication strategies aligned with organizational goals",
      icon: "📊"
    },
    {
      title: "Content Development",
      description: "Create engaging and effective content across various platforms and mediums",
      icon: "✍️"
    },
    {
      title: "Media Relations",
      description: "Build and maintain strong relationships with media outlets and stakeholders",
      icon: "🎯"
    },
    {
      title: "Training & Workshops",
      description: "Conduct communication workshops and training sessions for teams",
      icon: "📚"
    }
  ]

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Consulting Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 