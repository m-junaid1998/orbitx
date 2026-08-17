import { useState, useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../../lib/motion.js'

/**
 * Counts up to a number when it scrolls into view.
 *
 * Takes the display string straight from src/data/site.js — '43+', '4+',
 * '24h' — and animates only the digits, keeping whatever sits around them.
 * Anything without digits is rendered as-is.
 */
export default function Counter({ value, duration = 1500 }) {
  const match = String(value).match(/^(\D*)(\d+)(.*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? parseInt(match[2], 10) : null
  const suffix = match ? match[3] : ''

  const [n, setN] = useState(() => (prefersReducedMotion() || target === null ? target : 0))
  const ref = useRef(null)

  useEffect(() => {
    if (target === null || prefersReducedMotion()) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1)
          // ease-out cubic, so it decelerates into the final number
          setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  if (target === null) return <span>{value}</span>

  return <span ref={ref}>{prefix}{n}{suffix}</span>
}
