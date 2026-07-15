import { motion } from 'framer-motion'
import { projectsData } from '../data/portfolio'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-sm font-semibold"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors text-sm font-semibold"
                  >
                    <FiExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
