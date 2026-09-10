import { Outlet, Link } from 'react-router-dom'
import './research.css'

export default function ResearchLayout() {
  return (
    <div className="machine-site" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* RESEARCH HEADER */}
      <header className="masthead" style={{ borderBottom: '2px solid var(--ink, #1B1714)' }}>
        <span className="mast-logo">
          <Link to="/" style={{ opacity: 0.5, marginRight: '1rem', textDecoration: 'none' }}>←</Link>
          <Link to="/research" style={{ fontFamily: 'var(--serif, "Playfair Display", serif)', fontWeight: 700 }}>Abiotic Labs · Research</Link>
        </span>
        <span className="mast-meta">Molecular Pathway Intelligence · Scientific Publications &amp; Dispatches</span>
        <nav className="mast-nav">
          <Link to="/">Home</Link>
          <Link to="/nutrition">Abiotic Nutrition</Link>
          <Link to="/research" style={{ borderBottom: '1px solid var(--ink, #1B1714)' }}>Publications</Link>
          <Link to="/nutrition/contact">Contact</Link>
        </nav>
      </header>

      {/* PAGE BODY */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="machine-footer" style={{ marginTop: 'auto' }}>
        <div className="foot-grid">
          <div>
            <span className="foot-logo">Abiotic Labs Research</span>
            <div className="foot-tag">Open dispatches, preprints, and technical notes on abiotic molecular synthesis.</div>
            <div style={{ marginTop: '1.2rem', fontFamily: 'var(--mono)', fontSize: '0.78rem' }}>
              Direct research contact: <a href="mailto:research@bld.co.ke" style={{ color: 'var(--ink)' }}>research@bld.co.ke</a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Divisions</h4>
            <ul>
              <li><Link to="/nutrition">Abiotic Nutrition</Link></li>
              <li><Link to="/drugs">Abiotic Drugs</Link></li>
              <li><Link to="/materials">Abiotic Materials</Link></li>
              <li><Link to="/fuels">Abiotic Fuels</Link></li>
              <li><Link to="/industrial">Abiotic Industrial</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">← Abiotic Labs</Link></li>
              <li><Link to="/research">All Publications</Link></li>
              <li><Link to="/nutrition/technology">Technology</Link></li>
              <li><Link to="/nutrition/about">About the Team</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Inquiries</h4>
            <ul>
              <li><a href="mailto:research@bld.co.ke">research@bld.co.ke</a></li>
              <li><a href="mailto:investors@bld.co.ke">investors@bld.co.ke</a></li>
              <li><a href="mailto:hello@bld.co.ke">hello@bld.co.ke</a></li>
              <li><Link to="/nutrition/contact">Contact Form</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="foot-legal">© 2026 Abiotic Labs. Molecular Pathway Intelligence.</span>
          <span className="foot-motto">Open science. Discovered by machine.</span>
        </div>
      </footer>
    </div>
  )
}
