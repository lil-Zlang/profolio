'use client'

import { useState, forwardRef, useImperativeHandle } from 'react'

interface SinglePagePortfolioRef {
  toggleSection: (section: string) => void
}

const SinglePagePortfolio = forwardRef<SinglePagePortfolioRef>((props, ref) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  useImperativeHandle(ref, () => ({
    toggleSection
  }))

  const experiences = [
    {
      company: 'EasyBee AI',
      role: 'Full-Stack & LLM Engineer',
      location: 'San Francisco, CA',
      period: '2025 - Present',
      achievements: [
        'Architected multi-agent LLM system → 40% increase in customer conversion',
        'Delivered zero-downtime platform for rapidly expanding user base',
      ],
    },
    {
      company: 'Cadence Design Systems',
      role: 'Machine Learning Engineering Intern',
      location: 'Austin, TX',
      period: 'Summer 2024',
      achievements: [
        'Engineered U-Net thermal model → 5% improvement in data center efficiency',
        'Built 3D visualization tool → 15% faster hardware validation',
      ],
    },
  ]

  const skillCategories = [
    {
      title: 'Core Engineering',
      skills: ['Python (PyTorch/Flask)', 'C++/C (Embedded)', 'ROS2 & Embedded Systems', 'SQL'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS & Docker', 'CI/CD (GitHub Actions)', 'Linux & Git', 'Node.js'],
    },
    {
      title: 'Solutions & Leadership',
      skills: ['Technical Presentations', 'Stakeholder Communication', 'Agile Project Management'],
    },
  ]

  const projects = [
    {
      title: 'AI Content Detective',
      description: 'React-TypeScript web app that detects AI-generated content in real time',
      tags: ['React', 'TypeScript', 'Supabase'],
      github: 'https://github.com/lil-Zlang/ai-content-detective',
    },
    {
      title: 'Semi-Autonomous Cycle',
      description: 'COE Societal Impact Award winner. 92% navigation accuracy for visually impaired users',
      tags: ['ROS2', 'Embedded Systems', 'Computer Vision'],
      github: 'https://github.com/lil-Zlang',
    },
    {
      title: 'AI Travel Co-Pilot',
      description: 'Multi-agent LLM system. 40% increase in booking conversions',
      tags: ['LangGraph', 'LLM', 'APIs'],
      github: 'https://github.com/lil-Zlang',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-8 py-8 space-y-8">
      
      {/* About Section */}
      <div className="border border-gray-200">
        <button
          onClick={() => toggleSection('about')}
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-bold text-black">About</h2>
            <p className="text-gray-600 mt-1">How I make complex technology feel human</p>
          </div>
          <span className="text-2xl text-gray-400">
            {expandedSection === 'about' ? '−' : '+'}
          </span>
        </button>
        
        {expandedSection === 'about' && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm driven by a simple question: how can we make complex technology feel human?
              </p>
              <p>
                At Boston University, this led me to create a semi-autonomous cycle for the visually impaired—winning the Societal Impact Award.
              </p>
              <p>
                I bring that same user-first mindset to my professional work, solving real problems for real people.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">40%</div>
                <div className="text-sm text-gray-600">Conversion Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">38%</div>
                <div className="text-sm text-gray-600">Latency Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">90%+</div>
                <div className="text-sm text-gray-600">Test Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">10+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Experience Section */}
      <div className="border border-gray-200">
        <button
          onClick={() => toggleSection('experience')}
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-bold text-black">Experience</h2>
            <p className="text-gray-600 mt-1">EasyBee AI • Cadence Design Systems</p>
          </div>
          <span className="text-2xl text-gray-400">
            {expandedSection === 'experience' ? '−' : '+'}
          </span>
        </button>
        
        {expandedSection === 'experience' && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.company} className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-bold text-black">{exp.company}</h3>
                  <p className="text-gray-700 font-medium">{exp.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{exp.period} • {exp.location}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-2 w-1 h-1 bg-black rounded-full flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="border border-gray-200">
        <button
          onClick={() => toggleSection('skills')}
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-bold text-black">Skills</h2>
            <p className="text-gray-600 mt-1">Python • C++ • ROS2 • AWS • Docker • LangGraph</p>
          </div>
          <span className="text-2xl text-gray-400">
            {expandedSection === 'skills' ? '−' : '+'}
          </span>
        </button>
        
        {expandedSection === 'skills' && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <div key={category.title} className="border border-gray-200 p-4">
                  <h3 className="font-bold text-black mb-3">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Projects Section */}
      <div className="border border-gray-200">
        <button
          onClick={() => toggleSection('projects')}
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-bold text-black">Projects</h2>
            <p className="text-gray-600 mt-1">AI Content Detective • Semi-Autonomous Cycle • Travel Co-Pilot</p>
          </div>
          <span className="text-2xl text-gray-400">
            {expandedSection === 'projects' ? '−' : '+'}
          </span>
        </button>
        
        {expandedSection === 'projects' && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div key={project.title} className="border border-gray-200 p-4">
                  <h3 className="font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-700 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs border border-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline text-sm"
                  >
                    View Code →
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <a
                href="https://github.com/lil-Zlang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors"
              >
                View All Projects
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="border border-gray-200">
        <button
          onClick={() => toggleSection('contact')}
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-bold text-black">Contact</h2>
            <p className="text-gray-600 mt-1">lang.gui.bu@gmail.com • San Francisco, CA</p>
          </div>
          <span className="text-2xl text-gray-400">
            {expandedSection === 'contact' ? '−' : '+'}
          </span>
        </button>
        
        {expandedSection === 'contact' && (
          <div className="px-6 pb-6 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  I'm driven by complex challenges and the opportunity to create technology with a purpose. 
                  If you have a project that aims to make a real-world impact, I would love to connect.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-black mb-1">Email</h3>
                    <a href="mailto:lang.gui.bu@gmail.com" className="text-gray-700 hover:text-black transition-colors">
                      lang.gui.bu@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-black mb-1">Location</h3>
                    <p className="text-gray-700">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 p-6">
                <h3 className="font-bold text-black mb-4">Let's Work Together</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    Available for freelance projects
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    Open to collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-black rounded-full" />
                    Response within 24 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})

SinglePagePortfolio.displayName = 'SinglePagePortfolio'

export default SinglePagePortfolio
