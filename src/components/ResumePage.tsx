// components/ResumePage.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Experience = {
    title: string
    organization: string
    duration: string
    description: string[]
    image: string
}

const experiences: Experience[] = [

    {
        title: 'Cyber Intern',
        organization: 'Ampcus Cyber',
        duration: 'Jun 2025 - Aug 2025',
        description: [
            'Conducting web application penetration tests using tools like Burp Suite, focusing on vulnerabilities such as SQL injection, XSS, and broken authentication.',
            'Collaborating with fellow interns on simulations to improve practical offensive and defensive security skills.',
            'Currently advancing my skills through Hack The Box (network-based challenges) and reading the OWASP Web Security Guide to deepen technical understanding of modern web app threats.',
        ],
        image: '/work/ampcuscyber.jpeg',
    },
    {
        title: 'AI / SWE Intern',
        organization: 'TRANZYD',
        duration: 'Dec 2024 - May 2025',
        image: '/work/tranzyd.jpg',
        description: [
            'Joined to support AI contract automation; quickly took on core feature development responsibilities.',
            'Built clause extraction, blueprint generation, and semantic comparison modules using sentence-transformers and Ollama.',
            'Integrated backend logic using Python, SQLite, and python-docx for contract storage and document generation.',
            'Designed clause-matching workflows for OLD/NEW comparisons with checkbox-driven contract generation UI.',
            'Prototyped an AI stock analyzer using RAG pipelines, FAISS, and sentiment models to explore LLM-based tools.',
        ],
    },

    {
        title: 'SWE Intern',
        organization: 'Ampcus',
        duration: 'Jun 2025 - Aug 2025',
        description: [
            'Joined as a Cybersecurity Intern; independently identified a SWE opening on a client project.',
            'Proactively requested and secured a dual role contributing to frontend development.',
            'Developing UI components with React, integrating REST APIs, and improving UX.',
            'Supporting cyber team with web app testing and vulnerability triage alongside SWE work.',
            'Managing both roles in parallel, demonstrating initiative, versatility, and strong time management.',
        ],
        image: '/work/ampcus.jpg',
    },
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
    /* add the rest */
]

export default function ResumePage() {
    return (
        <div className="min-h-screen px-5 pb-10 bg-gray-900 text-gray-100">
            <div className="max-w-4xl mx-auto relative">
                <div className="md:absolute md:left-4 md:top-0 md:bottom-0 md:w-px md:bg-gray-700" />
                {experiences.map((e, i) => (
                    <motion.div
                        key={i}
                        className="mb-12 relative md:pl-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                    >
                        <div className="absolute right-2 top-3 w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center">
                            <Image src={e.image} alt={e.title} width={80} height={80} className="square-full" />
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold">{e.title}</h3>
                            <p className="text-gray-300">{e.organization}</p>
                            <p className="text-gray-400 mb-2">{e.duration}</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-300">
                                {e.description.map((d, j) => <li key={j}>{d}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
