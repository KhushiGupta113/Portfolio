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
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10"
    >
      {children}
      <span className="text-zinc-400">↗</span>
    </a>
  )
}

export function ProjectCard({ project }) {
  return (
    <article className="glass group rounded-2xl p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-zinc-400">{project.period}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {(project.links ?? []).map((l) => (
            <ExternalLink key={l.label} href={l.href}>
              {l.label}
            </ExternalLink>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{project.description}</p>

      <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
        {(project.bullets ?? []).slice(0, 4).map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-1 inline-block size-2 rounded-full bg-fuchsia-200/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {(project.tech ?? []).map((t) => (
          <Pill key={t} tone="outline">
            {t}
          </Pill>
        ))}
      </div>
    </article>
  )
}

