import { motion } from 'framer-motion'
import { aboutData } from '../data/portfolio'

function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            {aboutData.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {aboutData.description}
              </p>
              <ul className="space-y-4">
                {aboutData.highlights.map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-cyan-400 mt-1">✓</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-lg"
            >
              <img
                src="https://via.placeholder.com/400x400?text=Profile+Photo"
                alt="Sravani V"
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
