import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { preview } from 'vite'
import puppeteer from 'puppeteer'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (p) => path.resolve(__dirname, p)

async function prerender() {
  console.log('Starting preview server for prerendering...')
  const server = await preview({
    preview: { port: 5173 },
    server: { host: 'localhost' }
  })
  
  const url = server.resolvedUrls.local[0]
  
  console.log(`Launching browser instance to render ${url}...`)
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Crucial for Linux deployment (Render)
  })
  
  const page = await browser.newPage()
  
  // Route capture
  await page.goto(url, { waitUntil: 'networkidle0' })
  
  // Let animations/state settle
  await new Promise(r => setTimeout(r, 1000))
  
  const html = await page.content()
  
  const dest = resolve('../dist/index.html')
  console.log(`Writing prerendered HTML to ${dest}...`)
  fs.writeFileSync(dest, html)
  
  // Also save as 404.html for GitHub Pages SPA routing
  const dest404 = resolve('../dist/404.html')
  fs.writeFileSync(dest404, html)
  
  await browser.close()
  server.httpServer.close()
  console.log('Prerendering complete!')
}

prerender().catch(err => {
  console.error('Error during prerendering:', err)
  process.exit(1)
})
