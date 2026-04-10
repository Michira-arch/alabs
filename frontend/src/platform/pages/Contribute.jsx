import { useState, useRef } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function Contribute({ showToast }) {
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const fileInput = useRef(null)
  const { user, token } = useAuth()
  const navigate = useNavigate()

  // Form refs
  const nameRef = useRef()
  const versionRef = useRef()
  const catRef = useRef()
  const licRef = useRef()
  const descRef = useRef()
  const targetsRef = useRef()

  const handleFiles = (fileList) => {
    setFiles(Array.from(fileList).map(f => ({ name: f.name, size: (f.size / 1024).toFixed(1) })))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    handleFiles(e.dataTransfer.files)
  }

  const handleSubmit = async () => {
    if (!user) return showToast?.('Please sign in to contribute.')
    if (!nameRef.current?.value || !catRef.current?.value) return showToast?.('Resource Name and Category are required.')
    
    setLoading(true)
    const payload = {
      name: nameRef.current.value,
      version: versionRef.current?.value || '1.0.0',
      category: catRef.current.value,
      license: licRef.current?.value || 'Other',
      description: descRef.current?.value || '',
      size: files.length > 0 ? `${files.reduce((sum, f) => sum + parseFloat(f.size), 0).toFixed(1)} KB` : '',
    }

    try {
      const res = await fetch('/api/resources/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed to submit resource')
      showToast?.('Submission received — DOI assigned.')
      navigate('/platform/repository')
    } catch (err) {
      showToast?.(`Error: ${err.message}`)
    }
    setLoading(false)
  }

  return (
    <div className="page">
      <div className="ph">
        <div className="ph-eyebrow">Contribute</div>
        <div className="ph-title">Submit a Resource</div>
        <div className="ph-sub">Share datasets, tools, schemas, pathways, or benchmark entries. All contributions are reviewed and DOI-stamped on acceptance.</div>
      </div>

      <div className="upload-zone" onDrop={handleDrop} onDragOver={e => e.preventDefault()} onClick={() => fileInput.current?.click()}>
        <input ref={fileInput} type="file" multiple style={{ display: 'none' }} onChange={e => handleFiles(e.target.files)} />
        <div className="uz-icon">📁</div>
        <div className="uz-title">Drop files here or click to browse</div>
        <div className="uz-sub">Max 500 MB per file · TAR, ZIP, CSV, JSON, HDF5, ONNX, PDB, SDF</div>
        <div className="uz-types">
          {['Dataset', 'Tool', 'Model Weights', 'Schema', 'Protocol'].map(t => (
            <span key={t} className="tag t-muted">{t}</span>
          ))}
        </div>
      </div>

      {files.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          {files.map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'var(--surface)', border: '1px solid var(--rule)', borderRadius: 7, marginBottom: 8, fontSize: 13 }}>
              <span>📄</span>
              <span style={{ fontWeight: 500 }}>{f.name}</span>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '10.5px', color: 'var(--faint)' }}>{f.size} KB</span>
              <span className="tag t-open" style={{ marginLeft: 'auto' }}>Ready</span>
            </div>
          ))}
        </div>
      )}

      <div className="card" style={{ padding: 24 }}>
        <div className="section-head" style={{ marginBottom: 18 }}><h3>Resource Details</h3><div className="section-line"></div></div>
        <div className="form-row">
          <div className="field"><label>Resource Name</label><input ref={nameRef} type="text" placeholder="e.g., Formaldehyde Oxidation Dataset v1" required /></div>
          <div className="field"><label>Version</label><input ref={versionRef} type="text" placeholder="1.0.0" defaultValue="1.0.0" /></div>
        </div>
        <div className="form-row">
          <div className="field"><label>Category</label><select ref={catRef}><option>Dataset</option><option>Tool / Library</option><option>Model Weights</option><option>Schema / Standard</option><option>Pathway Protocol</option></select></div>
          <div className="field"><label>License</label><select ref={licRef}><option>CC BY 4.0</option><option>MIT</option><option>Apache 2.0</option><option>Research Only</option><option>Other</option></select></div>
        </div>
        <div className="form-row full"><div className="field"><label>Description</label><textarea ref={descRef} style={{ minHeight: 90 }} placeholder="What this resource is, how it was collected/built, and what it's useful for."></textarea></div></div>
        <div className="form-row"><div className="field"><label>Target Molecule(s)</label><input ref={targetsRef} type="text" placeholder="Optional — one or more targets" /></div></div>
      </div>

      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
        <button className="btn btn-primary" style={{ padding: '9px 26px', fontSize: '13.5px' }} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit for Review'}
        </button>
        <span style={{ fontSize: 12, color: 'var(--faint)' }}>DOI assigned on acceptance · Your affiliation ({user?.affiliation || 'None'}) will be attached.</span>
      </div>
    </div>
  )
}

