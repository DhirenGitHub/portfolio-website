import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const handleNavigate = (path: string) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <button className="nav-logo" onClick={() => handleNavigate('/')}>
          <span className="logo-text">DP</span>
        </button>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <button
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => handleNavigate('/')}
          >
            Home
          </button>
          <button
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
            onClick={() => handleNavigate('/projects')}
          >
            Projects
          </button>
          <button
            className={`nav-link ${isActive('/timeline') ? 'active' : ''}`}
            onClick={() => handleNavigate('/timeline')}
          >
            Timeline
          </button>
          <button
            className="nav-link nav-cta-mobile"
            onClick={() => handleNavigate('/contact')}
          >
            Contact
          </button>
        </div>

        <button className="nav-cta" onClick={() => handleNavigate('/contact')}>
          Contact
        </button>
      </div>
    </nav>
  )
}

export default Navbar
