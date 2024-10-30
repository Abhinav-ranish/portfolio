// src/components/Projects.js

import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Auto Class Enroller',
    description: 'Automated student enrollment using Selenium and Python.',
    technologies: ['Python', 'Selenium'],
    link: 'https://github.com/Abhinav-ranish/ASU-ClassEnroller',
  },
  {
    title: 'Exploiting a Vulnerable Computer',
    description: 'Used SQL injection and Metasploit to exploit a VM.',
    technologies: ['Metasploit', 'SQL Injection'],
    link: 'https://bit.ly/CPT-redteam',
  },
  {
    title: 'Spotify Visualizer Website',
    description: 'Live website using MongoDB and Three.js for dynamic visual effects.',
    technologies: ['MongoDB', 'Three.js', 'Spotify API'],
    link: 'https://spotify.aranish.codes',
  },
    {
    title: 'Campus Hive',
    description: 'JavaFX app fostering a collaborative community for CSE students to share posts, ask questions, and discuss topics like GitHub, Java, and Eclipse.',
    technologies: ['JavaFX', 'GitHub', 'Java', 'Eclipse'],    
    link: 'https://github.com/Abhinav-ranish/CampusHive',
    }
];

const ProjectCard = ({ title, description, technologies, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <div className="project-info">
      <p>{description}</p>
      <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
