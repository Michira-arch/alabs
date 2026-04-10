import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function SalvageYard({ showToast }) {
  const [pathways, setPathways] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/pathways/')
      .then(r => r.json())
      .then(data => { setPathways(data); setLoading(false) })
      .catch(console.error)
  }, [])

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Open Pathways</div>
        <div className="ph-title">The Salvage Yard</div>
        <div className="ph-sub">Non-flagship synthesis routes released for public use. Deprecated from our active pipeline — usually for energy, yield, or capital cost reasons — not scientific incorrectness.</div>
      </div>

      <div className="salvage-notice">
        <span>⚠</span>
        <div>These routes are released as-is. Verify conditions independently before use. Many are scientifically valid but economically impractical at scale — which may not matter for your application.</div>
      </div>

      {loading && <div style={{ padding: 20, color: 'var(--faint)', fontSize: 13 }}>Loading pathways from database…</div>}

      {pathways.map(pw => (
        <div className="pw-card" key={pw.id}>
          <div className="pw-header">
            <div className="pw-num">{pw.number}</div>
            <div style={{ flex: 1 }}>
              <div className="pw-title">{pw.title}</div>
              <div className="pw-meta">
                Target: {pw.target_molecule}
                {pw.release_date && ` · Released ${pw.release_date}`}
                {pw.yield_ceiling && ` · Ceiling: ${pw.yield_ceiling}`}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
              {(pw.tags || []).map((t, i) => <span key={i} className={`tag ${t.tag_class}`}>{t.text}</span>)}
            </div>
          </div>
          <div className="pw-body">{pw.body}</div>
          {pw.steps && pw.steps.length > 0 && (
            <div className="pw-steps">
              {pw.steps.map((s, i) => (
                <div className="step" key={i}><span className="step-n">S{s.step_number}</span>{s.description}</div>
              ))}
            </div>
          )}
          <div className="pw-footer">
            {(pw.conditions || []).map((c, i) => <span className="cond" key={i}>{c.label}</span>)}
            <button className="btn btn-outline btn-xs" style={{ marginLeft: 'auto' }} onClick={() => showToast?.('Downloading protocol…')}>Export Protocol</button>
            <Link className="btn btn-outline btn-xs" to="/platform/discussions">Discuss</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
