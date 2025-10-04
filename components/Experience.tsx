'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // GitHub Pages basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/buildwithlang' : ''

  const experiences = [
    {
      company: 'EasyBee AI',
      role: 'Full-Stack & LLM Engineer',
      location: 'San Francisco, CA',
      period: '2025 - Present',
      logo: `${basePath}/logos/easybee.png`,
      achievements: [
        'Architected and pioneered a multi-agent LLM system that transformed the user experience, simplifying complex travel booking and leading to a 40% increase in customer conversion',
        'Translated client visions into a robust product roadmap, spearheading the delivery of a zero-downtime platform engineered for a rapidly expanding user base',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      company: 'Cadence Design Systems',
      role: 'Machine Learning Engineering Intern',
      location: 'Austin, TX',
      period: 'Summer 2024',
      logo: `${basePath}/logos/cadence.png`,
      achievements: [
        'Engineered and deployed a U-Net thermal model that proved a 5% improvement in data center efficiency for enterprise clients, directly impacting operational sustainability',
        'Innovated a 3D visualization tool with Paraview that empowered non-technical stakeholders, demystifying complex ML diagnostics and accelerating hardware validation by 15%',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            <span className="gradient-text">Building Impactful Solutions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My professional experience is centered on creating value at the intersection of machine learning, full-stack development, and user-focused design.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    {/* Company Logo */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0 shadow-md overflow-hidden`}>
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-white font-bold text-xl">${exp.company.substring(0, 2).toUpperCase()}</span>`
                        }}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {exp.role}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1 + 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                      <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative gradient border */}
              <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

