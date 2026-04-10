import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [stats, setStats] = useState({ resources: '—', pathways: '—', downloads: '—', contributors: '—' })
  const [topRequests, setTopRequests] = useState([])
  const [changelog, setChangelog] = useState([])
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    // Fetch live data in parallel
    Promise.all([
      fetch('/api/resources/').then(r => r.json()),
      fetch('/api/pathways/').then(r => r.json()),
      fetch('/api/contributors/').then(r => r.json()),
      fetch('/api/requests/').then(r => r.json()),
      fetch('/api/changelog/').then(r => r.json()),
      fetch('/api/leaderboard/entries?task_key=yield&limit=3').then(r => r.json()),
    ]).then(([resources, pathways, contributors, requests, changelog, lb]) => {
      const totalDownloads = Array.isArray(resources) ? resources.reduce((sum, r) => sum + (r.download_count || 0), 0) : 0
      setStats({
        resources: Array.isArray(resources) ? resources.length : '—',
        pathways: Array.isArray(pathways) ? pathways.length : '—',
        downloads: totalDownloads,
        contributors: Array.isArray(contributors) ? contributors.length : '—',
      })
      setTopRequests(Array.isArray(requests) ? requests.slice(0, 3) : [])
      setChangelog(Array.isArray(changelog) ? changelog.slice(0, 5) : [])
      setLeaderboard(Array.isArray(lb) ? lb.slice(0, 3) : [])
    }).catch(console.error)
  }, [])

  const medals = ['🥇', '🥈', '🥉']

  return (
    <div className="page">
      <div className="platform-hero">
        <h1>Open Synthesis Infrastructure</h1>
        <p>Standardization tools, negative data, validated pathways, and community benchmarks — the foundational commons for abiotic food chemistry.</p>
        <div className="hero-btns">
          <Link className="hero-btn hero-btn-p" to="/platform/repository">Browse Resources</Link>
          <Link className="hero-btn hero-btn-s" to="/platform/leaderboard">View Leaderboards</Link>
          <Link className="hero-btn hero-btn-s" to="/platform/contribute">Contribute</Link>
        </div>
      </div>

      <div className="g4" style={{ marginBottom: 26 }}>
        <div className="stat-card"><div className="stat-n">{stats.resources}</div><div className="stat-l">Open Resources</div></div>
        <div className="stat-card"><div className="stat-n">{stats.pathways}</div><div className="stat-l">Released Pathways</div></div>
        <div className="stat-card"><div className="stat-n">{stats.downloads}</div><div className="stat-l">Downloads</div></div>
        <div className="stat-card"><div className="stat-n">{stats.contributors}</div><div className="stat-l">Contributors</div></div>
      </div>

      <div className="g2">
        <div>
          <div className="section-head"><h3>Recent Updates</h3><div className="section-line"></div></div>
          <div className="card">
            {changelog.length === 0 && <div style={{ padding: 12, color: 'var(--faint)', fontSize: 13 }}>Loading…</div>}
            {changelog.map((c, i) => (
              <div className="activity-item" key={i}>
                <div className="a-dot"></div>
                <div>
                  <div className="a-text"><strong>{c.title}</strong>{c.description ? ` — ${c.description}` : ''}</div>
                  <div className="a-time"><span className={`tag ${c.tag_class}`} style={{ marginRight: 6 }}>{c.entry_type}</span>{new Date(c.created_at).toLocaleDateString()}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="section-head"><h3>Yield Prediction — Top 3</h3><div className="section-line"></div><Link className="btn btn-outline btn-xs" to="/platform/leaderboard">All →</Link></div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="lb-table" style={{ margin: 0 }}>
              <thead><tr><th>#</th><th>Submission</th><th>Score</th></tr></thead>
              <tbody>
                {leaderboard.map((r, i) => (
                  <tr key={i}>
                    <td>{medals[i] || i + 1}</td>
                    <td>{r.team} — {r.model_name}</td>
                    <td>
                      <div className="score-bar-wrap">
                        <div className="score-bar"><div className="score-fill" style={{ width: `${r.score}%` }}></div></div>
                        <span className="score-num">{r.score}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section-head" style={{ marginTop: 20 }}>
            <h3>Top Requests</h3><div className="section-line"></div>
            <Link className="btn btn-outline btn-xs" to="/platform/requests">All →</Link>
          </div>
          <div className="card">
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>
              {topRequests.map((r, i) => (
                <div key={i} style={{ padding: '6px 0', borderBottom: i < topRequests.length - 1 ? '1px solid var(--rule-light)' : 'none', display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <span>↑ {r.vote_count} — {r.title.slice(0, 60)}{r.title.length > 60 ? '…' : ''}</span>
                  <span className={`tag ${r.tag_class}`}>{r.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
