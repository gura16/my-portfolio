
import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'Entertainment Web App',
    category: 'WEB APPLICATION',
    description:
      'A responsive entertainment platform featuring movie and TV show discovery, search functionality, and personal bookmarks.',
    technologies: ['React', 'JavaScript', 'CSS'],
    image: '/projects/entertainment.png',
    github: '',
    demo: '',
  },
  {
    id: '02',
    title: 'GitHub User Search',
    category: 'API INTEGRATION',
    description:
      'A GitHub profile finder that retrieves user information through an API, with error handling and dark/light themes.',
    technologies: ['React', 'TypeScript', 'Axios'],
    image: '/projects/github-search.png',
    github: '',
    demo: '',
  },
  {
    id: '03',
    title: 'Pomodoro Timer',
    category: 'PRODUCTIVITY APP',
    description:
      'A customisable productivity timer featuring work and break sessions, colour themes, and font preferences.',
    technologies: ['React', 'TypeScript', 'CSS'],
    image: '/projects/pomodoro.png',
    github: '',
    demo: '',
  },
]

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <p className="subtitle">MY WORK</p>

          <h2>
            Featured <span>Projects.</span>
          </h2>

          <p className="projects-intro">
            A selection of applications I've built while
            developing my front-end skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                />
              </div>

              <div className="project-details">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.id}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-button"
                    >
                      Source Code
                    </a>
                  ) : (
                    <span className="github-button disabled-link">
                      Source Code
                    </span>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-button"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="demo-button disabled-link">
                      Live Demo ↗
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
