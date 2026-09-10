import { Outlet, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../components/Modal'
import './machine.css'

export default function MachineLayout() {
  const [briefingOpen, setBriefingOpen] = useState(false)

  return (
    <div className="machine-site">
      {/* MASTHEAD */}
      <header className="masthead">
        <span className="mast-logo">
          <Link to="/" style={{ opacity: 0.4, marginRight: '1rem', textDecoration: 'none' }}>←</Link>
          <Link to="/nutrition">Abiotic Nutrition</Link>
        </span>
        <span className="mast-meta">Electrochemical Synthesis · Est. 2026 · Pre-Seed Stage</span>
        <nav className="mast-nav">
          <NavLink to="/nutrition/technology">Technology</NavLink>
          <NavLink to="/nutrition/research">Research</NavLink>
          <NavLink to="/nutrition/vision">Vision</NavLink>
          <NavLink to="/nutrition/about">About</NavLink>
          <NavLink to="/nutrition/investors">Investors</NavLink>
          <NavLink to="/nutrition/contact">Contact</NavLink>
          <Link to="/research" style={{ color: '#1a6b4a', fontWeight: 500 }}>Research Hub →</Link>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <Outlet context={{ openBriefing: () => setBriefingOpen(true) }} />

      {/* FOOTER */}
      <footer className="machine-footer">
        <div className="foot-grid">
          <div>
            <span className="foot-logo">Abiotic Nutrition</span>
            <div className="foot-tag">Electrochemical synthesis,<br />discovered by machine.</div>
            <button className="foot-brief-btn" onClick={() => setBriefingOpen(true)}>Request a Briefing</button>
          </div>
          <div className="foot-col">
            <h4>Division</h4>
            <ul>
              <li><Link to="/nutrition/technology">Technology</Link></li>
              <li><Link to="/nutrition/research">Research</Link></li>
              <li><Link to="/nutrition/technology">Molecule Roadmap</Link></li>
              <li><Link to="/research">All Publications →</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/nutrition/vision">Vision</Link></li>
              <li><Link to="/nutrition/about">About</Link></li>
              <li><Link to="/nutrition/about">Team</Link></li>
              <li><Link to="/">← Abiotic Labs</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Connect</h4>
            <ul>
              <li><Link to="/nutrition/investors">Investors</Link></li>
              <li><Link to="/nutrition/contact">Collaborate</Link></li>
              <li><Link to="/nutrition/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="foot-legal">© 2026 Abiotic Labs · Privacy · Terms</span>
          <span className="foot-motto">Feeding the future. No soil required.</span>
        </div>
      </footer>

      {/* BRIEFING MODAL */}
      <Modal open={briefingOpen} onClose={() => setBriefingOpen(false)} title="Request a Technical Briefing" className="machine-site">
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--ink3)', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
          30 minutes · technical roadmap · non-confidential materials shared prior
        </div>
        <p style={{ fontFamily: 'var(--body)', fontSize: '0.96rem', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '1.8rem' }}>
          All briefing requests are routed directly to our research and leadership team at <strong>briefing@bld.co.ke</strong>.
        </p>
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
          <a
            href="mailto:briefing@bld.co.ke?subject=Technical%20Briefing%20Request%20%E2%80%94%20Abiotic%20Nutrition&body=Hello%20Abiotic%20Labs%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20technical%20briefing%20regarding%20Abiotic%20Nutrition.%0A%0AName%3A%20%0AOrganization%2FInstitution%3A%20%0AContext%2FFocus%3A%20"
            className="submit-btn"
            style={{ textDecoration: 'none', textAlign: 'center', display: 'inline-block', width: 'auto', padding: '0.65rem 1.4rem' }}
            onClick={() => setBriefingOpen(false)}
          >
            Open Email Draft (briefing@bld.co.ke) →
          </a>
          <button
            type="button"
            className="submit-btn"
            style={{ width: 'auto', padding: '0.65rem 1.2rem', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--rule)' }}
            onClick={() => {
              navigator.clipboard.writeText('briefing@bld.co.ke')
              setBriefingOpen(false)
            }}
          >
            Copy Address
          </button>
        </div>
      </Modal>
    </div>
  )
}
