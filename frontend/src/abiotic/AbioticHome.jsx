import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './abiotic-home.css'

/* ── Inline SVG logo mark (shared across nav + hero) ─────────────── */
function LogoMark({ size = 36 }) {
  const h = Math.round(size * (92 / 56))
  return (
    <svg width={size} height={h} viewBox="0 0 56 92" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="26" y1="13" x2="4"  y2="79" stroke="#1a6b4a" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="29" y1="13" x2="7"  y2="79" stroke="#f0efea" strokeWidth="1.4" strokeLinecap="round" opacity="0.65"/>
      <line x1="28" y1="13" x2="50" y2="79" stroke="#1a6b4a" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="25" y1="13" x2="47" y2="79" stroke="#f0efea" strokeWidth="1.4" strokeLinecap="round" opacity="0.65"/>
      <line x1="12" y1="51" x2="42" y2="51" stroke="#2d9c6e" strokeWidth="3"   strokeLinecap="round"/>
      <line x1="27" y1="19" x2="27" y2="37" stroke="#2d9c6e" strokeWidth="1.8" strokeDasharray="2.5 2.8" strokeLinecap="round" opacity="0.75"/>
      <line x1="25" y1="41" x2="14" y2="50" stroke="#2d9c6e" strokeWidth="1.6" strokeDasharray="2 2.8"   strokeLinecap="round" opacity="0.6"/>
      <line x1="29" y1="41" x2="40" y2="50" stroke="#2d9c6e" strokeWidth="1.6" strokeDasharray="2 2.8"   strokeLinecap="round" opacity="0.6"/>
      <circle cx="27" cy="12" r="5.5" fill="#1a6b4a"/><circle cx="27" cy="12" r="2.2" fill="#f0efea"/>
      <circle cx="12" cy="51" r="4.2" fill="#f0efea" stroke="#2d9c6e" strokeWidth="1.8"/><circle cx="12" cy="51" r="1.6" fill="#2d9c6e"/>
      <circle cx="42" cy="51" r="4.8" fill="#1a6b4a"/><circle cx="42" cy="51" r="1.9" fill="#f0efea"/>
      <circle cx="3"  cy="79" r="4"   fill="#f0efea" stroke="#1a6b4a" strokeWidth="1.6"/>
      <circle cx="51" cy="79" r="4"   fill="#f0efea" stroke="#1a6b4a" strokeWidth="1.6"/>
      <circle cx="27" cy="41" r="4.5" fill="#2d9c6e"/><circle cx="27" cy="41" r="1.8" fill="#f0efea"/>
    </svg>
  )
}

/* ── Primary wordmark SVG ─────────────────────────────────────────── */
function WordmarkLogo() {
  return (
    <svg className="ah-hero-logo" viewBox="0 0 480 112" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abiotic Labs">
      <line x1="26" y1="13" x2="4"  y2="79" stroke="#1a6b4a" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="29" y1="13" x2="7"  y2="79" stroke="#f0efea" strokeWidth="1.4" strokeLinecap="round" opacity="0.65"/>
      <line x1="28" y1="13" x2="50" y2="79" stroke="#1a6b4a" strokeWidth="4.5" strokeLinecap="round"/>
      <line x1="25" y1="13" x2="47" y2="79" stroke="#f0efea" strokeWidth="1.4" strokeLinecap="round" opacity="0.65"/>
      <line x1="12" y1="51" x2="42" y2="51" stroke="#2d9c6e" strokeWidth="3"   strokeLinecap="round"/>
      <line x1="27" y1="19" x2="27" y2="37" stroke="#2d9c6e" strokeWidth="1.8" strokeDasharray="2.5 2.8" strokeLinecap="round" opacity="0.75"/>
      <line x1="25" y1="41" x2="14" y2="50" stroke="#2d9c6e" strokeWidth="1.6" strokeDasharray="2 2.8"   strokeLinecap="round" opacity="0.6"/>
      <line x1="29" y1="41" x2="40" y2="50" stroke="#2d9c6e" strokeWidth="1.6" strokeDasharray="2 2.8"   strokeLinecap="round" opacity="0.6"/>
      <circle cx="27" cy="12" r="5.5" fill="#1a6b4a"/><circle cx="27" cy="12" r="2.2" fill="#f0efea"/>
      <circle cx="12" cy="51" r="4.2" fill="#f0efea" stroke="#2d9c6e" strokeWidth="1.8"/><circle cx="12" cy="51" r="1.6" fill="#2d9c6e"/>
      <circle cx="42" cy="51" r="4.8" fill="#1a6b4a"/><circle cx="42" cy="51" r="1.9" fill="#f0efea"/>
      <circle cx="3"  cy="79" r="4"   fill="#f0efea" stroke="#1a6b4a" strokeWidth="1.6"/>
      <circle cx="51" cy="79" r="4"   fill="#f0efea" stroke="#1a6b4a" strokeWidth="1.6"/>
      <circle cx="27" cy="41" r="4.5" fill="#2d9c6e"/><circle cx="27" cy="41" r="1.8" fill="#f0efea"/>
      <text x="60" y="78"
            fontFamily="'Syne', sans-serif"
            fontWeight="700"
            fontSize="68"
            letterSpacing="-3"
            fill="#0e0e0c">biotic<tspan fill="#1a6b4a">Labs</tspan></text>
      <text x="60" y="100"
            fontFamily="'DM Mono', monospace"
            fontWeight="300"
            fontSize="11"
            letterSpacing="2.8"
            fill="#7a7a75" opacity="0.7">MOLECULAR PATHWAY INTELLIGENCE</text>
      <line x1="0" y1="109" x2="480" y2="109" stroke="#0e0e0c" strokeWidth="0.8" opacity="0.1"/>
    </svg>
  )
}

