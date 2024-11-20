import React from 'react';
import { motion } from 'framer-motion';
import './CSS/ResumePage.css';

const ResumePage = () => {
  const experiences = [
    {
      title: 'Technology Consultant',
      organization: 'Enterprise Technology - Arizona State University',
      duration: 'November 2024 - Present',
      description: [
        'Provided in-class tech support, quickly addressing issues with projectors, cameras, mics, and more to minimize class disruptions.',
        'Managed front desk, assisting faculty and staff with real-time inquiries via phone, Slack, and in-person.',
        'Performed end-of-day checks to confirm tech functionality and classroom security.',
        'Demonstrated adaptability and problem-solving in a fast-paced environment, ensuring a smooth tech experience.',
      ],
      image: '/work/asu.webp',
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
      image: '/work/qfcra.jpeg',
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
      image: '/work/mannai.png',
    },
  ];

  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="icon">
                <img src={exp.image} alt={exp.title} className="icon-image" />
              </div>
              <div className="content">
                <h2 className="title">{exp.title}</h2>
                <p className="organization">{exp.organization}</p>
                <p className="duration">{exp.duration}</p>
                <ul className="description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
