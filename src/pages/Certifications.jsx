import { motion } from 'framer-motion'
import { certificationsData } from '../data/portfolio'

function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg text-center hover:border-cyan-500 transition-all group"
              >
                <div className="mb-4 overflow-hidden rounded-lg h-32 flex items-center justify-center bg-gray-800 group-hover:scale-105 transition-transform">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                <p className="text-cyan-400 font-semibold">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
