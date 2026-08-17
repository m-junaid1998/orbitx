import { prefersReducedMotion } from '../lib/motion.js'

/**
 * The signature element: tilted elliptical paths with satellites tracing
 * them, taken from the ring in the OrbitX mark. Drawn in thin blue lines
 * so it stays light and quiet on the pale background.
 */
const RINGS = [
  { rx: 175, ry: 64,  rot: -20, dur: '28s', width: 1.3, opacity: 0.75, dot: 5,   color: '#1D5FCB' },
  { rx: 130, ry: 106, rot: 30,  dur: '21s', width: 1.1, opacity: 0.45, dot: 4,   color: '#5AA0F0' },
  { rx: 208, ry: 128, rot: 66,  dur: '36s', width: 1,   opacity: 0.28, dot: 3.5, color: '#8497AE' }
]

export default function OrbitMark() {
  const still = prefersReducedMotion()

  return (
    <div className="relative w-full aspect-square max-w-[460px] mx-auto animate-drift">
      {/* soft blue halo behind the core */}
      <div className="absolute inset-[24%] rounded-full bg-primary/10 blur-[60px]" />

      <svg viewBox="-250 -250 500 500" className="relative w-full h-full overflow-visible">
        <defs>
          <radialGradient id="ox-core" cx="34%" cy="28%">
            <stop offset="0%" stopColor="#8FC2FF" />
            <stop offset="55%" stopColor="#1D5FCB" />
            <stop offset="100%" stopColor="#12408C" />
          </radialGradient>
        </defs>

        {RINGS.map((ring, i) => (
          <g key={i} opacity={ring.opacity}>
            <ellipse
              id={`ox-path-${i}`}
              cx="0" cy="0" rx={ring.rx} ry={ring.ry}
              transform={`rotate(${ring.rot})`}
              fill="none" stroke={ring.color} strokeWidth={ring.width}
            />
            {still ? (
              <circle
                r={ring.dot}
                fill={ring.color}
                cx={ring.rx * Math.cos((ring.rot * Math.PI) / 180)}
                cy={ring.rx * Math.sin((ring.rot * Math.PI) / 180)}
              />
            ) : (
              <circle r={ring.dot} fill={ring.color}>
                <animateMotion dur={ring.dur} repeatCount="indefinite" rotate="auto">
                  <mpath href={`#ox-path-${i}`} />
                </animateMotion>
              </circle>
            )}
          </g>
        ))}

        <circle cx="0" cy="0" r="52" fill="url(#ox-core)" />
      </svg>
    </div>
  )
}
