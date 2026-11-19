
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import type { CSSProperties } from 'react'
import './SkillsOrbit.css'

const planets = [
  {
    name: 'HTML',
    icon: <FaHtml5 color="#E34F26" />,
    radius: 62,
    duration: 12,
    start: -30,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt color="#1572B6" />,
    radius: 100,
    duration: 17,
    start: 120,
  },
  {
    name: 'JavaScript',
    icon: <FaJs color="#F7DF1E" />,
    radius: 138,
    duration: 23,
    start: 220,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript color="#3178C6" />,
    radius: 176,
    duration: 29,
    start: 45,
  },
  {
    name: 'React',
    icon: <FaReact color="#61DAFB" />,
    radius: 214,
    duration: 35,
    start: 160,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs color="#68A063" />,
    radius: 252,
    duration: 42,
    start: 270,
  },
  {
    name: 'Python',
    icon: <FaPython color="#FFD43B" />,
    radius: 290,
    duration: 50,
    start: 75,
  },
]

function SkillsOrbit() {
  return (
    <div
      className="solar-system"
      aria-label="My technical skills solar system"
    >
      <div className="solar-sun">
        <span>G</span>
      </div>

      {planets.map((planet) => {
        const delay =
          (-planet.start / 360) * planet.duration

        const styles = {
          '--orbit-size': `${planet.radius * 2}px`,
          '--duration': `${planet.duration}s`,
          '--delay': `${delay}s`,
        } as CSSProperties

        return (
          <div
            key={planet.name}
            className="planet-orbit"
            style={styles}
          >
            <div className="planet-revolution">
              <div className="planet-position">
                <div
                  className="planet"
                  title={planet.name}
                >
                  <span className="planet-icon">
                    {planet.icon}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SkillsOrbit
