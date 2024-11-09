// src/components/ResumePage.js

import React from 'react';

const ResumePage = () => {
return (
    <div className="flex justify-center items-center bg-gray-800/50 overflow-hidden w-screen h-screen pt-12 z-50">
        <iframe 
            src="/Resume.pdf" 
            title="Resume"
            className="w-full h-full border-none"
        />
    </div>
);
};

export default ResumePage;
