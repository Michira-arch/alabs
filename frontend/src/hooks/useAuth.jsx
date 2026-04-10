import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(() => localStorage.getItem('abioc_token') || null)
  const [loading, setLoading] = useState(!!localStorage.getItem('abioc_token'))

  // On mount, verify stored token and load user
  useEffect(() => {
    if (!token) { setLoading(false); return }
    fetch('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(u => { setUser(u); setLoading(false) })
      .catch(() => { localStorage.removeItem('abioc_token'); setToken(null); setLoading(false) })
  }, [])

  const login = useCallback(async (email, password) => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.detail || 'Login failed')
    }
    const { access_token } = await res.json()
    localStorage.setItem('abioc_token', access_token)
    setToken(access_token)
    const me = await fetch('/api/auth/me', { headers: { Authorization: `Bearer ${access_token}` } })
    const u = await me.json()
    if (!me.ok) {
      throw new Error(u.detail || 'Failed to load user profile')
    }
    setUser(u)
    return u
  }, [])

  const register = useCallback(async (email, password, display_name, affiliation) => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, display_name, affiliation })
    })
    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.detail || 'Registration failed')
    }
    // Auto-login after register
    return login(email, password)
  }, [login])

  const logout = useCallback(() => {
    localStorage.removeItem('abioc_token')
    setToken(null)
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
