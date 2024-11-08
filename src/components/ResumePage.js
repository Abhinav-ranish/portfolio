// src/components/ResumePage.js

import React from 'react';
import './CSS/ResumePage.css';

const ResumePage = () => {
  return (
    <div className="resume-container">
      <iframe 
        src="/Resume.pdf" // Update with the path to your PDF file
        title="Resume"
        className="resume-viewer"
      />
    </div>
  );
};

export default ResumePage;
