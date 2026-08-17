/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas:  '#E8EFF9',  // page background — light, with real depth
        tint:    '#D7E5FA',  // blue wash behind icons
        line:    '#CBD9EC',  // borders
        muted:   '#6B7F9B',  // captions
        slate:   '#3B4E68',  // body text
        ink:     '#061223',  // headings
        primary: '#1B57BE',  // buttons, links
        deep:    '#123F91',  // hover
        sky:     '#4A93EE',  // accents
        navy:    '#0B1E3B'   // dark panels
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans:    ['Instrument Sans', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      borderRadius: { xl2: '20px' },
      maxWidth: { shell: '1140px' },
      boxShadow: {
        soft:  '0 1px 2px rgba(6,18,35,.05), 0 10px 28px -14px rgba(6,18,35,.16)',
        lift:  '0 2px 6px rgba(6,18,35,.07), 0 22px 48px -20px rgba(6,18,35,.28)',
        blue:  '0 10px 26px -10px rgba(27,87,190,.6)'
      },
      transitionTimingFunction: { smooth: 'cubic-bezier(.16,1,.3,1)' },
      keyframes: {
        drift:  { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        // slow-moving colour behind the hero
        aurora: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%':     { transform: 'translate3d(4%,-6%,0) scale(1.12)' },
          '66%':     { transform: 'translate3d(-5%,4%,0) scale(.94)' }
        },
        // light sweeping across the dark band
        sheen:  { '0%': { transform: 'translateX(-120%) skewX(-18deg)' }, '100%': { transform: 'translateX(320%) skewX(-18deg)' } },
        // slow gradient drift across text
        flow:   { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } }
      },
      animation: {
        drift:  'drift 8s ease-in-out infinite',
        aurora: 'aurora 22s ease-in-out infinite',
        sheen:  'sheen 7s ease-in-out infinite',
        flow:   'flow 9s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
