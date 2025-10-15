const Experience = () => {
  const experiences = [
    {
      company: 'EasyBee AI',
      role: 'Full-Stack & LLM Engineer',
      location: 'San Francisco, CA',
      period: '2025 - Present',
      achievements: [
        'Architected and pioneered a multi-agent LLM system that transformed the user experience, simplifying complex travel booking and leading to a 40% increase in customer conversion',
        'Translated client visions into a robust product roadmap, spearheading the delivery of a zero-downtime platform engineered for a rapidly expanding user base',
      ],
    },
    {
      company: 'Cadence Design Systems',
      role: 'Machine Learning Engineering Intern',
      location: 'Austin, TX',
      period: 'Summer 2024',
      achievements: [
        'Engineered and deployed a U-Net thermal model that proved a 5% improvement in data center efficiency for enterprise clients, directly impacting operational sustainability',
        'Innovated a 3D visualization tool with Paraview that empowered non-technical stakeholders, demystifying complex ML diagnostics and accelerating hardware validation by 15%',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-black">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company} className="bg-white p-8 border border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {exp.company}
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  {exp.role}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-2 w-1 h-1 bg-black rounded-full flex-shrink-0" />
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

