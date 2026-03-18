export function Pill({ children, tone = 'default', className = '' }) {
  const cls =
    tone === 'outline'
      ? 'border border-white/10 bg-transparent text-zinc-200'
      : tone === 'soft'
        ? 'border border-white/10 bg-white/5 text-zinc-200'
        : 'border border-white/10 bg-white/10 text-zinc-100'

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${cls} ${className}`}>
      {children}
    </span>
  )
}

