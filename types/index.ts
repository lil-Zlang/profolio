// Portfolio data types
export interface Experience {
  company: string
  role: string
  location: string
  period: string
  achievements: string[]
  url?: string
  image?: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  github: string
  url?: string
  image?: string
  chromeStoreUrl?: string
  demoVideo?: string
}

export interface Stat {
  value: string
  label: string
}

export interface NavItem {
  name: string
  section: string
}

export interface SocialLink {
  name: string
  url: string
  isEmail?: boolean
}

// Component prop types
export interface NavbarProps {
  onSectionClick?: (section: string) => void
}

export interface SinglePagePortfolioRef {
  toggleSection: (section: string) => void
}

export interface ExpandableSectionProps {
  id: string
  title: string
  subtitle: string
  isExpanded: boolean
  onToggle: (section: string) => void
  children: React.ReactNode
}

export interface SectionHeaderProps {
  title: string
  subtitle: string
  isExpanded: boolean
  onToggle: () => void
}

export interface StatsGridProps {
  stats: Stat[]
}

export interface TagListProps {
  tags: string[]
}

export interface BulletListProps {
  items: string[]
  className?: string
}