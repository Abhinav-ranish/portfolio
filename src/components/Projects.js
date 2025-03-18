// src/components/Projects.js

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Stock AI Analyzer RAG',
    description: 'AI-powered stock analysis tool leveraging Retrieval-Augmented Generation (RAG) with FAISS vector search and Ollama LLM.',
    technologies: ['Python', 'FAISS', 'Ollama', 'Yahoo Finance API', 'React'],
    link: 'https://github.com/Abhinav-ranish/AI-Stock-Algorithm',
    image: '/projects/StockAIAnalyzer.jpg',
  },
  {
    title: 'Stock Predictor',
    description: 'Stock prediction system using Backtesting.py to evaluate trade strategies and forecast stock movements.',
    technologies: ['Python', 'Backtesting.py', 'Financial Data Analysis'],
    link: 'https://github.com/Abhinav-ranish/Stock-Predictor',
    image: '/projects/StockPredictor.jpg',
  },
  {
    title: 'Contract Conditions Extraction and Verification',
    description: 'Extracts contract conditions from DOCX files and verifies task compliance using NLP and Ollama RAG orchestration.',
    technologies: ['Python', 'Ollama', 'RAG', 'Streamlit', 'Docx'],
    link: 'https://en.wikipedia.org/wiki/Non-disclosure_agreement',
    image: '/projects/ContractAnalyzer.jpeg',
  },
  {
    title: 'Secure Team Password Manager',
    description: 'Deployed Passbolt Community Edition on AWS EC2 to streamline password management for ACM ASU.',
    technologies: ['AWS', 'NGNIX', 'Passbolt', 'OpenSSL', 'Ubuntu', 'EC2'],
    link: 'https://asu.acm.org/',
    image: '/projects/passbolt.png',
  },
  {
    title: 'Campus Hive',
    description: 'JavaFX app for students to connect and collaborate on projects.',
    technologies: ['JavaFX', 'GitHub', 'Java', 'Eclipse', 'H2', 'Database'],    
    link: 'https://github.com/Abhinav-ranish/CampusHive',
    image: '/projects/CampusHive.png',
  },
  {
    title: 'Spotify Wrapped Bot',
    description: 'Boost your Spotify Wrapped stats effortlessly, intelligent playback scheduling, seamless background operation, and predictive machine learning to optimize your music experience!',
    technologies: ['Python', 'Scikit', 'Websockets', 'Spotify API', 'Machine Learning', 'Pandas', 'Matplotlib',],
    link: 'https://github.com/Abhinav-ranish/wrappedbot',
    image: '/projects/SpotifyWrappedBot.png',
  },
  {
    title: 'Keylogger',
    description: 'Records keystrokes and sends them to a server.',
    technologies: ['C', 'Curl', 'Windows API'],
    link: 'https://github.com/Abhinav-ranish/keylogger',
    image: '/projects/Keylogger.jpeg',
  },
  {
    title: 'Spotify Visualizer Website',
    description: 'Live website using MongoDB and Three.js for dynamic visual effects.',
    technologies: ['MongoDB', 'Three.js', 'Spotify API', 'Express.js', 'AWS'],
    link: 'https://github.com/Abhinav-ranish/spotifyvisualizer',
    visit: 'https://spotify.aranish.codes',
    image: '/projects/Spotifyvisualizer.png',
  },
  {
    title: 'Simple Music Player',
    description: 'Music player with play, pause, and skip functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages'],
    link: 'https://github.com/Abhinav-ranish/Music-Player',
    visit: 'https://music.aranish.codes',
    image: '/projects/MusicPlayer.png',
  },
  {
    title: 'Internship Website - QFCRA',
    description: 'Website which I developed during my internship at QFCRA.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages'],
    link: 'https://github.com/Abhinav-ranish/Internship-Website',
    visit: 'https://internship.aranish.codes/',
    image: '/projects/QFCRA.jpeg',
  },
  {
    title: 'Matrix Graph - DSA OOP Project',
    description: 'Graph data structure with matrix representation.',
    technologies: ['C++', 'Data Structures'],
    link: 'https://github.com/Abhinav-ranish/MatrixGraph-DSA',
    image: '/projects/MatrixGraph.png',
  },
  {
    title: 'Exploiting a Vulnerable Computer',
    description: 'Used SQL injection and Metasploit to exploit a VM.',
    technologies: ['Metasploit', 'SQL Injection'],
    link: 'https://bit.ly/CPT-redteam',
    image: '/projects/Vulnerable.png',
  },
  {
    title: 'Auto Class Enroller',
    description: 'ASU Class Scraper and Automated student enrollment using Selenium and Python.',
    technologies: ['Python', 'Selenium', 'Smtplib'],
    link: 'https://github.com/Abhinav-ranish/ASU-ClassEnroller',
    image: '/projects/AutoClassEnroller.ico',
  },
  {
    title: 'Spotify Haptics Controller',
    description: 'Haptic feedback for Spotify using Swift and Spotify API.',
    technologies: ['Swift', 'Spotify API'],
    link: 'https://github.com/Abhinav-ranish/Spotify-Haptics',
    image: '/projects/SpotifyHaptics.png',
  },

  {
    title: 'Google Search Cleaner',
    description: 'Chrome extension to remove sponsored search results.',
    technologies: ['JavaScript', 'Chrome Extension'],
    link: 'https://github.com/Abhinav-ranish/google-cleaner',
    image: '/projects/Google.png',
  },
  {
    title: 'Make Canvas Dark Again',
    description: 'Chrome extension to make the Canvas LMS dark.',
    technologies: ['JavaScript', 'Chrome Extension'],
    link: 'https://github.com/Abhinav-ranish/Make-Canvas-Dark-Again',
    image: '/projects/Canvas.jpg',
  }
];


const ProjectCard = ({ title, description, technologies, link, visit, image }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-4/5 md:w-1/3 lg:w-1/4 bg-gray-800 p-5 rounded-lg shadow-md transform hover:scale-105"
    whileHover={{ scale: 1.1 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div>
      <div className="flex items-center mb-4">
        {image && (
          <img 
            src={image} 
            alt={`${title} preview`} 
            className="w-16 h-16 object-contain rounded-full mr-4 border border-gray-500 p-1" 
          />
        )}
        <h3 className="text-green-500 text-xl font-semibold">{title}</h3>
      </div>
      <div className="text-gray-300">
        <p>{description}</p>
        <p className="mt-3">
          <strong>Technologies:</strong> {technologies.join(', ')}
        </p>
        {visit && (
          <a
            href={visit}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white mt-4 py-2 rounded text-center font-medium transition-colors duration-300 hover:bg-green-600"
          >
            Live Website
          </a>
        )}
      </div>
    </div>
  </motion.a>
);
const Projects = () => (
  <motion.section
    id="projects"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-700 py-20 px-1"
  >
    <div className="flex flex-wrap gap-6 justify-center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </motion.section>
);

export default Projects;
