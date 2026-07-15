import { motion } from 'framer-motion'
import { experienceData } from '../data/portfolio'
import { FiBriefcase } from 'react-icons/fi'

function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            Experience
          </h2>

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg border-l-4 border-cyan-500 hover:border-purple-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mt-1">
                      <FiBriefcase className="text-cyan-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.position}</h3>
                      <p className="text-cyan-400 text-lg">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="text-gray-400 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
