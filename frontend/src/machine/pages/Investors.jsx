import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

const milestones = [
  { done: true, text: 'Problem and constraint framework defined' },
  { done: true, text: 'GNN architecture for retrosynthesis selected and designed' },
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
        <div style={{ maxWidth: '420px' }}>
          <div className="fg"><label>Name</label><input type="text" placeholder="Full name" /></div>
          <div className="fg"><label>Firm</label><input type="text" placeholder="Fund name" /></div>
          <div className="fg"><label>Email</label><input type="email" placeholder="you@fund.com" /></div>
          <div className="fg"><label>Note</label><textarea placeholder="Stage focus, thesis context..."></textarea></div>
          <button className="submit-btn" onClick={handleSubmit}>
            {sent ? 'Sent ✓' : 'Request 30-minute briefing →'}
          </button>
        </div>
      </div>
    </>
  )
}
