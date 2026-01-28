import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="nav-logo" onClick={() => navigate('/')}>
          <span className="logo-text">DP</span>
        </button>

        <div className="nav-links">
          <button
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={() => navigate('/projects')}
          >
            Projects
          </button>
          <button
            className={`nav-link ${isActive('/timeline') ? 'active' : ''}`}
            onClick={() => navigate('/timeline')}
          >
            Timeline
          </button>
        </div>

        <button className="nav-cta" onClick={() => navigate('/contact')}>
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Navbar
