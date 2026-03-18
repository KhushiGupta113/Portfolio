import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GithubIcon, LinkedinIcon, MenuIcon, XIcon } from './Icons' // We'll create these

function IconLink({ href, label, children }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
      aria-label={label}
      title={label}
    >
      {children}
    </motion.a>
  )
}

export function Navbar({ name, links, active, onActiveChange, socials }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const socialMap = useMemo(() => {
    const m = new Map()
    for (const s of socials ?? []) m.set(s.label.toLowerCase(), s.href)
    return m
  }, [socials])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/70 backdrop-blur-2xl border-b border-white/10 shadow-xl shadow-black/50 py-1' : 'bg-transparent py-4'}`}
    >
      <div className="container-padded">
        <div className="flex h-14 items-center justify-between gap-3">
          <button
            onClick={() => go('home')}
            className="group flex items-center gap-3 rounded-xl px-2 py-1 text-left"
          >
            <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 shadow-lg group-hover:shadow-violet-500/50 transition-shadow">
              <span className="text-lg font-bold text-white relative z-10">
                {name?.[0] ?? 'K'}
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="hidden text-base font-bold tracking-tight text-white sm:block">
              {name}
            </span>
          </button>

          <nav className="hidden items-center gap-1 md:flex rounded-full bg-white/5 border border-white/10 px-2 py-1.5 backdrop-blur-md">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={[
                  'relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
                  active === l.id
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200',
                ].join(' ')}
              >
                {active === l.id && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
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

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200 transition hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              {open ? <XIcon /> : <MenuIcon />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-2 mb-4 grid gap-1 rounded-2xl border border-white/10 bg-[#14141c] p-3 shadow-2xl">
                {links.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => go(l.id)}
                    className={[
                      'rounded-xl px-4 py-3 text-left text-sm font-medium transition-all',
                      active === l.id
                        ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white border border-transparent',
                    ].join(' ')}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

