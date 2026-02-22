'use client'

import { useState, forwardRef, useImperativeHandle } from 'react'
import { SinglePagePortfolioRef } from '@/types'
import { experiences, skillCategories, projects, tenWeeksTenAppsProjects, contactText } from '@/data/portfolio'
import ExpandableSection from './ui/ExpandableSection'
import TagList from './ui/TagList'
import BulletList from './ui/BulletList'

const SinglePagePortfolio = forwardRef<SinglePagePortfolioRef>((props, ref) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['experience', '10weeks10apps', 'skills', 'projects', 'contact'])
  )

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(section)) {
        newSet.delete(section)
      } else {
        newSet.add(section)
      }
      return newSet
    })
  }

  useImperativeHandle(ref, () => ({
    toggleSection
  }))

  return (
    <div className="max-w-4xl mx-auto px-8 py-8 space-y-8">

      {/* Experience Section */}
      <ExpandableSection
        id="experience"
        title="Experience"
        subtitle="EasyBee AI • BU ECE • Cadence • Terrier Motorsports • HCI Lab"
        isExpanded={expandedSections.has('experience')}
        onToggle={toggleSection}
      >
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="border-l-2 border-gray-200 pl-6 flex gap-4">
              {/* Company Logo/Image */}
              {exp.image && (
                <div className="flex-shrink-0 w-20 h-20 mt-1">
                  <img 
                    src={exp.image} 
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="flex-grow">
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-black hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <h3 className="text-lg font-bold text-black">{exp.company}</h3>
                )}
                <p className="text-gray-700 font-medium">{exp.role}</p>
                <p className="text-sm text-gray-600 mb-3">{exp.period} • {exp.location}</p>
                <BulletList items={exp.achievements} />
              </div>
            </div>
          ))}
        </div>
      </ExpandableSection>

      {/* 10 Weeks 10 Apps Section */}
      <ExpandableSection
        id="10weeks10apps"
        title="10 Weeks 10 Apps"
        subtitle="Crimson 🏆 • Mafia Ace • VoiceCode • AdFlow • WeRead • MenuCopilot • Prompt CoPilot • More"
        isExpanded={expandedSections.has('10weeks10apps')}
        onToggle={toggleSection}
      >
        <div className="space-y-4 mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            A challenge to build and ship one application every week for 10 weeks. Each project demonstrates rapid iteration, 
            full-stack development capabilities, and real-world problem solving.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tenWeeksTenAppsProjects.map((project) => (
            <div 
              key={project.title} 
              className="border border-gray-200 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              {/* Screenshot Image - Prominent Display */}
              {project.image && (
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-black mb-2 text-lg">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <TagList tags={project.tags} />
                </div>
                <div className="flex flex-wrap gap-4 pt-2 border-t border-gray-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline text-sm font-medium transition-colors"
                  >
                    View Code →
                  </a>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.demoVideo && (
                    <a
                      href={project.demoVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 hover:underline text-sm font-medium transition-colors"
                    >
                      Demo Video →
                    </a>
                  )}
                  {project.chromeStoreUrl && (
                    <a
                      href={project.chromeStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 hover:underline text-sm font-medium transition-colors"
                    >
                      Chrome Store →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ExpandableSection>

      {/* Skills Section */}
      <ExpandableSection
        id="skills"
        title="Skills"
        subtitle="Python • C++ • ROS2 • AWS • Docker • LangGraph"
        isExpanded={expandedSections.has('skills')}
        onToggle={toggleSection}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="border border-gray-200 p-4">
              <h3 className="font-bold text-black mb-3">{category.title}</h3>
              <BulletList items={category.skills} />
            </div>
          ))}
        </div>
      </ExpandableSection>

      {/* Projects Section */}
      <ExpandableSection
        id="projects"
        title="Projects"
        subtitle="E-Voting • FitCat • Assistive Robot • RISC-V Processor • More"
        isExpanded={expandedSections.has('projects')}
        onToggle={toggleSection}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-200 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              {/* Screenshot Image - Prominent Display */}
              {project.image && (
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-black mb-2 text-lg">{project.title}</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <TagList tags={project.tags} />
                </div>
                <div className="flex flex-wrap gap-4 pt-2 border-t border-gray-200">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline text-sm font-medium"
                  >
                    View Code →
                  </a>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-medium transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
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
      </ExpandableSection>

      {/* Contact Section */}
      <ExpandableSection
        id="contact"
        title="Contact"
        subtitle="lang.gui.bu@gmail.com • San Francisco, CA"
        isExpanded={expandedSections.has('contact')}
        onToggle={toggleSection}
      >
        <div className="grid md:grid-cols-2 gap-8">
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

          <div className="border border-gray-200 p-6">
            <h3 className="font-bold text-black mb-4">Let's Work Together</h3>
            <BulletList items={contactText.availability} className="text-gray-700 text-sm" />
          </div>
        </div>
      </ExpandableSection>
    </div>
  )
})

SinglePagePortfolio.displayName = 'SinglePagePortfolio'

export default SinglePagePortfolio