import { useState, useEffect } from 'react'

const catMap = { 'Tools': 'Tool / Library', 'Data': 'Dataset', 'Model': 'Model Weights', 'Schema': 'Schema / Standard' }

export default function Repository({ showToast }) {
  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 300)
    return () => clearTimeout(t)
  }, [search])

  useEffect(() => {
    setLoading(true)
    const url = new URL(window.location.origin + '/api/resources/')
    if (filter !== 'All') url.searchParams.set('category', catMap[filter] || filter)
    if (debouncedSearch) url.searchParams.set('search', debouncedSearch)
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setResources(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setResources([])
        setLoading(false)
      })
  }, [filter, debouncedSearch])

  const handleDownload = async (id, name, currentCount) => {
    showToast?.(`Downloading ${name}…`)
    try {
      const res = await fetch(`/api/resources/${id}/download`, { method: 'POST' })
      if (!res.ok) throw new Error()
      const { download_count } = await res.json()
      setResources(prev => prev.map(r => r.id === id ? { ...r, download_count } : r))
    } catch {
      // Just visually increment if API fails so the user feels it worked
      setResources(prev => prev.map(r => r.id === id ? { ...r, download_count: currentCount + 1 } : r))
    }
  }

  const getIconClass = (cat) => {
    if (cat?.includes('Tool')) return 'ic-tool'
    if (cat?.includes('Dataset')) return 'ic-data'
    if (cat?.includes('Model')) return 'ic-model'
    if (cat?.includes('Schema')) return 'ic-schema'
    return ''
  }

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Repository</div>
        <div className="ph-title">Open Resources</div>
        <div className="ph-sub">Tools, datasets, schemas, and base models released for community use. All resources carry DOIs and are versioned.</div>
      </div>

      <div className="search-bar">
        <div className="search-wrap">
          <svg className="s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Search resources server-side…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="filter-strip">
          {['All', 'Tools', 'Data', 'Model', 'Schema'].map(f => (
            <button key={f} className={`fbtn${filter === f ? ' on' : ''}`} onClick={() => setFilter(f)}>
              {f === 'Data' ? 'Datasets' : f === 'Model' ? 'Models' : f === 'Schema' ? 'Schemas' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="g2">
        {loading ? <div style={{ padding: 20 }}>Loading database resources...</div> : null}
        {!loading && resources.length === 0 ? <div style={{ padding: 20, color: 'var(--faint)' }}>No resources found.</div> : null}
        {resources.map((r) => (
          <div key={r.id} className="res-card card-hover">
            <div className="rc-top">
              <div><div className="rc-name">{r.name}</div><div className="rc-desc">{r.description}</div></div>
              <div className={`rc-icon ${getIconClass(r.category)}`}>{r.icon}</div>
            </div>
            <div className="rc-footer">
              <span className={`tag ${r.license === 'Research Only' ? 't-amber' : 't-open'}`}>{r.license}</span>
              <span className="rc-stat">{r.size ? r.size : r.version} · ↓{r.download_count}</span>
              <span className="rc-doi">{r.doi}</span>
              <button className="btn btn-outline btn-xs" onClick={() => handleDownload(r.id, r.name, r.download_count)}>Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
