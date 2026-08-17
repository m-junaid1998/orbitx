import { useState, useEffect } from 'react'
import { site } from '../data/site.js'
import Logo from './ui/Logo.jsx'
import Icon from './ui/Icon.jsx'
import Button from './ui/Button.jsx'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-canvas/85 backdrop-blur-xl border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-shell mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#top" aria-label={`${site.company} home`}>
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {site.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[15px] text-slate hover:text-ink transition-colors duration-200"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" icon={false}>Start a project</Button>
        </div>

        <button
          className="md:hidden text-ink p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-canvas border-t border-line px-6 py-8">
          <div className="flex flex-col gap-6">
            {site.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-ink font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-white font-medium"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
