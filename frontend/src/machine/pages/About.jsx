import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="phdr">
        <span className="phdr-label">Company</span>
        <div className="phdr-title">About</div>
        <p className="phdr-deck">The people and the purpose behind the platform.</p>
        <div className="phdr-rule"></div>
      </div>
      <div className="broadsheet">
        <div className="section-mark">Origin</div>
        <div className="lead-grid">
          <div>
            <p className="body-text">The question that started this was not about food. It was about what happens to people when supply chains fail — and what it would take to make nutrition genuinely independent of the conditions that cause supply chains to fail.</p>
            <p className="body-text">Agriculture, as a system, is extraordinarily sophisticated and extraordinarily fragile. It requires the right soil, the right water, the right temperature, the right labor, and the right logistics — all simultaneously. When any one of those conditions breaks, people go hungry.</p>
            <p className="body-text">The insight was simple: if you can synthesize a molecule, you don't need to grow it. And if you can synthesize it using only electricity, you can do it anywhere energy exists. Machine was built to answer whether machine discovery — neural networks searching chemical space — could find electrochemical routes to the molecules that matter most.</p>
          </div>
          <div className="aside-col">
            <div className="aside-note">The name is intentional: this is about what machines can discover that humans cannot, applied to a problem that humans have not otherwise solved.</div>
          </div>
        </div>

        <div className="s-div">§</div>
        <div className="section-mark">Team</div>
        <div>
          <div className="team-item">
            <div>
              <div className="tm-name">Founder</div>
              <span className="tm-role">Chief Executive Officer</span>
              <a className="tm-link" href="#">LinkedIn →</a>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink2)', lineHeight: '1.82' }}>Full biographical detail will appear here. The team is small by design — a problem that requires the intersection of machine learning, electrochemistry, and intellectual patience does not benefit from early headcount growth.</p>
          </div>
          <div className="team-item" style={{ opacity: 0.45 }}>
            <div>
              <div className="tm-name">Open Role</div>
              <span className="tm-role" style={{ color: 'var(--ink3)' }}>Computational Chemist</span>
              <Link className="tm-link" to="/contact">Inquire →</Link>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink2)', lineHeight: '1.82' }}>Seeking researchers with experience in GNN-based retrosynthesis, molecular property prediction, or electrochemical reaction modeling. Preference for candidates with both ML and chemistry backgrounds.</p>
          </div>
          <div className="team-item" style={{ opacity: 0.45 }}>
            <div>
              <div className="tm-name">Open Role</div>
              <span className="tm-role" style={{ color: 'var(--ink3)' }}>Electrochemist</span>
              <Link className="tm-link" to="/contact">Inquire →</Link>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink2)', lineHeight: '1.82' }}>Seeking experimental electrochemists with synthesis experience for validation partnership or full-time collaboration on Phase I. Academic collaboration also considered.</p>
          </div>
        </div>

        <div className="s-div">§</div>
        <div className="section-mark">The Company</div>
        <p className="body-text" style={{ maxWidth: '60ch', marginBottom: '3rem' }}>Machine is a pre-seed stage deep technology company focused on building a machine-discovery engine for electrochemical synthesis of nutritional molecules. This year, the work is focused on three things: proving the GNN architecture produces valid retrosynthetic routes for simple carbohydrates, developing the electrochemical feasibility scoring model, and running the first end-to-end glucose proof of concept.</p>
        <div className="bn-row">
          <div className="bn-item"><span className="bn-num">Pre-seed</span><span className="bn-label">Stage</span></div>
          <div className="bn-item" style={{ paddingLeft: '3rem' }}><span className="bn-num">C Corp</span><span className="bn-label">Entity Type</span></div>
          <div className="bn-item" style={{ paddingLeft: '3rem' }}><span className="bn-num">Phase I</span><span className="bn-label">Current Focus</span></div>
        </div>
      </div>
    </>
  )
}
