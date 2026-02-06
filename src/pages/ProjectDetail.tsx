import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ProjectDetail.css'

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  year: string
  category: string
  githubUrl: string
  liveUrl?: string
  images: string[]
  features: string[]
}

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Project data - should match the projects in FeaturedProjects and AllProjects
  const projects: Project[] = [
    {
      id: 1,
      title: 'Sri Lanka Road Network Status',
      description: "A real-time platform for tracking road infrastructure damage across Sri Lanka's national road network.",
      fullDescription:
        "Sri Lanka Road Network Status is a real-time public information system for tracking road infrastructure damage across Sri Lanka's national road network. The platform displays road closures, damage reports, and traffic disruptions caused by natural disasters such as flooding, landslides, washouts, collapses, and blockages. It enables citizens to plan travel routes effectively and helps authorities coordinate repair efforts. The platform covers all 9 provinces with national (A/B roads) and provincial road data, with damage classification and severity levels from low to critical. Road damage data is provided by the Ministry of Transport, Highways and Urban Development through the Road Development Authority (RDA).",
      technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Leaflet', 'Hono', 'Cloudflare Workers', 'Cloudflare D1', 'Drizzle ORM'],
      year: '2025',
      category: 'Full-Stack Development',
      githubUrl: 'https://github.com/open-build-lk/rda-status',
      liveUrl: 'https://road-lk.org/',
      images: [
        new URL('../assets/projects/road-lk/landing-page.png', import.meta.url).href,
        new URL('../assets/projects/road-lk/citizens-report.png', import.meta.url).href,
        new URL('../assets/projects/road-lk/unverified-reports.png', import.meta.url).href,
      ],
      features: [
        'Real-time damage visualization with interactive map showing blocked and damaged road segments',
        'Damage classification by type: flooding, landslides, washouts, collapses, and blockages',
        'Severity level indicators from low to critical for informed decision-making',
        'Complete coverage of all 9 provinces with national (A/B roads) and provincial road data',
        'Integration with official Road Development Authority (RDA) data sources',
        'Edge deployment on Cloudflare Workers for ultra-fast global access',
        'Responsive design optimized for mobile and desktop viewing',
        'Free and unlimited map usage with Leaflet and OpenStreetMap',
      ],
    },
    {
      id: 2,
      title: 'WikiRacer',
      description: 'A semantic Wikipedia navigator that finds paths between any two Wikipedia articles using AI-powered embeddings.',
      fullDescription:
        'WikiRacer automatically navigates from one Wikipedia page to another by analyzing links and using semantic similarity to choose the best path. It uses sentence transformer embeddings to understand the meaning of link text and find connections that are semantically related to the target page. For example, navigating from "Potato" to "Goat" might follow a path like: Potato → Chicken → Rice → Dairy → Goat. The algorithm scrapes all Wikipedia article links from the current page, creates semantic embeddings using all-MiniLM-L6-v2, finds the link most semantically similar to the target page name, and navigates to that page repeating until the target is found.',
      technologies: ['Python', 'ChromaDB', 'Sentence Transformers', 'BeautifulSoup', 'WebSockets', 'Requests'],
      year: '2025',
      category: 'AI & Machine Learning',
      githubUrl: 'https://github.com/DhirenGitHub/wikiracer',
      images: [
        new URL('../assets/projects/wiki-racer/vizualizer.png', import.meta.url).href,
        new URL('../assets/projects/wiki-racer/cmd-view.png', import.meta.url).href,
      ],
      features: [
        'Semantic navigation using AI embeddings (sentence-transformers) to find semantically similar links',
        'Vector database storage with ChromaDB for fast similarity search',
        'Loop prevention by tracking visited pages to avoid infinite loops',
        'Live visualization with optional browser-based demo mode showing real-time navigation with highlighted links',
        'Path logging that tracks and displays the complete path taken',
        'Configurable depth limit to control maximum navigation steps',
      ],
    },
    {
      id: 3,
      title: 'Fourier Sketch',
      description: 'Draw curves with your mouse and instantly get their parametric equations using Fourier transforms.',
      fullDescription:
        'Fourier Sketch is an interactive visualization tool that converts hand-drawn curves into parametric equations using Discrete Fourier Transform (DFT). Draw any curve with your mouse and watch as epicycles (rotating circles) reconstruct your drawing in real-time. The program applies DFT to both x and y coordinates separately, then visualizes the result using epicycles - circles rotating at different frequencies that combine to recreate any periodic function. The parametric equation is automatically generated and copied to your clipboard, demonstrating a fundamental concept in Fourier analysis.',
      technologies: ['Python', 'Pygame', 'DFT', 'Pyperclip'],
      year: '2024',
      category: 'Mathematics & Visualization',
      githubUrl: 'https://github.com/DhirenGitHub/fourier-sketch',
      images: [
        new URL('../assets/projects/fourier-sketch/epicycles.png', import.meta.url).href,
        new URL('../assets/projects/fourier-sketch/equation_generated.png', import.meta.url).href,
      ],
      features: [
        'Interactive drawing interface - click and drag to draw any curve',
        'Real-time epicycle visualization showing rotating circles reconstructing your drawing',
        'Automatic parametric equation generation copied to clipboard',
        'Custom DFT implementation decomposing curves into 51 frequency components',
        'Visual representation of Fourier analysis concepts',
        'Coordinate transformation from screen to mathematical coordinate system',
      ],
    },
    {
      id: 4,
      title: 'Tetris Game',
      description: 'A feature-complete Tetris implementation with ghost piece system, two-player mode, and comprehensive audio.',
      fullDescription:
        'A comprehensive Tetris implementation built as university coursework (COMP2042). Features all 7 standard Tetromino pieces with proper rotation, ghost piece preview system, hard drop and soft drop mechanics, dynamic level progression with speed increases, and a quadratic scoring system rewarding multi-line clears. Includes a complete two-player mode with split-screen gameplay, comprehensive audio system with background music and sound effects, pause functionality, high score persistence, and a polished UI with animated menus. The codebase follows MVC architecture with 149 passing JUnit tests and complete JavaDoc documentation.',
      technologies: ['Java', 'JavaFX', 'Maven', 'JUnit', 'CSS'],
      year: '2025',
      category: 'Game Development',
      githubUrl: 'https://github.com/DhirenGitHub/Tetris',
      images: [
        new URL('../assets/projects/tetris/landing-screen.png', import.meta.url).href,
        new URL('../assets/projects/tetris/single_player.png', import.meta.url).href,
        new URL('../assets/projects/tetris/two_player.png', import.meta.url).href,
      ],
      features: [
        'All 7 standard Tetromino pieces (I, O, T, S, Z, J, L) with proper rotation and collision detection',
        'Ghost piece system showing transparent preview of landing position',
        'Hard drop (instant placement) and soft drop (accelerated descent) mechanics',
        'Two-player split-screen mode with independent controls (WASD and Arrow keys)',
        'Dynamic level progression with speed increases every 10 lines cleared',
        '7-bag random generator ensuring fair piece distribution',
        'Comprehensive audio system with background music and sound effects',
        '149 passing JUnit tests with complete JavaDoc documentation',
      ],
    },
    {
      id: 5,
      title: 'SRTF Multithreaded Scheduler',
      description: 'A Shortest Remaining Time First CPU scheduler using multithreading with cross-platform support.',
      fullDescription:
        'This program implements Shortest Remaining Time First (SRTF) CPU scheduling using a multithreaded approach. Each process is represented by a worker thread that runs one time unit when signaled by a central scheduler. The scheduler maintains the current time, selects the ready process with the minimum remaining time each tick, and logs a timeline and final performance metrics. Features cross-platform threading via compile-time OS detection: Windows uses CreateThread, CRITICAL_SECTION, and CONDITION_VARIABLE, while macOS/Linux uses pthread_create, pthread_mutex_t, and pthread_cond_t.',
      technologies: ['C', 'Pthreads', 'Windows API', 'Multithreading', 'GCC'],
      year: '2025',
      category: 'Systems Programming',
      githubUrl: 'https://github.com/DhirenGitHub/scheduler-algorithm',
      images: [
        new URL('../assets/projects/srtf/MulltiThread.png', import.meta.url).href,
        new URL('../assets/projects/srtf/single-thread.png', import.meta.url).href,
      ],
      features: [
        'Cross-platform threading via compile-time OS detection (Windows and POSIX)',
        'Each process represented as a worker thread running one time unit when signaled',
        'Central scheduler selects ready process with minimum remaining time each tick',
        'Validates inputs (number of processes, arrival/burst times)',
        'Prints aligned timeline of events (Running, Completed, Idle)',
        'Computes per-process Turnaround, Waiting, and Response times',
        'Renders ASCII Gantt chart of execution history',
      ],
    },
    {
      id: 6,
      title: 'MP4 to ASCII',
      description: 'A Python-based ASCII video player that converts any video into ASCII art with synchronized audio.',
      fullDescription:
        'A Python-based ASCII video player inspired by the legendary "Bad Apple!!" music video meme. Convert any video into glorious ASCII art and play it right in your terminal with synchronized audio! The script uses OpenCV to extract frames from video, converts each frame to grayscale, resizes to specified width while maintaining aspect ratio, and maps pixel brightness to ASCII characters. Audio is extracted using ffmpeg and played in a background thread for synchronization. Features smart caching to reuse previously processed videos without re-rendering.',
      technologies: ['Python', 'OpenCV', 'FFmpeg', 'ANSI Escape Codes'],
      year: '2025',
      category: 'Media & Visualization',
      githubUrl: 'https://github.com/DhirenGitHub/mp4-to-ascii',
      images: [
        new URL('../assets/projects/mp4-to-ascii/original.png', import.meta.url).href,
        new URL('../assets/projects/mp4-to-ascii/ascii.png', import.meta.url).href,
      ],
      features: [
        'Video to ASCII conversion using grayscale mapping to ASCII characters',
        'Audio extraction and synchronized playback with video frames',
        'Configurable frame skipping for faster processing and playback',
        'Smart caching to reuse previously processed videos instantly',
        'Customizable ASCII width to fit any terminal size',
        'Real-time playback maintaining proper frame rate for smooth animation',
        'Cross-platform support for Windows, macOS, and Linux',
      ],
    },
  ]

  const project = projects.find((p) => p.id === Number(id))

  if (!project) {
    return (
      <div className="project-detail-page">
        <Navbar />
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate('/projects')} className="back-button">
            ← Back to Projects
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <Navbar />
      <div className="project-detail-container">
        <button onClick={() => navigate('/projects')} className="back-button">
          ← Back to Projects
        </button>

        <div className="project-header-section">
          <div className="project-meta-badges">
            <span className="year-badge">{project.year}</span>
            <span className="category-badge">{project.category}</span>
          </div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-short-description">{project.description}</p>
        </div>

        <div className="project-images-section">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="project-image-card"
              onClick={() => {
                if (image.startsWith('/') || image.startsWith('http') || image.startsWith('blob:')) {
                  setSelectedImage(image)
                }
              }}
              style={{ cursor: (image.startsWith('/') || image.startsWith('http') || image.startsWith('blob:')) ? 'pointer' : 'default' }}
            >
              {image.startsWith('/') || image.startsWith('http') || image.startsWith('blob:') ? (
                <img src={image} alt={`${project.title} screenshot ${index + 1}`} className="project-image" />
              ) : (
                <span className="project-image-emoji">{image}</span>
              )}
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="image-modal" onClick={() => setSelectedImage(null)}>
            <div className="image-modal-content">
              <button className="image-modal-close" onClick={() => setSelectedImage(null)}>×</button>
              <img src={selectedImage} alt="Enlarged view" className="image-modal-img" />
            </div>
          </div>
        )}

        <div className="project-links-section">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github-link"
          >
            <svg
              className="link-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live-link"
            >
              <svg
                className="link-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Live
            </a>
          )}
        </div>

        <div className="project-content-section">
          <div className="content-block">
            <h2 className="section-heading">About This Project</h2>
            <p className="project-full-description">{project.fullDescription}</p>
          </div>

          <div className="content-block">
            <h2 className="section-heading">Key Features</h2>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="content-block">
            <h2 className="section-heading">Technologies Used</h2>
            <div className="tech-grid">
              {project.technologies.map((tech) => (
                <div key={tech} className="tech-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProjectDetail
