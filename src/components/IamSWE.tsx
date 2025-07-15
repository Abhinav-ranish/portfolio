'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const titles = [
  'Software',
  'Cybersecurity',
  'A . I .',
  'Machine Learning',
  'Scripting',
  'UI / UX',
  'Frontend',
  'Engineer',
]

export default function AnimatedTitle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const duration = index === titles.length - 1 ? 3000 : 2200
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % titles.length)
    }, duration)

    return () => clearTimeout(timer)
  }, [index])

  return (
        <div className="min-h-12 flex items-center justify-center text-center text-3xl md:text-5xl font-bold leading-none overflow-hidden">
        <AnimatePresence mode="wait">
            <motion.span
            key={titles[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent will-change-transform"
            >
            {titles[index]}
            </motion.span>
        </AnimatePresence>
    </div>
  )
}
