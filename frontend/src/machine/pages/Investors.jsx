import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import SEO from '../../components/SEO'

const milestones = [
  { done: true, text: 'Problem and constraint framework defined' },
  { done: true, text: 'GNN architecture for forward reaction trajectory search selected and designed' },
  { done: true, text: 'Electrochemical feasibility scoring model in development' },
  { done: false, text: 'Proof-of-concept compute demo — glucose route discovery' },
  { done: false, text: 'First academic partner confirmed' },
  { done: false, text: 'Provisional patent filed' },
]

const monetization = [
  { stage: 'Stage 1', time: 'Years 1–3', title: 'IP Licensing', body: 'License validated synthesis routes to food ingredient companies — ADM, Cargill, DSM-Firmenich. Revenue before manufacturing. The engine discovers routes; established industrial players scale them.' },
  { stage: 'Stage 2', time: 'Years 2–5', title: 'High-Value Specialty Molecules', body: 'Synthesize and supply expensive nutrition molecules — cyanocobalamin (B12 ~$100/g), rare amino acids, human milk oligosaccharides.' },
  { stage: 'Stage 3', time: 'Years 3–7', title: 'Space & Defense Contracts', body: 'Compact electricity-driven nutrition synthesis is a direct requirement for NASA long-duration missions, ESA exploration programs, and defense resilience planning.' },
  { stage: 'Stage 4', time: 'Years 5–10+', title: 'Industrial Nutrition Manufacturing', body: 'Own or license the industrial synthesis process at scale. The platform story fully realized: a discovery engine that has found, validated, and industrialized electrochemical routes to every essential nutrition molecule.' },
]

export default function Investors({ showToast }) {
  const { openBriefing } = useOutletContext()
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    setSent(true)
    showToast?.('Request received — we\'ll be in touch within 48 hours.')
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <>
      <SEO
        title="Investors & Pre-Seed Round · Abiotic Nutrition"
        description="Pre-seed investment materials for Abiotic Nutrition. Molecule discovery engine for electrochemical synthesis."
      />

      <div className="phdr">
        <span className="phdr-label">Pre-Seed Round</span>
        <div className="phdr-title">Investors</div>
        <p className="phdr-deck">We are raising. This page is for prospective investors.</p>
        <div className="phdr-rule"></div>
      </div>
      <div className="broadsheet">
        <div className="section-mark">What You Are Investing In</div>
        <div className="lead-grid">
          <div>
            <p className="opening">A molecule discovery engine, not a food company.</p>
            <p className="body-text">The first application is nutrition because the molecule space is well-defined and the problem is civilizationally significant — but the underlying capability applies to any domain where precise molecular synthesis matters. Pharmaceuticals. Specialty materials. Industrial precursors.</p>
            <p className="body-text">The defensibility is not a single product — it is a growing corpus of validated synthesis routes, proprietary training data, and a discovery engine trained specifically on electrochemical constraints. A moat that compounds with every validated route.</p>
          </div>
          <div className="aside-col">
            <div className="aside-note">The comparable framing: AlphaFold for chemistry. A system that discovers what human scientists would not find, validated by executable outputs rather than predictions alone.</div>
          </div>
        </div>

        <div className="pullquote" style={{ maxWidth: '24ch' }}>"The engine discovers. The routes compound. The moat is the corpus."</div>

        <div className="section-mark">Monetization Path</div>
        <div>
          {monetization.map((m) => (
            <div className="mon-item" key={m.stage}>
              <div className="mon-stage">{m.stage}<span className="mon-time">{m.time}</span></div>
              <div>
                <div className="mon-title">{m.title}</div>
                <p className="mon-body">{m.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="s-div">§</div>
        <div className="section-mark">Milestones</div>
        <p className="body-text" style={{ maxWidth: '50ch', marginBottom: '2rem' }}>Status indicators reflect actual completion. Nothing is marked done that is not done.</p>
        <div>
          {milestones.map((m, i) => (
            <div className="ms-item" key={i}>
              <span className={`ms-icon ${m.done ? 'ok' : 'no'}`}>{m.done ? '✓' : '○'}</span>
              <span className="ms-text">{m.text}</span>
            </div>
          ))}
        </div>

        <div className="s-div">§</div>
        <div className="section-mark">Use of Funds</div>
        <div className="bn-row">
          <div className="bn-item"><span className="bn-num">~40%</span><span className="bn-label">Compute (GNN training, discovery runs)</span></div>
          <div className="bn-item" style={{ paddingLeft: '3rem' }}><span className="bn-num">~30%</span><span className="bn-label">Lab validation partnerships</span></div>
          <div className="bn-item" style={{ paddingLeft: '3rem' }}><span className="bn-num">~30%</span><span className="bn-label">IP, legal &amp; operations</span></div>
        </div>
        <p className="body-text" style={{ maxWidth: '54ch', marginBottom: '3rem' }}>This round funds the glucose proof of concept, the first academic partnership, and the provisional patent — the three milestones that de-risk the Series Seed.</p>

        {/* DIRECT INVESTOR CONTACT */}
        <div style={{ padding: '2.5rem', border: '1px solid var(--rule)', background: 'var(--paper2, #EDE7D8)', maxWidth: '580px' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.6rem' }}>
            Request Pre-Seed Briefing &amp; Materials
          </div>
          <p style={{ fontFamily: 'var(--body)', fontSize: '0.98rem', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '1.6rem' }}>
            We conduct 30-minute technical diligence briefings with institutional funds and angel syndicates. Direct all inquiries to <strong>investors@bld.co.ke</strong>.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a
              href="mailto:investors@bld.co.ke?subject=Pre-Seed%20Investor%20Inquiry%20%E2%80%94%20Briefing%20Request&body=Hello%20Elington%20%26%20Abiotic%20Labs%20Team%2C%0A%0AWe%20are%20reaching%20out%20regarding%20your%20pre-seed%20round.%0A%0AFirm%2FInvestor%3A%20%0AStage%20Focus%3A%20%0ATypical%20Check%20Size%3A%20%0ATypical%20Thesis%20Context%3A%20"
              className="submit-btn"
              style={{ textDecoration: 'none', display: 'inline-block', width: 'auto', padding: '0.7rem 1.6rem' }}
            >
              Compose Email to investors@bld.co.ke →
            </a>
            <button
              type="button"
              className="submit-btn"
              style={{ width: 'auto', padding: '0.7rem 1.2rem', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--rule)' }}
              onClick={() => {
                navigator.clipboard.writeText('investors@bld.co.ke')
                showToast?.('Copied investors@bld.co.ke to clipboard')
              }}
            >
              Copy Email
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
