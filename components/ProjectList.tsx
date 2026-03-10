'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { tenWeeksTenAppsProjects, projects } from '@/data/portfolio'
import { Project, PROJECT_CATEGORIES, ProjectCategory } from '@/types'

const allProjects: Project[] = [
  ...tenWeeksTenAppsProjects,
  ...projects,
]

type SortOption = 'default' | 'newest' | 'oldest'

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

/* ── Award Badge ── */
const AwardTag = ({ tag }: { tag: string }) => (
  <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 text-amber-700 dark:text-amber-400 border border-amber-400 dark:border-amber-500 bg-amber-50 dark:bg-amber-950/30">
    {tag}
  </span>
)

const Tag = ({ tag }: { tag: string }) => {
  if (tag.startsWith('🏆')) return <AwardTag tag={tag} />
  return (
    <span className="text-[10px] uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-600 px-2 py-0.5">
      {tag}
    </span>
  )
}

/* ── Image Gallery (2x2 grid for multi-image projects) ── */
const ImageGallery = ({ images, title }: { images: string[]; title: string }) => (
  <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
    {images.map((src, i) => (
      <div key={i} className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
        <Image
          src={src}
          alt={`${title} photo ${i + 1}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    ))}
  </div>
)

/* ── List View Card ── */
const ListCard = ({ project, index }: { project: Project; index: number }) => {
  const hasImages = project.images && project.images.length > 1
  const hasImage = !!project.image
  const isEven = index % 2 === 0
  const hasVisual = hasImages || hasImage

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 py-12 md:py-16 animate-fade-in">
      <div className={`flex flex-col ${hasVisual ? 'md:flex-row' : ''} gap-8 md:gap-12 ${!isEven && hasVisual ? 'md:flex-row-reverse' : ''}`}>
        <div className={`flex-1 flex flex-col justify-center ${hasVisual ? 'md:w-1/2' : ''}`}>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.tags.slice(0, 5).map((tag) => (
              <Tag key={tag} tag={tag} />
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
            {project.paperUrl && <ProjectLink href={project.paperUrl} label="Read Paper" color="text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400 hover:text-blue-500 dark:hover:text-blue-300 hover:border-blue-500 dark:hover:border-blue-300" />}
          </div>
        </div>
        {hasVisual && (
          <div className="flex-1 md:w-1/2">
            {hasImages ? (
              <ImageGallery images={project.images!} title={project.title} />
            ) : hasImage ? (
              <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
                <Image
                  src={project.image!}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Grid View Card ── */
const GridCard = ({ project }: { project: Project }) => (
  <div className="border border-gray-200 dark:border-gray-800 overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-900 animate-fade-in">
    {project.image && (
      <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    )}
    <div className="p-5">
      <div className="flex flex-wrap items-center gap-1.5 mb-3">
        {project.tags.slice(0, 3).map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <h3 className="font-bold text-black dark:text-white mb-2 text-lg leading-tight">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 leading-relaxed line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
        <ProjectLink href={project.github} label="Code" />
        {project.url && <ProjectLink href={project.url} label="Demo" />}
        {project.demoVideo && <ProjectLink href={project.demoVideo} label="Video" color="text-purple-700 dark:text-purple-400 border-purple-700 dark:border-purple-400 hover:text-purple-500 dark:hover:text-purple-300 hover:border-purple-500 dark:hover:border-purple-300" />}
        {project.paperUrl && <ProjectLink href={project.paperUrl} label="Paper" color="text-blue-700 dark:text-blue-400 border-blue-700 dark:border-blue-400 hover:text-blue-500 dark:hover:text-blue-300 hover:border-blue-500 dark:hover:border-blue-300" />}
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

const SortIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

/* ── Category button helper ── */
const getCategoryCount = (category: ProjectCategory) =>
  category === 'All'
    ? allProjects.length
    : allProjects.filter((p) => p.categories.includes(category as Exclude<ProjectCategory, 'All'>)).length

/* ── Main Component ── */
const DEFAULT_VISIBLE = 6

const ProjectList = () => {
  const [view, setView] = useState<'list' | 'grid'>('grid')
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const [sort, setSort] = useState<SortOption>('default')
  const [animating, setAnimating] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const isFocusMode = activeCategory !== 'All'

  const baseFiltered = activeCategory === 'All'
    ? allProjects
    : allProjects.filter((p) => p.categories.includes(activeCategory as Exclude<ProjectCategory, 'All'>))

  const allFilteredProjects = sort === 'default'
    ? baseFiltered
    : [...baseFiltered].reverse()

  // In default "All" view, limit to 6 unless expanded
  const filteredProjects = (!isFocusMode && !showAll)
    ? allFilteredProjects.slice(0, DEFAULT_VISIBLE)
    : allFilteredProjects

  const hasMore = !isFocusMode && !showAll && allFilteredProjects.length > DEFAULT_VISIBLE

  // Show vertical sidebar when horizontal tabs scroll out of view AND still in projects section
  useEffect(() => {
    const tabs = tabsRef.current
    const section = sectionRef.current
    if (!tabs || !section) return

    const handleScroll = () => {
      const tabsRect = tabs.getBoundingClientRect()
      const sectionRect = section.getBoundingClientRect()
      const tabsHidden = tabsRect.bottom < 0
      const sectionVisible = sectionRect.bottom > 200
      setShowSidebar(tabsHidden && sectionVisible)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCategoryChange = useCallback((category: ProjectCategory) => {
    setAnimating(true)
    setTimeout(() => {
      setActiveCategory(category)
      setShowAll(false)
      // Enter focus mode (list view) when filtering, grid when showing all
      setView(category === 'All' ? 'grid' : 'list')
      setAnimating(false)
    }, 150)
  }, [])

  const handleSortChange = (s: SortOption) => {
    setAnimating(true)
    setTimeout(() => {
      setSort(s)
      setAnimating(false)
    }, 150)
  }

  const exitFocusMode = () => {
    handleCategoryChange('All')
  }

  return (
    <section id="projects" ref={sectionRef} className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header + Toggle */}
        <div className="flex items-center justify-between pt-12 pb-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-black uppercase tracking-tight text-black dark:text-white">Selected Works</h2>
          <div className="flex items-center gap-3">
            {/* Sort dropdown */}
            <div className="flex items-center gap-1.5">
              <SortIcon />
              <select
                value={sort}
                onChange={(e) => handleSortChange(e.target.value as SortOption)}
                className="text-xs font-bold uppercase tracking-wider bg-transparent text-gray-500 dark:text-gray-400 cursor-pointer focus:outline-none hover:text-black dark:hover:text-white transition-colors"
              >
                <option value="default">Default</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>

            {/* View toggle */}
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
        </div>

        {/* Category Filter Tabs — horizontal scroll on mobile */}
        <div ref={tabsRef} className="flex gap-2 pt-6 overflow-x-auto scrollbar-hide -mx-8 px-8 pb-2">
          {PROJECT_CATEGORIES.map((category) => {
            const count = getCategoryCount(category)
            const isActive = activeCategory === category

            return (
              <div key={category} className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-full whitespace-nowrap ${
                    isActive
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {category}
                  <span className={`ml-1.5 text-[10px] ${isActive ? 'text-gray-300 dark:text-gray-600' : 'text-gray-400 dark:text-gray-500'}`}>
                    {count}
                  </span>
                </button>
                {isActive && category !== 'All' && (
                  <button
                    onClick={(e) => { e.stopPropagation(); exitFocusMode() }}
                    className="p-1 rounded-full text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                    aria-label="Clear filter"
                  >
                    <CloseIcon />
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Projects — with fade transition */}
        <div
          ref={contentRef}
          className={`transition-all duration-200 ${animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
        >
          {view === 'list' ? (
            <div>
              {filteredProjects.map((project, index) => (
                <ListCard key={project.title} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
              {filteredProjects.map((project) => (
                <GridCard key={project.title} project={project} />
              ))}
            </div>
          )}

          {/* View More / View Less */}
          {hasMore && (
            <div className="flex justify-center pb-12">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white rounded-full transition-colors"
              >
                View All Projects ({allFilteredProjects.length})
              </button>
            </div>
          )}
          {!isFocusMode && showAll && allFilteredProjects.length > DEFAULT_VISIBLE && (
            <div className="flex justify-center pb-12">
              <button
                onClick={() => setShowAll(false)}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white rounded-full transition-colors"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Sticky Vertical Sidebar (appears when scrolling past horizontal tabs) ── */}
      <div
        className={`hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-1.5 transition-all duration-300 ${
          showSidebar ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
        }`}
      >
        {PROJECT_CATEGORIES.map((category) => {
          const count = getCategoryCount(category)
          const isActive = activeCategory === category

          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`group flex items-center gap-2 transition-all duration-200 rounded-full ${
                isActive
                  ? 'bg-black dark:bg-white text-white dark:text-black px-4 py-1.5'
                  : 'bg-gray-100/90 dark:bg-gray-800/90 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white backdrop-blur-sm px-3 py-1.5'
              }`}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                {category}
              </span>
              <span className={`text-[9px] ${isActive ? 'text-gray-300 dark:text-gray-600' : 'text-gray-400 dark:text-gray-500'}`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectList
