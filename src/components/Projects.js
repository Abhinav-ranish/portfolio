// src/components/Projects.js

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Campus Hive',
    description: 'JavaFX app for students to connect and collaborate on projects.',
    technologies: ['JavaFX', 'GitHub', 'Java', 'Eclipse', 'H2', 'Database'],    
    link: 'https://github.com/Abhinav-ranish/CampusHive',
  },
  {
    title: 'Auto Class Enroller',
    description: 'ASU Class Scraper and Automated student enrollment using Selenium and Python.',
    technologies: ['Python', 'Selenium', 'Smtplib'],
    link: 'https://github.com/Abhinav-ranish/ASU-ClassEnroller',
  },
  {
    title: 'Keylogger',
    description: 'Records keystrokes and sends them to a server.',
    technologies: ['C', 'Curl', 'Windows API'],
    link: 'https://github.com/Abhinav-ranish/keylogger',
  },
  {
    title: 'Spotify Visualizer Website',
    description: 'Live website using MongoDB and Three.js for dynamic visual effects.',
    technologies: ['MongoDB', 'Three.js', 'Spotify API', 'Express.js', 'AWS'],
    link: 'https://github.com/Abhinav-ranish/spotifyvisualizer',
    visit: 'https://spotify.aranish.codes',
  },
  {
    title: 'Simple Music Player',
    description: 'Music player with play, pause, and skip functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages'],
    link: 'https://github.com/Abhinav-ranish/Music-Player',
    visit: 'https://music.aranish.codes',
  },
  {
    title: 'Internship Website - QFCRA',
    description: 'Website which I developed during my internship at QFCRA.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages'],
    link: 'https://github.com/Abhinav-ranish/Internship-Website',
    visit: 'https://internship.aranish.codes/',
  },
  {
    title: 'Matrix Graph - DSA OOP Project',
    description: 'Graph data structure with matrix representation.',
    technologies: ['C++', 'Data Structures'],
    link: 'https://github.com/Abhinav-ranish/MatrixGraph-DSA',
  },
  {
    title: 'Exploiting a Vulnerable Computer',
    description: 'Used SQL injection and Metasploit to exploit a VM.',
    technologies: ['Metasploit', 'SQL Injection'],
    link: 'https://bit.ly/CPT-redteam',
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
    className="block w-4/5 md:w-1/3 lg:w-1/4 bg-gray-800 p-5 rounded-lg shadow-md transform  hover:scale-105"
    whileHover={{ scale: 1.2 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div>
      <h3 className="text-green-500 text-xl font-semibold mb-3">{title}</h3>
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
