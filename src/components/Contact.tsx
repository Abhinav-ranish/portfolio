// components/Contact.tsx
'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-white/10 max-w-xl mx-auto rounded-lg p-8 shadow-lg"
    >
      <motion.h2 className="text-2xl font-semibold text-gray-100 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        Contact Me
      </motion.h2>
      <motion.p className="text-gray-300 text-lg mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Feel free to reach out to me through LinkedIn or email!
        <br /><small className="text-gray-400">Looking forward to connecting with you!</small>
      </motion.p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
        <motion.a
          href="https://www.linkedin.com/in/abhinavranish/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
        >
          Connect on LinkedIn
        </motion.a>
        <motion.a
          href="mailto:aranish@asu.edu"
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
        >
          Email Me
        </motion.a>
      </div>
    </motion.section>
  )
}
