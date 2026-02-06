import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Timeline.css'
import scratchOnlineImage from '../assets/timeline/2016-scratch-online.png'
import googleCertificate from '../assets/timeline/2021 SEPT - Google certification.jpeg'
import foundationForGoodness from '../assets/timeline/2023 Jan - Foundation for Goodness.jpeg'
import volunteerDambulla from '../assets/timeline/2022 volunteer working.png'
import roadLK from '../assets/timeline/2025 roadlk.png'


const Timeline = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const timelineEvents = [
    {
      id: 1,
      year: '2014',
      title: 'First Steps into Programming',
      description:
        "My father introduced me to a programming language by MIT's Scratch. I learned fundamental concepts like loops, conditionals, and event-driven programming through building interactive games and animations.",
      hasImage: false,
      date: '2014',
    },
    {
      id: 2,
      year: '2016',
      title: 'First Public Projects on Scratch',
      description:
        'Started sharing my Scratch creations with the online community. Published interactive games and animations, receiving feedback from users worldwide and learning the value of building software for others.',
      hasImage: true,
      image: scratchOnlineImage,
      date: '2016',
    },
    {
      id: 3,
      year: '2017',
      title: 'Started High Level Programming - Python',
      description:
        'Started learning Python, a high-level programming language. Explored concepts like data structures, object-oriented programming, and built small projects to solidify my understanding.',
      hasImage: false,
      date: '2017',
    },
    {
      id: 4,
      year: '2021',
      title: 'MiHCM Internship - Data Analyst',
      description:
        'Completed a data analyst internship at MiHCM.',
      hasImage: false,
      date: '2021 July - September',
    },
    {
      id: 5,
      year: '2021',
      title: 'Google Data Analytics Certificate',
      description:
        'Completed the Google Data Analytics Professional Certificate, gaining skills in data analysis, visualization, and more.',
      hasImage: true,
      image: googleCertificate,
      date: '2021 September',
    },
    {
      id: 6,
      year: '2022',
      title: 'Volunteer work - School in Lenodara, Dambulla',
      description:
        'Volunteered at ඇතා බැදි වැව කනිශ්ට විදුහල in Lenodara, Dambulla, teaching basic computer skills and programming concepts to students.',
      hasImage: true,
      image: volunteerDambulla,
      date: '2022 June',
    },
    {
      id: 7,
      year: '2023',
      title: 'Volunteer work - Foundation for Goodness',
      description:
        'Volunteered with the Foundation for Goodness, did a class for children on scratch programming.',
      hasImage: true,
      image: foundationForGoodness,
      date: '2023 January',
    },
    {
      id: 8,
      year: '2023',
      title: 'Futura Labs Internship - Frontend Developer',
      description:
        'Completed an internship at Futura Labs, working on frontend development projects.',
      date: '2023 July - September',
    },
    {
      id: 9,
      year: '2025',
      title: 'RoadLK Project',
      description:
        'Worked on the RoadLK project, a web application for road maintenance and management. A real-time platform for tracking road infrastructure damage across Sri Lanka\'s national road network. This platform displays road closures, damage reports, and traffic disruptions caused by natural disasters, enabling citizens to plan travel routes and authorities to coordinate repair efforts.',
      hasImage: true,
      image: roadLK,
      date: '2025 November - December',
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
                {event.hasImage && event.image && (
                  <div className="timeline-image">
                    {typeof event.image === 'string' && event.image.length <= 2 ? (
                      <span className="timeline-emoji">{event.image}</span>
                    ) : (
                      <img src={event.image as string} alt={event.title} className="timeline-img" />
                    )}
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
