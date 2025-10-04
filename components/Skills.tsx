'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Cloud, Users, Cpu, Zap, Layers } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: Code2,
      title: 'Core Engineering',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Python (PyTorch/Flask)', 'C++/C (Embedded)', 'ROS2 & Embedded Systems', 'SQL'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'from-purple-500 to-pink-500',
      skills: ['AWS & Docker', 'CI/CD (GitHub Actions)', 'Linux & Git', 'Node.js'],
    },
    {
      icon: Users,
      title: 'Solutions & Leadership',
      color: 'from-orange-500 to-red-500',
      skills: ['Technical Presentations', 'Stakeholder Communication', 'Agile Project Management', 'Cross-functional Collaboration'],
    },
  ]

  const technologies = [
    { name: 'LangGraph', icon: Layers },
    { name: 'TensorFlow', icon: Cpu },
    { name: 'ESP-IDF', icon: Zap },
    { name: 'Paraview', icon: Code2 },
    { name: 'Jira', icon: Users },
    { name: 'PyTorch Lightning', icon: Cpu },
    { name: 'RViz', icon: Layers },
    { name: 'UART/I2C', icon: Zap },
    { name: 'PID Control', icon: Cpu },
    { name: 'IoT Prototyping', icon: Zap },
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning embedded systems, cloud infrastructure, and leadership.
          </p>
        </motion.div>

        {/* Apple-style skill cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Gradient background effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <category.icon className="text-white" size={28} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-6 dark:text-white">
                  {category.title}
                </h3>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                      className="flex items-center gap-3 group/item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                      <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover border glow */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${category.color} -z-10 blur-xl`} />
            </motion.div>
          ))}
        </div>

        {/* Technologies - Infinite Scrolling Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 dark:text-white">
            Technologies & Tools
          </h3>
          
          {/* Scrolling container with overflow hidden */}
          <div className="relative overflow-hidden py-4">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling wrapper */}
            <motion.div
              className="flex gap-4"
              animate={{
                x: [0, -1920]
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {/* Render technologies twice for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`tech-${index}`}
                  className="group relative px-6 py-3 bg-white dark:bg-gray-800 rounded-full font-medium text-gray-700 dark:text-gray-300 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-pointer overflow-hidden whitespace-nowrap flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-2">
                    <tech.icon size={16} className="text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                    <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Apple-style decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full border border-purple-200 dark:border-purple-800">
            <Zap className="text-purple-600 dark:text-purple-400" size={20} />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Always learning, always building
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
