'use client'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center bg-neutral-950 max-w-2xl mx-auto rounded-lg pt-10 pb-20 px-5 space-y-10 "
    >
      <motion.p
        className="text-gray-300 text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feel free to reach out to me through LinkedIn or email!
        <br />
        <br />
        <small>Looking forward to connecting with you!</small>
      </motion.p>

      <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 mt-5">
        <motion.a
          href="https://www.linkedin.com/in/abhinavranish/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-300"
          whileHover={{ scale: 1.1 }}
        >
          Connect on LinkedIn
        </motion.a>
        <motion.a
          href="mailto:aranish@asu.edu"
          className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-300"
          whileHover={{ scale: 1.1 }}
        >
          Email Me
        </motion.a>
        <motion.a
          href="https://meet.aranish.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-300"
          whileHover={{ scale: 1.1 }}
        >
          Book a Call
        </motion.a>
      </div>
    </motion.section>
  )
}
