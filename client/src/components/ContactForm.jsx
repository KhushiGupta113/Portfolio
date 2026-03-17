import { useMemo, useState } from 'react'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const canSubmit = useMemo(() => {
    const n = form.name.trim().length >= 2
    const e = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    const m = form.message.trim().length >= 10
    return n && e && m && status.state !== 'loading'
  }, [form, status.state])

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || 'Failed to send message.')
      }
      setStatus({ state: 'success', message: 'Message sent. Thanks!' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({
        state: 'error',
        message: err instanceof Error ? err.message : 'Something went wrong.',
      })
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <label className="text-xs font-medium text-zinc-300">Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          placeholder="Your name"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-0 transition focus:border-violet-300/40 focus:bg-white/7"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-zinc-300">Email</label>
        <input
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          placeholder="you@example.com"
          inputMode="email"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-0 transition focus:border-sky-200/40 focus:bg-white/7"
        />
      </div>

      <div>
        <label className="text-xs font-medium text-zinc-300">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="Tell me what you’re building..."
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-0 transition focus:border-fuchsia-200/40 focus:bg-white/7"
        />
        <p className="mt-2 text-xs text-zinc-500">
          Tip: include a link, timeline, and what you need help with.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition disabled:cursor-not-allowed disabled:opacity-60 hover:bg-zinc-100"
        >
          {status.state === 'loading' ? 'Sending…' : 'Send message'}
        </button>
        {status.state !== 'idle' ? (
          <span
            className={[
              'text-sm',
              status.state === 'success' ? 'text-emerald-200' : '',
              status.state === 'error' ? 'text-rose-200' : '',
              status.state === 'loading' ? 'text-zinc-300' : '',
            ].join(' ')}
          >
            {status.message}
          </span>
        ) : null}
      </div>
    </form>
  )
}

