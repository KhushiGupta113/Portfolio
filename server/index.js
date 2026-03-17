const express = require('express')
const cors = require('cors')

const app = express()

app.use(
  cors({
    origin: true,
    credentials: false,
  }),
)
app.use(express.json({ limit: '100kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'portfolio-api', ts: Date.now() })
})

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim())
}

app.post('/api/contact', (req, res) => {
  const name = String(req.body?.name || '').trim()
  const email = String(req.body?.email || '').trim()
  const message = String(req.body?.message || '').trim()

  if (name.length < 2) return res.status(400).json({ error: 'Name is too short.' })
  if (!isEmail(email)) return res.status(400).json({ error: 'Enter a valid email.' })
  if (message.length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters.' })
  }

  // In production, send to email/DB. For now we log it.
  console.log('[contact]', { name, email, message, at: new Date().toISOString() })
  res.status(201).json({ ok: true })
})

const port = Number(process.env.PORT || 5000)
app.listen(port, () => {
  console.log(`Portfolio API running on http://localhost:${port}`)
})

