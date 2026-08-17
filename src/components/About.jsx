import { site } from '../data/site.js'
import Section from './ui/Section.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'
import Avatar from './ui/Avatar.jsx'

const PRINCIPLES = [
  {
    icon: 'layers',
    title: 'One partner, end to end',
    text: 'Design, development, marketing, and management under one roof. Nothing falls between vendors, and no one gets to blame the other two.'
  },
  {
    icon: 'trend',
    title: 'Growth you can measure',
    text: 'We agree what success looks like before we start — orders, enquiries, hours saved — and keep reporting against it after launch.'
  },
  {
    icon: 'code',
    title: 'The work belongs to you',
    text: 'Repository, accounts, documentation, handed over in full. You are never locked to us to keep growing.'
  }
]

export default function About() {
  return (
    <Section id="about" className="bg-white border-y border-line">
      <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-20">
        <div>
          <Eyebrow>About us</Eyebrow>
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.1] font-bold text-ink">
              We solve problems, not just build software
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 rounded-xl2 border border-line bg-canvas p-6">
              <p className="eyebrow text-muted mb-2">Talk to us</p>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-primary hover:text-deep transition-colors break-all"
              >
                <Icon name="mail" className="w-4 h-4 shrink-0" />
                {site.email}
              </a>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Every message goes straight to the team building your project — not to a
                sales inbox.
              </p>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="text-lg text-slate leading-relaxed">
              {site.companyFull} is a digital solutions agency. We work with businesses that
              know they are leaving growth on the table — an outdated website, no mobile
              presence, marketing nobody is measuring — and we fix the whole picture rather
              than one piece of it.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-5 text-lg text-slate leading-relaxed">
              Every project starts with what growth actually means for you: more orders, more
              enquiries, fewer hours lost to manual work. We build towards that number, then
              keep measuring against it once you are live — because a launch is the start of
              the work, not the end of it.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {PRINCIPLES.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-tint border border-primary/15 grid place-items-center text-primary shrink-0">
                    <Icon name={item.icon} className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-[15px] text-slate leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── The team, full width beneath the copy ── */}
      <div className="mt-16 pt-14 border-t border-line">
        <div className="max-w-xl mb-9">
          <Eyebrow>The team</Eyebrow>
          <Reveal>
            <h3 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-tight font-bold text-ink">
              The people who will actually build it
            </h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {site.team.map((person, i) => (
            <Reveal key={person.name} delay={(i % 5) * 70}>
              <div className="group h-full rounded-xl2 border border-line bg-canvas p-5 text-center transition-all duration-500 hover:bg-white hover:shadow-lift hover:-translate-y-1">
                <Avatar
                  name={person.name}
                  image={person.image}
                  className="w-20 h-20 mx-auto transition-transform duration-500 group-hover:scale-105"
                />
                <p className="font-display font-semibold text-ink mt-4 leading-tight">
                  {person.name}
                </p>
                <p className="text-sm text-primary mt-1.5 leading-snug">{person.role}</p>
                <p className="text-xs text-muted mt-2 leading-snug">{person.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
