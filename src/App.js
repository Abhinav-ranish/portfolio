// src/App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import GitHubSnippet from './components/Snippet';
import Music from './components/music';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage';
import Error from './components/Error';
import Spotify from './components/Spotify';
import GitHub from './components/Github';
import ASU from './components/Asu';
import Login from './components/Login';
import MusicPage from './components/MusicPage';
import Linkedin from './components/Linkedin';
import Forms from './components/Forms';

function App() {
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY <= lastScrollY);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHeadingText = () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      return ''; // Hide the heading on mobile devices
    }
    switch (location.pathname) {
      case '/projects': return 'Projects';
      case '/resume': return 'Work Experience';
      case '/contact': return 'Hire Me!';
      default: return 'Abhinav Ranish';
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-sans text-lg min-h-screen">
     <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.5 }}
      className="bg-gray-800 p-5 fixed top-0 w-full z-50"
    >
      <div className="flex justify-between items-center">
        <div className="flex space-x-5">
          <Link to="/" className="text-white font-bold hover:text-green-500">Home</Link>
          <Link to="/projects" className="text-white font-bold hover:text-green-500">Projects</Link>
          <Link to="/resume" className="text-white font-bold hover:text-green-500">Resume</Link>
          <Link to="/contact" className="text-white font-bold hover:text-green-500">Hire Me</Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-lg font-semibold text-gray-100">{getHeadingText()}</h1>
        </div>
      </div>
    </motion.nav>


      <Routes>
        <Route 
          path="/" 
          element={
            <div className="flex flex-col md:flex-row gap-3 p-5 pt-24">
              <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
                <Home />
              </div>
              <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
                <Resume />
                <br />
                <GitHubSnippet />
                <div className="flex justify-center mt-5">
                  <motion.button 
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-400 uppercase tracking-wide"
                    onClick={() => window.location.href = '/projects'}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    Projects
                  </motion.button>
                </div>
              </div>
              <div className="bg-gray-800 p-5 rounded-lg shadow-lg flex-1">
                <Contact />
                <br />
                <Music />
              </div>
            </div>
          } 
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/ASU" element={<ASU />} />
        <Route path="/login" element={<Login />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/linkedin" element={<Linkedin />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <footer className="bg-gray-800 p-3 text-gray-100 text-center border-t border-gray-700 mt-5 rounded-t-lg max-w-6xl mx-auto">
        <div className="flex justify-between items-center flex-wrap">
          <p className="m-0">&copy; 2024 Abhinav Ranish. All rights reserved.</p>
          <ul className="flex space-x-5 m-0 p-0 list-none">
            <li><a href="https://github.com/abhinav-ranish" className="text-green-500 hover:text-green-400">GitHub</a></li>
            <li><a href="https://linkedin.com/in/abhinavranish" className="text-green-500 hover:text-green-400">LinkedIn</a></li>
            <li><a href="mailto:aranish@asu.edu" className="text-green-500 hover:text-green-400">Email</a></li>
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
