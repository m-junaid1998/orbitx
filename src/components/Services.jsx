import { site } from '../data/site.js'
import Section from './ui/Section.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'

export default function Services() {
  return (
    <Section id="services">
      <div className="max-w-2xl mb-14">
        <Eyebrow>Our solutions</Eyebrow>
        <Reveal>
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.1] font-bold text-ink">
            Solutions, not just deliverables
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 text-lg text-slate leading-relaxed">
            Every service here exists to fix something that costs you customers. We build
            it, market it, and manage it — so growth never stalls waiting on a vendor.
          </p>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {site.services.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) * 80}>
            <article className="group h-full rounded-xl2 border border-line bg-white p-7 shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-1 hover:border-primary/30">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-navy text-white grid place-items-center shadow-blue transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <Icon name={service.icon} />
              </div>

              <h3 className="font-display text-xl font-semibold text-ink mt-6">{service.title}</h3>
              <p className="mt-3 text-[15px] text-slate leading-relaxed">{service.desc}</p>

              <ul className="mt-5 pt-5 border-t border-line space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-slate">
                    <Icon name="check" className="w-3.5 h-3.5 text-primary shrink-0" stroke={2.2} />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
