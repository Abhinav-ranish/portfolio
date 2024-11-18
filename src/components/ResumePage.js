// src/components/ResumePage.js

import React from 'react';

const ResumePage = () => {
  const experiences = [
    {
      title: 'Technology Consultant',
      organization: 'Arizona State University',
      duration: 'November 2024 - Present',
      description: [
        'Provided in-class tech support, quickly addressing issues with projectors, cameras, mics, and more to minimize class disruptions.',
        'Managed front desk, assisting faculty and staff with real-time inquiries via phone, Slack, and in-person.',
        'Performed end-of-day checks to confirm tech functionality and classroom security.',
        'Demonstrated adaptability and problem-solving in a fast-paced environment, ensuring a smooth tech experience.',
      ],
      image: '/work/asu.webp', // Replace with your actual image paths
    },
    {
      title: 'Information Technology Intern',
      organization: 'Qatar Financial Center Regulatory Authority',
      duration: 'May 2024 - July 2024',
      description: [
        'Configured clients\' work environments to meet corporate requirements.',
        'Deployed over 150+ laptops with Standard Operating Environment, setting records for deployment speed.',
        'Created presentations on IT Infrastructure with tools like Trellix, Azure, and FortiClient.',
        'Managed sensitive and client data in compliance with company regulations.',
      ],
      image: '/work/qfcra.jpeg', // Replace with your actual image paths
    },
    {
      title: 'IT Intern',
      organization: 'Mannai Corporation',
      duration: 'July 2023 - August 2023',
      description: [
        'Contributed to the development of an ASP.NET website.',
        'Gained proficiency in switch configuration, IP addressing, subnetting, and VLAN management.',
        'Applied practical knowledge in computer networking.',
      ],
      image: '/work/mannai.png', // Replace with your actual image paths
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-9 py-20">
        <div className="relative border-l-2 border-gray-300 dark:border-gray-600">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute -left-6 w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{exp.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{exp.organization}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{exp.duration}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
