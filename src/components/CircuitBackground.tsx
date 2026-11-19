
import './CircuitBackground.css'

const circuits = [
  'M 1000 60 H 800 L 740 120 H 580 L 520 180 H 350',
  'M 1000 170 H 850 L 790 230 H 650 L 580 300 H 400',
  'M 1000 430 H 850 L 780 360 H 620 L 550 290 H 300',
  'M 1000 540 H 820 L 760 480 H 600 L 520 400 H 380',
  'M 0 100 H 160 L 230 170 H 350',
  'M 0 480 H 150 L 220 410 H 350',
  'M 920 0 V 80 L 850 150',
  'M 900 600 V 520 L 820 440',
]

function CircuitBackground() {
  return (
    <div className="circuit-background" aria-hidden="true">
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="circuit-gradient">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>

        {circuits.map((path, index) => (
          <g key={index}>
            <path d={path} className="circuit-line" />
            <path
              d={path}
              className="circuit-pulse"
              style={{
                animationDelay: `${index * -1.2}s`,
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

export default CircuitBackground
