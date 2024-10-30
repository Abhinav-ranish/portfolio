// src/components/Contact.js

import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through LinkedIn or email! 
    <br /><br />
        <small> Looking forward to connecting with you!</small>
      </p>
      <div className="contact-buttons">
        <a 
          href="https://www.linkedin.com/in/abhinavranish/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
        >
          Connect on LinkedIn
        </a>
        <a 
          href="mailto:aranish@asu.edu" 
          className="btn"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
