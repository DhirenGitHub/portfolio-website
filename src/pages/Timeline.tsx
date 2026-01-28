import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Timeline.css'

const Timeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const timelineEvents = [
    {
      id: 1,
      year: '2024',
      title: 'Started Full-Stack Development',
      description:
        'Began my journey into full-stack web development, learning React, Node.js, and modern web technologies. Built multiple projects showcasing end-to-end application development.',
      hasImage: true,
      image: '🚀',
      date: 'January 2024',
    },
    {
      id: 2,
      year: '2023',
      title: 'Completed CS50x',
      description:
        "Finished Harvard's CS50x course, gaining foundational knowledge in computer science, algorithms, and data structures. Implemented projects in C, Python, and JavaScript.",
      hasImage: false,
      date: 'December 2023',
    },
    {
      id: 3,
      year: '2023',
      title: 'First Open Source Contribution',
      description:
        'Made my first contribution to an open-source project on GitHub. Learned about collaborative development, version control best practices, and code review processes.',
      hasImage: true,
      image: '🌟',
      date: 'September 2023',
    },
    {
      id: 4,
      year: '2023',
      title: 'Built First Web Application',
      description:
        'Created my first full-stack web application using React and Express. Implemented user authentication, database integration, and RESTful API design.',
      hasImage: false,
      date: 'June 2023',
    },
    {
      id: 5,
      year: '2022',
      title: 'Started Learning Programming',
      description:
        'Began learning programming fundamentals with Python. Discovered passion for problem-solving and building software solutions.',
      hasImage: true,
      image: '💻',
      date: 'March 2022',
    },
  ]

  return (
    <div className="timeline-page">
      <Navbar />
      <div className="timeline-container">
        <div className="timeline-header">
          <h1 className="timeline-title">My Journey</h1>
          <p className="timeline-subtitle">
            A chronological overview of my development journey, achievements, and milestones
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
                event.hasImage ? 'with-image' : 'no-image'
              }`}
            >
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <span className="marker-year">{event.year}</span>
              </div>

              <div className="timeline-content">
                {event.hasImage && (
                  <div className="timeline-image">
                    <span className="timeline-emoji">{event.image}</span>
                  </div>
                )}
                <div className="timeline-text">
                  <span className="timeline-date">{event.date}</span>
                  <h3 className="timeline-event-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Timeline
