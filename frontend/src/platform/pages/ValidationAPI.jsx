import { useState, useRef } from 'react'

export default function ValidationAPI() {
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()

  const runValidation = async () => {
    setLoading(true)
    setOutput('Validating…')
    try {
      const body = JSON.parse(inputRef.current?.value || '{}')
      const res = await fetch('/api/validation/thermodynamics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      setOutput(JSON.stringify(data, null, 2))
    } catch (err) {
      setOutput(`Error: ${err.message}`)
    }
    setLoading(false)
  }

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Validation API</div>
        <div className="ph-title">Benchmark &amp; Validation Access</div>
        <div className="ph-sub">Our API is scoped exclusively to validation and benchmarking. It does not expose inference endpoints — this is intentional IP protection.</div>
      </div>

      <div className="api-notice">
        <span>ℹ</span>
        <div><strong>Why validation-only?</strong> Unrestricted inference access enables distillation of our proprietary surrogate models. If you need a model for training, download the <strong>SurrogateBase-7B weights</strong> from the Repository.</div>
      </div>

      <div className="api-scope-grid">
        <div className="scope-card allowed">
          <div className="scope-title">✅ Allowed via API</div>
          <ul className="scope-list">
            <li>Score a proposed pathway against a benchmark task</li>
            <li>Validate thermodynamic feasibility of a reaction step</li>
            <li>Check SMILES canonicalization against our standard</li>
            <li>Submit leaderboard entries for evaluation</li>
            <li>Retrieve benchmark task metadata and split info</li>
          </ul>
        </div>
        <div className="scope-card blocked">
          <div className="scope-title">🚫 Not Available via API</div>
          <ul className="scope-list">
            <li>Open-ended synthesis pathway generation</li>
            <li>Inference against our flagship RL Discovery Engine</li>
            <li>Bulk reaction outcome prediction</li>
            <li>Model weight extraction or logit access</li>
            <li>Any endpoint that could enable model distillation</li>
          </ul>
        </div>
      </div>

      <div className="section-head"><h3>Live Playground</h3><div className="section-line"></div></div>
      <div className="api-playground">
        <div className="ap-label">Endpoint — POST /api/validation/thermodynamics</div>
        <textarea
          className="ap-input"
          ref={inputRef}
          defaultValue={'{"smiles": "C(C(=O)O)N", "step": "aminoacetonitrile + H2O → glycine + HCN", "conditions": {"pH": 9.0, "temp_C": 100}}'}
        />
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="ap-btn" onClick={runValidation} disabled={loading}>▶ Run Validation</button>
          <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '10.5px', color: '#3a6050' }}>Live endpoint · Validation-only</div>
        </div>
        {output && <div className="ap-output">{output}</div>}
      </div>

      <hr className="divider" />
      <div className="section-head"><h3>API Reference</h3><div className="section-line"></div></div>
      <div className="g2">
        {[
          { method: 'POST /api/validation/thermodynamics', desc: 'Check whether a proposed reaction step is thermodynamically feasible. Returns ΔG estimate and feasibility flag.' },
          { method: 'POST /api/validation/smiles', desc: 'Canonicalize and validate a SMILES string against the AbioCore standard tokenization.' },
          { method: 'POST /api/leaderboard/submit', desc: 'Submit a model prediction batch against a benchmark task. Returns score + rank.' },
          { method: 'GET /api/leaderboard/tasks', desc: 'List all active benchmark tasks, evaluation metrics, sample counts, and schemas.' },
        ].map((ep, i) => (
          <div className="card" key={i}>
            <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: 'var(--sage)', marginBottom: 6 }}>{ep.method}</div>
            <div style={{ fontSize: '12.5px', color: 'var(--muted)' }}>{ep.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
