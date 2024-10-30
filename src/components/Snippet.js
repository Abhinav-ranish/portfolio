// src/components/GitHubSnippet.js

import React from 'react';
import './GitHubSnippet.css';

const GitHubSnippet = () => {
  return (
    <section className="github-snippet">
      <h2>My GitHub Repos</h2>
      <br></br>
      <a href="https://github.com/abhinav-ranish" target="_blank" rel="noopener noreferrer">
          Visit my GitHub profile
        </a>
      <iframe 
        src="https://github-readme-stats.vercel.app/api?username=abhinav-ranish&show_icons=true&theme=dark"
        title="GitHub Repos"
        allowTransparency="true"
      ></iframe>

    </section>
  );
};

export default GitHubSnippet;
