const Experience = () => {
  const experiences = [
    {
      company: 'EasyBee AI',
      role: 'AI Engineer',
      location: 'San Francisco, CA',
      period: 'July 2025 - Present',
      achievements: [
        'Built LangGraph multi-agent system with agent pooling, reducing cold-start latency from 5s to 150ms',
        'Deployed RAG pipeline with Pinecone + SSE streaming, cutting response time to 2-3s and boosting booking speed by 40%',
      ],
    },
    {
      company: 'Cadence Design Systems',
      role: 'Machine Learning Engineering Intern',
      location: 'Austin, TX',
      period: 'May 2024 - August 2024',
      achievements: [
        'Developed U-Net thermal prediction model achieving 5% efficiency improvement for data center optimization',
        'Built ETL pipeline processing 500GB thermal data, eliminating 8 hours/week of manual analysis',
      ],
    },
    {
      company: 'Terrier Motorsports',
      role: 'GLV Team Lead',
      location: 'Boston, MA',
      period: '2023 - 2024',
      achievements: [
        'Led 5-engineer team delivering 3 embedded subsystems (steering, telemetry, driver alerts) using C++ and CAN bus',
        'Reduced input latency from 120ms to 72ms, completing integration 1 week ahead of competition deadline',
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

