import { Link } from 'react-router-dom'
import { ARTICLES } from '../../data/articles'

const threads = [
  {
    title: 'Neural Architecture for Retrosynthetic Search in Electrochemical/Latent Space',
    desc: 'Formulating step-wise electrochemical synthesis as a constrained trajectory in continuous molecular embedding space.',
    status: 'Preprint Available',
    year: '2026 —',
    slug: 'neural-retrosynthetic-search-electrochemical-space'
  },
  {
    title: 'Training: Loss Functions & Thermodynamic Feasibility Scoring',
    desc: 'Development of an appropriate loss function and optimizer incorporating electrochemical stability windows.',
    status: 'Technical Note Available',
    year: '2026 —',
    slug: 'loss-functions-thermodynamic-feasibility-scoring'
  },
  {
    title: 'Proof of Concept: Glucose Synthesis Route Discovery via Machine Search',
    desc: 'Given glucose (dextrose, C₆H₁₂O₆) as target molecule, evaluating automated non-biological synthesis pathways from C1 feedstocks.',
    status: 'Research Note Available',
    year: '2026 —',
    slug: 'glucose-synthesis-route-discovery'
  },
]

export default function Research() {
  const papers = ARTICLES.filter(a => a.category === 'Research Note' || a.category === 'Preprint')
  const notes = ARTICLES.filter(a => a.category === 'Technical Note')

  return (
    <>
      <div className="phdr">
        <span className="phdr-label">Scientific Output</span>
        <div className="phdr-title">Research</div>
        <p className="phdr-deck">Our findings, methods, and published work. Updated as the work proceeds.</p>
        <div className="phdr-rule"></div>
      </div>

      <div className="broadsheet">
        {/* ACTIVE THREADS */}
        <div className="section-mark">Active Research Threads</div>
        <div>
          {threads.map((t, i) => (
            <div className="thread-item" key={i}>
              <div>
                <div className="ti-title">
                  {t.slug ? (
                    <Link to={`/research/${t.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {t.title} <span style={{ color: 'var(--ink3)', fontSize: '0.9rem' }}>↗</span>
                    </Link>
                  ) : t.title}
                </div>
                {t.desc && <p style={{ fontSize: '0.88rem', color: 'var(--ink2)', marginTop: '0.3rem' }}>{t.desc}</p>}
                {t.slug && (
                  <Link to={`/research/${t.slug}`} style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: '#1a6b4a', textDecoration: 'none', display: 'inline-block', marginTop: '0.4rem' }}>
                    Read Full Paper / Note →
                  </Link>
                )}
              </div>
              <div>
                <span className="ti-status">{t.status}</span><br />
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.56rem', color: 'var(--ink3)', marginTop: '0.5rem', display: 'block' }}>{t.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* PUBLICATIONS */}
        <div className="s-div">§</div>
        <div className="section-mark">Publications &amp; Working Papers</div>
        <p className="body-text" style={{ maxWidth: '52ch', marginBottom: '2rem' }}>
          Formal preprints and research notes describing our molecular discovery results and phase validation.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          {papers.map(p => (
            <div key={p.id} style={{ padding: '1.8rem', border: '1px solid var(--rule)', background: 'var(--paper2, #EDE7D8)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a6b4a' }}>
                  {p.category} · {p.date}
                </span>
                {p.doi && <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--ink3)' }}>{p.doi}</span>}
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 700, margin: '0.4rem 0 0.6rem 0' }}>
                <Link to={`/research/${p.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {p.title}
                </Link>
              </h3>
              <p style={{ fontFamily: 'var(--body)', fontSize: '0.98rem', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {p.abstract}
              </p>
              <Link to={`/research/${p.slug}`} className="text-link" style={{ fontSize: '0.85rem' }}>
                Read Research Paper →
              </Link>
            </div>
          ))}
        </div>

        {/* TECHNICAL NOTES */}
        <div className="s-div">§</div>
        <div className="section-mark">Technical Notes</div>
        <p className="body-text" style={{ maxWidth: '52ch', marginBottom: '2rem' }}>
          As we build and test the system, technical notes are published to share algorithms, loss functions, and insights with the research community.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          {notes.map(n => (
            <div key={n.id} style={{ padding: '1.8rem', border: '1px solid var(--rule)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1b4b79' }}>
                  {n.category} · {n.date}
                </span>
                {n.doi && <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--ink3)' }}>{n.doi}</span>}
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 700, margin: '0.4rem 0 0.6rem 0' }}>
                <Link to={`/research/${n.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {n.title}
                </Link>
              </h3>
              <p style={{ fontFamily: 'var(--body)', fontSize: '0.95rem', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {n.subtitle}
              </p>
              <Link to={`/research/${n.slug}`} className="text-link" style={{ fontSize: '0.85rem' }}>
                Read Technical Note →
              </Link>
            </div>
          ))}
        </div>

        {/* COLLABORATION */}
        <div className="s-div">§</div>
        <div className="section-mark">Collaboration</div>
        <div className="lead-grid">
          <div>
            <p className="opening" style={{ fontSize: 'clamp(1.4rem,2.6vw,2rem)' }}>Looking for the right partners.</p>
            <p className="body-text">
              We are actively seeking academic partners in electrochemistry, computational chemistry, and machine learning.
              If your lab works on electroorganic synthesis, molecular retrosynthesis, or related problems — we want to talk.
              Collaboration takes the form of joint experiments, shared datasets, or co-authorship on validation papers.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a className="text-link" href="mailto:research@bld.co.ke?subject=Research%20Collaboration%20Inquiry">
                Email Research Team (research@bld.co.ke) →
              </a>
              <Link className="text-link" to="/nutrition/contact">
                Contact Form →
              </Link>
            </div>
          </div>
          <div className="aside-col">
            <div className="aside-note">Priority areas: Machine learning, electrochemistry, computational chemistry</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', marginTop: '1rem', color: 'var(--ink3)' }}>
              Direct: research@bld.co.ke
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
