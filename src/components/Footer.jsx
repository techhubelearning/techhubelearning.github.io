import { FiGithub, FiLinkedin, FiMail, FiPhone, FiHeart } from 'react-icons/fi'
import { profileData } from '../data/portfolio'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900/50 border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Sravani V</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI Engineer, Technical Mentor, and Full Stack Developer with 5+ years of experience in building scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-cyan-500/20 transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-cyan-500/20 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg bg-gray-800 hover:bg-cyan-500/20 transition-colors"
              >
                <FiMail size={20} />
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className="p-2 rounded-lg bg-gray-800 hover:bg-cyan-500/20 transition-colors"
              >
                <FiPhone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sravani V. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
              Made with <FiHeart size={16} className="text-red-500" /> using React & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
