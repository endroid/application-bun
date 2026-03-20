import { Hono } from 'hono'

const app = new Hono()

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="30" fill="#fbf0df"/>
  <ellipse cx="32" cy="38" rx="18" ry="20" fill="#f4d590"/>
  <circle cx="24" cy="30" r="3" fill="#3e2723"/>
  <circle cx="40" cy="30" r="3" fill="#3e2723"/>
  <path d="M26 40 Q32 46 38 40" stroke="#3e2723" stroke-width="2" fill="none" stroke-linecap="round"/>
  <ellipse cx="18" cy="36" rx="4" ry="3" fill="#f8b4b4" opacity="0.5"/>
  <ellipse cx="46" cy="36" rx="4" ry="3" fill="#f8b4b4" opacity="0.5"/>
  <path d="M20 16 Q24 4 30 14" stroke="#c8a96e" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M44 16 Q40 4 34 14" stroke="#c8a96e" stroke-width="3" fill="none" stroke-linecap="round"/>
</svg>`

app.get('/favicon.ico', (c) => {
  return c.body(favicon, { headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' } })
})

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
