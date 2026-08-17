/* ═══════════════════════════════════════════════════════════════
   SITE CONTENT — edit everything here.
   No component needs changing when you update copy.
   Items marked PLACEHOLDER should be replaced before you go live.
   ═══════════════════════════════════════════════════════════════ */

export const site = {
  company: 'OrbitX',                          // short name, used in the nav and footer
  companyFull: 'OrbitX Digital Solutions',    // full name, used in body copy
  tagline: 'Scaling business through technology',
  // Kept for reference only — the site speaks as OrbitX, not as a person.
  // The founder appears in the `team` list below like everyone else.
  founder: 'Muhammad Usman',
  email: 'orbitxdigital8@gmail.com',
  instagram: 'https://www.instagram.com/orbitxdigital8/',
  instagramHandle: '@orbitxdigital8',

  // Optional — leave as empty strings to hide these from the site
  phone: '966572438808',
  whatsapp: '966572438808',     // digits only, with country code (assumed +92 — change if wrong)
  location: 'Riyadh, Saudi Arabia',
  linkedin: 'https://www.linkedin.com/in/orbitx-digital-58a6b0415/',
  facebook: '',                 // full URL

  /* ── TEAM ──────────────────────────────────────────────────────
     Shown inside the About section, not as a separate page section.
     Photos go in public/assets/team/ — see the README in that folder.
     Leave `image` empty and initials are shown instead.

     Only list people who actually work with you, and get their
     permission before publishing a name or photo.
     ───────────────────────────────────────────────────────────── */
  team: [
    {
      name: 'Muhammad Usman',
      role: 'Founder & Full Stack Developer',
      focus: 'Strategy, delivery, and development',
      image: './assets/team/usman.jpg'
    },
    {
      name: 'Junaid Irfan',
      role: 'Full Stack & AI Developer',
      focus: 'End-to-end builds and AI automation',
      image: './assets/team/junaid.jpg'
    },
    {
      name: 'Safwan Ullah Khan',
      role: 'Full Stack Backend Engineer',
      focus: 'Complex backend systems',
      image: './assets/team/safwan.jpg'
    },
    {
      name: 'Syed Saad Ali',
      role: 'Full Stack Developer',
      focus: 'End-to-end builds in modern frameworks',
      image: './assets/team/saad.jpg'
    },
    {
      name: 'Amna Khan',
      role: 'Digital Marketing Specialist',
      focus: 'Campaign strategy and management',
      image: './assets/team/amna.jpg'
    }
  ],

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' }
  ],

  /* ── SERVICES ──────────────────────────────────────────────────
     Add or remove as many as you like — no count is written into the
     headings, and the grid re-flows on its own.
     Available icons: code, phone, megaphone, search, layers, shield,
     users, refresh, clock, message, trend, spark
     ───────────────────────────────────────────────────────────── */
  services: [
    {
      icon: 'code',
      title: 'Web Development',
      desc: 'Websites and web applications built around what your business actually needs to do — sell, book, track, or manage.',
      points: ['Business & e-commerce sites', 'Custom web applications', 'Built to load fast']
    },
    {
      icon: 'phone',
      title: 'App Development',
      desc: "Put your business in your customers' pocket. iOS and Android from a single codebase, published and maintained.",
      points: ['iOS & Android', 'App Store & Play releases', 'Ongoing updates']
    },
    {
      icon: 'megaphone',
      title: 'Digital Marketing',
      desc: 'SEO, Meta and Google ads that bring buyers rather than traffic. Every rupee tracked against what it brought back.',
      points: ['SEO & content', 'Meta & Google Ads', 'Monthly reporting']
    },
    {
      icon: 'layers',
      title: 'UI/UX Design',
      desc: 'Screens people understand without being taught. We find where customers drop off, then design that friction out.',
      points: ['Research & wireframes', 'Interface design', 'Prototypes before build']
    },
    {
      icon: 'ai',
      title: 'AI Automation',
      // CONFIRM THESE — only list automation you can actually deliver today.
      desc: 'Put the repetitive work on autopilot. Customer questions answered at 2am, leads followed up before they go cold, and documents processed without anyone retyping them.',
      points: ['WhatsApp & Instagram chatbots', 'Automated lead follow-up', 'Document & report automation']
    },
    {
      icon: 'gauge',
      title: 'Management',
      desc: 'We run the whole digital side — site, apps, and social channels — so you can get back to running the business.',
      points: ['Social media handling', 'Updates & monitoring', 'Performance reviews']
    }
  ],

  /* ── PROJECTS DELIVERED — PLACEHOLDER. Replace with real work. ──
     Add `image: './assets/my-project.jpg'` to show a screenshot
     (put the file in public/assets/). Without one, a generated
     orbit graphic is used instead.
     ───────────────────────────────────────────────────────────── */
  projects: [
    {
      title: 'Women Fashion Accessories Store',
      category: 'E-commerce Solution',
      art: 'ecommerce',          // ecommerce | storefront | management | hr | ordering | weather | mobile | marketing
      // image: './assets/fashion-store.jpg',
      desc: 'An online store for a women\'s fashion accessories brand — full catalogue with variants, cart and checkout, plus an admin panel so new stock goes live without calling a developer.',
      tech: ['React', 'Node.js', 'MongoDB'],   // ← confirm the real stack
      result: ''                                // ← e.g. '2× online orders'
    },
    {
      title: 'Community Management System',
      category: 'Management System',
      art: 'management',
      desc: 'One dashboard for running a community — member records, requests, and day-to-day tasks in a single place, replacing scattered spreadsheets and message threads.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      result: ''
    },
    {
      title: 'Grocery Ordering & Management System',
      category: 'Ordering Platform',
      art: 'ordering',
      desc: 'Customers order from a live catalogue while staff track stock, pick lists, and deliveries from the same system — no phone orders lost on paper.',
      tech: ['React', 'Node.js', 'MongoDB'],
      result: ''
    },
    {
      title: 'Clothing E-commerce Store',
      category: 'E-commerce Solution',
      art: 'storefront',
      desc: 'A clothing storefront built around browsing — collections, size and colour variants, and a checkout that holds up on a phone with a slow connection.',
      tech: ['React', 'Node.js', 'MongoDB'],
      result: ''
    },
    {
      title: 'Weather Update Mobile App',
      category: 'Mobile Solution',
      art: 'weather',
      desc: 'A mobile app delivering live conditions and forecasts, with saved locations and alerts that reach the user even when the app is closed.',
      tech: ['React Native', 'Firebase'],
      result: ''
    },
    {
      title: 'HR Management System',
      category: 'Management System',
      art: 'hr',
      desc: 'Employee records, attendance, leave requests, and approvals in one system — so HR stops chasing forms and managers approve in a click.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      result: ''
    }
  ],

  /* ── HOW WE SCALE YOU ──────────────────────────────────────────
     The three-step band under the hero. Edit freely.
     ───────────────────────────────────────────────────────────── */
  scaleSteps: [
    { icon: 'layers',    title: 'Build',  text: 'We find the problem holding your business back, then design and develop the website or app that solves it.' },
    { icon: 'megaphone', title: 'Market', text: 'SEO, Meta and Google ads that put you in front of the people already searching for what you sell.' },
    { icon: 'trend',     title: 'Scale',  text: 'We manage your digital presence, measure what it earns, and keep growing it long after launch day.' }
  ],

  // Small proof row under the hero
  highlights: [
    { value: '43+', label: 'Projects delivered' },
    { value: '4+',  label: 'Years building' },
    { value: '24h', label: 'Reply time' }
  ]
}

export default site
