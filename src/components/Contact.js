// src/components/Contact.js

import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Feel free to reach out to me through LinkedIn or email!
        <br /><br />
        <small>Looking forward to connecting with you!</small>
      </motion.p>
      
      <div className="contact-buttons">
        <motion.a 
          href="https://www.linkedin.com/in/abhinavranish/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Connect on LinkedIn
        </motion.a>

        <motion.a 
          href="mailto:aranish@asu.edu" 
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Email Me
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;
