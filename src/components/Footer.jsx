import { site } from '../data/site.js'
import Logo from './ui/Logo.jsx'
import Icon from './ui/Icon.jsx'

export default function Footer() {
  const socials = [
    { label: 'Instagram', href: site.instagram, icon: 'instagram' },
    site.linkedin && { label: 'LinkedIn', href: site.linkedin, icon: 'linkedin' },
    site.facebook && { label: 'Facebook', href: site.facebook, icon: 'users' }
  ].filter(Boolean)

  return (
    <footer className="border-t border-line bg-canvas px-6 pt-16 pb-10">
      <div className="max-w-shell mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div className="max-w-xs">
            <Logo className="h-10 w-auto" />
            <p className="mt-3 eyebrow text-muted">Digital Solutions</p>
            <p className="mt-4 text-[15px] text-slate leading-relaxed">{site.tagline}.</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-deep transition-colors break-all"
            >
              <Icon name="mail" className="w-4 h-4 shrink-0" />
              {site.email}
            </a>
          </div>

          <div>
            <p className="eyebrow text-muted mb-4">Pages</p>
            <ul className="space-y-2.5">
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-muted mb-4">Follow</p>
            <ul className="space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate hover:text-ink transition-colors"
                  >
                    <Icon name={social.icon} className="w-4 h-4 text-primary" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {site.company}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
