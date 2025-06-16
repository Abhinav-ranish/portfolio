// src/components/Music.js

import React from 'react';
import { motion } from 'framer-motion';
import './CSS/Music.css';

const Music = () => {
  return (
    <motion.section
      className="music-player"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        className="music-link"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}        
        href="https://music.aranish.uk" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Music Player
        
      </motion.a>
      <motion.iframe
        src="https://music.aranish.uk/miniplayer"
        title="MiniPlayer"
        allowTransparency="true"
        className="music-iframe"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      ></motion.iframe>
    </motion.section>
  );
};

export default Music;
