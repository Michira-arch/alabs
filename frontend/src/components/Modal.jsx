export default function Modal({ open, onClose, title, children, className = '' }) {
  if (!open) return null
  return (
    <div className={`modal-overlay ${className}`} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box">
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  )
}
