import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Teaching from './pages/Teaching'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'
import NotFound from './pages/NotFound'

// Main App component
function App() {
  const [isDark, setIsDark] = useState(true)

  // Toggle theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Navbar */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      
      {/* Main content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Teaching />
            <Certifications />
            <Contact />
          </>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}

export default App