/* ── Division card data ───────────────────────────────────────────── */
const DIVISIONS = [
  {
    id: 'nutrition',
    num: '01',
    label: 'Abiotic Nutrition',
    desc: 'Abiotic synthesis of amino acids, lipids, vitamins, and complex nutritional compounds. The first division in active development — mapping the molecular space of food from the ground up.',
    status: 'active',
    href: '/nutrition',
    internal: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#1a6b4a" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="4"  fill="#2d9c6e" opacity="0.35"/>
        <circle cx="14" cy="14" r="1.8" fill="#1a6b4a"/>
        <line x1="14" y1="4"  x2="14" y2="8"  stroke="#2d9c6e" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="14" y1="20" x2="14" y2="24" stroke="#2d9c6e" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="4"  y1="14" x2="8"  y2="14" stroke="#2d9c6e" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="20" y1="14" x2="24" y2="14" stroke="#2d9c6e" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    flagship: true,
  },
  {
    id: 'drugs',
    num: '02',
    label: 'Abiotic Drugs',
    desc: 'Pharmaceutical-grade synthesis pathways for active compounds, bioavailable molecules, and novel drug candidates — without biological intermediaries.',
    status: 'planned',
    href: '/drugs',
    internal: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="11" width="16" height="6" rx="3" stroke="#1a6b4a" strokeWidth="1.5"/>
        <line x1="14" y1="11" x2="14" y2="17" stroke="#2d9c6e" strokeWidth="1.2"/>
        <circle cx="14" cy="7"  r="2.5" stroke="#1a6b4a" strokeWidth="1.3"/>
        <circle cx="14" cy="21" r="2.5" stroke="#1a6b4a" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    id: 'materials',
    num: '03',
    label: 'Abiotic Materials',
    desc: 'Designer polymers, structural compounds, and advanced materials synthesised through guided abiotic pathways — targeting properties not found in nature.',
    status: 'planned',
    href: '/materials',
    internal: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polygon points="14,4 24,10 24,18 14,24 4,18 4,10" stroke="#1a6b4a" strokeWidth="1.5" fill="none"/>
        <polygon points="14,9 19,12 19,17 14,20 9,17 9,12" stroke="#2d9c6e" strokeWidth="1" fill="none" opacity="0.5"/>
        <circle cx="14" cy="14" r="2" fill="#1a6b4a"/>
      </svg>
    ),
  },
  {
    id: 'fuels',
    num: '04',
    label: 'Abiotic Fuels',
    desc: 'Carbon-neutral and high-energy-density fuel compounds via abiotic chemistry. From hydrogen carriers to synthetic hydrocarbons built without geological time.',
    status: 'planned',
    href: '/fuels',
    internal: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 24 C10 20 6 16 8 11 C9 8 12 6 14 8 C16 6 19 8 20 11 C22 16 18 20 14 24Z" stroke="#1a6b4a" strokeWidth="1.5" fill="none"/>
        <path d="M14 20 C12 17 11 14 13 12" stroke="#2d9c6e" strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    id: 'industrial',
    num: '05',
    label: 'Abiotic Industrial',
    desc: 'Bulk chemical synthesis at scale — acids, bases, solvents, and process intermediates — optimised for cost, efficiency, and environmental footprint.',
    status: 'planned',
    href: '/industrial',
    internal: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4"  y="16" width="6" height="8" rx="1" stroke="#1a6b4a" strokeWidth="1.4" fill="none"/>
        <rect x="11" y="10" width="6" height="14" rx="1" stroke="#1a6b4a" strokeWidth="1.4" fill="none"/>
        <rect x="18" y="4"  width="6" height="20" rx="1" stroke="#1a6b4a" strokeWidth="1.4" fill="none"/>
        <line x1="4" y1="24" x2="24" y2="24" stroke="#2d9c6e" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
  },
]

