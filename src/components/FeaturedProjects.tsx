import { useNavigate } from 'react-router-dom'
import './FeaturedProjects.css'
import roadLkImage from '../assets/projects/road-lk/landing-page.png'
import aegisWafImage from '../assets/projects/aegis-waf/main-img.png'
import fourierSketchImage from '../assets/projects/fourier-sketch/epicycles.png'

const FeaturedProjects = () => {
  const navigate = useNavigate()

  const featuredProjects = [
    {
      id: 1,
      title: 'Sri Lanka Road Network Status',
      description: "A real-time platform for tracking road infrastructure damage across Sri Lanka's national road network, enabling citizens to plan travel routes.",
      image: roadLkImage,
      color: '#1e3a5f',
      technologies: ['React', 'TypeScript', 'Cloudflare Workers', 'Leaflet'],
    },
    {
      id: 7,
      title: 'Aegis AI WAF',
      description: "An advanced AI-powered Web Application Firewall that protects LLMs from prompt injection, jailbreaking, and adversarial attacks using multi-layered AI reasoning.",
      image: aegisWafImage,
      color: '#1a2f4a',
      technologies: ['Python', 'CAMEL-AI', 'NeMo Guardrails', 'FastAPI'],
    },
    {
      id: 3,
      title: 'Fourier Sketch',
      description: "Draw curves with your mouse and instantly get their parametric equations using Fourier transforms.",
      image: fourierSketchImage,
      color: '#3d5a7f',
      technologies: ['Python', 'Pygame', 'DFT'],
    },
  ]

  return (
    <section className="featured-projects">
      <div className="featured-projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing my best work across different technologies and domains
        </p>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ '--card-color': project.color } as React.CSSProperties & { '--card-color': string }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="project-number">{index + 1}</div>
              <div className="project-image-container" style={{ backgroundColor: project.color }}>
                {typeof project.image === 'string' && (project.image.startsWith('http') || project.image.includes('.png') || project.image.includes('.jpg')) ? (
                  <img src={project.image} alt={project.title} className="project-card-image" />
                ) : (
                  <div className="project-image-placeholder">
                    <span className="project-icon">📄</span>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="see-all-btn" onClick={() => navigate('/projects')}>
          See All Projects
        </button>
      </div>
    </section>
  )
}

export default FeaturedProjects
