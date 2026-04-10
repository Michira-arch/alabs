import { Link } from 'react-router-dom'

const threads = [
  { title: 'Self Convolutional Neural Network Architecture for Retrosynthetic Search in Electrochemical/Latent Space', status: 'In Progress', year: '2026 —' },
  { title: 'Training', desc: 'Development of an appropriate loss function and optimizer', status: 'In Progress', year: '2026 —' },
  { title: 'Proof of Concept: Glucose Synthesis Route Discovery via Machine Search', desc: 'Given glucose (dextrose) as a target molecule, can the system identify synthesis routes consistent with published literature?.', status: 'In Progress', year: '2026 —' },
]

export default function Research() {
  return (
    <>
      <div className="phdr">
        <span className="phdr-label">Scientific Output</span>
        <div className="phdr-title">Research</div>
        <p className="phdr-deck">Our findings, methods, and published work. Updated as the work proceeds.</p>
        <div className="phdr-rule"></div>
      </div>
      <div className="broadsheet">
        <div className="section-mark">Active Research Threads</div>
        <div>
          {threads.map((t, i) => (
            <div className="thread-item" key={i}>
              <div>
                <div className="ti-title">{t.title}</div>
                {t.desc && <p style={{ fontSize: '0.88rem', color: 'var(--ink2)' }}>{t.desc}</p>}
              </div>
              <div>
                <span className="ti-status">{t.status}</span><br />
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.56rem', color: 'var(--ink3)', marginTop: '0.5rem', display: 'block' }}>{t.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="s-div">§</div>
        <div className="section-mark">Publications</div>
        <p className="body-text" style={{ maxWidth: '52ch', marginBottom: '2rem' }}>Publications will appear here as work is completed. First preprint anticipated upon Phase I proof-of-concept completion.</p>
        <div style={{ padding: '3rem', border: '1px solid var(--rule)', textAlign: 'center' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--ink3)', fontSize: '0.9rem' }}>No publications yet. The work proceeds. Results follow.</p>
        </div>

        <div className="s-div">§</div>
        <div className="section-mark">Technical Notes</div>
        <p className="body-text" style={{ maxWidth: '52ch', marginBottom: '2rem' }}>As we build and test the system, technical notes will be published here to share insights, challenges, and breakthroughs with the broader research community.</p>
        <div style={{ padding: '3rem', border: '1px solid var(--rule)', textAlign: 'center' }}>
          <p style={{ fontStyle: 'italic', color: 'var(--ink3)', fontSize: '0.9rem' }}>No technical notes yet. The work proceeds. Insights follow.</p>
        </div>

        <div className="s-div">§</div>
        <div className="section-mark">Collaboration</div>
        <div className="lead-grid">
          <div>
            <p className="opening" style={{ fontSize: 'clamp(1.4rem,2.6vw,2rem)' }}>Looking for the right partners.</p>
            <p className="body-text">We are actively seeking academic partners in electrochemistry, computational chemistry, and machine learning. If your lab works on electroorganic synthesis, molecular retrosynthesis, or related problems — we want to talk. Collaboration takes the form of joint experiments, shared datasets, or co-authorship on validation papers.</p>
            <Link className="text-link" to="/contact">Propose a Collaboration →</Link>
          </div>
          <div className="aside-col">
            <div className="aside-note">Priority areas: Machine learning, electrochemistry, computational chemistry</div>
          </div>
        </div>
      </div>
    </>
  )
}
