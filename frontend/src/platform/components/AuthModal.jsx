import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export default function AuthModal({ mode = 'login', onClose }) {
  const { login, register } = useAuth()
  const [tab, setTab] = useState(mode) // 'login' | 'register'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [affiliation, setAffiliation] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (tab === 'login') {
        await login(email, password)
      } else {
        await register(email, password, displayName, affiliation)
      }
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" style={{ maxWidth: 420 }} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="filter-strip" style={{ marginBottom: 0 }}>
            <button className={`fbtn${tab === 'login' ? ' on' : ''}`} onClick={() => setTab('login')}>Sign In</button>
            <button className={`fbtn${tab === 'register' ? ' on' : ''}`} onClick={() => setTab('register')}>Register</button>
          </div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: '20px 24px 24px' }}>
          {tab === 'register' && (
            <>
              <div className="field" style={{ marginBottom: 14 }}>
                <label>Display Name</label>
                <input type="text" required value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder="Dr. Jane Smith" autoFocus />
              </div>
              <div className="field" style={{ marginBottom: 14 }}>
                <label>Affiliation <span style={{ color: 'var(--faint)', fontWeight: 400 }}>(optional)</span></label>
                <input type="text" value={affiliation} onChange={e => setAffiliation(e.target.value)} placeholder="University or organization" />
              </div>
            </>
          )}
          <div className="field" style={{ marginBottom: 14 }}>
            <label>Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@university.edu" autoFocus={tab === 'login'} />
          </div>
          <div className="field" style={{ marginBottom: 20 }}>
            <label>Password</label>
            <input type="password" required minLength={8} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
          </div>

          {error && (
            <div style={{ marginBottom: 14, padding: '8px 12px', background: 'var(--danger-pale, #fff0f0)', border: '1px solid var(--danger, #c0392b)', borderRadius: 6, fontSize: 12.5, color: 'var(--danger, #c0392b)' }}>
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '10px 0', fontSize: 13.5 }} disabled={loading}>
            {loading ? 'Please wait…' : tab === 'login' ? 'Sign In' : 'Create Account'}
          </button>

          {tab === 'login' && (
            <div style={{ marginTop: 14, textAlign: 'center', fontSize: 12, color: 'var(--faint)' }}>
              No account? <button type="button" style={{ background: 'none', border: 'none', color: 'var(--sage)', cursor: 'pointer', fontWeight: 600, fontSize: 12 }} onClick={() => setTab('register')}>Register here →</button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
