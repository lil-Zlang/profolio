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
      title: 'Semi-Autonomous Cycle for Visually Impaired 🏆',
      description:
        'COE Societal Impact Award winner. Designed comprehensive embedded feedback system with ROS2, haptic feedback, and voice modules. Achieved 92% navigation accuracy through virtual testing with URDF and RViz.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      tags: ['ROS2', 'Embedded Systems', 'Google Maps API', 'Computer Vision'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'EasyBee AI - Travel Agent',
      description:
        'Multi-agent LLM system with LangGraph achieving 40% booking conversion increase. Integrated Voiceflow memory for adaptive itinerary planning and Google Calendar API for real-time conflict resolution.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      tags: ['LangGraph', 'LLM', 'Airtable', 'Voiceflow', 'Google Calendar API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Personal Assistive Robot',
      description:
        'Autonomous indoor navigation system using ESP32 with Optitrack positioning and PID control. Developed real-time collision avoidance with Sharp IR sensors and seamless dual-mode control.',
      image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80',
      tags: ['ESP32', 'PID Control', 'Embedded C', 'PWM', 'Sharp IR'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Secure E-Voting System',
      description:
        'Full-stack real-time voting platform with ESP32-based P2P UDP communication and Bully algorithm for leader election. Node.js backend with TingoDB for live vote monitoring and visualization.',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80',
      tags: ['ESP32', 'Node.js', 'UDP', 'TingoDB', 'Canvas.js', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'FitCat - Activity Tracking',
      description:
        'Real-time multi-cat activity tracking IoT system with ESP32-based collars featuring accelerometers. Full-stack platform with Raspberry Pi server and dynamic activity leaderboard.',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80',
      tags: ['ESP32', 'IoT', 'Node.js', 'Raspberry Pi', 'UDP'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'U-Net Thermal Model',
      description:
        'ML model for data center thermal prediction achieving 5% accuracy improvement and 20% latency reduction. Created 3D visualization tool with Paraview for thermal pattern diagnostics.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      tags: ['PyTorch', 'U-Net', 'Paraview', 'Computer Vision'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      color: 'from-indigo-500 to-purple-500',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating creativity, technical
            skills, and problem-solving abilities.
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
            href="https://github.com"
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

