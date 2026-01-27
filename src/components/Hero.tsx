import './Hero.css'

const Hero = () => {
  const skills = [
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'TypeScript', icon: '📘', color: '#3178c6' },
    { name: 'Node.js', icon: '🟢', color: '#68a063' },
    { name: 'Python', icon: '🐍', color: '#3776ab' },
    { name: 'Docker', icon: '🐳', color: '#2496ed' },
    { name: 'AWS', icon: '☁️', color: '#ff9900' },
    { name: 'MongoDB', icon: '🍃', color: '#47a248' },
    { name: 'GraphQL', icon: '◈', color: '#e10098' },
    { name: 'Git', icon: '📦', color: '#f05032' },
    { name: 'API', icon: '🔌', color: '#00d8ff' },
    { name: 'SQL', icon: '🗄️', color: '#4479a1' },
    { name: 'Linux', icon: '🐧', color: '#fcc624' },
  ]

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="name-highlight">Dhiren Purasinghe</span>
            <div className="title-separator"></div>
            <span className="subtitle-text">Aspiring Programmer</span>
          </h1>
          <p className="hero-subtitle">
            Multiskilled programmer who can tackle any task.
            <br />
            From frontend to backend, from databases to deployment.
          </p>
          <div className="hero-cta">
            <button className="cta-primary">View My Work</button>
            <button className="cta-secondary">Get In Touch</button>
          </div>
        </div>
      </div>

      <div className="floating-skills">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-badge"
            style={{
              animationDelay: `${index * 0.2}s`,
              '--skill-color': skill.color,
            } as React.CSSProperties & { '--skill-color': string }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  )
}

export default Hero
