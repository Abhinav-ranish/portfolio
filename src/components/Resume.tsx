// components/Resume.tsx
'use client'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center bg-white/10 max-w-xl mx-auto rounded-lg p-8 shadow-lg"
    >
      <motion.h2 className="text-2xl font-semibold text-gray-100 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Resume
      </motion.h2>
      <motion.p className="text-gray-300 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        You can download my resume{' '}
        <a
          href="/resume.pdf"
          download
          className="text-red-300 hover:text-red-200"
        >
          here
        </a>.
      </motion.p>
    </motion.section>
  )
}
