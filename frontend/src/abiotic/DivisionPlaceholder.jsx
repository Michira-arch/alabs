import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './division-placeholder.css'

/**
 * DivisionPlaceholder
 * @param {object} props
 * @param {string}    props.num       — "02"
 * @param {string}    props.label     — "Abiotic Drugs"
 * @param {string}    props.tagline   — One-line description
 * @param {string}    props.body      — Longer paragraph about the division
 * @param {string[]}  props.signals   — Short bullet points of what this will cover
 * @param {ReactNode} props.icon      — SVG icon element
 */
export default function DivisionPlaceholder({ num, label, tagline, body, signals, icon }) {
  const canvasRef = useRef(null)

  /* Animated particle field — lightweight canvas sketch */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let w, h
    const particles = []

    function resize() {
      w = canvas.width  = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    function initParticles() {
      particles.length = 0
      const count = Math.floor((w * h) / 14000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.6 + 0.4,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          a: Math.random() * 0.35 + 0.08,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        // draw faint connection lines
        particles.forEach(q => {
          const dx = p.x - q.x, dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(26,107,74,${0.07 * (1 - dist / 90)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        })

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(45,156,110,${p.a})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    const ro = new ResizeObserver(() => { resize(); initParticles() })
    ro.observe(canvas)

    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [])

  return (
    <div className="dp-root">
      <canvas className="dp-canvas" ref={canvasRef} aria-hidden="true" />

      {/* TOP NAV */}
      <nav className="dp-nav">
        <Link to="/" className="dp-back">← Abiotic Labs</Link>
        <Link to="/platform" className="dp-platform-link">Platform →</Link>
      </nav>

      {/* MAIN CONTENT */}
      <main className="dp-main">

        <div className="dp-eyebrow">
          <span className="dp-num">{num}</span>
          <span className="dp-slash">/</span>
          <span className="dp-division-tag">Division</span>
        </div>

        <div className="dp-icon">{icon}</div>

        <h1 className="dp-title">{label}</h1>

        <p className="dp-tagline">{tagline}</p>

        <div className="dp-status-row">
          <span className="dp-badge">In Planning</span>
          <span className="dp-pipe" aria-hidden="true">·</span>
          <span className="dp-status-text">Active research scope being defined</span>
        </div>

        <p className="dp-body">{body}</p>

        {signals && signals.length > 0 && (
          <ul className="dp-signals">
            {signals.map((s, i) => (
              <li key={i} className="dp-signal-item">
                <span className="dp-signal-dot" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        )}

        <div className="dp-notify">
          <p className="dp-notify-label">Follow this division</p>
          <p className="dp-notify-sub">We'll announce scope, timeline, and early access here.</p>
          <Link to="/" className="dp-btn">← Back to all divisions</Link>
        </div>

      </main>

      {/* BOTTOM WORDMARK */}
      <footer className="dp-footer">
        <span className="dp-footer-copy">© 2026 Abiotic Labs</span>
        <span className="dp-footer-tag">Molecular Pathway Intelligence</span>
      </footer>
    </div>
  )
}
