import { Outlet, Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../components/Modal'
import '../machine/machine.css'

export default function DivisionLayout({ label, path, tagline, meta }) {
  const [briefingOpen, setBriefingOpen] = useState(false)

  return (
    <div className="machine-site">
      {/* MASTHEAD */}
      <header className="masthead">
        <span className="mast-logo">
          <Link to="/" style={{ opacity: 0.4, marginRight: '1rem', textDecoration: 'none' }}>←</Link>
          <Link to={path}>{label}</Link>
        </span>
        <span className="mast-meta">{meta || 'Molecular Pathway Intelligence · Est. 2026'}</span>
        <nav className="mast-nav">
          <NavLink to={path} end>Overview</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/nutrition">Nutrition Division</NavLink>
          <NavLink to="/nutrition/contact">Contact</NavLink>
          <Link to="/" style={{ color: '#1a6b4a', fontWeight: 500 }}>← All Divisions</Link>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <Outlet context={{ openBriefing: () => setBriefingOpen(true) }} />

      {/* FOOTER */}
      <footer className="machine-footer">
        <div className="foot-grid">
          <div>
            <span className="foot-logo">{label}</span>
            <div className="foot-tag">{tagline}</div>
            <button className="foot-brief-btn" onClick={() => setBriefingOpen(true)}>Request a Briefing</button>
          </div>
          <div className="foot-col">
            <h4>Division</h4>
            <ul>
              <li><Link to={path}>Overview &amp; Method</Link></li>
              <li><Link to="/research">Research Papers</Link></li>
              <li><Link to="/nutrition">Abiotic Nutrition</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/">← Abiotic Labs Home</Link></li>
              <li><Link to="/research">Publications</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Connect</h4>
            <ul>
              <li><Link to="/nutrition/contact">Contact Us</Link></li>
              <li><a href="mailto:hello@bld.co.ke">hello@bld.co.ke</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="foot-legal">© 2026 Abiotic Labs · Privacy · Terms</span>
          <span className="foot-motto">Molecular Pathway Intelligence.</span>
        </div>
      </footer>

      {/* BRIEFING MODAL */}
      <Modal open={briefingOpen} onClose={() => setBriefingOpen(false)} title="Request a Briefing" className="machine-site">
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--ink3)', letterSpacing: '0.08em', marginBottom: '2rem' }}>
          30 minutes · technical · no materials sent without conversation first
        </div>
        <div className="fg"><label>Name</label><input type="text" placeholder="Full name" /></div>
        <div className="fg"><label>Email</label><input type="email" placeholder="you@organization.com" /></div>
        <div className="fg"><label>Nature of inquiry</label>
          <select><option>Select</option><option>Investor</option><option>Researcher</option><option>Partner</option><option>Press</option></select>
        </div>
        <div className="fg"><label>Note (optional)</label><textarea placeholder="Context that would help us prepare..."></textarea></div>
        <button className="submit-btn" onClick={() => setBriefingOpen(false)}>Send Request →</button>
      </Modal>
    </div>
  )
}
