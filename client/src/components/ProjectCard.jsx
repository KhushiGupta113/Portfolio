import { motion } from 'framer-motion'
import { Pill } from './Pill'

function ExternalLink({ href, children }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-400">
        {children}
      </span>
    )
  }
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10 hover:border-violet-500/50"
    >
      {children}
      <span className="text-zinc-400">↗</span>
    </motion.a>
  )
}

export function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="glass group rounded-2xl p-6 lg:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-zinc-400 font-medium">{project.period}</p>
          {project.role ? (
            <p className="mt-2 text-sm text-zinc-300">
              <span className="text-zinc-500">Role:</span> <span className="text-zinc-200 font-medium">{project.role}</span>
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {(project.links ?? []).map((l) => (
            <ExternalLink key={l.label} href={l.href}>
              {l.label}
            </ExternalLink>
          ))}
        </div>
      </div>

      <p className="mt-5 text-base leading-relaxed text-zinc-300">{project.description}</p>

      {(project.challenges?.length ?? 0) > 0 || (project.outcomes?.length ?? 0) > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {(project.challenges?.length ?? 0) > 0 ? (
            <div className="rounded-xl border border-white/5 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-200/80 mb-4">
                Challenges
              </p>
              <ul className="grid gap-3 text-sm text-zinc-300">
                {project.challenges.slice(0, 3).map((c) => (
                  <li key={c} className="flex gap-3">
                    <span className="mt-1.5 shrink-0 inline-block size-1.5 rounded-full bg-amber-400/70" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {(project.outcomes?.length ?? 0) > 0 ? (
            <div className="rounded-xl border border-white/5 bg-black/20 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-200/80 mb-4">
                Outcomes
              </p>
              <ul className="grid gap-3 text-sm text-zinc-300">
                {project.outcomes.slice(0, 3).map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-1.5 shrink-0 inline-block size-1.5 rounded-full bg-emerald-400/70" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : null}

      <ul className="mt-6 grid gap-3 text-sm text-zinc-200">
        {(project.bullets ?? []).slice(0, 4).map((b) => (
          <li key={b} className="flex gap-3 items-start">
            <span className="mt-1.5 shrink-0 inline-block size-1.5 rounded-full bg-fuchsia-400/70" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/5">
        {(project.tech ?? []).map((t) => (
          <Pill key={t} tone="outline" className="text-xs bg-white/5 hover:bg-white/10 transition-colors">
            {t}
          </Pill>
        ))}
      </div>
    </motion.article>
  )
}

