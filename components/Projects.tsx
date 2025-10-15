const Projects = () => {
  const projects = [
    {
      title: 'AI Content Detective',
      description: 'React-TypeScript web app that detects AI-generated images, videos, or URLs in real time with confidence scores.',
      tags: ['React', 'TypeScript', 'Supabase', 'TailwindCSS'],
      github: 'https://github.com/lil-Zlang/ai-content-detective',
    },
    {
      title: 'Reel or Fake',
      description: 'Browser game challenging players to spot AI-generated movie clips in fast-paced betting rounds.',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      github: 'https://github.com/lil-Zlang/reel-or-fake',
    },
    {
      title: 'Semi-Autonomous Cycle',
      description: 'COE Societal Impact Award winner. ROS2-based embedded system with 92% navigation accuracy for visually impaired users.',
      tags: ['ROS2', 'Embedded Systems', 'Computer Vision'],
      github: 'https://github.com/lil-Zlang',
    },
    {
      title: 'AI Travel Co-Pilot',
      description: 'Multi-agent LLM system for intelligent travel planning. Achieved 40% increase in booking conversions.',
      tags: ['LangGraph', 'LLM', 'Airtable', 'APIs'],
      github: 'https://github.com/lil-Zlang',
    },
    {
      title: 'Personal Assistive Robot',
      description: 'Low-cost autonomous robot with PID control and real-time collision avoidance using Sharp IR sensors.',
      tags: ['ESP32', 'PID Control', 'Embedded C'],
      github: 'https://github.com/lil-Zlang',
    },
    {
      title: 'U-Net Thermal Model',
      description: 'ML model for data center thermal prediction with 5% accuracy improvement and 20% latency reduction.',
      tags: ['PyTorch', 'U-Net', 'Paraview'],
      github: 'https://github.com/lil-Zlang',
    },
  ]

  return (
    <section id="projects" className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-black">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-black">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                View Code →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/lil-Zlang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

