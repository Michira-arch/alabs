import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ARTICLES } from '../data/articles'
import SEO from '../components/SEO'

export default function ResearchIndex() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Research Note', 'Technical Note', 'Essay']

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return ARTICLES
    return ARTICLES.filter(a => a.category === selectedCategory)
  }, [selectedCategory])

  const pillClass = (cat) => {
    if (cat === 'Research Note') return 'rs-pill-research-note'
    if (cat === 'Technical Note') return 'rs-pill-technical-note'
    return 'rs-pill-essay'
  }

  return (
    <div className="rs-container">
      <SEO
        title="Research & Publications · Abiotic Labs"
        description="Preprints, technical notes, and working papers on forward reaction search, reaction surrogates, and electrosynthesis."
      />

      {/* MASTHEAD */}
      <section className="rs-masthead">
        <span className="rs-kicker">Scientific Output &amp; Technical Dispatches</span>
        <h1 className="rs-title">Research &amp; Publications</h1>
        <p className="rs-deck">
          Our working preprints, methodology notes, and foundational essays on machine-discovered abiotic synthesis.
          Published directly from our lab notebooks and computational discovery runs.
        </p>
      </section>

      {/* FILTER & COLLABORATION BAR */}
      <div className="rs-filter-bar">
        <div className="rs-tabs" role="tablist">
          {categories.map(cat => (
            <button
              key={cat}
              className={`rs-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' ? 'All Publications' : cat + 's'}
            </button>
          ))}
        </div>
        <div className="rs-collab-badge">
          <span>Academic Collaboration:</span>
          <a href="mailto:research@bld.co.ke?subject=Academic%20Collaboration%20Inquiry" className="rs-collab-link">
            research@bld.co.ke →
          </a>
        </div>
      </div>

      {/* ARTICLE LIST */}
      <div className="rs-grid">
        {filteredArticles.map(article => (
          <article key={article.id} className="rs-card">
            <div className="rs-card-meta">
              <span className={`rs-pill ${pillClass(article.category)}`}>
                {article.category}
              </span>
              <div>{article.date}</div>
              <div style={{ color: '#8c8982', marginTop: '0.2rem' }}>{article.readingTime}</div>
              {article.doi && (
                <div style={{ marginTop: '0.4rem', color: '#1a6b4a' }}>
                  {article.doi}
                </div>
              )}
              <div style={{ marginTop: '0.6rem', color: '#55524c' }}>
                {article.divisionLabel}
              </div>
            </div>

            <div className="rs-card-body">
              <Link to={`/research/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3>{article.title}</h3>
              </Link>
              <p className="rs-card-sub">{article.subtitle}</p>
              <p className="rs-card-abstract">{article.abstract}</p>

              {article.tags && article.tags.length > 0 && (
                <div className="rs-tag-list">
                  {article.tags.map(tag => (
                    <span key={tag} className="rs-tag">#{tag}</span>
                  ))}
                </div>
              )}

              <Link to={`/research/${article.slug}`} className="rs-read-link">
                Read Publication →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
