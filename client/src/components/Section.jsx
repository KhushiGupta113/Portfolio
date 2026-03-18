import { motion } from 'framer-motion'

export function Section({ id, title, subtitle, className = '', children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`container-padded py-14 sm:py-20 ${className}`}
    >
      {title ? (
        <header className="mb-10 flex items-end justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-3 text-base text-zinc-400">{subtitle}</p>
            ) : null}
          </div>
          <div className="hidden h-px w-full max-w-[200px] bg-gradient-to-r from-violet-500/50 via-fuchsia-500/20 to-transparent lg:block" />
        </header>
      ) : null}
      {children}
    </motion.section>
  )
}

