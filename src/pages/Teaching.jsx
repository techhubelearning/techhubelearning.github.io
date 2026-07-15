import { motion } from 'framer-motion'
import { teachingStats, subjects } from '../data/portfolio'

function Teaching() {
  return (
    <section id="teaching" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            Technical Mentoring
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teachingStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-lg text-center"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}+
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Subjects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Subjects & Topics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="glass p-4 rounded-lg flex items-center gap-3"
                >
                  <span className="text-cyan-400 text-xl">▸</span>
                  <span className="text-gray-300">{subject}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Teaching
