import { Link, useOutletContext } from 'react-router-dom'

export default function DivisionHome({ 
  label, 
  heroTitle, 
  heroDesc, 
  formulas, 
  problemOpening, 
  problemBody, 
  methodCol1Title, 
  methodCol1Desc,
  methodCol2Title,
  methodCol2Desc,
  methodCol3Title,
  methodCol3Desc,
  roadmapTarget1,
  roadmapMolecules1,
  roadmapTarget2,
  roadmapMolecules2,
  roadmapTarget3,
  roadmapMolecules3,
  quote,
  cite,
  path
}) {
  const { openBriefing } = useOutletContext()
  const formulaStrip = [...formulas, ...formulas]

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-rule"></div>
        <div className="hero-grid">
          <h1 className="hero-hl">{heroTitle}</h1>
          <div className="hero-side">
            <span className="hero-kicker">{label} · Est. 2026</span>
            <p className="hero-desc">{heroDesc}</p>
            <div className="hero-links">
              <Link className="hlink" to="/research">Related Research Papers →</Link>
              <span className="hlink" onClick={openBriefing}>Request a Briefing →</span>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULA STRIP */}
      <div className="formula-strip">
        <div className="formula-scroll">
          {formulaStrip.map((f, i) => (
            <span key={i}>
              {f}<span className="dot"> · </span>
            </span>
          ))}
        </div>
      </div>

      <div className="broadsheet">
        {/* 001 — THE PROBLEM */}
        <div className="section-mark">001 · The Problem</div>
        <div className="lead-grid">
          <div>
            <p className="opening">{problemOpening}</p>
            <p className="body-text">{problemBody}</p>
          </div>
          <div className="aside-col">
            <div className="aside-note">The scope of this work is civilizational. But the method is narrow and specific: we harness machine discovery(ML frameworks) to systematically discover and optimize electricity-powered chemical synthesis processes.</div>
            <div className="aside-formula">{formulas[0]}</div>
          </div>
        </div>

        <div className="pullquote">
          "{quote}"
          <cite>— {cite}</cite>
        </div>

        {/* 002 — THE METHOD */}
        <div className="section-mark">002 · The Method</div>
        <div className="three-col">
          <div className="col-item">
            <span className="col-n">Discovery</span>
            <h3>{methodCol1Title}</h3>
            <p>{methodCol1Desc}</p>
          </div>
          <div className="col-item">
            <span className="col-n">Execution</span>
            <h3>{methodCol2Title}</h3>
            <p>{methodCol2Desc}</p>
          </div>
          <div className="col-item">
            <span className="col-n">Completeness</span>
            <h3>{methodCol3Title}</h3>
            <p>{methodCol3Desc}</p>
          </div>
        </div>

        <div className="s-div">§</div>

        {/* 003 — ROADMAP */}
        <div className="section-mark">003 · {label} Roadmap</div>
        <div className="marginal-grid" style={{ marginBottom: '2rem' }}>
          <p className="body-text">We proceed in order of complexity. Each phase validates and funds the next. The sequence is determined by industrial tractability and validation potential as well as commercial viability.</p>
          <div className="margin-note"><strong>Sequencing principle</strong>The roadmap is ordered by what the engine can prove, not by what the market wants first.</div>
        </div>

        <table className="ed-table">
          <thead>
            <tr><th>Phase</th><th>Target Class</th><th>Key Molecules</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr>
              <td className="td-mono">I</td>
              <td><span className="td-title">{roadmapTarget1}</span></td>
              <td className="td-mono">{roadmapMolecules1}</td>
              <td><span className="td-pill on">▸ Active</span></td>
            </tr>
            <tr>
              <td className="td-mono">II</td>
              <td><span className="td-title">{roadmapTarget2}</span></td>
              <td className="td-mono">{roadmapMolecules2}</td>
              <td><span className="td-pill on">▸ Active</span></td>
            </tr>
            <tr>
              <td className="td-mono">III</td>
              <td><span className="td-title">{roadmapTarget3}</span></td>
              <td className="td-mono">{roadmapMolecules3}</td>
              <td><span className="td-pill on">▸ Active</span></td>
            </tr>
          </tbody>
        </table>

        <div className="s-div">§</div>

        {/* 004 — WHY NOW */}
        <div className="section-mark">004 · Why Now</div>
        <div className="fw-hl">Three converging forces. One narrow window.</div>
        <div className="three-col">
          <div className="col-item">
            <span className="col-n">01 — Machine Learning</span>
            <p>Neural networks have reached the capability threshold required to navigate retrosynthetic chemical space at scale; exploring routes that no human chemist could enumerate in any practical timeframe.</p>
          </div>
          <div className="col-item">
            <span className="col-n">02 — Electricity as the Ultimate Energy Carrier</span>
            <p>Electricity is the most versatile and controllable form of energy: easily converted to other forms of energy. Tapping sources into electricity is mature and scaling rapidly, making it the ideal driver for flexible synthesis.</p>
          </div>
          <div className="col-item">
            <span className="col-n">03 — Compute Economics</span>
            <p>The cost of compute has fallen to a point where an exploration-heavy discovery pipeline is economically viable for a startup, not just a national laboratory. This changes what is possible.</p>
          </div>
        </div>
      </div>
    </>
  )
}
