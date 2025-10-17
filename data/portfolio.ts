import { Experience, SkillCategory, Project, Stat, NavItem, SocialLink } from '@/types'

export const experiences: Experience[] = [
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

export const skillCategories: SkillCategory[] = [
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

export const projects: Project[] = [
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

export const stats: Stat[] = [
  { value: '40%', label: 'Conversion Increase' },
  { value: '38%', label: 'Latency Reduction' },
  { value: '90%+', label: 'Test Coverage' },
  { value: '10+', label: 'Projects Delivered' },
]

export const navItems: NavItem[] = [
  { name: 'About', section: 'about' },
  { name: 'Experience', section: 'experience' },
  { name: 'Skills', section: 'skills' },
  { name: 'Projects', section: 'projects' },
  { name: 'Contact', section: 'contact' },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/lil-Zlang' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zhilang-gui-b5b59b254/' },
  { name: 'Email', url: 'mailto:lang.gui.bu@gmail.com', isEmail: true },
  { name: 'Cadence', url: 'https://www.cadence.com/en_US/home.html' },
  { name: 'EasyBee AI', url: 'https://easybee.ai/' },
]

export const aboutText = {
  intro: "Problem → Code → Solution.",
  subtitle: "I'm an engineer focused on turning real-world problems into simple, shippable products.",
  education: "At Boston University, this led me to create a semi-autonomous cycle for the visually impaired—winning the Societal Impact Award.",
  philosophy: "I bring that same user-first mindset to my professional work, solving real problems for real people.",
  challenge: "Currently: 10 weeks, 10 apps — building and shipping one application every week.",
}

export const contactText = {
  availability: [
    'Available for freelance projects',
    'Open to collaboration',
    'Response within 24 hours',
  ],
}