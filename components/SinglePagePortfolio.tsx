'use client'

import { useState, forwardRef, useImperativeHandle } from 'react'
import { SinglePagePortfolioRef } from '@/types'
import { experiences, skillCategories, projects, stats, aboutText, contactText } from '@/data/portfolio'
import ExpandableSection from './ui/ExpandableSection'
import StatsGrid from './ui/StatsGrid'
import TagList from './ui/TagList'
import BulletList from './ui/BulletList'

const SinglePagePortfolio = forwardRef<SinglePagePortfolioRef>((props, ref) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  useImperativeHandle(ref, () => ({
    toggleSection
  }))

  return (
    <div className="max-w-4xl mx-auto px-8 py-8 space-y-8">

      {/* About Section */}
      <ExpandableSection
        id="about"
        title="About"
        subtitle="How I make complex technology feel human"
        isExpanded={expandedSection === 'about'}
        onToggle={toggleSection}
      >
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="text-lg font-medium text-black">{aboutText.intro}</p>
          <p>{aboutText.subtitle}</p>
          <p>{aboutText.education}</p>
          <p>{aboutText.philosophy}</p>
          <p className="text-sm font-medium text-black border-l-2 border-black pl-3">{aboutText.challenge}</p>
        </div>

        <StatsGrid stats={stats} />
      </ExpandableSection>

      {/* Experience Section */}
      <ExpandableSection
        id="experience"
        title="Experience"
        subtitle="EasyBee AI • Cadence Design Systems"
        isExpanded={expandedSection === 'experience'}
        onToggle={toggleSection}
      >
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="border-l-2 border-gray-200 pl-6">
              <h3 className="text-lg font-bold text-black">{exp.company}</h3>
              <p className="text-gray-700 font-medium">{exp.role}</p>
              <p className="text-sm text-gray-600 mb-3">{exp.period} • {exp.location}</p>
              <BulletList items={exp.achievements} />
            </div>
          ))}
        </div>
      </ExpandableSection>

      {/* Skills Section */}
      <ExpandableSection
        id="skills"
        title="Skills"
        subtitle="Python • C++ • ROS2 • AWS • Docker • LangGraph"
        isExpanded={expandedSection === 'skills'}
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
        subtitle="AI Content Detective • Semi-Autonomous Cycle • Travel Co-Pilot"
        isExpanded={expandedSection === 'projects'}
        onToggle={toggleSection}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="border border-gray-200 p-4">
              <h3 className="font-bold text-black mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">{project.description}</p>
              <div className="mb-3">
                <TagList tags={project.tags} />
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
      </ExpandableSection>

      {/* Contact Section */}
      <ExpandableSection
        id="contact"
        title="Contact"
        subtitle="lang.gui.bu@gmail.com • San Francisco, CA"
        isExpanded={expandedSection === 'contact'}
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