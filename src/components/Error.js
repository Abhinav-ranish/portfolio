// src/components/Error.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Error.css';

const Error = () => {
    return (
      <div className="error-container">
        <h2 className="error-subtitle">Page Not Found</h2>
        <p className="error-text">The page you are looking for does not exist.</p>
        <Link to="/" className="error-link">
          Go Back Home
        </Link>
      </div>
    );
  };

export default Error;
