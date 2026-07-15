import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail } from 'react-icons/fi'
import { profileData, typingTexts } from '../data/portfolio'

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing animation effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = typingTexts[textIndex]

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setTextIndex((textIndex + 1) % typingTexts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, textIndex, isDeleting])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-cyan-400 text-lg mb-4">Welcome to my portfolio</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Hi, I'm </span>
                <span className="gradient-text">{profileData.name}</span>
              </h1>
            </motion.div>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-20 mb-8"
            >
              <div className="text-2xl md:text-3xl font-semibold text-cyan-400 min-h-16">
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed"
            >
              Passionate about creating innovative AI solutions and mentoring the next generation of tech professionals. With expertise in machine learning, full-stack development, and cloud technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={profileData.resume}
                download
                className="btn-primary flex items-center gap-2"
              >
                <FiDownload size={20} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center gap-2"
              >
                <FiMail size={20} />
                Contact Me
              </a>
              <a
                href="#projects"
                className="btn-secondary"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative w-80 h-80 md:w-96 md:h-96"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/50">
                <img
                  src={profileData.profileImage}
                  alt={profileData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Animated border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-20"
        >
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">Scroll down to explore</p>
            <svg className="w-6 h-6 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
