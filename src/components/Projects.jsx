import { site } from '../data/site.js'
import Section from './ui/Section.jsx'
import Eyebrow from './ui/Eyebrow.jsx'
import Reveal from './ui/Reveal.jsx'
import Button from './ui/Button.jsx'
import ProjectArt from './ProjectArt.jsx'

export default function Projects() {
  return (
    <Section id="work">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <div className="max-w-2xl">
          <Eyebrow>Projects delivered</Eyebrow>
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.1] font-bold text-ink">
              Solutions we've delivered
            </h2>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <Button href="#contact" variant="ghost">Discuss your project</Button>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {site.projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 90}>
            <article className="h-full rounded-xl2 border border-line bg-white p-5 shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-1">
              <ProjectArt art={project.art} image={project.image} title={project.title} />

              <div className="p-3 pt-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-tint border border-primary/15 px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="eyebrow text-primary">{project.category}</span>
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink mt-4">{project.title}</h3>
                <p className="mt-3 text-[15px] text-slate leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-slate bg-canvas border border-line rounded-md px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Only rendered when the project has a result recorded */}
                {project.result && (
                  <div className="mt-6 pt-5 border-t border-line">
                    <p className="eyebrow text-muted mb-1">Result</p>
                    <p className="font-display text-lg font-semibold text-primary">{project.result}</p>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
