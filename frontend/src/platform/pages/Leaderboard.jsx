import { useState, useEffect } from 'react'

const avatarColors = ['#dff0e6','#dce8f5','#ede0f5','var(--amber-pale)','var(--gold-pale)','#dff0ef']
const textColors = ['#2d6b4a','#1a4a7a','#5a2d8a','#8a4a1a','#6a5a1a','#1a6b4a']
const medals = ['🥇', '🥈', '🥉']

export default function Leaderboard({ showToast }) {
  const [tasks, setTasks] = useState([])
  const [activeLb, setActiveLb] = useState(null)
  const [entries, setEntries] = useState([])
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [loadingTasks, setLoadingTasks] = useState(true)
  const [loadingEntries, setLoadingEntries] = useState(false)

  // Load benchmark tasks once
  useEffect(() => {
    fetch('/api/leaderboard/tasks')
      .then(r => r.json())
      .then(data => {
        setTasks(data)
        if (data.length > 0) setActiveLb(data[0].key)
        setLoadingTasks(false)
      })
      .catch(console.error)
  }, [])

  // Load entries whenever active task changes
  useEffect(() => {
    if (!activeLb) return
    setLoadingEntries(true)
    setEntries([])
    fetch(`/api/leaderboard/entries?task_key=${activeLb}`)
      .then(r => r.json())
      .then(data => { setEntries(Array.isArray(data) ? data : []); setLoadingEntries(false) })
      .catch(err => { console.error(err); setEntries([]); setLoadingEntries(false) })
  }, [activeLb])

  const activeTask = tasks.find(t => t.key === activeLb)

  const rows = entries
    .filter(r => filter === 'All' || r.entry_type === filter)
    .filter(r => !search || r.model_name.toLowerCase().includes(search.toLowerCase()) || r.team.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Community Benchmarks</div>
        <div className="ph-title">Leaderboards</div>
        <div className="ph-sub">Submit your model or pathway to a benchmark task and see how it compares.</div>
      </div>

      <div className="section-head"><h3>Benchmark Tasks</h3><div className="section-line"></div></div>
      {loadingTasks ? (
        <div style={{ padding: 16, color: 'var(--faint)', fontSize: 13 }}>Loading benchmark tasks…</div>
      ) : (
        <div className="g3" style={{ marginBottom: 26 }}>
          {tasks.map(b => (
            <div key={b.key} className={`benchmark-card${activeLb === b.key ? ' selected' : ''}`} onClick={() => setActiveLb(b.key)}>
              <div className="bc-name">{b.name}</div>
              <div className="bc-desc">{b.description}</div>
              <div className="bc-meta">
                <span className={`tag ${b.status === 'New' ? 't-amber' : b.status === 'Community' ? 't-gold' : 't-open'}`}>{b.status}</span>
                <span className="tag t-muted">{b.sample_count}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTask && (
        <>
          <div className="section-head">
            <h3>{activeTask.name} — Rankings</h3>
            <div className="section-line"></div>
            <button className="btn btn-primary btn-sm" onClick={() => showToast?.('Submission form coming soon')}>Submit Entry</button>
          </div>

          <div className="search-bar">
            <div className="search-wrap" style={{ maxWidth: 320 }}>
              <svg className="s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" placeholder="Search submissions…" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="filter-strip">
              {['All', 'Academic', 'Industry', 'Independent'].map(f => (
                <button key={f} className={`fbtn${filter === f ? ' on' : ''}`} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="lb-table">
              <thead><tr><th style={{ width: 48 }}>#</th><th>Model / Submission</th><th>Team / Affiliation</th><th>Score</th><th>Type</th><th>Date</th><th></th></tr></thead>
              <tbody>
                {loadingEntries && <tr><td colSpan={7} style={{ padding: 20, color: 'var(--faint)', textAlign: 'center' }}>Loading entries…</td></tr>}
                {rows.map((r, i) => (
                  <tr key={r.id}>
                    <td>{medals[i] || i + 1}</td>
                    <td>
                      <div className="submitter">
                        <div className="avatar" style={{ background: avatarColors[i % 6], color: textColors[i % 6] }}>{r.model_name.slice(0, 2).toUpperCase()}</div>
                        <div style={{ fontWeight: 500, fontSize: 13 }}>{r.model_name}</div>
                      </div>
                    </td>
                    <td style={{ color: 'var(--muted)', fontSize: '12.5px' }}>{r.team}</td>
                    <td>
                      <div className="score-bar-wrap" style={{ minWidth: 120 }}>
                        <div className="score-bar"><div className="score-fill" style={{ width: `${r.score}%` }}></div></div>
                        <span className="score-num">{r.score}</span>
                      </div>
                    </td>
                    <td><span className={`tag ${r.entry_type === 'Academic' ? 't-blue' : 't-muted'}`}>{r.entry_type}</span></td>
                    <td style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: 'var(--faint)' }}>{new Date(r.submitted_at).toLocaleDateString()}</td>
                    <td><button className="btn btn-outline btn-xs" onClick={() => showToast?.('Details panel coming soon')}>Details</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
