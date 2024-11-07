// src/components/Home.js

import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <motion.section 
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="intro"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Abhinav Ranish
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I’m a passionate Software Engineer and Cybersecurity enthusiast focusing on SWE, SDE, DevOps, Cloud Engineering, Cybersecurity, and Data Analysis. 
          Currently pursuing my B.S. in Computer Science with a double major in Justice Studies.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I enjoy working on projects that allow me to automate tasks, secure systems, and leverage data for better decision-making.
        </motion.p>
        
        <div className="social-links">
          <motion.a 
            href="https://github.com/abhinav-ranish" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            GitHub
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/abhinavranish/" 
            target="_blank" 
            rel="noopener noreferrer"
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
