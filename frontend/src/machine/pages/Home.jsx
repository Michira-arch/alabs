import { Link, useOutletContext } from 'react-router-dom'

const formulas = ['C₆H₁₂O₆','C₁₂H₂₂O₁₁','H₂N–CH₂–COOH','C₆₃H₈₈CoN₁₄O₁₄P','C₂H₅NO₂','C₁₂H₂₄N₂O₄','C₅H₉NO₄','C₆H₁₄N₄O₂','C₅H₁₀O₅','C₂₁H₂₀O₆','C₁₀H₁₆N₅O₁₃P₃','C₂₀H₃₀O','fructose · sorbitol · ribose · glucose · sucrose · curcumin · ATP · cholesterol · retinol · leucine']

export default function Home() {
  const { openBriefing } = useOutletContext()
  const formulaStrip = [...formulas, ...formulas]

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-rule"></div>
        <div className="hero-grid">
          <h1 className="hero-hl">Synthesizing All Nutrition Molecules —<br />Electrically.</h1>
          <div className="hero-side">
            <span className="hero-kicker">Deep Technology · Pre-seed Stage</span>
            <p className="hero-desc">We build neural networks that discover machineable pathways to nutritional molecules; where the energy comes entirely from electricity.</p>
            <div className="hero-links">
              <Link className="hlink" to="/technology">Explore the Platform →</Link>
              <Link className="hlink" to="/investors">Investor Materials →</Link>
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
            <p className="opening">Agriculture is a fragile system on which eight billion lives depend.</p>
            <p className="body-text">Food production requires stable land, water, climate, and human labor. It is a biological system operating at the boundary of what Earth's conditions reliably permit. The inputs are geographic, atmospheric, temporal sometimes geo-political; none of them fully controllable, none of them guaranteed to remain stable.</p>
            <p className="body-text">Climate disruption, conflict, pandemic, volcanic winter, and supply chain collapse have each, historically, produced famine. The history of hunger is not a history of scarcity; but a history of system failure. Beyond Earth, the problem becomes absolute. There is no soil on Mars. No rain cycle. No photosynthesis.</p>
          </div>
          <div className="aside-col">
            <div className="aside-note">The scope of this work is civilizational. But the method is narrow and specific: we harness machine discovery(ML frameworks) to systematically discover and optimize electricity-powered chemical synthesis processes.</div>
            <div className="aside-formula">C₆H₁₂O₆<br />glucose</div>
          </div>
        </div>

        <div className="pullquote">
          "The caloric supply chain is not resilient, and we are building a more versatile alternative to make civilization more robust and able to thrive better, in and beyond Earth."
          <cite>— Machine founding thesis, 2026</cite>
        </div>

        {/* 002 — THE METHOD */}
        <div className="section-mark">002 · The Method</div>
        <div className="three-col">
          <div className="col-item">
            <span className="col-n">Discovery</span>
            <h3>Machine-led retrosynthetic search</h3>
            <p>We optimize neural networks through a search space, to workout an industrially viable synthesis process</p>
          </div>
          <div className="col-item">
            <span className="col-n">Execution</span>
            <h3>Electricity only, by design</h3>
            <p>Every pathway the engine discovers must be executable using electrical energy alone. The constraint is a design requirement to make every route deployable anywhere energy exists.</p>
          </div>
          <div className="col-item">
            <span className="col-n">Completeness</span>
            <h3>Every class of essential molecule</h3>
            <p>Not a supplement nor a single product; The scope is total: every class of molecule essential to human and animal nutrition.</p>
          </div>
        </div>

        {/* REACTION NOTATION */}
        <div className="reaction">
          {[
            { label: 'SELFIES / graph', text: 'Target Molecule', hl: true },
            { label: 'retrosynthetic search', text: 'ML Retrosynthesis' },
            { label: 'ranked by feasibility', text: 'Pathway Candidates' },
            { label: 'electricity-only check', text: 'Validation' },
            { label: 'annotated output', text: 'Validated Route', hl: true },
          ].map((node, i, arr) => (
            <span key={i} style={{ display: 'contents' }}>
              <div>
                <div className={`rx-node${node.hl ? ' hl' : ''}`}>{node.text}</div>
                <div className="rx-label">{node.label}</div>
              </div>
              {i < arr.length - 1 && <div className="rx-arr">——→</div>}
            </span>
          ))}
        </div>

        <div className="s-div">§</div>

        {/* 003 — MOLECULE ROADMAP */}
        <div className="section-mark">003 · Molecule Roadmap</div>
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
              <td><span className="td-title">Simple Carbohydrates</span></td>
              <td className="td-mono">glucose · fructose · sucrose<br />ribose · sorbitol</td>
              <td><span className="td-pill on">▸ Active</span></td>
            </tr>
            <tr>
              <td className="td-mono">II</td>
              <td><span className="td-title">Amino Acids &amp; Vitamins</span></td>
              <td className="td-mono">9 essential AA · B12<br />D3 · folate · niacin</td>
              <td><span className="td-pill soon">Roadmap</span></td>
            </tr>
            <tr>
              <td className="td-mono">III</td>
              <td><span className="td-title">Complex Proteins &amp; Full Profiles</span></td>
              <td className="td-mono">complete proteins · omega FA<br />polysaccharides · fat-sol. vitamins</td>
              <td><span className="td-pill far">Long Horizon</span></td>
            </tr>
          </tbody>
        </table>
        <Link className="text-link" to="/technology">Full methodology and roadmap →</Link>

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

        <div className="pullquote" style={{ maxWidth: '28ch' }}>
          The science is ready. The tools exist. What was missing was a team willing to focus on this specific problem.
        </div>
      </div>
    </>
  )
}
