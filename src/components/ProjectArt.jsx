/**
 * Artwork for project cards.
 *
 * Each project in src/data/site.js can set `art` to one of:
 *   'ecommerce' | 'management' | 'mobile' | 'marketing'
 * and gets an illustration matching that kind of solution.
 *
 * To use a real screenshot instead, add `image: './assets/name.jpg'` to the
 * project (file goes in public/assets/). The screenshot always wins.
 */

const C = {
  frame: '#CBD9EC',
  panel: '#FFFFFF',
  wash: '#D7E5FA',
  primary: '#1B57BE',
  sky: '#4A93EE',
  navy: '#0B1E3B'
}

/* A shared browser/window chrome so the set feels like one family */
function Window({ children, label }) {
  return (
    <>
      <rect x="24" y="18" width="352" height="214" rx="12" fill={C.panel} stroke={C.frame} />
      <path d="M24 42h352" stroke={C.frame} />
      <circle cx="40" cy="30" r="3.5" fill={C.frame} />
      <circle cx="52" cy="30" r="3.5" fill={C.frame} />
      <circle cx="64" cy="30" r="3.5" fill={C.frame} />
      <rect x="82" y="25" width="120" height="10" rx="5" fill={C.wash} />
      {label}
      {children}
    </>
  )
}

function Ecommerce() {
  const tiles = [0, 1, 2, 3, 4, 5]
  return (
    <Window>
      {/* product grid */}
      {tiles.map((n) => {
        const x = 44 + (n % 3) * 108
        const y = 60 + Math.floor(n / 3) * 84
        return (
          <g key={n}>
            <rect x={x} y={y} width="92" height="62" rx="8" fill={C.wash} />
            <rect x={x + 12} y={y + 16} width="40" height="30" rx="6" fill={C.sky} opacity=".55" />
            <rect x={x} y={y + 66} width="54" height="6" rx="3" fill={C.frame} />
          </g>
        )
      })}
      {/* cart badge */}
      <circle cx="344" cy="30" r="9" fill={C.primary} />
      <path d="M340 27h8l-1.2 6h-5.6L340 27Z" fill="#fff" />
    </Window>
  )
}

function Management() {
  const rows = [0, 1, 2, 3]
  return (
    <Window>
      {/* sidebar */}
      <rect x="24" y="42" width="72" height="190" fill={C.wash} />
      {[0, 1, 2, 3].map((n) => (
        <rect key={n} x="38" y={62 + n * 22} width={n === 0 ? 44 : 36} height="8" rx="4"
              fill={n === 0 ? C.primary : C.frame} />
      ))}
      {/* stat cards */}
      {[0, 1, 2].map((n) => (
        <g key={n}>
          <rect x={110 + n * 88} y="58" width="76" height="44" rx="8" fill={C.panel} stroke={C.frame} />
          <rect x={122 + n * 88} y="70" width="30" height="8" rx="4" fill={C.primary} opacity=".8" />
          <rect x={122 + n * 88} y="84" width="46" height="6" rx="3" fill={C.frame} />
        </g>
      ))}
      {/* table */}
      <rect x="110" y="116" width="252" height="102" rx="8" fill={C.panel} stroke={C.frame} />
      {rows.map((n) => (
        <g key={n}>
          <rect x="124" y={132 + n * 22} width="10" height="10" rx="3" fill={C.sky} opacity=".6" />
          <rect x="144" y={135 + n * 22} width={120 - n * 14} height="6" rx="3" fill={C.frame} />
          <rect x="306" y={135 + n * 22} width="42" height="6" rx="3" fill={C.wash} />
        </g>
      ))}
    </Window>
  )
}

function Mobile() {
  return (
    <>
      <rect x="24" y="18" width="352" height="214" rx="12" fill={C.wash} opacity=".55" />
      {/* phone */}
      <rect x="152" y="34" width="96" height="182" rx="16" fill={C.panel} stroke={C.frame} strokeWidth="1.5" />
      <rect x="182" y="42" width="36" height="5" rx="2.5" fill={C.frame} />
      <rect x="164" y="60" width="72" height="34" rx="8" fill={C.primary} />
      <rect x="174" y="72" width="34" height="6" rx="3" fill="#fff" opacity=".9" />
      <rect x="174" y="82" width="22" height="5" rx="2.5" fill="#fff" opacity=".55" />
      {[0, 1, 2].map((n) => (
        <g key={n}>
          <rect x="164" y={104 + n * 26} width="72" height="20" rx="6" fill={C.wash} />
          <circle cx="176" cy={114 + n * 26} r="5" fill={C.sky} opacity=".7" />
          <rect x="188" y={111 + n * 26} width={38 - n * 6} height="5" rx="2.5" fill={C.frame} />
        </g>
      ))}
      <rect x="152" y="190" width="96" height="26" rx="0" fill={C.panel} />
      <path d="M152 190h96" stroke={C.frame} />
      {[0, 1, 2, 3].map((n) => (
        <circle key={n} cx={168 + n * 22} cy="203" r="4" fill={n === 0 ? C.primary : C.frame} />
      ))}
    </>
  )
}

