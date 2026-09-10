import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Lightweight SEO Component for dynamic page titles, meta tags, and structured JSON-LD.
 */
export default function SEO({
  title = 'Abiotic Labs · Molecular Pathway Intelligence',
  description = 'Pioneering forward reaction search to discover and execute synthesis pathways from basic feedstocks and electricity.',
  type = 'website',
  image = '/favicon.svg',
  jsonLd = null
}) {
  const { pathname } = useLocation()
  const siteUrl = 'https://bld.co.ke'
  const currentUrl = `${siteUrl}${pathname}`

  useEffect(() => {
    // 1. Title
    document.title = title

    // Helper to update or create meta tags
    const updateMeta = (selector, attribute, value) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [attrName, attrVal] = selector.replace(/[\[\]'"]/g, '').split('=')
        el.setAttribute(attrName, attrVal)
        document.head.appendChild(el)
      }
      el.setAttribute(attribute, value)
    }

    // 2. Standard Description
    updateMeta('meta[name="description"]', 'content', description)

    // 3. Open Graph
    updateMeta('meta[property="og:title"]', 'content', title)
    updateMeta('meta[property="og:description"]', 'content', description)
    updateMeta('meta[property="og:url"]', 'content', currentUrl)
    updateMeta('meta[property="og:type"]', 'content', type)
    updateMeta('meta[property="og:image"]', 'content', image.startsWith('http') ? image : `${siteUrl}${image}`)

    // 4. Twitter Cards
    updateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    updateMeta('meta[name="twitter:title"]', 'content', title)
    updateMeta('meta[name="twitter:description"]', 'content', description)
    updateMeta('meta[name="twitter:image"]', 'content', image.startsWith('http') ? image : `${siteUrl}${image}`)

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl)

    // 6. JSON-LD Structured Data
    if (jsonLd) {
      let script = document.getElementById('dynamic-jsonld')
      if (!script) {
        script = document.createElement('script')
        script.id = 'dynamic-jsonld'
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    }

    return () => {
      const dynamicScript = document.getElementById('dynamic-jsonld')
      if (dynamicScript) dynamicScript.remove()
    }
  }, [title, description, currentUrl, type, image, jsonLd])

  return null
}
