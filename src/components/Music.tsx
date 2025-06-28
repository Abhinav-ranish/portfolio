// components/Music.tsx
'use client'
import { motion } from 'framer-motion'

export default function Music() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.a
        href="https://music.aranish.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-400 font-medium"
        whileHover={{ scale: 1.1 }}
      >
        Music Player
      </motion.a>
      <motion.iframe
        src="https://music.aranish.uk/miniplayer"
        title="MiniPlayer"
        className="w-full h-16 mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      />
    </motion.section>
  )
}
