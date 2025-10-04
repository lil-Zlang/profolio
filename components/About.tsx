'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette, Rocket, Heart } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Heart,
      title: 'Empathy-First Engineering',
      description: 'I start every project by understanding the human need behind the technical challenge',
    },
    {
      icon: Palette,
      title: 'Clarity in Complexity',
      description: 'I specialize in making complex systems intuitive and accessible for all users',
    },
    {
      icon: Rocket,
      title: 'Pragmatic Innovation',
      description: 'I focus on delivering robust, scalable solutions that provide real-world value today',
    },
    {
      icon: Code2,
      title: 'Engineering Philosophy',
      description: 'Building technology that is intelligent, intuitive, and genuinely helpful',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            My Mission: <span className="gradient-text">Engineering with Empathy</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technology's true power lies in solving distinctly human challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">About Me</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I'm driven by a simple question: how can we make <span className="font-semibold text-gray-900 dark:text-white">complex technology feel human</span>?
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  At <span className="font-semibold text-gray-900 dark:text-white">Boston University</span>, this question led me to create a <span className="font-semibold text-gray-900 dark:text-white">semi-autonomous cycle for the visually impaired</span>—a project that won the <span className="font-semibold text-purple-600 dark:text-purple-400">Societal Impact Award</span>.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  I bring that same <span className="font-semibold text-gray-900 dark:text-white">user-first mindset</span> to my professional work, whether building an AI that makes travel planning <span className="font-semibold text-purple-600 dark:text-purple-400">40% easier</span> for customers at <span className="font-semibold text-gray-900 dark:text-white">EasyBee AI</span>, or a model that makes data centers <span className="font-semibold text-purple-600 dark:text-purple-400">5% more efficient</span> at <span className="font-semibold text-gray-900 dark:text-white">Cadence</span>. For me, the goal is always the same: <span className="font-semibold text-gray-900 dark:text-white">solve real problems for real people</span>.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4"
                >
                  <feature.icon className="text-white" size={24} />
                </motion.div>
                <h4 className="font-bold text-lg mb-2 dark:text-white">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '40%', label: 'Conversion Increase' },
            { number: '38%', label: 'Latency Reduction' },
            { number: '90%+', label: 'Test Coverage' },
            { number: '10+', label: 'Projects Delivered' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

