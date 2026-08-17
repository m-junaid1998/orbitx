import { site } from '../data/site.js'
import Reveal from './ui/Reveal.jsx'
import Counter from './ui/Counter.jsx'
import Button from './ui/Button.jsx'
import OrbitMark from './OrbitMark.jsx'

export default function Hero() {
  return (
    <div id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 px-6">
      {/* faint grid, fading out towards the edges */}
      <div className="absolute inset-0 grid-faint [mask-image:radial-gradient(ellipse_at_50%_10%,#000_10%,transparent_65%)]" />
      {/* soft blue wash at the top */}
      {/* aurora — two slow, blurred washes of colour */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[880px] h-[420px] rounded-full bg-tint blur-[120px] animate-aurora" />
      <div
        className="pointer-events-none absolute top-24 -left-32 w-[520px] h-[520px] rounded-full bg-sky/20 blur-[130px] animate-aurora"
        style={{ animationDelay: '-8s', animationDuration: '28s' }}
      />

      <div className="relative max-w-shell mx-auto grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-4 py-1.5 mb-8 shadow-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="eyebrow text-slate">We build · We market · You scale</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.3rem)] leading-[1.03] font-bold text-ink">
              Scaling business
              <br />
              through <span className="bg-gradient-to-r from-primary via-sky to-primary bg-[length:220%_auto] bg-clip-text text-transparent animate-flow">technology</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg md:text-xl text-slate leading-relaxed max-w-lg">
              We don't just build websites and apps — we solve the problem behind them, then
              market and manage what we build. One agency for the whole journey, with one
              goal: taking your business to its full potential.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#contact">Start a project</Button>
              <Button href="#work" variant="ghost">See our work</Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 pt-8 border-t border-line flex flex-wrap gap-x-12 gap-y-6">
              {site.highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-3xl font-bold text-ink">
                    <Counter value={item.value} />
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hidden lg:block">
          <OrbitMark />
        </Reveal>
      </div>
    </div>
  )
}
