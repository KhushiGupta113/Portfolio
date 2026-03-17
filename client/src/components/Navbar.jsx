import { useEffect, useMemo, useState } from 'react'

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 transition hover:bg-white/10"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.6.75 12c0 5.12 3.17 9.45 7.57 10.98.55.1.75-.25.75-.54 0-.27-.01-.99-.02-1.95-3.08.69-3.73-1.52-3.73-1.52-.5-1.33-1.23-1.69-1.23-1.69-1-.71.08-.7.08-.7 1.11.08 1.69 1.16 1.69 1.16.98 1.73 2.58 1.23 3.21.94.1-.73.38-1.23.69-1.51-2.46-.29-5.05-1.26-5.05-5.63 0-1.24.43-2.25 1.14-3.05-.11-.29-.49-1.45.11-3.03 0 0 .93-.31 3.05 1.16.89-.25 1.84-.38 2.79-.38.95 0 1.9.13 2.79.38 2.12-1.47 3.05-1.16 3.05-1.16.6 1.58.22 2.74.11 3.03.71.8 1.14 1.81 1.14 3.05 0 4.38-2.6 5.34-5.07 5.63.39.35.74 1.05.74 2.12 0 1.53-.02 2.77-.02 3.14 0 .3.2.65.76.54 4.39-1.54 7.55-5.86 7.55-10.98C23.25 5.6 18.27.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.72C24 .77 23.21 0 22.23 0Z" />
    </svg>
  )
}

export function Navbar({ name, links, active, onActiveChange, socials }) {
  const [open, setOpen] = useState(false)

  const socialMap = useMemo(() => {
    const m = new Map()
    for (const s of socials ?? []) m.set(s.label.toLowerCase(), s.href)
    return m
  }, [socials])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const go = (id) => {
    onActiveChange?.(id)
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/60 backdrop-blur-xl">
      <div className="container-padded">
        <div className="flex h-16 items-center justify-between gap-3">
          <button
            onClick={() => go('home')}
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-left"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <span className="text-sm font-semibold text-white">
                {name?.[0] ?? 'K'}
              </span>
            </span>
            <span className="hidden text-sm font-semibold text-white sm:block">
              {name}
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={[
                  'rounded-xl px-3 py-2 text-sm transition',
                  active === l.id
                    ? 'bg-white/10 text-white'
                    : 'text-zinc-300 hover:bg-white/5 hover:text-white',
                ].join(' ')}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socialMap.get('linkedin') ? (
              <IconLink href={socialMap.get('linkedin')} label="LinkedIn">
                <LinkedinIcon />
              </IconLink>
            ) : null}
            {socialMap.get('github') ? (
              <IconLink href={socialMap.get('github')} label="GitHub">
                <GithubIcon />
              </IconLink>
            ) : null}

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 transition hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d={open ? 'M6 18 18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
              </svg>
            </button>
          </div>
        </div>

        {open ? (
          <div className="md:hidden pb-4">
            <div className="grid gap-1 rounded-2xl border border-white/10 bg-white/5 p-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={[
                    'rounded-xl px-3 py-2 text-left text-sm transition',
                    active === l.id
                      ? 'bg-white/10 text-white'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white',
                  ].join(' ')}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