/* ── Main component ───────────────────────────────────────────────── */
export default function AbioticHome() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('ah-visible')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <div className="ah-root">

      {/* NAV */}
      <nav className="ah-nav">
        <Link to="/" className="ah-nav-logo" aria-label="Abiotic Labs home">
          <LogoMark size={32} />
        </Link>
        <ul className="ah-nav-links">
          <li><a href="#mission">Mission</a></li>
          <li><a href="#divisions">Divisions</a></li>
          <li><Link to="/nutrition">Abiotic Nutrition</Link></li>
          <li><Link to="/platform">Platform →</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="ah-hero" id="home">
        <p className="ah-eyebrow">Molecular Pathway Intelligence</p>
        <WordmarkLogo />
        <h1 className="ah-headline">
          Every molecule,<br />
          <em>summoned on demand.</em>
        </h1>
        <p className="ah-sub">
          We build machines capable of discovering and executing synthesis pathways
          at any level of chemical complexity; from basic nutrition to processes that rival biology itself.
        </p>
        <div className="ah-cta">
          <a href="#divisions" className="ah-btn ah-btn-primary" id="btn-explore">Explore Divisions</a>
          <a href="#mission"   className="ah-btn ah-btn-ghost"   id="btn-mission">Our Mission</a>
        </div>
        <div className="ah-scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="ah-scroll-line" />
        </div>
      </section>

      {/* MISSION */}
      <section className="ah-mission" id="mission">
        <div ref={addReveal} className="ah-reveal">
          <p className="ah-label">Mission</p>
          <p className="ah-mission-text">
            The north star is to <span className="ah-accent">summon any synthesis pathway</span>; at any level of complexity. Each step up the complexity ladder unlocks a wider set of real-world applications.
          </p>
          <p className="ah-mission-note">
            We believe machines can be trained to match and eventually surpass that complexity through data, physics, and intelligence. Abiotic Labs is the infrastructure for that future.
          </p>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="ah-divisions" id="divisions">

        <div ref={addReveal} className="ah-reveal ah-division-header">
          <div>
            <p className="ah-label">Divisions</p>
            <h2 className="ah-division-title">Five domains.<br />One intelligence layer.</h2>
          </div>
          <p className="ah-division-sub">
            Each division is a distinct synthesis domain, powered by the same underlying pathway engine.
          </p>
        </div>

        <div className="ah-cards">
          {DIVISIONS.map((d, i) => {
            const cardContent = (
              <>
                <p className="ah-card-num">{d.num}</p>
                <div className="ah-card-icon">{d.icon}</div>
                <h3 className="ah-card-label">{d.label}</h3>
                <p className="ah-card-desc">{d.desc}</p>
                <div className="ah-card-footer">
                  <span className={`ah-card-tag${d.status === 'active' ? ' ah-tag-active' : ''}`}>
                    {d.status === 'active' ? 'Active' : 'Planned'}
                  </span>
                  {d.href && <span className="ah-card-arrow">→</span>}
                </div>
              </>
            )

            return d.internal ? (
              <Link
                key={d.id}
                to={d.href}
                ref={addReveal}
                className={`ah-card ah-reveal${d.flagship ? ' ah-card-flagship' : ''}`}
                style={{ transitionDelay: `${i * 70}ms`, textDecoration: 'none' }}
                id={`division-${d.id}`}
              >
                {cardContent}
              </Link>
            ) : (
              <article
                key={d.id}
                ref={addReveal}
                className={`ah-card ah-reveal${d.flagship ? ' ah-card-flagship' : ''}`}
                style={{ transitionDelay: `${i * 70}ms` }}
                id={`division-${d.id}`}
              >
                {cardContent}
              </article>
            )
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ah-footer">
        <p className="ah-footer-copy">© 2026 Abiotic Labs. All rights reserved.</p>
        <p className="ah-footer-tagline">Molecular Pathway Intelligence</p>
      </footer>

    </div>
  )
}
