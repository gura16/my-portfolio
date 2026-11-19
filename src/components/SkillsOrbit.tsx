
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import './SkillsOrbit.css'

function SkillsOrbit() {
  return (
    <div className="skills-orbit" aria-label="My technical skills">
      <div className="orbit orbit-outer">
        <div className="orbit-item outer-one">
          <FaReact color="#61DAFB" />
        </div>

        <div className="orbit-item outer-two">
          <FaJs color="#F7DF1E" />
        </div>

        <div className="orbit-item outer-three">
          <SiTypescript color="#3178C6" />
        </div>

        <div className="orbit-item outer-four">
          <FaPython color="#FFD43B" />
        </div>
      </div>

      <div className="orbit orbit-inner">
        <div className="orbit-item inner-one">
          <FaHtml5 color="#E34F26" />
        </div>

        <div className="orbit-item inner-two">
          <FaCss3Alt color="#1572B6" />
        </div>

        <div className="orbit-item inner-three">
          <FaNodeJs color="#68A063" />
        </div>
      </div>

      <div className="orbit-center">
        <span>&lt;/&gt;</span>
      </div>
    </div>
  )
}

export default SkillsOrbit
