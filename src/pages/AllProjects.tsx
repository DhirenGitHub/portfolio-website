import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AllProjects.css'
import roadLkImage from '../assets/projects/road-lk/landing-page.png'
import wikiRacerImage from '../assets/projects/wiki-racer/vizualizer.png'
import fourierSketchImage from '../assets/projects/fourier-sketch/epicycles.png'
import tetrisImage from '../assets/projects/tetris/single_player.png'
import srtfImage from '../assets/projects/srtf/MulltiThread.png'
import asciiImage from '../assets/projects/mp4-to-ascii/ascii.png'
import aegisWafImage from '../assets/projects/aegis-waf/main-img.png'

const AllProjects = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allProjects = [
    {
      id: 7,
      title: 'Aegis AI WAF',
      description:
        'An advanced AI-powered Web Application Firewall designed to protect LLMs from prompt injection, jailbreaking, and adversarial attacks. Uses a multi-layered, tiered AI reasoning architecture to classify and neutralize threats.',
      technologies: ['Python', 'CAMEL-AI', 'NeMo Guardrails', 'FastAPI', 'Streamlit', 'Redis'],
      year: '2025',
      category: 'AI & Cybersecurity',
      image: aegisWafImage,
    },
    {
      id: 1,
      title: 'Sri Lanka Road Network Status',
      description:
        "A real-time platform for tracking road infrastructure damage across Sri Lanka's national road network. Displays road closures, damage reports, and traffic disruptions caused by natural disasters.",
      technologies: ['React 19', 'TypeScript', 'Cloudflare Workers', 'Leaflet', 'Tailwind CSS'],
      year: '2025',
      category: 'Full-Stack Development',
      image: roadLkImage,
    },
    {
      id: 2,
      title: 'WikiRacer',
      description:
        'A semantic Wikipedia navigator that finds paths between any two Wikipedia articles using AI-powered embeddings and vector similarity search.',
      technologies: ['Python', 'ChromaDB', 'Sentence Transformers', 'BeautifulSoup', 'WebSockets'],
      year: '2025',
      category: 'AI & Machine Learning',
      image: wikiRacerImage,
    },
    {
      id: 3,
      title: 'Fourier Sketch',
      description:
        'An interactive visualization tool that converts hand-drawn curves into parametric equations using Discrete Fourier Transform. Watch epicycles reconstruct your drawing in real-time.',
      technologies: ['Python', 'Pygame', 'DFT', 'Pyperclip'],
      year: '2024',
      category: 'Mathematics & Visualization',
      image: fourierSketchImage,
    },
    {
      id: 4,
      title: 'Tetris Game',
      description:
        'A feature-complete Tetris implementation with ghost piece system, two-player mode, level progression, and comprehensive audio. Built as university coursework with 149 passing tests.',
      technologies: ['Java', 'JavaFX', 'Maven', 'JUnit'],
      year: '2025',
      category: 'Game Development',
      image: tetrisImage,
    },
    {
      id: 5,
      title: 'SRTF Multithreaded Scheduler',
      description:
        'A Shortest Remaining Time First CPU scheduler using multithreading. Each process runs as a worker thread with cross-platform support for Windows and POSIX systems.',
      technologies: ['C', 'Pthreads', 'Windows API', 'Multithreading'],
      year: '2025',
      category: 'Systems Programming',
      image: srtfImage,
    },
    {
      id: 6,
      title: 'MP4 to ASCII',
      description:
        'A Python-based ASCII video player that converts any video into ASCII art and plays it in your terminal with synchronized audio. Inspired by the legendary Bad Apple meme.',
      technologies: ['Python', 'OpenCV', 'FFmpeg', 'ANSI'],
      year: '2025',
      category: 'Media & Visualization',
      image: asciiImage,
    },
  ]

  return (
    <div className="all-projects-page">
      <Navbar />

      <div className="all-projects-container">
        <h1 className="page-title">All Projects</h1>
        <p className="page-subtitle">
          A comprehensive collection of my work spanning various technologies and domains
        </p>

        <div className="projects-list">
          {allProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-item-content">
                <div className="project-info">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="project-year">{project.year}</span>
                      <span className="project-category">{project.category}</span>
                    </div>
                    <h2 className="project-item-title">{project.title}</h2>
                  </div>
                  <p className="project-item-description">{project.description}</p>
                  <div className="project-item-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="view-details-btn"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    View Details →
                  </button>
                </div>
                {project.image && (
                  <div className="project-item-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AllProjects
