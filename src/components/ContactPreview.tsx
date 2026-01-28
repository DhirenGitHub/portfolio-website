import { useNavigate } from 'react-router-dom'
import './ContactPreview.css'

const ContactPreview = () => {
  const navigate = useNavigate()

  return (
    <section className="contact-preview">
      <div className="contact-preview-container">
        <div className="contact-preview-content">
          <h2 className="contact-preview-title">Let's Work Together</h2>
          <p className="contact-preview-subtitle">
            Have a project in mind or just want to chat? I'm always open to discussing new
            opportunities and collaborations.
          </p>

          <div className="contact-quick-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">dhiren@example.com</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <span className="contact-label">Location</span>
                <span className="contact-value">Available Worldwide</span>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div className="contact-details">
                <span className="contact-label">Status</span>
                <span className="contact-value">Open to Opportunities</span>
              </div>
            </div>
          </div>

          <button className="view-full-contact-btn" onClick={() => navigate('/contact')}>
            View Full Contact Info & Resume
          </button>
        </div>

        <div className="contact-preview-decoration">
          <div className="decoration-circle circle-1"></div>
          <div className="decoration-circle circle-2"></div>
          <div className="decoration-circle circle-3"></div>
        </div>
      </div>
    </section>
  )
}

export default ContactPreview
