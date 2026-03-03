import { Experience, SkillCategory, Project, Stat, NavItem, SocialLink } from '@/types'

export const experiences: Experience[] = [
  {
    company: 'EasyBee AI',
    role: 'AI Engineer',
    location: 'San Francisco, CA',
    period: 'July 2025 - Present',
    url: 'https://easybee.ai/',
    image: '/images/easybeeAI.png',
    achievements: [
      'Built LangGraph supervisor agent with 3 sub-agents → reduced cold-start latency from 5s to 150ms',
      'Production RAG pipeline with Pinecone + GPT-4o → 40% improvement in booking conversion',
      'Deployed containerized AI system with Docker + GitHub Actions CI/CD',
    ],
  },
  {
    company: 'Cadence Design Systems',
    role: 'Machine Learning Engineering Intern',
    location: 'Austin, TX',
    period: 'May 2024 - Aug 2024',
    url: 'https://www.cadence.com/en_US/home.html',
    image: '/images/cadence.png',
    achievements: [
      'Led POC for thermal modeling feature → validated 5% performance gains',
      'Built 3D visualization tool for non-technical stakeholders',
      'Automated 500GB data pipeline → saved 8 hours/week of manual analysis',
    ],
  },
  {
    company: 'Terrier Motorsports',
    role: 'GLV Team Lead',
    location: 'Boston, MA',
    period: '2023 - 2024',
    image: '/images/terrierMotorsport.png',
    achievements: [
      'Led 5-engineer team to deliver 3 embedded subsystems using C++ and CAN bus',
      'Reduced input latency from 120ms to 72ms → completed 1 week ahead of deadline',
    ],
  },
  {
    company: 'Human Computer Interaction Lab',
    role: 'Research Assistant',
    location: 'University of Sydney',
    period: 'Feb 2023 - July 2023',
    image: '/images/UniversityofSydney.png',
    achievements: [
      'Built Python models analyzing smartwatch data from 200+ users → 75% churn prediction accuracy',
      'Identified UI friction points → 15% engagement improvement',
    ],
  },
]

