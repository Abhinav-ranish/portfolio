// src/components/GitHubSnippet.js

import React from 'react';
import { motion } from 'framer-motion';
import './CSS/GitHubSnippet.css';

const GitHubSnippet = () => {
  return (
    <motion.section 
      className="github-snippet"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a 
        href="https://github.com/abhinav-ranish" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        Github Stats
      </motion.a>

      <motion.iframe
        src="https://github-readme-stats.vercel.app/api?username=abhinav-ranish&show_icons=true&theme=dark"
        title="GitHub Repos"
        allowTransparency="true"
        className="github-iframe"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      ></motion.iframe>
    </motion.section>
  );
};

export default GitHubSnippet;
