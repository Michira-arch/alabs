import { useState, useRef } from 'react'

function ContactForm({ title, note, formType, orgLabel, stages, showToast }) {
  const nameRef = useRef()
  const orgRef = useRef()
  const deptRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const stageRef = useRef()
  const [submitted, setSubmitted] = useState(false)
  const [lastRecipient, setLastRecipient] = useState('')

  const getRecipientEmail = () => {
    if (formType === 'investor') return 'investors@bld.co.ke'
    if (formType === 'research') return 'research@bld.co.ke'
    return 'hello@bld.co.ke'
  }

  const handleSend = (e) => {
    e.preventDefault()
    const name = nameRef.current?.value || ''
    const email = emailRef.current?.value || ''
    const org = orgRef.current?.value || deptRef.current?.value || ''
    const stage = stageRef.current?.value || ''
    const message = messageRef.current?.value || ''
    const recipient = getRecipientEmail()
    setLastRecipient(recipient)

    // Save to local inquiries log
    try {
      const existing = JSON.parse(localStorage.getItem('abiotic_inquiries') || '[]')
      existing.push({
        formType,
        name,
        email,
        org,
        stage,
        message,
        recipient,
        timestamp: new Date().toISOString()
      })
      localStorage.setItem('abiotic_inquiries', JSON.stringify(existing))
    } catch {
      // Local storage fallback
    }

    // Compose mailto
    const subject = `[${title}] Inquiry from ${name}${org ? ` (${org})` : ''}`
    const body = `Name: ${name}
Email: ${email}
${orgLabel || 'Organization'}: ${org}
${stage ? `Stage Focus: ${stage}\n` : ''}
Message:
${message}

---
Sent via bld.co.ke contact form`

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Trigger email client
    window.location.href = mailtoUrl
    setSubmitted(true)
    showToast?.(`Opening email client to send to ${recipient}...`)
  }

  return (
    <div className="form-section">
      <div className="fs-head">
        <span className="fs-n">{formType === 'investor' ? 'I' : formType === 'research' ? 'II' : 'III'}</span>
        <span className="fs-title">{title}</span>
      </div>
      <p className="form-note">{note}</p>
      
      {submitted ? (
        <div style={{ padding: '1.8rem', border: '1px solid var(--rule)', background: 'var(--paper2, #EDE7D8)', marginTop: '1rem' }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Inquiry Prepared
          </div>
          <p style={{ fontFamily: 'var(--body)', fontSize: '0.95rem', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
            Your default email client has been opened to send your inquiry to <strong>{lastRecipient}</strong>. If your email app did not open automatically, you can send directly to <a href={`mailto:${lastRecipient}`} style={{ color: 'inherit', fontWeight: 600 }}>{lastRecipient}</a>.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              className="submit-btn"
              style={{ width: 'auto', padding: '0.6rem 1.4rem' }}
              onClick={() => setSubmitted(false)}
            >
              Draft Another Message
            </button>
            <a
              href={`mailto:${lastRecipient}`}
              className="submit-btn"
              style={{ width: 'auto', padding: '0.6rem 1.4rem', textDecoration: 'none', textAlign: 'center', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)' }}
            >
              Open Email App Again
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSend}>
          <div className="fgrid">
            <div className="fg"><label>Name</label><input ref={nameRef} type="text" required /></div>
            {orgLabel && <div className="fg"><label>{orgLabel}</label><input ref={orgRef} type="text" /></div>}
            {deptRef && formType === 'research' && <div className="fg"><label>Department</label><input ref={deptRef} type="text" /></div>}
          </div>
          <div className="fg"><label>Email</label><input ref={emailRef} type="email" required /></div>
          {stages && (
            <div className="fg"><label>Stage Focus</label>
              <select ref={stageRef}><option>Pre-seed</option><option>Seed</option><option>Series A</option><option>Family Office / Other</option></select>
            </div>
          )}
          <div className="fg"><label>Message</label><textarea ref={messageRef} placeholder={formType === 'investor' ? 'Thesis fit, portfolio context...' : formType === 'research' ? 'What you work on, how it might connect...' : ''}></textarea></div>
          <button className="submit-btn" type="submit">
            Send Inquiry ({getRecipientEmail()}) →
          </button>
        </form>
      )}
    </div>
  )
}

export default function Contact({ showToast }) {
  return (
    <>
      <div className="phdr">
        <span className="phdr-label">Get in Touch</span>
        <div className="phdr-title">Contact</div>
        <p className="phdr-deck">We respond to every serious research, partnership, or investor inquiry within 48 hours.</p>
        <div className="phdr-rule"></div>
      </div>
      <div className="broadsheet">
        <div>
          <ContactForm title="Research Collaboration" note="Looking for electrochemistry and ML labs interested in co-developing validation methods and benchmark runs." formType="research" orgLabel="Institution" showToast={showToast} />
          <ContactForm title="Investors" note="For funds and angel investors considering the pre-seed round. Include your firm, stage focus, and why this falls within your thesis." formType="investor" orgLabel="Firm" stages showToast={showToast} />
          <ContactForm title="General & Press" note="For general inquiries and press requests. Substantive editorial requests only." formType="general" orgLabel="Organization" showToast={showToast} />
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>
              Research Inquiries
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.88rem' }}>
              <a href="mailto:research@bld.co.ke" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--ink3)', paddingBottom: '0.1rem' }}>
                research@bld.co.ke
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>
              Investor Inquiries
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.88rem' }}>
              <a href="mailto:investors@bld.co.ke" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--ink3)', paddingBottom: '0.1rem' }}>
                investors@bld.co.ke
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>
              General &amp; Press
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.88rem' }}>
              <a href="mailto:hello@bld.co.ke" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--ink3)', paddingBottom: '0.1rem' }}>
                hello@bld.co.ke
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>
              Direct / Founder
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.88rem' }}>
              <a href="mailto:elington@bld.co.ke" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--ink3)', paddingBottom: '0.1rem' }}>
                elington@bld.co.ke
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
