// components/GitHubSnippet.tsx
'use client'
import { motion } from 'framer-motion'

export default function GitHubSnippet() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >

      <motion.iframe
        src="https://github-readme-stats.vercel.app/api?username=abhinav-ranish&show_icons=true&theme=dark"
        title="GitHub Repos"
        className="w-full h-[155px] mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      />
    </motion.section>
  )
}
