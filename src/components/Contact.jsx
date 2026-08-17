import { useState } from 'react'
import { site } from '../data/site.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'

const FIELD =
  'w-full rounded-xl bg-canvas border border-line px-4 py-3 text-[15px] text-ink placeholder:text-muted outline-none transition-colors focus:border-primary focus:bg-white'

const EMPTY = { name: '', email: '', message: '' }

/* The channels shown as large cards. Anything with an empty value in
   src/data/site.js is dropped automatically, so the row always fills out. */
function buildChannels() {
  return [
    site.email && {
      key: 'email',
      icon: 'mail',
      label: 'Email us',
      value: site.email,
      href: `mailto:${site.email}`,
      external: false
    },
    site.instagram && {
      key: 'instagram',
      icon: 'instagram',
      label: 'Instagram',
      value: site.instagramHandle,
      href: site.instagram,
      external: true
    },
    site.linkedin && {
      key: 'linkedin',
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'OrbitX Digital',
      href: site.linkedin,
      external: true
    }
  ].filter(Boolean)
}

function ChannelCard({ channel, delay }) {
  const external = channel.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Reveal delay={delay}>
      <a
        href={channel.href}
        {...external}
        className="group flex h-full flex-col justify-between rounded-xl2 border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:-translate-y-1"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="w-11 h-11 rounded-xl bg-white/15 text-white grid place-items-center transition-colors duration-500 group-hover:bg-primary/10 group-hover:text-primary">
            <Icon name={channel.icon} className="w-5 h-5" />
          </div>
          <Icon
            name="arrow"
            className="w-5 h-5 text-white/60 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1"
          />
        </div>

        <div className="mt-10">
          <p className="eyebrow text-white/70 mb-1.5 transition-colors duration-500 group-hover:text-muted">
            {channel.label}
          </p>
          <p className="font-display text-lg font-semibold text-white break-all transition-colors duration-500 group-hover:text-ink">
            {channel.value}
          </p>
        </div>
      </a>
    </Reveal>
  )
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const channels = buildChannels()
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Add your name, email, and a short message so we can reply.')
      return
    }
    setError('')

    /* ── SENDING ────────────────────────────────────────────────
       Default: opens the visitor's email app, pre-filled.

       To collect submissions properly, create a free form at
       formspree.io and replace this block with:

         await fetch('https://formspree.io/f/YOUR_ID', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(form)
         })

       (also change `const handleSubmit = (e) =>` to `async (e) =>`)
       ─────────────────────────────────────────────────────────── */
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New project enquiry — ${form.name}`
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  return (
    <Section id="contact" className="bg-white border-t border-line">
      {/* Blue panel — the one strong colour moment on the page */}
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary via-[#134086] to-navy p-8 md:p-12">
        {/* faint orbit ring, echoing the logo */}
        <svg
          className="pointer-events-none absolute -right-24 -top-24 w-[420px] h-[420px] opacity-[.18]"
          viewBox="-140 -140 280 280"
          aria-hidden="true"
        >
          <ellipse cx="0" cy="0" rx="126" ry="48" fill="none" stroke="#fff" strokeWidth="1.4" transform="rotate(-22)" />
          <ellipse cx="0" cy="0" rx="92" ry="92" fill="none" stroke="#fff" strokeWidth="1" />
        </svg>

        <div className="relative">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/70 mb-4">Contact us</p>
            <Reveal>
              <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.1] font-bold text-white">
                Ready to scale your business?
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-lg text-white/85 leading-relaxed">
                Tell us where your business is now and where you want it to be. Every message
                reaches the OrbitX team directly, and we reply within a day.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.map((channel, i) => (
              <ChannelCard key={channel.key} channel={channel} delay={i * 80} />
            ))}
          </div>

          {/* Optional extras — appear only when filled in in src/data/site.js */}
          {(site.phone || site.whatsapp) && (
            <Reveal delay={240}>
              <div className="mt-4 flex flex-wrap gap-3">
                {site.phone && (
                  <a
                    href={`tel:${site.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-3 text-[15px] text-white hover:bg-white hover:text-primary transition-colors"
                  >
                    <Icon name="call" className="w-4 h-4" />
                    {site.phone}
                  </a>
                )}
                {site.whatsapp && (
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-3 text-[15px] text-white hover:bg-white hover:text-primary transition-colors"
                  >
                    <Icon name="whatsapp" className="w-4 h-4" />
                    WhatsApp
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* Secondary: short form */}
      <Reveal delay={120}>
        <div className="mt-14 max-w-2xl">
          <p className="eyebrow text-muted mb-5">Or send a message here</p>

          {sent ? (
            <div className="rounded-xl2 border border-line bg-canvas p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white grid place-items-center mx-auto">
                <Icon name="check" className="w-5 h-5" stroke={2} />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mt-5">
                Message ready to send
              </h3>
              <p className="mt-2 text-slate">
                Your email app should have opened with everything filled in. If it didn't,
                write to{' '}
                <a href={`mailto:${site.email}`} className="text-primary underline break-all">
                  {site.email}
                </a>
                .
              </p>
              <button
                onClick={() => { setSent(false); setForm(EMPTY) }}
                className="mt-5 text-sm text-slate hover:text-ink underline"
              >
                Write another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="eyebrow text-muted block mb-2">Your name</label>
                  <input id="name" className={FIELD} value={form.name} onChange={update('name')} placeholder="Enter your name" />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow text-muted block mb-2">Email</label>
                  <input id="email" type="email" className={FIELD} value={form.email} onChange={update('email')} placeholder="Enter your email" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow text-muted block mb-2">What do you need?</label>
                <textarea
                  id="message" rows="4" className={`${FIELD} resize-none`}
                  value={form.message} onChange={update('message')}
                  placeholder="Tell us about your business and what you want to grow"
                />
              </div>

              {error && <p className="text-sm text-[#C4341F]">{error}</p>}

              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-primary px-7 py-3.5 text-white font-medium shadow-blue transition-all duration-300 hover:bg-deep hover:-translate-y-0.5"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  )
}
