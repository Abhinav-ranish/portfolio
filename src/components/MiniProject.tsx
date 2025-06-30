// components/MiniProject.tsx
'use client'
import { motion } from 'framer-motion'

export default function MiniProject() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl rounded-lg"
        >
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
                <motion.a
                    href="/projects"
                    rel="noopener noreferrer"
                    className="bg-red-300 text-white py-2 px-4 rounded-lg hover:bg-red-400"
                    whileHover={{ scale: 1.1 }}
                >
                    View My Projects
                </motion.a>
            </div>
        </motion.section>
    )
}
