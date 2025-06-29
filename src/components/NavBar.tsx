// components/NavBar.tsx
'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'


export default function NavBar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()


  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      if (currentY < 100) {
        setIsVisible(true) // always show at top
      } else {
        const scrollingUp = currentY < lastY
        setIsVisible(scrollingUp)
      }
      lastY = currentY
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  // purely based on pathname — no window calls here
  const getHeading = () => {
    switch (pathname) {
      case '/projects': return 'Projects'
      case '/experience': return 'Work Experience'
      case '/contact': return "< Send Your Love Letter >"
      case '/availability': return '< Busy Be3 >'
      default: return 'Abhinav Ranish'
    }
  }

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className="fixed top-0 w-full bg-gray-800 p-5 z-50"
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        {/* Left links */}
        <div className="hidden md:flex space-x-5">
          <Link href="/" className="font-bold hover:text-green-500">
            Home
          </Link>
          <Link href="/projects" className="font-bold hover:text-green-500">
            Projects
          </Link>
          <Link href="/experience" className="font-bold hover:text-green-500">
            Experience
          </Link>
        </div>
        {/* Center heading — hidden on sm */}
<h1 className="hidden md:block text-lg font-semibold text-gray-100 md:absolute left-1/2 -translate-x-1/2">
  {getHeading()}
</h1>


        {/* Right links */}
        <div className="hidden md:flex space-x-5">
          <Link href="/contact" className="font-bold hover:text-green-500">
            Connect
          </Link>
          <Link href="/availability" className="font-bold hover:text-green-500">
            Availability
          </Link>
        </div>
        {/* Mobile only: left Home and right Menu */}

      </div>

      {/* Mobile only: left Home and right Menu */}
      <div className="md:hidden w-full flex justify-between items-center">
        <button
          onClick={() => router.push('/')}
          className="text-white p-2 rounded-full hover:bg-gray-700 transition"
          aria-label="Go to Home"
        >
          <Home size={22} />
        </button>

        <h1 className="md:hidden block text-lg font-semibold text-gray-100 relative">
          {getHeading()}
        </h1>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white p-2 rounded-full hover:bg-gray-700 transition"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>



      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-gray-900/80 backdrop-blur-sm md:hidden mt-4 rounded-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full flex flex-col items-center space-y-4 py-4 text-white"
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
              <Link href="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Connect</Link>
              <Link href="/availability" onClick={() => setMenuOpen(false)}>Availability</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav >
  )
}
