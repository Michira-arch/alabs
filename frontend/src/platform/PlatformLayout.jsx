import { Outlet, Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../components/Modal'
import AuthModal from './components/AuthModal'
import { useAuth } from '../hooks/useAuth'
import './platform.css'

const sidebarItems = [
  { section: 'Platform', items: [
    { id: 'dashboard', label: 'Overview', path: '/platform', icon: '⊞' },
    { id: 'changelog', label: 'Changelog', path: '/platform/changelog', icon: '⏱' },
  ]},
  { section: 'Science', items: [
    { id: 'leaderboard', label: 'Leaderboard', path: '/platform/leaderboard', icon: '📈' },
    { id: 'explorer', label: 'Molecule Explorer', path: '/platform/molecules', icon: '⚛' },
    { id: 'repository', label: 'Repository', path: '/platform/repository', icon: '📦' },
    { id: 'pathways', label: 'Salvage Yard', path: '/platform/salvage-yard', icon: '🧪' },
    { id: 'validation', label: 'Validation API', path: '/platform/validation', icon: '✓' },
  ]},
  { section: 'Community', items: [
    { id: 'discuss', label: 'Discussions', path: '/platform/discussions', icon: '💬' },
    { id: 'requests', label: 'Requests', path: '/platform/requests', icon: '➕' },
    { id: 'contributors', label: 'People', path: '/platform/contributors', icon: '👥' },
    { id: 'contribute', label: 'Contribute', path: '/platform/contribute', icon: '＋' },
  ]},
]

export default function PlatformLayout({ showToast }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authModalMode, setAuthModalMode] = useState('login')
  const location = useLocation()
  const { user, logout, loading } = useAuth()

  const isActive = (path) => {
    if (path === '/platform') return location.pathname === '/platform'
    return location.pathname.startsWith(path)
  }

  const openLogin = () => { setAuthModalMode('login'); setAuthModalOpen(true) }
  const openRegister = () => { setAuthModalMode('register'); setAuthModalOpen(true) }

  return (
    <div className="platform-app">
      {/* TOPBAR */}
      <header className="topbar">
        <Link className="topbar-logo" to="/platform">
          <div className="topbar-logo-mark">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          AbioCore
        </Link>
        <nav className="topbar-nav">
          <NavLink to="/platform" end className={({ isActive }) => isActive ? 'active' : ''}>Overview</NavLink>
          <NavLink to="/platform/leaderboard">Leaderboard</NavLink>
          <NavLink to="/platform/molecules">Molecules</NavLink>
          <NavLink to="/platform/repository">Repository</NavLink>
          <NavLink to="/platform/salvage-yard">Salvage Yard</NavLink>
          <NavLink to="/platform/validation">Validation API</NavLink>
          <NavLink to="/platform/discussions">Discuss</NavLink>
          <NavLink to="/platform/requests">Requests</NavLink>
          <NavLink to="/platform/contributors">People</NavLink>
          <NavLink to="/platform/changelog">Changelog</NavLink>
          <NavLink to="/platform/contribute">Contribute</NavLink>
        </nav>
        <div className="topbar-end">
          <Link to="/" className="hbtn hbtn-ghost">← Machine</Link>
          {!loading && (
            user ? (
              <>
                <div className="topbar-user" title={user.email || 'User'}>
                  <div className="avatar" style={{ background: user.avatar_color || '#dff0e6', color: '#2d6b4a', width: 30, height: 30, fontSize: 12 }}>
                    {(user.display_name || '').slice(0, 2).toUpperCase()}
                  </div>
                  <span style={{ fontSize: 12.5, fontWeight: 500 }}>{(user.display_name || 'User').split(' ')[0]}</span>
                </div>
                <button className="hbtn hbtn-ghost" onClick={() => { logout(); showToast?.('Signed out.') }}>Sign out</button>
              </>
            ) : (
              <>
                <button className="hbtn hbtn-ghost" onClick={openLogin}>Sign in</button>
                <button className="hbtn hbtn-ghost" style={{ borderColor: 'var(--sage)' }} onClick={openRegister}>Register</button>
              </>
            )
          )}
          <button className="hbtn hbtn-solid" onClick={() => user ? setModalOpen(true) : openLogin()}>Submit</button>
        </div>
      </header>

      <div className="shell">
        {/* SIDEBAR */}
        <aside className="sidebar">
          {sidebarItems.map(section => (
            <div className="sb-sect" key={section.section}>
              <span className="sb-label">{section.section}</span>
              {section.items.map(item => (
                <Link key={item.id} to={item.path} className={`sb-link${isActive(item.path) ? ' active' : ''}`}>
                  <span className="sb-icon" style={{ fontSize: '13px', opacity: isActive(item.path) ? 1 : 0.55 }}>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          {user && (
            <div style={{ padding: '16px 12px', borderTop: '1px solid var(--rule)', marginTop: 8 }}>
              <div style={{ fontSize: 11, color: 'var(--faint)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Signed in as</div>
              <div style={{ fontSize: 12.5, fontWeight: 600 }}>{user.display_name}</div>
              {user.affiliation && <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>{user.affiliation}</div>}
              <div style={{ marginTop: 4 }}>
                <span className={`tag ${user.role === 'admin' ? 't-gold' : user.role === 'contributor' ? 't-open' : 't-muted'}`}>{user.role}</span>
              </div>
            </div>
          )}
        </aside>

        {/* MAIN */}
        <main className="platform-main">
          <Outlet />
        </main>
      </div>

      {/* SUBMIT MODAL */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Quick Submit" className="platform-app">
        <div className="form-row full"><div className="field"><label>Title</label><input type="text" placeholder="Name your submission" /></div></div>
        <div className="form-row">
          <div className="field"><label>Type</label>
            <select><option>Resource</option><option>Pathway (Salvage Yard)</option><option>Benchmark Entry</option><option>Discussion Thread</option><option>Data Request</option></select>
          </div>
          <div className="field"><label>Target Molecule</label><input type="text" placeholder="Optional" /></div>
        </div>
        <div className="form-row full"><div className="field"><label>Notes</label><textarea style={{ minHeight: '70px' }} placeholder="Brief description…"></textarea></div></div>
        <button className="btn btn-primary" style={{ width: '100%', padding: '10px', fontSize: '13.5px', marginTop: '4px' }}
          onClick={() => { setModalOpen(false); showToast?.("Received — we'll review within 3–5 days.") }}>
          Submit
        </button>
      </Modal>

      {/* AUTH MODAL */}
      {authModalOpen && (
        <AuthModal mode={authModalMode} onClose={() => setAuthModalOpen(false)} />
      )}
    </div>
  )
}
