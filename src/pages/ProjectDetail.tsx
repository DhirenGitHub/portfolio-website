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
      year: '2024',
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
      year: '2024',
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
      title: 'Project Delta',
      description: 'Mobile-first progressive web app with offline capabilities.',
      fullDescription:
        'Project Delta is a progressive web application that provides a native app-like experience on mobile devices. It implements service workers for offline functionality, uses IndexedDB for local data storage, and features push notifications. The app is installable on mobile devices and works seamlessly even without an internet connection, syncing data when connectivity is restored.',
      technologies: ['React', 'PWA', 'IndexedDB', 'Service Workers'],
      year: '2023',
      category: 'Mobile Development',
      githubUrl: 'https://github.com/yourusername/project-delta',
      liveUrl: 'https://project-delta-demo.com',
      images: ['📱', '🔄', '💾'],
      features: [
        'Offline-first architecture with service workers',
        'IndexedDB for local data persistence',
        'Push notifications for user engagement',
        'Installable on mobile home screens',
        'Background sync for data updates',
        'Lighthouse score of 95+ for PWA metrics',
      ],
    },
    {
      id: 5,
      title: 'Project Epsilon',
      description: 'Machine learning powered analytics dashboard.',
      fullDescription:
        'Project Epsilon combines machine learning with web development to create an intelligent analytics dashboard. Using Python and TensorFlow for the ML models and React for the frontend, it provides real-time insights and predictive analytics. The system processes large datasets, generates visualizations, and offers actionable business intelligence through an intuitive interface.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      year: '2023',
      category: 'AI & Machine Learning',
      githubUrl: 'https://github.com/yourusername/project-epsilon',
      images: ['🤖', '📊', '🧠'],
      features: [
        'TensorFlow-based predictive models',
        'Real-time data processing and visualization',
        'Interactive charts with D3.js',
        'REST API for model predictions',
        'Automated model training pipeline',
        'Business intelligence dashboards',
      ],
    },
    {
      id: 6,
      title: 'Project Zeta',
      description: 'E-commerce platform with secure payment integration.',
      fullDescription:
        'Project Zeta is a full-featured e-commerce platform built with Next.js and integrated with Stripe for secure payment processing. It includes a complete shopping experience with product catalog, cart management, order tracking, and customer analytics. The admin panel provides inventory management, sales reports, and customer insights. The platform is built for performance with Next.js server-side rendering and optimized for SEO.',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind CSS'],
      year: '2023',
      category: 'E-commerce',
      githubUrl: 'https://github.com/yourusername/project-zeta',
      liveUrl: 'https://project-zeta-demo.com',
      images: ['🛒', '💳', '📦'],
      features: [
        'Stripe integration for secure payments',
        'Product catalog with search and filters',
        'Shopping cart and checkout flow',
        'Order tracking and history',
        'Admin dashboard for inventory management',
        'Customer analytics and reporting',
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
              View Live Demo
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
