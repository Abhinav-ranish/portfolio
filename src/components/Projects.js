// src/components/Projects.js

import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'Campus Hive',
    description: 'JavaFX app fostering a collaborative community for CSE students to share posts, ask questions, and discuss topics like GitHub, Java, and Eclipse.',
    technologies: ['JavaFX', 'GitHub', 'Java', 'Eclipse'],    
    link: 'https://github.com/Abhinav-ranish/CampusHive',
  },
  {
    title: 'Spotify Visualizer Website',
    description: 'Live website using MongoDB and Three.js for dynamic visual effects.',
    technologies: ['MongoDB', 'Three.js', 'Spotify API'],
    link: 'https://github.com/Abhinav-ranish/spotifyvisualizer',
    visit: 'https://spotify.aranish.codes',
  },
  {
    title: 'Auto Class Enroller',
    description: 'Automated student enrollment using Selenium and Python.',
    technologies: ['Python', 'Selenium'],
    link: 'https://github.com/Abhinav-ranish/ASU-ClassEnroller',
  },
  {
    title: 'Keylogger',
    description: 'Records keystrokes and sends them to a server.',
    technologies: ['C', 'Curl', 'Windows API'],
    link: 'https://github.com/Abhinav-ranish/keylogger',
  },
  {
    title: 'Exploiting a Vulnerable Computer',
    description: 'Used SQL injection and Metasploit to exploit a VM.',
    technologies: ['Metasploit', 'SQL Injection'],
    link: 'https://bit.ly/CPT-redteam',
  },
  {
    title: 'Simple Music Player',
    description: 'Music player with play, pause, and skip functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Abhinav-ranish/Music-Player',
    visit: 'https://music.aranish.codes',
  },
  {
    title: 'Matrix Graph - DSA OOP Project',
    description: 'Graph data structure with matrix representation.',
    technologies: ['C++', 'Data Structures'],
    link: 'https://github.com/Abhinav-ranish/MatrixGraph-DSA',
  },
  {
    title: 'Spotify Haptics Controller',
    description: 'Haptic feedback for Spotify using Swift and Spotify API.',
    technologies: ['Swift', 'Spotify API'],
    link: 'https://github.com/Abhinav-ranish/Spotify-Haptics',
  },
  {
    title: 'Google Search Cleaner',
    description: 'Chrome extension to remove sponsored search results.',
    technologies: ['JavaScript', 'Chrome Extension'],
    link: 'https://github.com/Abhinav-ranish/google-cleaner',
  },
  {
    title: 'Make Canvas Dark Again',
    description: 'Chrome extension to make the Canvas LMS dark.',
    technologies: ['JavaScript', 'Chrome Extension'],
    link: 'https://github.com/Abhinav-ranish/Make-Canvas-Dark-Again',
  }
];

const ProjectCard = ({ title, description, technologies, link, visit }) => (
  <motion.a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="project-card-link" // Add class for styling
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="project-card">
      <h3>{title}</h3>
      <div className="project-info">
        <p>{description}</p>
        <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
        {visit && (
          <a 
            href={visit} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="live-website-button"
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
  >
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      rel='noopener noreferrer'
      className='motion-h2'
    >
      My Projects
    </motion.h2>
    
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </motion.section>
);

export default Projects;
