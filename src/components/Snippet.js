// src/components/GitHubSnippet.js

import React from 'react';
import './GitHubSnippet.css';

const GitHubSnippet = () => {
  return (
    <section className="github-snippet">
      <h2>My GitHub Repos</h2>
      <iframe 
        src="https://github-readme-stats.vercel.app/api?username=abhinav-ranish&show_icons=true&theme=dark"
        title="GitHub Repos"
        allowTransparency="true"
      ></iframe>
      <button 
        onClick={() => window.open('https://github.com/abhinav-ranish', '_blank')}
        className="github-button"
      >
        Link to my GitHub
      </button>
    </section>
  );
};

export default GitHubSnippet;
