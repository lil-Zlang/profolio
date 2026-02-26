'use client'

import { useState } from 'react'
import { tenWeeksTenAppsProjects, projects } from '@/data/portfolio'
import { Project } from '@/types'

const allProjects: Project[] = [
  ...tenWeeksTenAppsProjects,
  ...projects,
]

const ArrowIcon = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
)

const ProjectLink = ({ href, label, color = 'text-black dark:text-white border-black dark:border-white hover:text-gray-600 dark:hover:text-gray-400 hover:border-gray-600 dark:hover:border-gray-400' }: { href: string; label: string; color?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 pb-0.5 ${color}`}
  >
    {label}
    <ArrowIcon />
  </a>
)

/* ── List View Card ── */
const ListCard = ({ project, index }: { project: Project; index: number }) => {
  const hasImage = !!project.image
  const isEven = index % 2 === 0

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 py-12 md:py-16">
      <div className={`flex flex-col ${hasImage ? 'md:flex-row' : ''} gap-8 md:gap-12 ${!isEven && hasImage ? 'md:flex-row-reverse' : ''}`}>
        <div className={`flex-1 flex flex-col justify-center ${hasImage ? 'md:w-1/2' : ''}`}>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase tracking-tight leading-tight mb-4">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-lg">{project.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <ProjectLink href={project.github} label="View Code" />
            {project.url && <ProjectLink href={project.url} label="Live Demo" />}
            {project.demoVideo && <ProjectLink href={project.demoVideo} label="Demo Video" color="text-purple-700 dark:text-purple-400 border-purple-700 dark:border-purple-400 hover:text-purple-500 dark:hover:text-purple-300 hover:border-purple-500 dark:hover:border-purple-300" />}
            {project.chromeStoreUrl && <ProjectLink href={project.chromeStoreUrl} label="Chrome Store" color="text-green-700 dark:text-green-400 border-green-700 dark:border-green-400 hover:text-green-500 dark:hover:text-green-300 hover:border-green-500 dark:hover:border-green-300" />}
          </div>
        </div>
        {hasImage && (
          <div className="flex-1 md:w-1/2">
            <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
              <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Grid View Card ── */
const GridCard = ({ project }: { project: Project }) => (
  <div className="border border-gray-200 dark:border-gray-800 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900">
    {project.image && (
      <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
      </div>
    )}
    <div className="p-5">
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-1.5 py-0.5">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-black dark:text-white mb-2 text-lg leading-tight">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 leading-relaxed line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <ProjectLink href={project.github} label="Code" />
        {project.url && <ProjectLink href={project.url} label="Demo" />}
        {project.demoVideo && <ProjectLink href={project.demoVideo} label="Video" color="text-purple-700 dark:text-purple-400 border-purple-700 dark:border-purple-400 hover:text-purple-500 dark:hover:text-purple-300 hover:border-purple-500 dark:hover:border-purple-300" />}
      </div>
    </div>
  </div>
)

/* ── Toggle Icons ── */
const ListIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
)

const GridIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
  </svg>
)

/* ── Main Component ── */
const ProjectList = () => {
  const [view, setView] = useState<'list' | 'grid'>('grid')

  return (
    <section id="projects" className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header + Toggle */}
        <div className="flex items-center justify-between pt-12 pb-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-black uppercase tracking-tight text-black dark:text-white">Selected Works</h2>
          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <button
              onClick={() => setView('list')}
              className={`p-2 transition-colors ${view === 'list' ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
              aria-label="List view"
            >
              <ListIcon />
            </button>
            <button
              onClick={() => setView('grid')}
              className={`p-2 transition-colors ${view === 'grid' ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}
              aria-label="Grid view"
            >
              <GridIcon />
            </button>
          </div>
        </div>

        {/* Projects */}
        {view === 'list' ? (
          <div>
            {allProjects.map((project, index) => (
              <ListCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            {allProjects.map((project) => (
              <GridCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectList
