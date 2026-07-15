import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { profileData, navLinks } from '../data/portfolio'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform">
          SV
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href={profileData.resume}
          download
          className="hidden md:flex items-center gap-2 btn-primary text-sm"
        >
          <FiDownload size={16} />
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass border-t border-white/10 p-4 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="block text-gray-300 hover:text-cyan-400 transition-colors font-medium p-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={profileData.resume}
            download
            className="block btn-primary text-center mt-4 text-sm"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
