const Skills = () => {
  const skillCategories = [
    {
      title: 'AI/ML',
      skills: ['LangChain & LangGraph', 'RAG Pipelines & Vector DBs', 'Multi-Agent Systems', 'PyTorch & Computer Vision'],
    },
    {
      title: 'Software & DevOps',
      skills: ['Python (FastAPI/Flask)', 'C++ & SQL (PostgreSQL)', 'Docker & AWS (EC2)', 'GitHub Actions CI/CD'],
    },
    {
      title: 'Tools & Data',
      skills: ['Git & ROS2', 'Pandas & NumPy', 'Pinecone & OpenAI API', 'Async Programming'],
    },
  ]

  const technologies = [
    'Prompt Engineering', 'Agentic AI', 'Embeddings', 'SSE Streaming', 'REST APIs',
    'Nginx', 'Three.js', 'Paraview', 'Inference Optimization', 'CodeRabbit'
  ]

  return (
    <section id="skills" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-black">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="border border-gray-200 p-6">
              <h3 className="text-xl font-bold mb-6 text-black">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-xl font-bold mb-8 text-black">
            Technologies & Tools
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 border border-gray-200 text-center text-sm text-gray-700"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
