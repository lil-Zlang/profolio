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
      title: 'Project Independence: Semi-Autonomous Cycle 🏆',
      description:
        'Challenge: To grant greater mobility and independence to the visually impaired through safe, intuitive navigation. Solution: COE Societal Impact Award winner - engineered comprehensive embedded system using ROS2, integrating haptic feedback and voice modules. Impact: Achieved 92% navigation accuracy in virtual testing, demonstrating a viable solution that could profoundly improve users\' daily lives.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      tags: ['ROS2', 'Embedded Systems', 'Google Maps API', 'Computer Vision'],
      github: 'https://github.com/lil-Zlang',
      demo: 'https://demo.com',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'The AI Co-Pilot: Reimagining Travel',
      description:
        'Challenge: The modern travel booking process is fragmented and overwhelming. Solution: Developed multi-agent LLM system using LangGraph that intelligently plans, adapts, and books travel itineraries based on user preferences and real-time data. Impact: Drove a 40% increase in booking conversions by creating a seamless, intelligent, and highly personalized user experience.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      tags: ['LangGraph', 'LLM', 'Airtable', 'Voiceflow', 'Google Calendar API'],
      github: 'https://github.com/lil-Zlang',
      demo: 'https://demo.com',
      color: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Personal Assistive Robot',
      description:
        'Challenge: Create a reliable, low-cost autonomous robot for indoor assistance. Solution: Built system from ground up on ESP32 microcontroller, implementing PID control for precise movement and real-time collision avoidance using Sharp IR sensors. Impact: Achieved smooth, autonomous navigation and object avoidance in complex indoor environments, showcasing efficient embedded systems design.',
      image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80',
      tags: ['ESP32', 'PID Control', 'Embedded C', 'Real-Time Systems'],
      github: 'https://github.com/lil-Zlang',
      demo: 'https://demo.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Secure E-Voting: Decentralized Platform',
      description:
        'Challenge: Design a secure and transparent electronic voting system resistant to single points of failure. Solution: Architected full-stack platform featuring peer-to-peer UDP communication between ESP32 devices and Bully algorithm for leader election. Impact: Delivered real-time, decentralized voting system with live monitoring dashboard, providing proof-of-concept for secure digital democracy.',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80',
      tags: ['ESP32', 'Node.js', 'UDP', 'TingoDB', 'Distributed Systems'],
      github: 'https://github.com/lil-Zlang',
      demo: 'https://demo.com',
      color: 'from-rose-500 to-pink-500',
    },
    {
      title: 'FitCat - Activity Tracking',
      description:
        'Real-time multi-cat activity tracking IoT system with ESP32-based collars featuring accelerometers. Full-stack platform with Raspberry Pi server and dynamic activity leaderboard.',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
      tags: ['ESP32', 'IoT', 'Node.js', 'Raspberry Pi', 'UDP'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'U-Net Thermal Model',
      description:
        'ML model for data center thermal prediction achieving 5% accuracy improvement and 20% latency reduction. Created 3D visualization tool with Paraview for thermal pattern diagnostics.',
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
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Here are a few projects that represent my passion for solving meaningful problems through technology.
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
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
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

