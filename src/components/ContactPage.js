// src/components/ContactPage.js

import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.section 
      id="contactpage"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center bg-gray-900 max-w-2xl mx-auto rounded-lg pt-36 pb-80 shadow-md md:pt-30 md:pb-80 px-5"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-300 text-lg md:text-xl"
      >
        Feel free to reach out to me through LinkedIn or email!
        <br /><br />
        <small>Looking forward to connecting with you!</small>
      </motion.p>
      
      <div className="flex flex-col md:flex-row items-center justify-center mt-5 space-y-5 md:space-y-0 md:space-x-6">
        <motion.a 
          href="https://www.linkedin.com/in/abhinavranish/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Connect on LinkedIn
        </motion.a>

        <motion.a 
          href="mailto:aranish@asu.edu" 
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 hover:scale-105"
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

export default ContactPage;
