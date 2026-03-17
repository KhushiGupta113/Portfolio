export function Footer({ name, socials }) {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/30">
      <div className="container-padded py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="mt-1 text-sm text-zinc-400">
              Built with React + Tailwind • API powered by Express
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(socials ?? []).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10"
              >
                {s.label} <span className="text-zinc-400">↗</span>
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

