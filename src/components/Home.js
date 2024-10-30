// src/components/Home.js

import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <section id="home">
      <div className="intro">
        <h1>Abhinav Ranish</h1>
        <p>
          I’m a passionate Software Engineer and Cybersecurity enthusiast focusing on SWE, SDE, DevOps, Cloud Engineering, Cybersecurity, and Data Analysis. 
          Currently pursuing my B.S. in Computer Science with a double major in Justice Studies.
        </p>
        <p>
          I enjoy working on projects that allow me to automate tasks, secure systems, and leverage data for better decision-making.
        </p>
        <div className="social-links">
          <a href="https://github.com/abhinav-ranish" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abhinavranish/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
