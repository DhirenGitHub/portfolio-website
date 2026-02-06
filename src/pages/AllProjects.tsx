import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AllProjects.css'
import roadLkImage from '../assets/projects/road-lk/landing-page.png'
import wikiRacerImage from '../assets/projects/wiki-racer/vizualizer.png'
import fourierSketchImage from '../assets/projects/fourier-sketch/epicycles.png'

const AllProjects = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allProjects = [
    {
      id: 1,
      title: 'Sri Lanka Road Network Status',
      description:
        "A real-time platform for tracking road infrastructure damage across Sri Lanka's national road network. Displays road closures, damage reports, and traffic disruptions caused by natural disasters.",
      technologies: ['React 19', 'TypeScript', 'Cloudflare Workers', 'Leaflet', 'Tailwind CSS'],
      year: '2024',
      category: 'Full-Stack Development',
      image: roadLkImage,
    },
    {
      id: 2,
      title: 'WikiRacer',
      description:
        'A semantic Wikipedia navigator that finds paths between any two Wikipedia articles using AI-powered embeddings and vector similarity search.',
      technologies: ['Python', 'ChromaDB', 'Sentence Transformers', 'BeautifulSoup', 'WebSockets'],
      year: '2024',
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
      title: 'Project Delta',
      description:
        'Mobile-first progressive web app with offline capabilities. Implements service workers and advanced caching for optimal performance.',
      technologies: ['React', 'PWA', 'IndexedDB', 'Service Workers'],
      year: '2023',
      category: 'Mobile Development',
    },
    {
      id: 5,
      title: 'Project Epsilon',
      description:
        'Machine learning powered analytics dashboard. Provides real-time insights and predictive analytics for business intelligence.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      year: '2023',
      category: 'AI & Machine Learning',
    },
    {
      id: 6,
      title: 'Project Zeta',
      description:
        'E-commerce platform with secure payment integration. Features inventory management, order tracking, and customer analytics.',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      year: '2023',
      category: 'E-commerce',
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
