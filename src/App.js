// src/App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects'; // Import Projects component
import GitHubSnippet from './components/Snippet';
import Music from './components/music';
import './App.css';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage';
import Error from './components/Error';

function App() {
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHeaderVisible(false); // Hide on scroll down
      } else {
        setIsHeaderVisible(true); // Show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine the heading text based on the current route path
  const getHeadingText = () => {
    switch (location.pathname) {
      case '/projects':
        return 'Projects';
      case '/resume':
        return 'Resume Viewer';
      case '/contact':
        return 'Hire Me!';
      default:
        return 'Abhinav Ranish'; // Default heading for Home or any undefined path
    }
  };

  return (
    <div className="App">
      <nav style={{ transform: isHeaderVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
        <div className="nav-left">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Hire Me</Link></li>
          </ul>
        </div>
        <div className="nav-center">
          <h1>{getHeadingText()}</h1>
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
              <br />
              <Music />
            </div>
          </div>}
        />

        {/* Projects Route */}
        <Route path="/projects" element={<Projects />} />
        {/* Resume Route */}
        <Route path="/resume" element={<ResumePage />} />
        {/* Contact Route */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Redirects */}
        <Route path="/spotify" element={<Navigate to="https://spotify.aranish.codes" replace />} />
        <Route path="/github" element={<Navigate to="https://github.com/abhinav-ranish" replace />} />
        <Route path="/ASU" element={<Navigate to="https://search.asu.edu/profile/4295566" replace />} />

        {/* Catch-All Route for Undefined Paths */}
        <Route path="*" element={<Error />} />

      </Routes>


      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Abhinav Ranish. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="https://github.com/abhinavranish">GitHub</a></li>
            <li><a href="https://linkedin.com/in/abhinavranish">LinkedIn</a></li>
            <li><a href="mailto:aranish@asu.edu">Email</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
