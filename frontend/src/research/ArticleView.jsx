import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug, ARTICLES } from '../data/articles'
import { useEffect } from 'react'
import SEO from '../components/SEO'

export default function ArticleView() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!article) {
    return (
      <div className="art-article-container" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <SEO
          title="Publication Not Found · Abiotic Labs"
          description="The requested research paper or technical note does not exist."
        />
        <h2 style={{ fontFamily: 'var(--serif, serif)', fontSize: '2rem', marginBottom: '1rem' }}>Publication Not Found</h2>
        <p style={{ fontFamily: 'var(--body, serif)', color: 'var(--ink2)', marginBottom: '2rem' }}>
          The requested research article or dispatch does not exist.
        </p>
        <Link to="/research" className="art-discuss-btn">
          ← Return to Research Index
        </Link>
      </div>
    )
  }

  const pillClass = (cat) => {
    if (cat === 'Research Note') return 'rs-pill-research-note'
    if (cat === 'Technical Note') return 'rs-pill-technical-note'
    return 'rs-pill-essay'
  }

  const otherArticles = ARTICLES.filter(a => a.id !== article.id).slice(0, 2)

  return (
    <article className="art-article-container">
      <SEO
        title={`${article.title} · Abiotic Labs Research`}
        description={article.subtitle || article.abstract.slice(0, 155)}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ScholarlyArticle',
          headline: article.title,
          description: article.subtitle || article.abstract,
          author: {
            '@type': 'Organization',
            name: article.author || 'Abiotic Labs Research Team'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Abiotic Labs',
            logo: {
              '@type': 'ImageObject',
              url: 'https://bld.co.ke/favicon.svg'
            }
          },
          datePublished: article.date,
          identifier: article.doi || article.id
        }}
      />

      {/* BACK NAVIGATION */}
      <div className="art-back-nav">
        <Link to="/research" className="art-back-link">
          ← Back to Research &amp; Publications
        </Link>
      </div>

      {/* ARTICLE HEADER */}
      <header className="art-header">
        <div className="art-header-top">
          <span className={`rs-pill ${pillClass(article.category)}`}>
            {article.category}
          </span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: '#7a7a75' }}>
            {article.divisionLabel}
          </span>
          {article.doi && (
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: '#1a6b4a' }}>
              Report ID: {article.doi}
            </span>
          )}
        </div>

        <h1 className="art-title">{article.title}</h1>
        <p className="art-subtitle">{article.subtitle}</p>

        <div className="art-meta-grid">
          <div className="art-meta-item">
            <label>Authors</label>
            <span>{article.author}</span>
          </div>
          <div className="art-meta-item">
            <label>Group</label>
            <span>{article.authorRole}</span>
          </div>
          <div className="art-meta-item">
            <label>Published</label>
            <span>{article.date}</span>
          </div>
          <div className="art-meta-item">
            <label>Length</label>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </header>

      {/* ABSTRACT */}
      {article.abstract && (
        <section className="art-abstract-box" aria-label="Abstract">
          <div className="art-abstract-label">Abstract</div>
          <p className="art-abstract-text">{article.abstract}</p>
        </section>
      )}

      {/* KEY SIGNALS */}
      {article.keySignals && article.keySignals.length > 0 && (
        <section className="art-signals-box">
          <div className="art-signals-title">Key Findings &amp; Core Signals</div>
          <ul className="art-signals-list">
            {article.keySignals.map((sig, idx) => (
              <li key={idx}>{sig}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ARTICLE BODY SECTIONS */}
      <div className="art-body">
        {article.sections && article.sections.map((sec, idx) => (
          <section key={idx} className="art-section">
            <h2 className="art-section-heading">{sec.heading}</h2>
            {sec.lead && <p className="art-section-lead">{sec.lead}</p>}
            
            {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="art-paragraph">{p}</p>
            ))}

            {sec.callout && (
              <div className="art-callout">
                <div className="art-callout-title">{sec.callout.title}</div>
                <div className="art-callout-formula">{sec.callout.formula}</div>
                <div className="art-callout-details">{sec.callout.details}</div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* CITATIONS / REFERENCES */}
      {article.citations && article.citations.length > 0 && (
        <section className="art-citations">
          <h4>References &amp; Prior Literature</h4>
          <div>
            {article.citations.map((cite, idx) => (
              <div key={idx} className="art-citation-item">
                [{idx + 1}] {cite}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PEER DISCUSSION & CONTACT */}
      <section className="art-discuss-box">
        <h3 className="art-discuss-hl">Discussion &amp; Academic Collaboration</h3>
        <p className="art-discuss-p">
          We share research early to accelerate experimental validation. If your laboratory works on electrocatalytic synthesis, molecular representation learning, or flow-cell engineering, we welcome peer review and data exchange.
        </p>
        <a
          href={`mailto:research@bld.co.ke?subject=${encodeURIComponent(`Discussion: ${article.title} (${article.doi || article.id})`)}`}
          className="art-discuss-btn"
        >
          Discuss with Authors (research@bld.co.ke) →
        </a>
      </section>

      {/* RELATED PUBLICATIONS */}
      {otherArticles.length > 0 && (
        <div style={{ marginTop: '4rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(14,14,12,0.1)' }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#7a7a75', marginBottom: '1.5rem' }}>
            More from Abiotic Labs Research
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {otherArticles.map(other => (
              <Link
                key={other.id}
                to={`/research/${other.slug}`}
                style={{
                  display: 'block',
                  padding: '1.4rem',
                  background: '#faf8f4',
                  border: '1px solid rgba(14,14,12,0.08)',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: '#1a6b4a', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                  {other.category} · {other.date}
                </div>
                <div style={{ fontFamily: 'var(--serif, serif)', fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.4rem' }}>
                  {other.title}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: '#1a6b4a' }}>
                  Read Note →
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
