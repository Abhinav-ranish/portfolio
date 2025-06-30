'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <motion.div
        className="w-full max-w-4xl bg-white/10 p-10 rounded-xl shadow-lg text-center space-y-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-3xl font-bold text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Who is Abhinav 
        </motion.h1>

        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Abhinav is a passionate Software Engineer and Cybersecurity enthusiast focusing on SWE, SDE, DevOps, Cloud Engineering, Cybersecurity, and Data Analysis. Currently pursuing a B.S. in Computer Science with a double major in Justice Studies.
        </motion.p>

        <motion.p
          className="text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          He enjoys working on projects that allows him to automate tasks, secure systems, and leverage data for better decision-making.
        </motion.p>

        <div className="flex justify-center gap-6 pt-2">
          <motion.a
            href="https://github.com/abhinav-ranish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-300 hover:text-red-200 font-medium"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abhinavranish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-300 hover:text-red-200 font-medium"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  )
}
