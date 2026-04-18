import { useState, useRef } from 'react'

function ContactForm({ title, note, formType, orgLabel, stages, showToast }) {
  const nameRef = useRef()
  const orgRef = useRef()
  const deptRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const stageRef = useRef()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSend = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contacts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_type: formType,
          name: nameRef.current?.value || '',
          email: emailRef.current?.value || '',
          organization: orgRef.current?.value || deptRef.current?.value || '',
          message: messageRef.current?.value || '',
          stage_focus: stageRef.current?.value || '',
        })
      })
      setSent(false)
      showToast?.("Message sent — we'll respond within 48 hours.")
    } catch {
      showToast?.('Failed to send, please use email instead elington@bld.co.ke')
    }
    setLoading(false)
  }

  return (
    <div className="form-section">
      <div className="fs-head">
        <span className="fs-n">{formType === 'investor' ? 'I' : formType === 'research' ? 'II' : 'III'}</span>
        <span className="fs-title">{title}</span>
      </div>
      <p className="form-note">{note}</p>
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
        <button className="submit-btn" type="submit" disabled={loading || sent}>
          {sent ? 'Sent ✓' : loading ? 'Sending…' : 'Send →'}
        </button>
      </form>
    </div>
  )
}

export default function Contact({ showToast }) {
  return (
    <>
      <div className="phdr">
        <span className="phdr-label">Get in Touch</span>
        <div className="phdr-title">Contact</div>
        <p className="phdr-deck">We respond to every serious inquiry within 48 hours.</p>
        <p className="phdr-deck">elington@bld.co.ke</p>
        <div className="phdr-rule"></div>
      </div>
      <div className="broadsheet">
        <div>
          <ContactForm title="Investors" note="For funds and angel investors considering the pre-seed round. Include your firm, stage focus, and why this falls within your thesis." formType="investor" orgLabel="Firm" stages showToast={showToast} />
          <ContactForm title="Research Collaboration" note="Looking for electrochemistry and ML labs interested in co-developing validation methods for Phase I." formType="research" orgLabel="Institution" showToast={showToast} />
          <ContactForm title="General & Press" note="For press: include your publication and deadline. We respond to substantive editorial requests only." formType="general" orgLabel="Organization" showToast={showToast} />
        </div>
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--rule)', display: 'flex', gap: '5rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.56rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.5rem' }}>Direct Email</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem' }}>
              <a href="mailto:elington@bld.co.ke" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--ink3)', paddingBottom: '0.1rem' }}>elington@bld.co.ke</a>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.56rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.5rem' }}>Response Time</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem' }}>Within 48 hours</div>
          </div>
        </div>
      </div>
    </>
  )
}
