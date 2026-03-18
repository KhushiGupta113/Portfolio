export function Footer({ name, socials }) {
  return (
    <footer className="border-t border-white/5 bg-black/40 mt-10">
      <div className="container-padded py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <p className="text-xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">{name}</p>
            <p className="mt-3 text-base leading-relaxed text-zinc-400">
              Building dynamic, clean, and fast web experiences with React, Tailwind, and Node.js.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {(socials ?? []).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {s.label} <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16 sm:mt-24 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500 flex items-center gap-1.5">
            Designed to wow <span className="inline-block animate-pulse text-zinc-400">⚡</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

