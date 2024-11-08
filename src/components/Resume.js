// src/components/Resume.js

import React from 'react';
import { motion } from 'framer-motion';
import './CSS/Resume.css';

const Resume = () => {
  return (
    <motion.section 
      id="resume"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Resume
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        You can download my resume <a href="/Resume.pdf" download>here</a>
      </motion.p>
    </motion.section>
  );
};

export default Resume;
