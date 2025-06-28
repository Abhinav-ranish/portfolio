'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    ;(async () => {
      const res = await fetch('/api/visit')
      const data = (await res.json()) as { count: number }
      setCount(data.count)
    })()
  }, [])

  return (
    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-300">
      <motion.span
        className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white text-xs rounded-full shadow-md animate-pulse"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        👀
      </motion.span>

      <AnimatePresence mode="wait">
        <motion.span
          key={count}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4 }}
          className="ml-1"
        >
          {count === null ? 'Loading visits...' : `${count.toLocaleString()} visits`}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
