import { motion } from 'framer-motion'
import { useCountUp } from 'react-countup'
import { teachingStats, subjects } from '../data/portfolio'
import { useInView } from 'react-intersection-observer'

function Teaching() {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <section id="teaching" className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Teaching Impact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
        </motion.div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teachingStats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </div>

        {/* Subjects taught */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-8 gradient-text">Subjects I Teach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((subject, i) => (
              <motion.div
                key={subject}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
                <span className="text-gray-200">{subject}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Teaching methodology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            { title: 'Real-world Focus', description: 'Learn through practical examples and industry use cases' },
            { title: 'Live Coding', description: 'Interactive live coding sessions for better understanding' },
            { title: 'Project-Based', description: 'Build portfolio-ready projects while learning' },
            { title: 'Career Guidance', description: 'Interview prep and placement assistance included' },
          ].map((method, i) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl"
            >
              <h4 className="text-lg font-bold mb-2 gradient-text">{method.title}</h4>
              <p className="text-gray-400">{method.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ stat, index, inView }) {
  const { countUp } = useCountUp({
    start: 0,
    end: stat.number,
    duration: 2,
    enabled: inView,
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass p-8 rounded-xl text-center group cursor-pointer"
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {stat.icon}
      </div>
      <div className="text-4xl font-bold gradient-text mb-2">
        {inView ? countUp : 0}{stat.number >= 1000 ? '+' : ''}
      </div>
      <p className="text-gray-400 font-semibold">{stat.label}</p>
    </motion.div>
  )
}

export default Teaching
