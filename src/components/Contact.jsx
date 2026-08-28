import { useState } from 'react'
import { site } from '../data/site.js'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'

const API_URL = 'https://api.web3forms.com/submit'
const ACCESS_KEY = '143faf76-8c66-4d07-9207-ceff627534cb'
const EMPTY_FORM = { name: '', email: '', message: '' }

const FIELD =
  'w-full rounded-xl bg-canvas border border-line px-4 py-3 text-[15px] text-ink placeholder:text-muted outline-none transition-colors focus:border-primary focus:bg-white'

const channels = [
  site.email && {
    key: 'email',
    icon: 'mail',
    label: 'Email us',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  site.instagram && {
    key: 'instagram',
    icon: 'instagram',
    label: 'Instagram',
    value: site.instagramHandle,
    href: site.instagram,
    external: true,
  },
  site.linkedin && {
    key: 'linkedin',
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'OrbitX Digital',
    href: site.linkedin,
    external: true,
  },
].filter(Boolean)

function ChannelCard({ channel, delay }) {
  return (
    <Reveal delay={delay}>
      <a
        href={channel.href}
        target={channel.external ? '_blank' : undefined}
        rel={channel.external ? 'noopener noreferrer' : undefined}
        className="group flex h-full flex-col justify-between rounded-xl2 border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 text-white transition-colors group-hover:bg-primary/10 group-hover:text-primary">
            <Icon name={channel.icon} className="h-5 w-5" />
          </div>
          <Icon name="arrow" className="h-5 w-5 text-white/60 transition-all group-hover:translate-x-1 group-hover:text-primary" />
        </div>
        <div className="mt-10">
          <p className="eyebrow mb-1.5 text-white/70 transition-colors group-hover:text-muted">
            {channel.label}
          </p>
          <p className="break-all font-display text-lg font-semibold text-white transition-colors group-hover:text-ink">
            {channel.value}
          </p>
        </div>
      </a>
    </Reveal>
  )
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const update = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (Object.values(form).some((value) => !value.trim())) {
      setError('Add your name, email, and a short message so we can reply.')
      return
    }

    setError('')
    setLoading(true)

    try {
      const data = new FormData()
      data.append('access_key', ACCESS_KEY)
      Object.entries(form).forEach(([key, value]) => data.append(key, value))

      const response = await fetch(API_URL, { method: 'POST', body: data })
      const result = await response.json()

      if (!result.success) throw new Error(result.message)

      setSent(true)
      setForm(EMPTY_FORM)
    } catch {
      setError('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact" className="border-t border-line bg-white">
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-primary via-[#134086] to-navy p-8 md:p-12">
        <svg
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-[.18]"
          viewBox="-140 -140 280 280"
          aria-hidden="true"
        >
          <ellipse cx="0" cy="0" rx="126" ry="48" fill="none" stroke="#fff" strokeWidth="1.4" transform="rotate(-22)" />
          <ellipse cx="0" cy="0" rx="92" ry="92" fill="none" stroke="#fff" strokeWidth="1" />
        </svg>

        <div className="relative">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-white/70">Contact us</p>
            <Reveal>
              <h2 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.1] text-white">
                Ready to scale your business?
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                Tell us where your business is now and where you want it to be.
                Every message reaches the OrbitX team directly, and we reply within a day.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel, i) => (
              <ChannelCard key={channel.key} channel={channel} delay={i * 80} />
            ))}
          </div>

          {(site.phone || site.whatsapp) && (
            <Reveal delay={240}>
              <div className="mt-4 flex flex-wrap gap-3">
                {site.phone && (
                  <a
                    href={`tel:${site.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-3 text-[15px] text-white transition-colors hover:bg-white hover:text-primary"
                  >
                    <Icon name="call" className="h-4 w-4" />
                    {site.phone}
                  </a>
                )}

                {site.whatsapp && (
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-5 py-3 text-[15px] text-white transition-colors hover:bg-white hover:text-primary"
                  >
                    <Icon name="whatsapp" className="h-4 w-4" />
                    WhatsApp
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>

      <Reveal delay={120}>
        <div className="mt-14 max-w-2xl">
          <p className="eyebrow mb-5 text-muted">Or send a message here</p>

          {sent ? (
            <div className="rounded-xl2 border border-line bg-canvas p-8 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                <Icon name="check" className="h-5 w-5" stroke={2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                Message sent successfully
              </h3>
              <p className="mt-2 text-slate">
                Thank you for contacting us. We&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-5 text-sm text-slate underline hover:text-ink"
              >
                Write another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="eyebrow mb-2 block text-muted">
                      {field === 'name' ? 'Your name' : 'Email'}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === 'email' ? 'email' : 'text'}
                      value={form[field]}
                      onChange={update}
                      placeholder={`Enter your ${field}`}
                      className={FIELD}
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="message" className="eyebrow mb-2 block text-muted">
                  What do you need?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={update}
                  placeholder="Tell us about your business and what you want to grow"
                  className={`${FIELD} resize-none`}
                  required
                />
              </div>

              {error && <p className="text-sm text-[#C4341F]">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-primary px-7 py-3.5 font-medium text-white shadow-blue transition-all duration-300 hover:-translate-y-0.5 hover:bg-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  )
}