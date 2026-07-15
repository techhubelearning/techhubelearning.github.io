import { motion } from 'framer-motion'
import { skillsData } from '../data/portfolio'
import { FiCode, FiLayout, FiServer, FiCloud, FiZap, FiTool } from 'react-icons/fi'

function Skills() {
  const skillCategories = [
    { title: 'Programming', skills: skillsData.programming, icon: FiCode, color: 'from-cyan-500 to-blue-600' },
    { title: 'Frontend', skills: skillsData.frontend, icon: FiLayout, color: 'from-purple-500 to-pink-600' },
    { title: 'Backend', skills: skillsData.backend, icon: FiServer, color: 'from-green-500 to-emerald-600' },
    { title: 'Cloud', skills: skillsData.cloud, icon: FiCloud, color: 'from-orange-500 to-red-600' },
    { title: 'AI/ML', skills: skillsData.ai_ml, icon: FiZap, color: 'from-indigo-500 to-purple-600' },
    { title: 'Tools', skills: skillsData.tools, icon: FiTool, color: 'from-pink-500 to-rose-600' },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-xl group cursor-pointer"
              >
                {/* Category header */}
                <div className={`flex items-center gap-3 mb-6 p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10`}>
                  <Icon className="text-2xl" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Proficiency visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 glass rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">Proficiency Level</h3>
          <div className="space-y-6">
            {[
              { label: 'Python & AI/ML', level: 95 },
              { label: 'Full Stack Development', level: 90 },
              { label: 'Cloud Technologies', level: 85 },
              { label: 'Technical Mentoring', level: 95 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-semibold">{item.label}</span>
                  <span className="text-cyan-400 font-bold">{item.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
