import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

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
    <form onSubmit={onSubmit} className="grid gap-6">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-bold tracking-wide text-zinc-300">Name</label>
        <input
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          placeholder="What's your name?"
          className="w-full rounded-2xl border border-white/5 bg-black/20 px-5 py-4 text-base text-white placeholder:text-zinc-600 outline-none ring-0 transition-all focus:border-violet-500/50 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(139,92,246,0.1)]"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-bold tracking-wide text-zinc-300">Email</label>
        <input
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          placeholder="your@email.com"
          inputMode="email"
          className="w-full rounded-2xl border border-white/5 bg-black/20 px-5 py-4 text-base text-white placeholder:text-zinc-600 outline-none ring-0 transition-all focus:border-sky-500/50 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(14,165,233,0.1)]"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-bold tracking-wide text-zinc-300">Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          placeholder="How can I help you?"
          rows={5}
          className="w-full resize-none rounded-2xl border border-white/5 bg-black/20 px-5 py-4 text-base text-white placeholder:text-zinc-600 outline-none ring-0 transition-all focus:border-fuchsia-500/50 focus:bg-white/5 focus:shadow-[0_0_15px_rgba(217,70,239,0.1)]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
        <motion.button
          whileHover={canSubmit ? { scale: 1.02 } : {}}
          whileTap={canSubmit ? { scale: 0.98 } : {}}
          type="submit"
          disabled={!canSubmit}
          className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3.5 text-base font-bold text-white transition-all disabled:cursor-not-allowed disabled:opacity-50 disabled:from-zinc-700 disabled:to-zinc-700 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          {status.state === 'loading' ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin size-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </motion.button>
        {status.state !== 'idle' && status.state !== 'loading' ? (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 ${
              status.state === 'success' ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
            }`}
          >
            {status.state === 'success' ? (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            )}
            {status.message}
          </motion.div>
        ) : null}
      </div>
    </form>
  )
}

