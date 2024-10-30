// src/components/Resume.js

import React from 'react';
import './Resume.css';


const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>
        You can download my resume <a href="/Resume.pdf" download>here</a> or view it below.
      </p>
      <iframe 
        src="/Resume.pdf" 
        title="Resume"
        style={{ width: '100%', height: '600px' }}
        frameBorder="0"
      ></iframe>
    </section>
  );
};

export default Resume;
