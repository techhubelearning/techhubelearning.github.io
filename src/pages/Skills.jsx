import { motion } from 'framer-motion'
import { skillsData } from '../data/portfolio'

function Skills() {
  const skillCategories = [
    { name: 'Programming', skills: skillsData.programming },
    { name: 'Frontend', skills: skillsData.frontend },
    { name: 'Backend', skills: skillsData.backend },
    { name: 'Cloud & DevOps', skills: skillsData.cloud },
    { name: 'AI/ML', skills: skillsData.ai_ml },
    { name: 'Tools', skills: skillsData.tools },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sidx) => (
                    <motion.span
                      key={sidx}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium hover:bg-purple-500/40 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
