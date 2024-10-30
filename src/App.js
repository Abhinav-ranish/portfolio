// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import GitHubSnippet from './components/Snippet'; // Import GitHubSnippet
import './App.css'; // Import updated CSS

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-left">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/resume">Resume</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="nav-center">
            <h1>Abhinav Ranish</h1>
          </div>
        </nav>

        {/* Main container for the three-column layout */}
        <div className="three-column-layout">
          <div className="left-column">
            <Home />
            <Projects /> {/* Projects under Home */}
          </div>
          <div className="middle-column">
            <Resume />
          </div>
          <div className="right-column">
            <Contact />
            <GitHubSnippet /> {/* GitHub snippet here */}
          </div>
        </div>
      </div>  
      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Abhinav Ranish. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="https://github.com/abhinavranish">GitHub</a></li>
            <li><a href="https://linkedin.com/in/abhinavranish">LinkedIn</a></li>
            <li><a href="mailto:abhinav@example.com">Email</a></li>
          </ul>
        </div>
      </footer>
    </Router>
  );
}

export default App;
