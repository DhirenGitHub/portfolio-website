import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Project data - should match the projects in FeaturedProjects and AllProjects
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A comprehensive web application built with React and Node.js.',
      fullDescription:
        'Project Alpha is a full-stack web application that demonstrates modern web development practices. Built with React for the frontend and Node.js for the backend, it features real-time data synchronization using Socket.io, secure user authentication with JWT tokens, and a fully responsive design that works seamlessly across all devices. The application implements best practices for security, performance, and scalability.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      year: '2024',
      category: 'Web Development',
      githubUrl: 'https://github.com/yourusername/project-alpha',
      liveUrl: 'https://project-alpha-demo.com',
      images: ['🎨', '💻', '🚀'],
      features: [
        'Real-time data updates with WebSocket integration',
        'JWT-based authentication and authorization',
        'Responsive design optimized for mobile and desktop',
        'RESTful API with comprehensive documentation',
        'MongoDB database with optimized queries',
        'Automated testing with Jest and React Testing Library',
      ],
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'Enterprise-level TypeScript application with robust backend infrastructure.',
      fullDescription:
        'Project Beta showcases enterprise-grade application architecture with TypeScript throughout the entire stack. The backend implements advanced caching strategies using Redis, database query optimization with PostgreSQL, and follows clean architecture principles. This project demonstrates professional development practices including comprehensive testing, CI/CD pipelines, and production-ready deployment strategies.',
      technologies: ['TypeScript', 'Express', 'PostgreSQL', 'Redis'],
      year: '2024',
      category: 'Backend Development',
      githubUrl: 'https://github.com/yourusername/project-beta',
      liveUrl: 'https://project-beta-demo.com',
      images: ['⚙️', '🗄️', '⚡'],
      features: [
        'Type-safe backend with TypeScript',
        'Redis caching for improved performance',
        'PostgreSQL with advanced query optimization',
        'RESTful API following OpenAPI specification',
        'Comprehensive error handling and logging',
        'Docker containerization for easy deployment',
      ],
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'Cloud-native application deployed on AWS.',
      fullDescription:
        'Project Gamma is a cloud-native application built from the ground up to leverage AWS services. It features automated CI/CD pipelines, auto-scaling capabilities, and load balancing to handle high traffic efficiently. The infrastructure is defined as code using AWS CloudFormation, making it reproducible and version-controlled. This project demonstrates expertise in cloud architecture, DevOps practices, and scalable system design.',
      technologies: ['Vue.js', 'Python', 'AWS', 'Docker'],
      year: '2023',
      category: 'Cloud & DevOps',
      githubUrl: 'https://github.com/yourusername/project-gamma',
      liveUrl: 'https://project-gamma-demo.com',
      images: ['☁️', '🐋', '🔧'],
      features: [
        'Deployed on AWS with EC2, S3, and RDS',
        'Automated CI/CD pipeline with GitHub Actions',
        'Docker containerization for consistent environments',
        'Auto-scaling based on traffic patterns',
        'CloudWatch monitoring and alerting',
        'Infrastructure as Code with CloudFormation',
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
            <div key={index} className="project-image-card">
              <span className="project-image-emoji">{image}</span>
            </div>
          ))}
        </div>

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
