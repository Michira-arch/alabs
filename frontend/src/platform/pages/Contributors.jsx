import { useState, useEffect } from 'react'

export default function Contributors() {
  const [contributors, setContributors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/contributors/')
      .then(r => r.json())
      .then(data => { setContributors(data); setLoading(false) })
      .catch(console.error)
  }, [])

  const getInitials = (name) => name ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : '??'
  const institutions = [...new Set(contributors.map(c => c.affiliation).filter(Boolean))]

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Community</div>
        <div className="ph-title">Contributors</div>
        <div className="ph-sub">People and institutions advancing the abiotic synthesis commons.</div>
      </div>

      <div className="section-head"><h3>People</h3><div className="section-line"></div></div>
      {loading && <div style={{ padding: 20, color: 'var(--faint)', fontSize: 13 }}>Loading contributors…</div>}
      <div className="g4" style={{ marginBottom: 30 }}>
        {contributors.map((c, i) => (
          <div className="contrib-card" key={c.id}>
            <div className="contrib-avatar" style={{ background: c.avatar_color || '#dff0e6', color: '#2d6b4a' }}>
              {getInitials(c.display_name)}
            </div>
            <div className="contrib-name">{c.display_name}</div>
            <div className="contrib-affil">{c.affiliation || 'Independent'}</div>
            <div className="contrib-stats">
              <div className="cs"><div className="cs-n">{c.role}</div><div className="cs-l">Role</div></div>
            </div>
          </div>
        ))}
      </div>

      {institutions.length > 0 && (
        <>
          <div className="section-head"><h3>Participating Institutions</h3><div className="section-line"></div></div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {institutions.map((inst, i) => (
              <div key={i} className="card" style={{ padding: '10px 18px', fontSize: 13, fontWeight: 500, display: 'inline-flex' }}>
                {inst}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
