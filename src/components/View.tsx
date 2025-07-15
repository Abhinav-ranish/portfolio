'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VisitCounter() {
    const [count, setCount] = useState<number | null>(null)

    useEffect(() => {
        ; (async () => {
            const res = await fetch('/api/visit')
            const data = (await res.json()) as { count: number }
            setCount(data.count)
        })()
    }, [])

    return (
            <div className="flex flex-col md:flex-row justify-center space-y-1 md:space-y-0 md:space-x-1">
            <motion.span
                className="inline-flex items-center justify-center bg-black w-6 h-6 bg text-white text-xs rounded-full shadow-md animate-pulse"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
            >
                👀
            </motion.span>

            <AnimatePresence mode="wait">
                <motion.a
                    className="ml-1"
                    key={count}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4 }}
                >
                    {count === null ? 'Loading visits...' : `Counter: ${count.toLocaleString()} `}
                </motion.a>
            </AnimatePresence>
        </div>
    )
}
// This component fetches the visit count from the server and displays it with a nice animation.