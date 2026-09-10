import { useState } from 'react'
import SEO from '../../components/SEO'

export default function Contact({ showToast }) {
  const [copiedEmail, setCopiedEmail] = useState(null)
  const [draftTopic, setDraftTopic] = useState('research')
  const [draftName, setDraftName] = useState('')
  const [draftOrg, setDraftOrg] = useState('')
  const [draftMessage, setDraftMessage] = useState('')

  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    showToast?.(`Copied ${email} to clipboard`)
    setTimeout(() => setCopiedEmail(null), 2500)
  }

  const channels = [
    {
      num: '01',
      title: 'Research & Collaboration',
      email: 'research@bld.co.ke',
      deck: 'For electrochemists, computational chemists, and ML labs interested in co-developing validation methods, forward reaction benchmarks, or shared data.',
      subject: 'Research Collaboration Inquiry',
      recommended: true
    },
    {
      num: '02',
      title: 'Investors & Pre-Seed Capital',
      email: 'investors@bld.co.ke',
      deck: 'For thesis-aligned deep technology funds and angel investors considering our pre-seed round. We provide technical roadmap briefings.',
      subject: 'Investor Inquiry — Pre-Seed Round'
    },
    {
      num: '03',
      title: 'Technical Briefings',
      email: 'briefing@bld.co.ke',
      deck: '30-minute technical briefings for partners, institutions, and peer labs. We share non-confidential validation summaries before conversation.',
      subject: 'Technical Briefing Request'
    },
    {
      num: '04',
      title: 'General & Press',
      email: 'hello@bld.co.ke',
      deck: 'General inquiries and substantive editorial requests. For press, please include your publication and editorial deadline.',
      subject: 'General Inquiry'
    }
  ]

  const getRecipient = () => {
    if (draftTopic === 'research') return 'research@bld.co.ke'
    if (draftTopic === 'investor') return 'investors@bld.co.ke'
    if (draftTopic === 'briefing') return 'briefing@bld.co.ke'
    return 'hello@bld.co.ke'
  }

  const handleCompose = (e) => {
    e.preventDefault()
    const recipient = getRecipient()
    const subject = `[${draftTopic.toUpperCase()}] Inquiry from ${draftName || 'Visitor'}${draftOrg ? ` (${draftOrg})` : ''}`
    const body = `Name: ${draftName || 'N/A'}
Organization: ${draftOrg || 'N/A'}
Topic: ${draftTopic}

Message:
${draftMessage}

---
Sent via bld.co.ke contact page`

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    showToast?.(`Opening email client for ${recipient}...`)
  }

  return (
    <>
      <SEO
        title="Contact & Direct Mail · Abiotic Labs"
        description="Direct email contacts for Abiotic Labs research collaboration, pre-seed investors, technical briefings, and general inquiries."
      />

      <div className="phdr">
        <span className="phdr-label">Communications Directory</span>
        <div className="phdr-title">Contact via Email</div>
        <p className="phdr-deck">
          All external communication is conducted directly through mail. We maintain dedicated addresses for every domain and respond within 48 hours.
        </p>
        <div className="phdr-rule"></div>
      </div>

      <div className="broadsheet">
        {/* DIRECT CHANNELS GRID */}
        <div className="section-mark">Direct Email Addresses</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {channels.map((c) => (
            <div
              key={c.email}
              style={{
                padding: '2rem',
                border: '1px solid var(--rule)',
                background: c.recommended ? 'var(--paper2, #EDE7D8)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.8rem' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.18em', color: 'var(--ink3)' }}>{c.num}</span>
                  {c.recommended && (
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: '#1a6b4a', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Primary Focus
                    </span>
                  )}
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.45rem', fontWeight: 700, marginBottom: '0.8rem' }}>{c.title}</h3>
                <p style={{ fontFamily: 'var(--body)', fontSize: '0.96rem', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '1.6rem' }}>
                  {c.deck}
                </p>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '1rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '1.2rem' }}>
                  <a href={`mailto:${c.email}?subject=${encodeURIComponent(c.subject)}`} style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}>
                    {c.email}
                  </a>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  <a
                    href={`mailto:${c.email}?subject=${encodeURIComponent(c.subject)}`}
                    className="submit-btn"
                    style={{
                      width: 'auto',
                      padding: '0.55rem 1.2rem',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '0.78rem'
                    }}
                  >
                    Compose Email →
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(c.email)}
                    className="submit-btn"
                    style={{
                      width: 'auto',
                      padding: '0.55rem 1rem',
                      background: 'transparent',
                      color: 'var(--ink)',
                      border: '1px solid var(--rule)',
                      fontSize: '0.78rem'
                    }}
                  >
                    {copiedEmail === c.email ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="s-div">§</div>

        {/* QUICK DRAFT ASSISTANT */}
        <div className="section-mark">Quick Mail Draft Helper</div>
        <p className="body-text" style={{ maxWidth: '64ch', marginBottom: '2rem' }}>
          If you prefer to formulate your message here, fill in the fields below and click <strong>Open Email App</strong>. It will construct a formatted draft in your default email client.
        </p>

        <div className="form-section" style={{ maxWidth: '720px' }}>
          <form onSubmit={handleCompose}>
            <div className="fg">
              <label>Topic / Destination</label>
              <select value={draftTopic} onChange={(e) => setDraftTopic(e.target.value)}>
                <option value="research">Research &amp; Scientific Collaboration (research@bld.co.ke)</option>
                <option value="investor">Pre-Seed Investment (investors@bld.co.ke)</option>
                <option value="briefing">Technical Briefing Request (briefing@bld.co.ke)</option>
                <option value="general">General &amp; Press (hello@bld.co.ke)</option>
              </select>
            </div>

            <div className="fgrid">
              <div className="fg">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Dr. / Jane Doe"
                  value={draftName}
                  onChange={(e) => setDraftName(e.target.value)}
                />
              </div>
              <div className="fg">
                <label>Institution or Organization</label>
                <input
                  type="text"
                  placeholder="University / Firm"
                  value={draftOrg}
                  onChange={(e) => setDraftOrg(e.target.value)}
                />
              </div>
            </div>

            <div className="fg">
              <label>Message / Background</label>
              <textarea
                placeholder="Briefly describe your lab's focus, synthesis interest, or thesis..."
                rows={4}
                value={draftMessage}
                onChange={(e) => setDraftMessage(e.target.value)}
              />
            </div>

            <button className="submit-btn" type="submit" style={{ width: 'auto', padding: '0.7rem 1.8rem' }}>
              Open Email App ({getRecipient()}) →
            </button>
          </form>
        </div>

        {/* FOOTER DIRECT INFO */}
        <div style={{ marginTop: '5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--rule)', display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>
              Catch-All Forwarding
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem' }}>
              any-name@bld.co.ke
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>
              Direct / Founder
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem' }}>
              <a href="mailto:elington@bld.co.ke" style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px solid var(--ink3)' }}>
                elington@bld.co.ke
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink3)', marginBottom: '0.4rem' }}>
              Response Time
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem' }}>
              Within 48 hours
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
