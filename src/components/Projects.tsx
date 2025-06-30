// components/Projects.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type ProjectCategory =
  | '🔥🔥'
  | 'Software'
  | 'Cyber'
  | 'AI/LLM'
  | 'ML'
  | 'Websites'
  | 'DSA'
  | 'Scripts'
  | 'Extensions'
  | 'IOS'
  | 'All'

type Project = {
  title: string
  description: string
  technologies: string[]
  link: string
  visit?: string
  image: string
  category: ProjectCategory | ProjectCategory[]
  workinprogress?: boolean
}

const FILTERS: ProjectCategory[] = ['🔥🔥', 'Software', 'Cyber', 'Websites', 'Scripts', 'AI/LLM', 'ML', 'Extensions', 'All']


const projects: Project[] = [
  {
    title: 'FaceTagger: Local Smart Photo Tagger',
    description:
      'Offline AI tool to detect, embed, and cluster faces in 1TB+ photo libraries. UI built with Streamlit allows users to label clusters, write EXIF/JSON tags, and organize collections without cloud dependency. GPU acceleration via CUDA + InsightFace.',
    technologies: ['Python', 'InsightFace', 'Streamlit', 'EXIFTool', 'ONNX', 'HDBSCAN'],
    link: 'https://github.com/Abhinav-ranish/FaceMatch',
    image: '/projects/facetagger.png',
    workinprogress: true,
    category: ['ML', '🔥🔥'],
  },
  {
    title: 'Cyber Scripts',
    description:
      'A collection of offensive security automation scripts created during PortSwigger, JWT, and CTF training. Includes Turbo Intruder templates, LLM prompt injections, JWT brute-force, exploit server hijacking, and more. Built to speed up recon and exploitation in web targets.',
    technologies: ['Python', 'Turbo Intruder', 'Burp Suite', 'LLM', 'Bash'],
    link: 'https://github.com/Abhinav-ranish/cyberscripts',
    image: '/projects/cyberscripts.png',
    category: ['Cyber', 'Scripts'],
  },

  {
    title: 'Net Audit Suite',
    description:
      'Cyber audit tool integrating Nmap, Nikto, OpenVAS, and arp-scan to generate AI-powered summaries of discovered vulnerabilities using LLaMA + Ollama. Generates DOCX reports, maps infected IPs, and provides a dark-mode frontend in Next.js.',
    technologies: ['Next.js', 'Node.js', 'Ollama', 'OpenVAS', 'Nmap', 'Tailwind'],
    link: 'https://github.com/Abhinav-ranish/Network-Vulnerability-Audit',
    image: '/projects/netaudit.png',
    category: ['Cyber', '🔥🔥'],
  },
  {
    title: 'Educational Worm + Dashboard',
    description:
      'Python worm POC that replicates across user folders, USBs, and sends host info to a Flask-based C2 dashboard. Dashboard shows infection map, kill switch, and logs. Fully safe for sandbox testing and cyber education.',
    technologies: ['Python', 'Flask', 'Geocoder', 'USB I/O', 'Self-replication'],
    link: 'https://github.com/Abhinav-ranish/Worm',
    image: '/projects/worm.jpg',
    category: 'Cyber',
  },
  {
    title: 'DIW387 STB Mod Toolkit',
    description:
      'Toolkit to de-bloat and customize Ooredoo’s locked DIW387 Android TV STB. Includes Wolf Launcher setup, splash screen mods, sideload tooling, and Dirty COW (CVE-2016-5195) root attempt. For education and warranty-voiding fun.',
    technologies: ['Bash', 'Android TV', 'ADB', 'Dirty COW Exploit'],
    link: 'https://github.com/Abhinav-ranish/ooreedoo-DIW387-mod',
    image: '/projects/stbmod.png',
    category: ['Cyber', '🔥🔥'],
  },
  {
    title: 'VibeCode Machine',
    description:
      'Experimental AI-assisted code builder that autogenerates, tests, and fixes Python projects via Ollama + Codellama. Automatically patches failed logic and regenerates dependencies via smart retry. CLI interface for rapid prototyping.',
    technologies: ['Python', 'Ollama', 'LLM Automation', 'Patch Diffing'],
    link: 'https://github.com/Abhinav-ranish/The-Super-Coder',
    image: '/projects/vibecode.webp',
    category: ['AI/LLM', '🔥🔥'],
  },
  {
    title: 'BetterStreaming',
    description: 'A media streaming platform using PirateBay+ for content, featuring a React/Next.js frontend and Rust-based WebTorrent streaming. It offers personalized browsing, advanced search, and progressive streaming.',
    technologies: ['React', 'Next.js', 'WebTorrent', 'Rust', 'Prisma', 'PostgreSQL'],
    link: 'https://github.com/Abhinav-ranish/BetterStreaming',
    image: '/projects/BetterStreaming.png',
    category: ['Software', '🔥🔥'],
  },
  {
    title: 'Stock AI Analyzer RAG',
    description: 'AI-powered stock analysis tool leveraging Retrieval-Augmented Generation (RAG) with FAISS vector search and Ollama LLM.',
    technologies: ['Python', 'FAISS', 'Ollama', 'Yahoo Finance API', 'React'],
    link: 'https://github.com/Abhinav-ranish/AI-Stock-Algorithm',
    image: '/projects/StockAIAnalyzer.jpg',
    category: ['AI/LLM', '🔥🔥'],
  },
  {
    title: 'Stock Predictor',
    description: 'Stock prediction system using Backtesting.py to evaluate trade strategies and forecast stock movements.',
    technologies: ['Python', 'Backtesting.py', 'Financial Data Analysis'],
    link: 'https://github.com/Abhinav-ranish/Stock-Predictor',
    workinprogress: true,
    image: '/projects/StockPredictor.jpg',
    category: 'ML',
  },
  {
    title: 'Contract Generator RAG',
    description: 'Extracts contract conditions from DOCX files and verifies task compliance using NLP and Ollama RAG orchestration.',
    technologies: ['Python', 'Ollama', 'RAG', 'Streamlit', 'Docx'],
    link: 'https://en.wikipedia.org/wiki/Non-disclosure_agreement',
    image: '/projects/ContractAnalyzer.jpeg',
    category: ['AI/LLM', '🔥🔥'],
  },
  {
    title: 'Secure Team Password Manager',
    description: 'Deployed Passbolt Community Edition on AWS EC2 to streamline password management for ACM ASU.',
    technologies: ['AWS', 'NGNIX', 'Passbolt', 'OpenSSL', 'Ubuntu', 'EC2'],
    link: 'https://asu-acm.org/',
    image: '/projects/passbolt.png',
    category: 'Cyber',

  },
  {
    title: 'Campus Hive',
    description: 'JavaFX app for students to connect and collaborate on projects.',
    technologies: ['JavaFX', 'GitHub', 'Java', 'Eclipse', 'H2', 'Database'],
    link: 'https://github.com/Abhinav-ranish/CampusHive',
    image: '/projects/CampusHive.png',
    category: ['Software', '🔥🔥'],

  },
  {
    title: 'Spotify Wrapped Bot',
    description: 'Boost your Spotify Wrapped stats effortlessly, intelligent playback scheduling, seamless background operation, and predictive machine learning to optimize your music experience!',
    technologies: ['Python', 'Scikit', 'Websockets', 'Spotify API', 'Machine Learning', 'Pandas', 'Matplotlib',],
    link: 'https://github.com/Abhinav-ranish/wrappedbot',
    image: '/projects/SpotifyWrappedBot.png',
    category: ['ML'],

  },
  {
    title: 'Keylogger',
    description: 'Records keystrokes and sends them to a server.',
    technologies: ['C', 'Curl', 'Windows API'],
    link: 'https://github.com/Abhinav-ranish/keylogger',
    image: '/projects/Keylogger.jpeg',
    category: ['Cyber'],
  },
  {
    title: 'Personal Portfolio',
    description: 'Personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. Features categorized project showcase, animated UI, and persistent audio player across routes.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    link: 'https://github.com/Abhinav-ranish/portfolio',
    visit: 'https://aranish.uk',
    image: '/projects/portfolio.ico', // Update path if different
    category: ['Websites'],
  },

  {
    title: 'Spotify Visualizer Website',
    description: 'Live website using MongoDB and Three.js for dynamic visual effects.',
    technologies: ['MongoDB', 'Three.js', 'Spotify API', 'Express.js', 'AWS'],
    link: 'https://github.com/Abhinav-ranish/spotifyvisualizer',
    visit: 'https://spotify.aranish.uk',
    image: '/projects/Spotifyvisualizer.png',
    category: ['Websites'],
  },
  {
    title: 'Simple Music Player',
    description: 'Music player with play, pause, and skip functionality.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages'],
    link: 'https://github.com/Abhinav-ranish/Music-Player',
    visit: 'https://music.aranish.uk',
    image: '/projects/MusicPlayer.png',
    category: ['Websites'],
  },
  {
    title: 'Internship Website - QFCRA',
    description: 'Website which I developed during my internship at QFCRA.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages'],
    link: 'https://github.com/Abhinav-ranish/Internship-Website',
    visit: 'https://internship.aranish.uk/',
    image: '/projects/QFCRA.jpeg',
    category: ['Websites'],
  },
  {
    title: 'Matrix Graph - DSA OOP Project',
    description: 'Graph data structure with matrix representation.',
    technologies: ['C++', 'Data Structures'],
    link: 'https://github.com/Abhinav-ranish/MatrixGraph-DSA',
    image: '/projects/MatrixGraph.png',
    category: ['Software', 'DSA'],
  },
  {
    title: 'Exploiting a Vulnerable Computer',
    description: 'Used SQL injection and Metasploit to exploit a VM.',
    technologies: ['Metasploit', 'SQL Injection'],
    link: 'https://bit.ly/CPT-redteam',
    image: '/projects/Vulnerable.png',
    category: ['Cyber'],
  },
  {
    title: 'Auto Class Enroller',
    description: 'ASU Class Scraper and Automated student enrollment using Selenium and Python.',
    technologies: ['Python', 'Selenium', 'Smtplib'],
    link: 'https://github.com/Abhinav-ranish/ASU-ClassEnroller',
    image: '/projects/AutoClassEnroller.ico',
    category: ['Software', 'Scripts', '🔥🔥'],
  },
  {
    title: 'Spotify Haptics Controller',
    description: 'Haptic feedback for Spotify using Swift and Spotify API.',
    technologies: ['Swift', 'Spotify API'],
    workinprogress: true,
    link: 'https://github.com/Abhinav-ranish/Spotify-Haptics',
    image: '/projects/SpotifyHaptics.png',
    category: ['Software', 'IOS'],

  },

  {
    title: 'Google Search Cleaner',
    description: 'Chrome extension to remove sponsored search results.',
    technologies: ['JavaScript', 'Chrome Extension'],
    link: 'https://github.com/Abhinav-ranish/google-cleaner',
    image: '/projects/Google.png',
    category: ['Extensions'],

  },
  {
    title: 'Make Canvas Dark Again',
    description: 'Chrome extension to make the Canvas LMS dark.',
    technologies: ['JavaScript', 'Chrome Extension'],
    link: 'https://github.com/Abhinav-ranish/Make-Canvas-Dark-Again',
    image: '/projects/Canvas.jpg',
    category: ['Extensions'],

  }
]

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('🔥🔥')

  const visibleProjects = projects.filter((p) => {
    if (filter === 'All') return true
    if (Array.isArray(p.category)) return p.category.includes(filter)
    return p.category === filter
  })

  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 max-w-7xl mx-auto"
    >
      {/* Toolbar */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {FILTERS.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full border ${filter === cat
                ? 'bg-red-300 text-white border-red-400'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProjects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            target="_blank"
            rel="noopener noreferrer"
            layout
            className="relative group bg-gray-800 p-5 rounded-lg shadow-md hover:scale-110 transition-transform"
            initial={{ opacity: 0.1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >

          {p.workinprogress && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 rounded-lg overflow-hidden">
              <h4 className="w-[110%] py-1 text-center text-sm font-bold text-black bg-yellow-400 -rotate-6 shadow-md">
                WORK IN PROGRESS
              </h4>
            </div>
          )}

            <div className="flex items-center mb-4">
              <Image
                src={p.image}
                alt={p.title}
                width={80}
                height={80}
                className="w-20 h-20 object-cover rounded-full border border-gray-500"
              />

              <h3 className="text-red-300 text-xl font-semibold ml-4">{p.title}</h3>
            </div>
            <motion.div
              initial={false}
              animate={{
                maxHeight: hovered === i ? 400 : 64,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden text-gray-300 text-sm"
            >
              <p>{p.description}</p>
            </motion.div>
            <p className="mt-3 text-sm text-gray-400">
              <strong>Tech:</strong> {p.technologies.join(', ')}
            </p>
            {p.visit && (
              <a
                href={p.visit}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-300 text-white mt-4 py-2 rounded text-center font-medium hover:bg-red-400 transition-colors"
              >
                Live
              </a>
            )}
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}