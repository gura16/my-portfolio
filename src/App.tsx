import CircuitBackground from './components/CircuitBackground'
import './App.css'

function App() {
  return (
    <main className="hero">
      <CircuitBackground />
      <header className="navbar">
        <h2>GURAM.DEV</h2>

        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-content">
        <p className="subtitle">FRONT-END DEVELOPER</p>

        <h1>
          Hi, I'm Guram.
          <span>I build digital experiences.</span>
        </h1>

        <p className="description">
          I create modern, responsive and interactive websites
          using React, TypeScript and JavaScript.
        </p>

        <a className="primary-button" href="#projects">
          View My Projects
        </a>
      </section>
    </main>
  )
}

export default App
