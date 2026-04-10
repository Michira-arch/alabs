import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../../hooks/useAuth'
import Modal from '../../components/Modal'

export default function Requests({ showToast }) {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const [voted, setVoted] = useState(new Set())
  const [filter, setFilter] = useState('All')
  const [modalOpen, setModalOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const { user, token } = useAuth()
  const titleRef = useRef()
  const descRef = useRef()
  const catRef = useRef()

  const fetchRequests = () => {
    fetch('/api/requests/')
      .then(r => r.json())
      .then(data => { setRequests(Array.isArray(data) ? data : []); setLoading(false) })
      .catch((err) => { console.error(err); setRequests([]); setLoading(false) })
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  const toggleVote = async (id) => {
    if (!user) return showToast?.('Please sign in to vote.')
    try {
      const res = await fetch(`/api/requests/${id}/vote`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      })
      if (!res.ok) throw new Error('Vote failed')
      const { status, vote_count } = await res.json()
      
      setVoted(prev => {
        const next = new Set(prev)
        if (status === 'voted') next.add(id)
        else next.delete(id)
        return next
      })
      
      setRequests(prev => prev.map(r => r.id === id ? { ...r, vote_count } : r))
    } catch (err) {
      showToast?.(err.message)
    }
  }

  const handlePost = async () => {
    if (!user) return showToast?.('Please sign in to post a request.')
    if (!titleRef.current?.value) return showToast?.('Title is required.')
    
    setSubmitting(true)
    const cat = catRef.current.value
    const tagMap = { 'Dataset': 't-blue', 'Tool': 't-amber', 'Model': 't-gold', 'Pathway': 't-sage', 'Other': 't-muted' }
    try {
      const res = await fetch('/api/requests/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          title: titleRef.current.value,
          description: descRef.current.value,
          category: cat,
          tag_class: tagMap[cat] || 't-muted'
        })
      })
      if (!res.ok) throw new Error('Failed to post request')
      showToast?.('Request posted.')
      setModalOpen(false)
      fetchRequests()
    } catch (err) {
      showToast?.(err.message)
    }
    setSubmitting(false)
  }

  const filtered = requests.filter(r => filter === 'All' || r.category === filter)

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Community</div>
        <div className="ph-title">Request Board</div>
        <div className="ph-sub">Post what the community needs. Upvote requests you'd benefit from.</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div className="filter-strip">
          {['All', 'Dataset', 'Tool', 'Model', 'Pathway'].map(f => (
            <button key={f} className={`fbtn${f === filter ? ' on' : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => user ? setModalOpen(true) : showToast?.('Please sign in to post.')}>Post Request</button>
      </div>

      {loading ? <div style={{ padding: 20, color: 'var(--faint)' }}>Loading requests from database...</div> : null}
      
      {filtered.map((r) => (
        <div className="req-card" key={r.id}>
          <div className="req-votes">
            <button className={`upvote-btn${voted.has(r.id) ? ' voted' : ''}`} onClick={() => toggleVote(r.id)}>▲</button>
            <div className="vote-count">{r.vote_count}</div>
            <div className="vote-label">votes</div>
          </div>
          <div className="req-body">
            <div className="req-title">{r.title}</div>
            <div className="req-desc">{r.description}</div>
            <div className="req-meta">
              <span className={`tag ${r.tag_class}`}>{r.category}</span>
              <span>·</span><span>Posted by {r.author_name}</span>
              <span>·</span><span>{new Date(r.created_at).toLocaleDateString()}</span>
              {r.comment_count > 0 && <span style={{ marginLeft: 'auto', color: 'var(--sage)' }}>💬 {r.comment_count} comments</span>}
            </div>
          </div>
        </div>
      ))}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="New Data or Tool Request" className="platform-app">
        <div className="form-row full"><div className="field"><label>Title</label><input ref={titleRef} type="text" placeholder="e.g. Need solubility dataset for novel polyamides" /></div></div>
        <div className="form-row">
          <div className="field"><label>Category</label><select ref={catRef}><option>Dataset</option><option>Tool</option><option>Model</option><option>Pathway</option><option>Other</option></select></div>
        </div>
        <div className="form-row full"><div className="field"><label>Description</label><textarea ref={descRef} style={{ minHeight: '100px' }} placeholder="Explain what exactly you need and why it's useful to the community..."></textarea></div></div>
        <button className="btn btn-primary" style={{ width: '100%', padding: '10px', fontSize: '13.5px', marginTop: '4px' }} disabled={submitting} onClick={handlePost}>
          {submitting ? 'Posting...' : 'Post Request'}
        </button>
      </Modal>
    </div>
  )
}
