import { Experience, SkillCategory, Project, Stat, NavItem, SocialLink } from '@/types'

export const experiences: Experience[] = [
  {
    company: 'EasyBee AI',
    role: 'Full-Stack & LLM Engineer',
    location: 'San Francisco, CA',
    period: '2025 - Present',
    url: 'https://easybee.ai/',
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
    url: 'https://www.cadence.com/en_US/home.html',
    achievements: [
      'Engineered U-Net thermal model → 5% improvement in data center efficiency',
      'Built 3D visualization tool → 15% faster hardware validation',
    ],
  },
  {
    company: 'Terrier Motorsports',
    role: 'GLV Team Lead',
    location: 'Boston, MA',
    period: '2023 - 2024',
    achievements: [
      'Designed real-time control software in C++ for embedded Linux → 40% reduction in system input latency',
      'Engineered low-latency communication protocols for critical vehicle subsystems',
    ],
  },
  {
    company: 'Human Computer Interaction Lab',
    role: 'Research Assistant',
    location: 'University of Sydney, Sydney, AUS',
    period: 'Spring 2023',
    achievements: [
      'Acted as Voice of Customer by analyzing user behavior patterns on SaaS platform',
      'Synthesized findings into actionable product insights → 15% boost in user engagement',
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

// 10 Weeks 10 Apps Challenge Projects (Newest First)
export const tenWeeksTenAppsProjects: Project[] = [
  {
    title: 'Prompt CoPilot',
    description: 'A Chrome extension designed to manage and utilize prompts with AI integration, enhancing user interaction with AI models. Features prompt templates, quick access, and seamless AI workflow integration.',
    tags: ['week4', '#10weeks10apps', 'Chrome Extension', 'AI Integration', 'Prompt Management'],
    github: 'https://github.com/lil-Zlang/prompt_copilot',
    url: 'https://prompt-copilot-demo.vercel.app',
  },
  {
    title: 'SF Weekly News Digest',
    description: 'AI-powered platform that aggregates and summarizes San Francisco news from 20+ local sources. Features weekly AI-curated summaries, interactive Q&A chatbot, and automated Saturday updates via Vercel Cron.',
    tags: ['week3', '#10weeks10apps', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AI/LLM'],
    github: 'https://github.com/lil-Zlang/SF-Narrative',
    url: 'https://sf-narrative.vercel.app',
  },
  {
    title: 'SF Most Wanted Parkers',
    description: 'A Next.js app that tracks San Francisco\'s worst parking offenders using SFMTA citation data stored in Neon/Vercel Postgres.',
    tags: ['week2', '#10weeks10apps', 'Next.js', 'PostgreSQL', 'SFMTA API'],
    github: 'https://github.com/lil-Zlang/sf-most-wanted-parkers',
    url: 'https://sf-most-wanted-parkers.vercel.app',
  },
  {
    title: 'ReelOrFake',
    description: 'An application that challenges users to distinguish between original audio and AI-generated clones. Interactive game-based interface for testing audio authenticity detection.',
    tags: ['week1', '#10weeks10apps', 'React', 'TypeScript', 'AI/LLM', 'Audio Processing'],
    github: 'https://github.com/lil-Zlang/reel_or_fake_casino',
    url: 'https://reelorfake.lovable.app',
  },
]

// Regular Projects (excluding 10weeks10apps)
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
  {
    title: 'Smart E-Voting System',
    description: 'Secure real-time P2P communication protocol using C and UDP for embedded system. ESP32-based fobs with IR transmission and bully algorithm for leader election',
    tags: ['C', 'UDP', 'ESP32', 'Node.js', 'TingoDB'],
    github: 'https://github.com/lil-Zlang',
  },
  {
    title: 'FitCat - Activity Tracking',
    description: 'Real-time multi-cat activity tracking with ESP32-based collars. Full-stack IoT platform with accelerometers, displays, and live leaderboard',
    tags: ['ESP32', 'IoT', 'Node.js', 'Raspberry Pi'],
    github: 'https://github.com/lil-Zlang',
  },
  {
    title: 'Personal Assistive Robot',
    description: 'Autonomous indoor navigation with Optitrack positioning, PID control, and real-time collision avoidance using Sharp IR sensors',
    tags: ['ESP32', 'PID Control', 'PWM', 'Embedded'],
    github: 'https://github.com/lil-Zlang',
  },
  {
    title: 'Pokémon Masters: Victory Road',
    description: '2D Pokémon battle simulation with object-oriented programming. Dynamic gameplay mechanics including combat and Pokémon migration',
    tags: ['C++', 'OOP', 'Game Development'],
    github: 'https://github.com/lil-Zlang',
  },
  {
    title: '32-bit RISC-V Processor',
    description: 'Instruction-pipelined processor with byte-addressable memory. Optimized data flow with execution halting and reset mechanisms',
    tags: ['Verilog', 'RISC-V', 'Digital Design'],
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
  { name: '10 Weeks 10 Apps', section: '10weeks10apps' },
  { name: 'Projects', section: 'projects' },
  { name: 'Contact', section: 'contact' },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/lil-Zlang' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/zhilang-gui-b5b59b254/' },
  { name: 'Email', url: 'mailto:lang.gui.bu@gmail.com', isEmail: true },
]

export const aboutText = {
  intro: "",
  subtitle: "I'm an engineer focused on turning real-world problems into simple, shippable products.",
  education: "At Boston University, this led me to create a semi-autonomous cycle for the visually impaired—winning the Societal Impact Award.",
  philosophy: "I bring that same user-first mindset to my professional work, solving real problems for real people.",
  challenge: "Currently: Week 4 of 10 — 10 weeks, 10 apps challenge: building and shipping one application every week.",
}

export const contactText = {
  availability: [
    'Available for freelance projects',
    'Open to collaboration',
    'Response within 24 hours',
  ],
}