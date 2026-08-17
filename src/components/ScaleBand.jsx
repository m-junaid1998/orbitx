import { site } from '../data/site.js'
import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'

/**
 * "We build. We market. You scale." — the dark panel directly under the hero.
 *
 * This is the loudest thing on the home page by design: it states what OrbitX
 * does and why, before a visitor has scrolled anywhere.
 *
 * Steps come from `scaleSteps` in src/data/site.js. Add or remove one and the
 * grid lays itself out again.
 */
export default function ScaleBand() {
  return (
    <section className="px-6 pt-4 pb-8">
      <div className="max-w-shell mx-auto">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-navy via-[#0F2A52] to-primary px-7 py-10 md:px-12 md:py-14 shadow-lift">
          {/* light sweeping across the panel */}
          <span
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[.07] to-transparent animate-sheen"
            aria-hidden="true"
          />

          {/* orbit ring, echoing the logo */}
          <svg
            className="pointer-events-none absolute -right-28 -top-32 w-[460px] h-[460px] opacity-[.16]"
            viewBox="-140 -140 280 280"
            aria-hidden="true"
          >
            <ellipse cx="0" cy="0" rx="128" ry="49" fill="none" stroke="#fff" strokeWidth="1.4" transform="rotate(-22)" />
            <ellipse cx="0" cy="0" rx="94" ry="94" fill="none" stroke="#fff" strokeWidth="1" />
          </svg>

          <div className="relative">
            <div className="max-w-2xl">
              <p className="eyebrow text-white/60 mb-4">How we scale you</p>
              <Reveal>
                <h2 className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.15] font-bold text-white">
                  We don't just build. We solve, market, and manage.
                </h2>
              </Reveal>
              <Reveal delay={70}>
                <p className="mt-4 text-white/75 leading-relaxed">
                  Most agencies hand over a website and disappear. We stay for the part that
                  actually grows a business.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {site.scaleSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 90}>
                  <div className="relative h-full rounded-xl2 border border-white/15 bg-white/[.07] p-6 backdrop-blur-sm transition-colors duration-500 hover:bg-white/[.12]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/15 text-white grid place-items-center">
                        <Icon name={step.icon} className="w-[18px] h-[18px]" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                    </div>

                    <p className="mt-4 text-[15px] text-white/75 leading-relaxed">{step.text}</p>

                    {/* connector, desktop only, hidden after the last step */}
                    {i < site.scaleSteps.length - 1 && (
                      <span
                        className="hidden md:grid absolute top-1/2 -right-[26px] z-10 w-6 h-6 -translate-y-1/2 place-items-center text-white/50"
                        aria-hidden="true"
                      >
                        <Icon name="arrow" className="w-4 h-4" stroke={2} />
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
