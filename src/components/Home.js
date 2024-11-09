// src/components/Home.js

import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex "
    >
      <motion.div 
        className="max-w-2xl bg-[rgba(255,255,255,0.11)] p-8 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-100 mb-4"
        >
          Abhinav Ranish
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-300 mb-4"
        >
          I’m a passionate Software Engineer and Cybersecurity enthusiast focusing on SWE, SDE, DevOps, Cloud Engineering, Cybersecurity, and Data Analysis. 
          Currently pursuing my B.S. in Computer Science with a double major in Justice Studies.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-300 mb-6"
        >
          I enjoy working on projects that allow me to automate tasks, secure systems, and leverage data for better decision-making.
        </motion.p>
        
        <div className="flex justify-center space-x-6">
          <motion.a 
            href="https://github.com/abhinav-ranish" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 font-medium"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            GitHub
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/abhinavranish/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 font-medium"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            LinkedIn
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
