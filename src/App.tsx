
import CircuitBackground from './components/CircuitBackground'
import SkillsOrbit from './components/SkillsOrbit'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <CircuitBackground />

        <header className="navbar">
          <h2>GURAM.DEV</h2>

          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-layout">
          <section className="hero-content">
            <p className="subtitle">
              FRONT-END DEVELOPER
            </p>

            <h1>
              Hi, I'm Guram.
              <span>I build digital experiences.</span>
            </h1>

            <p className="description">
              I create modern, responsive and interactive
              websites using React, TypeScript and JavaScript.
            </p>

            <a className="primary-button" href="#projects">
              View My Projects
            </a>
          </section>

          <SkillsOrbit />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-heading">
            <p className="subtitle">GET TO KNOW ME</p>
            <h2>
              About <span>Me.</span>
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-text">
              <h3>
                Passionate about building
                <span> digital experiences.</span>
              </h3>

              <p>
                I'm Guram, a Front-End Developer
                based in Tbilisi, Georgia.
              </p>

              <p>
                I completed a Software Development Diploma
                at Pitman Training Centre in Ireland,
                where I developed my programming skills
                and worked on practical projects.
              </p>

              <p>
                I enjoy building responsive, interactive
                and user-friendly web applications using
                modern technologies.
              </p>

              <p>
                I'm continuously improving my skills
                and looking for opportunities to grow
                as a developer.
              </p>
            </div>

            <div className="about-info">
              <div className="info-card">
                <span>01</span>
                <h4>Education</h4>
                <p>Software Development Diploma</p>
                <small>Pitman Training Centre, Ireland</small>
              </div>

              <div className="info-card">
                <span>02</span>
                <h4>Specialisation</h4>
                <p>Front-End Development</p>
                <small>React • TypeScript • JavaScript</small>
              </div>

              <div className="info-card">
                <span>03</span>
                <h4>Location</h4>
                <p>Tbilisi, Georgia</p>
                <small>Open to opportunities</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <Projects />
    </main>
  )
}

export default App
