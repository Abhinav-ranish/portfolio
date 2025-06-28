// components/NavBar.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function NavBar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)

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
      case '/projects':
        return 'Projects'
      case '/experience':
        return 'Work Experience'
      case '/contact':
        return "< Send Your Love Letter >"
      case '/availability':
        return '< Busy Be3 >'
      default:
        return 'Abhinav Ranish'
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
        <div className="flex space-x-5">
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
        <h1 className="hidden md:block text-lg font-semibold text-gray-100 absolute left-1/2 -translate-x-1/2">
          {getHeading()}
        </h1>

        {/* Right links */}
        <div className="flex space-x-5">
          <Link href="/contact" className="font-bold hover:text-green-500">
            Connect
          </Link>
          <Link href="/availability" className="font-bold hover:text-green-500">
            Availability
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
