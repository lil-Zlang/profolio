import Image from 'next/image'
import { projects } from '@/data/portfolio'

const Projects = () => {
  // Separate projects with and without images
  const projectsWithImages = projects.filter(p => p.image)
  const projectsWithoutImages = projects.filter(p => !p.image)

  return (
    <section id="projects" className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-black">Projects</h2>
        <p className="text-gray-600 mb-12">Hardware, embedded systems, and other engineering projects</p>

        {/* Gallery Grid for projects with images */}
        {projectsWithImages.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {projectsWithImages.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-gray-200 cursor-pointer"
              >
                <Image
                  src={project.image!}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-sm mb-1">{project.title}</h3>
                    <p className="text-white/80 text-xs line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-white/20 text-white text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* List for projects without images */}
        {projectsWithoutImages.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsWithoutImages.map((project) => (
              <div key={project.title} className="bg-white border border-gray-200 p-6">
                <h3 className="text-lg font-bold mb-2 text-black">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline text-sm"
                  >
                    View Code →
                  </a>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/lil-Zlang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
