import { motion } from 'framer-motion'
import { experienceData } from '../data/portfolio'

function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-cols-2 md:direction-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/50">
                    {exp.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ y: -5 }}
                className="glass p-8 rounded-xl"
              >
                <div className="flex items-center gap-3 mb-4 md:hidden">
                  <div className="text-3xl">{exp.icon}</div>
                  <h3 className="text-2xl font-bold gradient-text">{exp.role}</h3>
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2 hidden md:block">{exp.role}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{exp.duration}</p>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
