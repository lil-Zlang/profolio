import { experiences } from '@/data/portfolio'

const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.company} className="flex gap-5">
              {/* Company Logo */}
              {exp.image && (
                <div className="flex-shrink-0 w-14 h-14 mt-1">
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-contain dark:invert dark:opacity-80"
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                  <div>
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-black dark:text-white hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <h3 className="text-lg font-bold text-black dark:text-white">{exp.company}</h3>
                    )}
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{exp.role}</p>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {exp.period} &middot; {exp.location}
                  </p>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex gap-2">
                      <span className="text-gray-400 dark:text-gray-500 mt-0.5">&#8226;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
