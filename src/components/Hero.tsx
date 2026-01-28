import './Hero.css'

const Hero = () => {
  const skills = [
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'Python', icon: '🐍', color: '#3776ab' },
    { name: 'JavaScript', icon: '💛', color: '#f7df1e' },
    { name: 'AI', icon: '🤖', color: '#ff6b6b' },
    { name: 'Git', icon: '📦', color: '#f05032' },
    { name: 'API', icon: '🔌', color: '#00d8ff' },
    { name: 'scikit-learn', icon: '🔬', color: '#f89939' },
    { name: 'RAG', icon: '🧠', color: '#9b59b6' },
    { name: 'SQL', icon: '🗄️', color: '#4479a1' },
    { name: 'Node.js', icon: '🟢', color: '#68a063' },
    { name: 'Azure', icon: '☁️', color: '#0078d4' },
    { name: 'TypeScript', icon: '📘', color: '#3178c6' },
    { name: 'C', icon: '©️', color: '#a8b9cc' },
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
