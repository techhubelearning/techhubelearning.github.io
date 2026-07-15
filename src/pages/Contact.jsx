import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { profileData } from '../data/portfolio'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Have a project or opportunity? Let's connect and create something amazing together!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href={`mailto:${profileData.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg flex items-start gap-4 group hover:border-cyan-500 transition-all"
              >
                <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/40 transition-colors">
                  <FiMail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-400 text-sm">{profileData.email}</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href={`tel:${profileData.phone}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg flex items-start gap-4 group hover:border-cyan-500 transition-all"
              >
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/40 transition-colors">
                  <FiPhone className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-400 text-sm">{profileData.phone}</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg flex items-start gap-4"
              >
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <FiMapPin className="text-pink-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-gray-400 text-sm">{profileData.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 glass p-8 rounded-lg"
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-white/10 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <FiSend size={18} />
                  Send Message
                </button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-green-400 text-sm"
                  >
                    ✓ Message sent successfully!
                  </motion.p>
                )}
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
