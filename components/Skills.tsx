'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Core Engineering',
      skills: [
        { name: 'Python (PyTorch/Flask)', level: 95 },
        { name: 'C++/C (Embedded)', level: 92 },
        { name: 'ROS2 & Embedded Systems', level: 88 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS & Docker', level: 85 },
        { name: 'CI/CD (GitHub Actions)', level: 88 },
        { name: 'Linux & Git', level: 92 },
        { name: 'Node.js', level: 85 },
      ],
    },
    {
      title: 'Solutions & Leadership',
      skills: [
        { name: 'Technical Presentations', level: 95 },
        { name: 'Stakeholder Communication', level: 93 },
        { name: 'Agile Project Management', level: 90 },
        { name: 'Cross-functional Collaboration', level: 92 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring
            ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skill badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'LangGraph',
              'TensorFlow',
              'ESP-IDF',
              'Paraview',
              'Jira',
              'PyTorch Lightning',
              'RViz',
              'UART/I2C',
              'PID Control',
              'IoT Prototyping',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full font-medium text-gray-700 shadow-md hover:shadow-lg transition-shadow"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

