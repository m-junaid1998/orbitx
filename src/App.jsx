import ScrollProgress from './components/ScrollProgress.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import ScaleBand from './components/ScaleBand.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

/**
 * Section order. To remove a section, delete its line and its import.
 * To reorder, move the line.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <ScaleBand />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
