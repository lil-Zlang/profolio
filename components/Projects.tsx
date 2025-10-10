'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'AI Content Detective 🕵️',
      description: [
        'Built a React-TypeScript web app that detects AI-generated images, videos, or URLs in real time, delivering a confidence score and detailed rationale.',
        'Uses a Supabase Edge Function (Deno) to call an external AI-analysis gateway, aggregating multi-layer visual and textual indicators.',
        'Modern UI powered by TailwindCSS and ShadCN components with instant Vite hot-reload for smooth developer experience.',
        'End-to-end flow: drag-and-drop upload → serverless AI detection → animated results display, all in <1 s round-trip on typical images.'
      ],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      tags: ['React', 'TypeScript', 'Supabase', 'TailwindCSS', 'Vite'],
      github: 'https://github.com/lil-Zlang/ai-content-detective',
      demo: 'https://github.com/lil-Zlang/ai-content-detective',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Reel or Fake 📺',
      description: [
        'Built "Reel or Fake," a React + TypeScript browser game that challenges players to spot AI-generated movie clips in four fast-paced betting rounds.',
        'Designed an engaging casino-style UI with TailwindCSS & shadcn/ui, featuring autoplay videos, animated feedback, and dynamic credit wagering.',
        'Engineered a self-contained state machine in one page component (no Redux) with local-storage high-score persistence and future-ready Supabase integration.',
        'Achieved instant (<50 ms) dev-reloads via Vite and maintained fully typed code, delivering a fun, production-ready showcase of AI-content detection mechanics.'
      ],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80',
      tags: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'Supabase'],
      github: 'https://github.com/lil-Zlang/reel-or-fake',
      demo: 'https://github.com/lil-Zlang/reel-or-fake',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Project Independence: Semi-Autonomous Cycle 🏆',
      description: [
        'COE Societal Impact Award winner for assistive technology',
        'ROS2-based embedded system with haptic feedback',
        '92% navigation accuracy for visually impaired users',
        'Integrates voice modules and Google Maps API'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      tags: ['ROS2', 'Embedded Systems', 'Google Maps API', 'Computer Vision'],
      github: 'https://github.com/lil-Zlang',
      demo: 'https://demo.com',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'The AI Co-Pilot: Reimagining Travel',
      description: [
        'Multi-agent LLM system for intelligent travel planning',
        'Adapts and books itineraries based on user preferences',
        '40% increase in booking conversions achieved',
        'Seamless integration with real-time data and APIs'
      ],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      tags: ['LangGraph', 'LLM', 'Airtable', 'Voiceflow', 'Google Calendar API'],
      github: 'https://github.com/lil-Zlang',
      demo: 'https://demo.com',
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Personal Assistive Robot',
      description: [
        'Low-cost autonomous robot built on ESP32 microcontroller',
        'PID control system for precise movement and navigation',
        'Real-time collision avoidance using Sharp IR sensors',
        'Smooth autonomous operation in complex indoor environments'
      ],
      image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80',
      tags: ['ESP32', 'PID Control', 'Embedded C', 'Real-Time Systems'],
      github: 'https://github.com/lil-Zlang',
      demo: 'https://demo.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Secure E-Voting: Decentralized Platform',
      description: [
        'Secure electronic voting system resistant to single points of failure',
        'Peer-to-peer UDP communication between ESP32 devices',
        'Bully algorithm implementation for leader election',
        'Real-time monitoring dashboard for transparent digital democracy'
      ],
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80',
      tags: ['ESP32', 'Node.js', 'UDP', 'TingoDB', 'Distributed Systems'],
      github: 'https://github.com/lil-Zlang',
      demo: 'https://demo.com',
      color: 'from-rose-500 to-pink-500',
    },
    {
      title: 'FitCat - Activity Tracking',
      description: [
        'Real-time multi-cat activity tracking IoT system',
        'ESP32-based smart collars with accelerometers',
        'Full-stack platform with Raspberry Pi server',
        'Dynamic activity leaderboard and health monitoring'
      ],
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
      tags: ['ESP32', 'IoT', 'Node.js', 'Raspberry Pi', 'UDP'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'U-Net Thermal Model',
      description: [
        'ML model for data center thermal prediction and optimization',
        '5% accuracy improvement and 20% latency reduction achieved',
        '3D visualization tool built with Paraview integration',
        'Advanced thermal pattern diagnostics and analysis'
      ],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      tags: ['PyTorch', 'U-Net', 'Paraview', 'Computer Vision'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            <span className="gradient-text">A Showcase of My Work</span>
          </h2>
          <p className="text-gray-800 dark:text-gray-200 text-lg max-w-2xl mx-auto">
            Projects that solve real problems with innovative technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4`}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View GitHub"
                  >
                    <Github className="text-white" size={24} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View Demo"
                  >
                    <ExternalLink className="text-white" size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <div className="text-gray-800 dark:text-gray-200 mb-4 text-sm">
                  {Array.isArray(project.description) ? (
                    <ul className="space-y-2">
                      {project.description.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-600 mr-3 mt-0.5 text-sm font-bold">•</span>
                          <span className="text-gray-800 dark:text-gray-200 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-800 dark:text-gray-200">{project.description}</p>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`} />
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/lil-Zlang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

