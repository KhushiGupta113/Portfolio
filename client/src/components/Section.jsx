export function Section({ id, title, subtitle, className = '', children }) {
  return (
    <section id={id} className={`container-padded py-14 sm:py-16 ${className}`}>
      {title ? (
        <header className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 text-sm text-zinc-300">{subtitle}</p>
            ) : null}
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-white/20 via-white/5 to-transparent lg:block" />
        </header>
      ) : null}
      {children}
    </section>
  )
}

