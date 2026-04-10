import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../hooks/useAuth'
import Modal from '../../components/Modal'

export default function Discussions({ showToast }) {
  const [threads, setThreads] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const { user, token } = useAuth()
  const titleRef = useRef()
  const msgRef = useRef()
  const catRef = useRef()

  const fetchThreads = () => {
    fetch('/api/discussions/')
      .then(r => r.json())
      .then(data => { setThreads(Array.isArray(data) ? data : []); setLoading(false) })
      .catch((err) => { console.error(err); setThreads([]); setLoading(false) })
  }

  useEffect(() => {
    fetchThreads()
  }, [])

  const handlePost = async () => {
    if (!user) return showToast?.('Please sign in to start a thread.')
    if (!titleRef.current?.value || !msgRef.current?.value) return showToast?.('Title and message are required.')
    
    setSubmitting(true)
    try {
      const res = await fetch('/api/discussions/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          title: titleRef.current.value,
          preview: msgRef.current.value.slice(0, 150),
          category: catRef.current.value,
          molecule_tag: ''
        })
      })
      if (!res.ok) throw new Error('Failed to post thread')
      showToast?.('Thread published.')
      setModalOpen(false)
      fetchThreads()
    } catch (err) {
      showToast?.(err.message)
    }
    setSubmitting(false)
  }

  const filtered = threads
    .filter(t => filter === 'All' || t.category === filter)
    .filter(t => !search || t.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Community</div>
        <div className="ph-title">Discussions</div>
        <div className="ph-sub">Per-resource threads, open questions, and research conversations.</div>
      </div>

      <div className="search-bar">
        <div className="search-wrap">
          <svg className="s-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" placeholder="Search discussions…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="filter-strip">
          {['All', 'Question', 'Resource', 'Benchmark', 'Salvage Yard'].map(f => (
            <button key={f} className={`fbtn${f === filter ? ' on' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => user ? setModalOpen(true) : showToast?.('Please sign in first.')}>New Thread</button>
      </div>

      {loading && <div style={{ padding: 20, color: 'var(--faint)', fontSize: 13 }}>Loading discussions…</div>}

      {filtered.map((t) => (
        <div className="thread-card" key={t.id}>
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              {(t.tags || []).map((tag, j) => <span key={j} className={`tag ${tag.tag_class}`}>{tag.text}</span>)}
              {(!t.tags || t.tags.length === 0) && <span className="tag t-muted">{t.category}</span>}
            </div>
            <div className="tc-title">{t.title}</div>
            <div className="tc-preview">{t.preview}</div>
          </div>
          <div className="tc-meta">
            <span>{t.author_name}</span><span>·</span>
            <span>💬 {t.reply_count} replies</span><span>·</span>
            <span>{new Date(t.created_at).toLocaleDateString()}</span>
            <button className="vote-btn" style={{ marginLeft: 'auto' }}>▲ {t.vote_count}</button>
          </div>
        </div>
      ))}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="New Discussion Thread" className="platform-app">
        <div className="form-row full"><div className="field"><label>Title</label><input ref={titleRef} type="text" placeholder="Be specific..." /></div></div>
        <div className="form-row">
          <div className="field"><label>Category</label><select ref={catRef}><option>Question</option><option>Resource</option><option>Benchmark</option><option>Salvage Yard</option><option>General</option></select></div>
        </div>
        <div className="form-row full"><div className="field"><label>Message</label><textarea ref={msgRef} style={{ minHeight: '120px' }} placeholder="Provide context, references, or your specific question..."></textarea></div></div>
        <button className="btn btn-primary" style={{ width: '100%', padding: '10px', fontSize: '13.5px', marginTop: '4px' }} disabled={submitting} onClick={handlePost}>
          {submitting ? 'Posting...' : 'Post Thread'}
        </button>
      </Modal>
    </div>
  )
}
