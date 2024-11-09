// src/components/Contact.js

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-[rgba(255,255,255,0.11)] max-w-xl mx-auto rounded-lg p-8 shadow-lg"
    >
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-2xl font-semibold text-gray-100 mb-4"
      >
        Contact Me
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-300 text-lg mb-6"
      >
        Feel free to reach out to me through LinkedIn or email!
        <br />
        <small className="text-gray-400">Looking forward to connecting with you!</small>
      </motion.p>
      
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
        <motion.a 
          href="https://www.linkedin.com/in/abhinavranish/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Connect on LinkedIn
        </motion.a>

        <motion.a 
          href="mailto:aranish@asu.edu" 
          className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg  hover:bg-green-600"
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
