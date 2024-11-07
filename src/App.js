// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects'; // Import Projects component
import GitHubSnippet from './components/Snippet';
import Music from './components/music';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-left">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="nav-center">
            <h1>Abhinav Ranish</h1>
          </div>
        </nav>

        <Routes>
          {/* Home Route */}
          <Route path="/" element={<div className="three-column-layout">
              <div className="left-column">
                <Home />
              </div>
              <div className="middle-column">
                <Resume />
                <GitHubSnippet />
              </div>
              <div className="right-column">
                <Contact />
                <br></br>
                <Music />
              </div>
            </div>}
          />

          {/* Projects Route */}
          <Route path="/projects" element={<Projects />} />

          {/* Additional routes can be added here */}
        </Routes>

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
      </div>
    </Router>
  );
}

export default App;