export const skillCategories: SkillCategory[] = [
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

// 10 Weeks 10 Apps Challenge Projects (Newest First)
export const tenWeeksTenAppsProjects: Project[] = [
  {
    title: 'Crimson — AWS × Datadog Hackathon Winner',
    description: 'Automated red-teaming platform that discovers vulnerabilities in LLM-based agent systems. Four-stage multi-agent pipeline (Recon → Plan → Attack → Report) built on AWS Strands Agents + Bedrock probes target agents across 6 attack categories including prompt injection, secret exfiltration, and policy bypass. Features Neo4j attack surface visualization, Datadog trace deep-linking, and severity-rated vulnerability reports with actionable remediation steps.',
    tags: ['🏆 Hackathon Winner', 'AWS × Datadog', 'Python', 'AWS Strands Agents', 'AWS Bedrock', 'Neo4j', 'Datadog', 'AI Security', 'Red Teaming', 'FastAPI'],
    categories: ['AI/ML', '10 Weeks 10 Apps'],
    github: 'https://github.com/alexanderzliu/aws-dd-hackathon',
    demoVideo: 'https://www.loom.com/share/df42d52224c340a3a098fc3223aa680d',
    image: '/images/Crimson.png',
  },
  {
    title: 'Mafia Ace',
    description: 'AI-powered Mafia game built on the ACE (Agentic Context Engineering) self-improvement framework from Stanford. LLM agents play live Mafia rounds, reflect on their decisions, and evolve adaptive strategy playbooks without any weight updates.',
    tags: ['hackathon', '#10weeks10apps', 'Python', 'AI/LLM', 'Multi-Agent', 'Game Theory'],
    categories: ['AI/ML', '10 Weeks 10 Apps'],
    github: 'https://github.com/alexanderzliu/weavehacks3',
    demoVideo: 'https://www.loom.com/share/98b1c9ca826546dea5a5206be9583e25',
    image: '/images/mafia-ace-screenshot.png',
  },
  {
    title: 'VoiceCode',
    description: 'AI-powered voice-to-PR agent that lives in your online meetings (Zoom, Google Meet) and converts dev discussions into production-ready pull requests after the meeting. Supported by CodeRabbit, Daytona, and ElevenLabs.',
    tags: ['week8', '#10weeks10apps', 'AI/LLM', 'Voice AI', 'GitHub API', 'Code Generation'],
    categories: ['AI/ML', '10 Weeks 10 Apps'],
    github: 'https://github.com/lgui30/VoiceCode',
    url: 'https://vercel-site-mu.vercel.app/',
    image: '/images/voicecode.png',
  },
  {
    title: 'AdFlow',
    description: 'AI-powered video ad generator that transforms any product URL into professional short-form video advertisements in under 60 seconds. Features Claude Agent SDK orchestration, dual video providers (FreePik WAN 2.6 & Kie.ai Veo 3), intelligent product metadata extraction, and a FastAPI dashboard with real-time job tracking.',
    tags: ['week7', '#10weeks10apps', 'Python', 'Claude Agent SDK', 'FastAPI', 'AI/LLM', 'Video Generation', 'Async'],
    categories: ['AI/ML', '10 Weeks 10 Apps'],
    github: 'https://github.com/jknoll/agentic-orchestration',
    url: 'https://agentic-orchestration.vercel.app/',
    image: '/images/adflow-screenshot.png',
  },
  {
    title: 'WeRead',
    description: 'AI-powered Chrome extension that reduces article reading time by 12 min on average. Full-stack product with Chrome Extension (MV3), 7 serverless API endpoints, Stripe subscriptions, and Next.js marketing site. Features parallel AI processing pipeline (4 concurrent LLM calls in 3-5s), Google OAuth, and Notion-inspired UI with dual reading modes.',
    tags: ['week6', '#10weeks10apps', 'Chrome Extension', 'Next.js', 'TypeScript', 'Node.js', 'Vercel', 'AI/LLM', 'Stripe'],
    categories: ['AI/ML', 'Extensions', '10 Weeks 10 Apps'],
    github: 'https://github.com/lgui30',
    url: 'https://www.wereadtoday.com/',
    chromeStoreUrl: 'https://chromewebstore.google.com/detail/weread-ai-reading-assista/jelfmobhiidblbloeddcmkghmfmlkdmg',
    image: '/images/weRead.png',
  },
  {
    title: 'MenuCopilot',
    description: 'Take a photo of a restaurant menu and get personalized food recommendations powered by AI. Features image analysis, preference questions, and intelligent dish suggestions tailored to your tastes.',
    tags: ['week5', '#10weeks10apps', 'Next.js', 'TypeScript', 'AI/LLM', 'Image Processing', 'OpenAI Vision'],
    categories: ['AI/ML', 'Web Apps', '10 Weeks 10 Apps'],
    github: 'https://github.com/lgui30/MenuCopilot',
    url: 'https://menu-copilot.vercel.app',
    image: '/images/menucopilot-screenshot.png',
  },
  {
    title: 'Prompt CoPilot',
    description: 'A Chrome extension designed to manage and utilize prompts with AI integration, enhancing user interaction with AI models. Features prompt templates, quick access, and seamless AI workflow integration.',
    tags: ['week4', '#10weeks10apps', 'Chrome Extension', 'AI Integration', 'Prompt Management'],
    categories: ['Extensions', '10 Weeks 10 Apps'],
    github: 'https://github.com/lgui30/prompt_copilot',
    url: 'https://prompt-copilot-demo.vercel.app',
    image: '/images/prompt-copilot-screenshot.png',
  },
  {
    title: 'SF Weekly News Digest',
    description: 'AI-powered platform that aggregates and summarizes San Francisco news from 20+ local sources. Features weekly AI-curated summaries, interactive Q&A chatbot, and automated Saturday updates via Vercel Cron.',
    tags: ['week3', '#10weeks10apps', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'AI/LLM'],
    categories: ['AI/ML', 'Web Apps', '10 Weeks 10 Apps'],
    github: 'https://github.com/lgui30/SF-Narrative',
    url: 'https://sf-narrative.vercel.app',
    image: '/images/sf-news-digest-screenshot.png',
  },
  {
    title: 'SF Most Wanted Parkers',
    description: 'A Next.js app that tracks San Francisco\'s worst parking offenders using SFMTA citation data stored in Neon/Vercel Postgres.',
    tags: ['week2', '#10weeks10apps', 'Next.js', 'PostgreSQL', 'SFMTA API'],
    categories: ['Web Apps', '10 Weeks 10 Apps'],
    github: 'https://github.com/lgui30/sf-most-wanted-parkers',
    url: 'https://sf-most-wanted-parkers.vercel.app',
    image: '/images/sf-parkers-screenshot.png',
  },
  {
    title: 'ReelOrFake',
    description: 'An application that challenges users to distinguish between original audio and AI-generated clones. Interactive game-based interface for testing audio authenticity detection.',
    tags: ['week1', '#10weeks10apps', 'React', 'TypeScript', 'AI/LLM', 'Audio Processing'],
    categories: ['AI/ML', 'Web Apps', '10 Weeks 10 Apps'],
    github: 'https://github.com/lgui30/reel_or_fake_casino',
    url: 'https://reelorfake.lovable.app',
    image: '/images/reelorfake-screenshot.png',
  },
]

// Regular Projects (excluding 10weeks10apps)
export const projects: Project[] = [
  {
    title: 'Skimmd',
    description: 'Lightweight markdown document reader with live editing, auto-generated TOC, theme switching, and real-time file sync via SSE. Clean minimal interface for technical docs and note-taking.',
    tags: ['JavaScript', 'HTML', 'Markdown', 'SSE'],
    categories: ['Web Apps'],
    github: 'https://github.com/lgui30/skimmd',
    url: 'https://mdreader-rho.vercel.app',
  },
  {
    title: 'AI Content Detective',
    description: 'React-TypeScript web app that detects AI-generated content in real time',
    tags: ['React', 'TypeScript', 'Supabase'],
    categories: ['AI/ML', 'Web Apps'],
    github: 'https://github.com/lgui30/ai-content-detective',
  },
  {
    title: 'Semi-Autonomous Cycle',
    description: 'COE Societal Impact Award winner. 92% navigation accuracy for visually impaired users',
    tags: ['ROS2', 'Embedded Systems', 'Computer Vision'],
    categories: ['Hardware/IoT'],
    github: 'https://github.com/lgui30',
    image: '/images/Semi-Autonomous-Cycle.jpeg',
  },
  {
    title: 'AI Travel Co-Pilot',
    description: 'Multi-agent LLM system. 40% increase in booking conversions',
    tags: ['LangGraph', 'LLM', 'APIs'],
    categories: ['AI/ML'],
    github: 'https://github.com/lgui30',
  },
  {
    title: 'Smart E-Voting System',
    description: 'Secure real-time P2P communication protocol using C and UDP for embedded system. ESP32-based fobs with IR transmission and bully algorithm for leader election',
    tags: ['C', 'UDP', 'ESP32', 'Node.js', 'TingoDB'],
    categories: ['Hardware/IoT'],
    github: 'https://github.com/lgui30',
    image: '/images/Secure-E-Voting.jpeg',
  },
  {
    title: 'FitCat - Activity Tracking',
    description: 'Real-time multi-cat activity tracking with ESP32-based collars. Full-stack IoT platform with accelerometers, displays, and live leaderboard',
    tags: ['ESP32', 'IoT', 'Node.js', 'Raspberry Pi'],
    categories: ['Hardware/IoT'],
    github: 'https://github.com/lgui30',
    image: '/images/FitCat-Activity-Tracking-for-Cats.jpeg',
  },
  {
    title: 'Personal Assistive Robot',
    description: 'Autonomous indoor navigation with Optitrack positioning, PID control, and real-time collision avoidance using Sharp IR sensors',
    tags: ['ESP32', 'PID Control', 'PWM', 'Embedded'],
    categories: ['Hardware/IoT'],
    github: 'https://github.com/lgui30',
    image: '/images/Personal-Assistive-Robot.jpeg',
  },
  {
    title: 'Pokémon Masters: Victory Road',
    description: '2D Pokémon battle simulation with object-oriented programming. Dynamic gameplay mechanics including combat and Pokémon migration',
    tags: ['C++', 'OOP', 'Game Development'],
    categories: ['Web Apps'],
    github: 'https://github.com/lgui30',
  },
  {
    title: '32-bit RISC-V Processor',
    description: 'Instruction-pipelined processor with byte-addressable memory. Optimized data flow with execution halting and reset mechanisms',
    tags: ['Verilog', 'RISC-V', 'Digital Design'],
    categories: ['Hardware/IoT'],
    github: 'https://github.com/lgui30',
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
  { name: '10 Weeks 10 Apps', section: '10weeks10apps' },
  { name: 'Skills', section: 'skills' },
  { name: 'Projects', section: 'projects' },
  { name: 'Contact', section: 'contact' },
]

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/lgui30' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lgui30/' },
  { name: 'Email', url: 'mailto:lang.gui.bu@gmail.com', isEmail: true },
]

export const aboutText = {
  intro: "",
  subtitle: "I'm an engineer focused on turning real-world problems into simple, shippable products.",
  education: "At Boston University, this led me to create a semi-autonomous cycle for the visually impaired—winning the Societal Impact Award.",
  philosophy: "I bring that same user-first mindset to my professional work, solving real problems for real people.",
  challenge: "Currently: Week 8 of 10 — 10 weeks, 10 apps challenge: building and shipping one application every week.",
}

export const contactText = {
  availability: [
    'Available for freelance projects',
    'Open to collaboration',
    'Response within 24 hours',
  ],
}