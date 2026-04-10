import { useState, useEffect } from 'react'

export default function Changelog() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/changelog/')
      .then(r => r.json())
      .then(data => { setEntries(data); setLoading(false) })
      .catch(console.error)
  }, [])

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Platform</div>
        <div className="ph-title">Changelog</div>
        <div className="ph-sub">A running log of new resources, tools, benchmarks, and platform updates.</div>
      </div>

      {loading && <div style={{ padding: 20, color: 'var(--faint)', fontSize: 13 }}>Loading changelog…</div>}

      <div className="timeline">
        {entries.map((e, i) => (
          <div className="tl-item" key={e.id}>
            <div className="tl-marker"></div>
            <div className="tl-content">
              <div className="tl-date">{new Date(e.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              <div className="tl-title">{e.title}</div>
              <div className="tl-desc">{e.description}</div>
              <div style={{ marginTop: 6 }}>
                <span className={`tag ${e.tag_class}`}>{e.entry_type}</span>
                {e.version && <span className="tag t-muted" style={{ marginLeft: 6 }}>{e.version}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
