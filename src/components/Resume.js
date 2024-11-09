// src/components/Resume.js
import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.section 
      id="resume"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-[rgba(255,255,255,0.11)] max-w-xl mx-auto rounded-lg p-8 shadow-lg"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl font-semibold text-gray-100 mb-4"
      >
        Resume
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-300 text-lg"
      >
        You can download my resume{' '}
        <motion.a 
          href="/Resume.pdf" 
          download 
          className="text-green-500 hover:text-green-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          here
        </motion.a>.
      </motion.p>
    </motion.section>
  );
};

export default Resume;
