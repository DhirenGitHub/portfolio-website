import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './AllProjects.css'

const AllProjects = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allProjects = [
    {
      id: 1,
      title: 'Project Alpha',
      description:
        'A comprehensive web application built with React and Node.js. Features real-time data updates, user authentication, and a modern responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      year: '2024',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Project Beta',
      description:
        'Enterprise-level TypeScript application with robust backend infrastructure. Implements advanced caching strategies and database optimization.',
      technologies: ['TypeScript', 'Express', 'PostgreSQL', 'Redis'],
      year: '2024',
      category: 'Backend Development',
    },
    {
      id: 3,
      title: 'Project Gamma',
      description:
        'Cloud-native application deployed on AWS with automated CI/CD pipeline. Handles high traffic with auto-scaling and load balancing.',
      technologies: ['Vue.js', 'Python', 'AWS', 'Docker'],
      year: '2023',
      category: 'Cloud & DevOps',
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
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back to Home
      </button>

      <div className="all-projects-container">
        <h1 className="page-title">All Projects</h1>
        <p className="page-subtitle">
          A comprehensive collection of my work spanning various technologies and domains
        </p>

        <div className="projects-list">
          {allProjects.map((project) => (
            <div key={project.id} className="project-item">
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
              <button className="view-details-btn">View Details →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProjects
