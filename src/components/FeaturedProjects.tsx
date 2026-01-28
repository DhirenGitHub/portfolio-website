import { useNavigate } from 'react-router-dom'
import './FeaturedProjects.css'

const FeaturedProjects = () => {
  const navigate = useNavigate()

  const featuredProjects = [
    {
      id: 1,
      title: 'Project Alpha',
      description: "It's a long established fact that a reader will be distracted by the readable content of a page.",
      image: '1',
      color: '#E89BA7',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Project Beta',
      description: "It's a long established fact that a reader will be distracted by the readable content of a page.",
      image: '2',
      color: '#F4A261',
      technologies: ['TypeScript', 'Express', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: "It's a long established fact that a reader will be distracted by the readable content of a page.",
      image: '3',
      color: '#4A90E2',
      technologies: ['Vue.js', 'Python', 'AWS'],
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
                <div className="project-image-placeholder">
                  <span className="project-icon">📄</span>
                </div>
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
