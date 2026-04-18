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
          <Link to="/platform" style={{ color: 'var(--blue)' }}>Platform →</Link>
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
              <li><Link to="/platform">AbioCore →</Link></li>
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
