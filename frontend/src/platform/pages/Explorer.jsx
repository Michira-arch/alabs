import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Explorer({ showToast }) {
  const [molecules, setMolecules] = useState([])
  const [selected, setSelected] = useState(null)
  const [resources, setResources] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/molecules/')
      .then(r => r.json())
      .then(data => {
        setMolecules(data)
        if (data.length > 0) setSelected(data[0])
        setLoading(false)
      })
      .catch(console.error)
  }, [])

  useEffect(() => {
    if (!selected) return
    setResources([])
    fetch(`/api/molecules/${selected.key}/resources`)
      .then(r => r.json())
      .then(setResources)
      .catch(() => setResources([]))
  }, [selected])

  const mol = selected
  const filtered = molecules.filter(m =>
    !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.formula.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Molecule Explorer</div>
        <div className="ph-title">Browse by Target</div>
        <div className="ph-sub">Find every dataset, tool, pathway, model, and discussion thread associated with a specific target molecule.</div>
      </div>

      <div className="search-bar">
        <div className="search-wrap">
          <svg className="s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Search molecules by name or formula…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      {loading && <div style={{ padding: 20, color: 'var(--faint)', fontSize: 13 }}>Loading molecules from database…</div>}

      <div className="mol-grid">
        {filtered.map(m => (
          <div key={m.key} className={`mol-card${selected?.key === m.key ? ' selected' : ''}`} onClick={() => setSelected(m)}>
            <div className="mol-formula">{m.formula}</div>
            <div className="mol-name">{m.name}</div>
            <div className="mol-class">{m.molecule_class}</div>
          </div>
        ))}
      </div>

      {mol && (
        <div className="mol-detail">
          <div className="mol-detail-header">
            <div>
              <div className="mol-detail-title">{mol.name}</div>
              <div className="mol-detail-formula">{mol.formula} — {mol.molecule_class}</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <a href={`https://pubchem.ncbi.nlm.nih.gov/compound/${encodeURIComponent(mol.name)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">View on PubChem ↗</a>
              <Link className="btn btn-primary btn-sm" to="/platform/contribute">Add Resource</Link>
            </div>
          </div>
          {resources.length === 0 ? (
            <div style={{ padding: '12px 0', color: 'var(--faint)', fontSize: 13 }}>No linked resources yet.</div>
          ) : (
            resources.map((r, i) => (
              <div className="mol-resource-row" key={i}>
                <div style={{ fontWeight: 500, fontSize: 13 }}>{r.name}</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span className={`tag ${r.tag_class || 't-muted'}`}>{r.label || r.category}</span>
                  <button className="btn btn-outline btn-xs" onClick={() => showToast?.('Opening…')}>View →</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
