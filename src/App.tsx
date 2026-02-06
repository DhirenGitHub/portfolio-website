import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import Timeline from './pages/Timeline'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