function Marketing() {
  const bars = [34, 52, 44, 74, 96, 120]
  return (
    <Window>
      {/* axis */}
      <path d="M60 200h300" stroke={C.frame} />
      {bars.map((h, n) => (
        <rect key={n} x={78 + n * 46} y={200 - h} width="26" height={h} rx="6"
              fill={n === bars.length - 1 ? C.primary : C.sky} opacity={n === bars.length - 1 ? 1 : 0.45} />
      ))}
      {/* trend line */}
      <path
        d="M91 166 137 148 183 156 229 126 275 104 321 80"
        fill="none" stroke={C.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="321" cy="80" r="6" fill={C.panel} stroke={C.primary} strokeWidth="2.5" />
      {/* label chip */}
      <rect x="240" y="52" width="118" height="22" rx="11" fill={C.wash} />
      <circle cx="256" cy="63" r="4" fill={C.primary} />
      <rect x="268" y="60" width="74" height="6" rx="3" fill={C.primary} opacity=".45" />
    </Window>
  )
}


function Storefront() {
  return (
    <Window>
      {/* hero banner */}
      <rect x="44" y="58" width="312" height="72" rx="10" fill={C.primary} />
      <rect x="62" y="78" width="96" height="10" rx="5" fill="#fff" opacity=".9" />
      <rect x="62" y="96" width="62" height="7" rx="3.5" fill="#fff" opacity=".55" />
      <rect x="62" y="110" width="52" height="12" rx="6" fill="#fff" opacity=".85" />
      <ellipse cx="308" cy="94" rx="42" ry="30" fill="#fff" opacity=".12" />
      {/* collection row */}
      {[0, 1, 3].map((n, k) => {
        const x = 44 + k * 108
        return (
          <g key={n}>
            <rect x={x} y="146" width="92" height="58" rx="8" fill={C.wash} />
            <path d={`M${x + 26} ${190}v-22a12 12 0 0 1 24 0v22`} fill={C.sky} opacity=".55" />
            <rect x={x} y="210" width="44" height="6" rx="3" fill={C.frame} />
            <rect x={x + 62} y="210" width="30" height="6" rx="3" fill={C.primary} opacity=".5" />
          </g>
        )
      })}
    </Window>
  )
}

function Ordering() {
  const rows = [0, 1, 2]
  return (
    <Window>
      {/* order list */}
      {rows.map((n) => (
        <g key={n}>
          <rect x="44" y={62 + n * 46} width="192" height="38" rx="8" fill={C.wash} />
          <circle cx="64" cy={81 + n * 46} r="9" fill={C.sky} opacity=".6" />
          <rect x="82" y={73 + n * 46} width={82 - n * 12} height="6" rx="3" fill={C.frame} />
          <rect x="82" y={85 + n * 46} width="40" height="5" rx="2.5" fill={C.frame} opacity=".7" />
          {/* quantity stepper */}
          <rect x="180" y={72 + n * 46} width="44" height="18" rx="9" fill={C.panel} stroke={C.frame} />
          <path d={`M188 ${81 + n * 46}h8M212 ${81 + n * 46}h8M216 ${77 + n * 46}v8`} stroke={C.primary} strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}
      {/* summary card */}
      <rect x="250" y="62" width="106" height="130" rx="10" fill={C.panel} stroke={C.frame} />
      <rect x="266" y="78" width="52" height="7" rx="3.5" fill={C.primary} opacity=".8" />
      {[0, 1, 2].map((n) => (
        <g key={n}>
          <rect x="266" y={98 + n * 16} width={44 - n * 8} height="5" rx="2.5" fill={C.frame} />
          <rect x="322" y={98 + n * 16} width="18" height="5" rx="2.5" fill={C.wash} />
        </g>
      ))}
      <rect x="266" y="152" width="74" height="22" rx="11" fill={C.primary} />
      <rect x="284" y="160" width="38" height="6" rx="3" fill="#fff" opacity=".9" />
      {/* delivery pin */}
      <path d="M300 206c0 0 12-9 12-17a12 12 0 1 0-24 0c0 8 12 17 12 17Z" fill={C.sky} opacity=".5" />
      <circle cx="300" cy="189" r="4.5" fill={C.panel} />
    </Window>
  )
}

function HR() {
  const people = [0, 1, 2, 3]
  return (
    <Window>
      {/* summary tiles */}
      {[0, 1, 2].map((n) => (
        <g key={n}>
          <rect x={44 + n * 108} y="58" width="92" height="46" rx="8" fill={C.wash} />
          <rect x={58 + n * 108} y="70" width="30" height="9" rx="4.5" fill={C.primary} opacity=".85" />
          <rect x={58 + n * 108} y="85" width="52" height="6" rx="3" fill={C.frame} />
        </g>
      ))}
      {/* people rows */}
      <rect x="44" y="118" width="312" height="100" rx="10" fill={C.panel} stroke={C.frame} />
      {people.map((n) => (
        <g key={n}>
          <circle cx="66" cy={138 + n * 22} r="8" fill={C.sky} opacity={0.65 - n * 0.1} />
          <rect x="82" y={135 + n * 22} width={96 - n * 10} height="6" rx="3" fill={C.frame} />
          <rect x="204" y={135 + n * 22} width="48" height="6" rx="3" fill={C.wash} />
          {/* status pill */}
          <rect x="286" y={131 + n * 22} width="52" height="14" rx="7"
                fill={n === 1 ? C.wash : C.primary} opacity={n === 1 ? 1 : 0.85} />
          <rect x="296" y={136 + n * 22} width="32" height="4" rx="2"
                fill={n === 1 ? C.frame : '#fff'} opacity={n === 1 ? 1 : 0.9} />
        </g>
      ))}
    </Window>
  )
}

function Weather() {
  return (
    <>
      <rect x="24" y="18" width="352" height="214" rx="12" fill={C.wash} opacity=".55" />
      <rect x="152" y="34" width="96" height="182" rx="16" fill={C.panel} stroke={C.frame} strokeWidth="1.5" />
      <rect x="182" y="42" width="36" height="5" rx="2.5" fill={C.frame} />
      {/* conditions card */}
      <rect x="164" y="58" width="72" height="66" rx="10" fill={C.primary} />
      <circle cx="184" cy="80" r="9" fill="#fff" opacity=".9" />
      <path d="M196 92a9 9 0 0 1 0-18 11 11 0 0 1 21 4 7 7 0 0 1-2 14h-19Z" fill="#fff" opacity=".55" transform="translate(-2 2) scale(.8) translate(46 22)" />
      <rect x="174" y="100" width="34" height="10" rx="5" fill="#fff" opacity=".9" />
      <rect x="174" y="113" width="22" height="5" rx="2.5" fill="#fff" opacity=".5" />
      {/* forecast row */}
      {[0, 1, 2, 3].map((n) => (
        <g key={n}>
          <rect x={166 + n * 18} y="134" width="14" height="32" rx="6" fill={C.wash} />
          <circle cx={173 + n * 18} cy="146" r="4" fill={C.sky} opacity=".7" />
          <rect x={169 + n * 18} y="155" width="8" height="4" rx="2" fill={C.frame} />
        </g>
      ))}
      {/* saved locations */}
      {[0, 1].map((n) => (
        <g key={n}>
          <rect x="164" y={176 + n * 18} width="72" height="14" rx="7" fill={C.wash} />
          <rect x="172" y={180 + n * 18} width={34 - n * 8} height="5" rx="2.5" fill={C.frame} />
          <rect x="216" y={180 + n * 18} width="12" height="5" rx="2.5" fill={C.primary} opacity=".5" />
        </g>
      ))}
    </>
  )
}

const ART = {
  ecommerce: Ecommerce,
  storefront: Storefront,
  management: Management,
  hr: HR,
  ordering: Ordering,
  weather: Weather,
  mobile: Mobile,
  marketing: Marketing
}

export default function ProjectArt({ art = 'ecommerce', image, title }) {
  if (image) {
    return (
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-tint">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>
    )
  }

  const Art = ART[art] || Ecommerce

  return (
    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gradient-to-br from-tint to-canvas border border-line">
      <svg viewBox="0 0 400 250" className="w-full h-full" role="img" aria-label={`${title} preview`}>
        <Art />
      </svg>
    </div>
  )
}
