import { useMemo, useState } from 'react'
import { portfolio } from './data/portfolio'
import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { ProjectCard } from './components/ProjectCard'
import { Pill } from './components/Pill'
import { motion } from 'framer-motion'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export default function App() {
  const [active, setActive] = useState('home')

  const links = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'achievements', label: 'Achievements' },
      { id: 'competitive', label: 'CP / Hackathons' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  return (
    <div className="min-h-dvh">
      <Navbar
        name={portfolio.name}
        links={links}
        active={active}
        onActiveChange={setActive}
        socials={portfolio.socials}
      />

      <main className="pt-20">
        <Section id="home" className="pt-10 sm:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
            >
              <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-4 text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Hi, I’m <span className="text-gradient">{portfolio.name}</span>.
                <span className="block mt-2 text-zinc-300">
                  I build clean, fast, user-friendly web experiences.
                </span>
              </motion.h1>
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400">
                {portfolio.summary}
              </motion.p>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 transition-all shadow-lg shadow-violet-500/30"
                >
                  View projects
                </a>
                <a
                  href={`mailto:${portfolio.email}`}
                  className="glass inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 hover:border-white/20"
                >
                  Contact me
                </a>
                {portfolio.resumeUrl ? (
                  <a
                    href={portfolio.resumeUrl}
                    className="inline-flex items-center justify-center rounded-xl border border-white/5 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                ) : null}
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mt-10 flex flex-wrap gap-2">
                {portfolio.highlights.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-violet-500/20 group"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
              <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.35),transparent_50%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <img
                src="/Profile.jpeg"
                alt="Khushi Gupta"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </Section>

        <Section id="about" title="About" subtitle="A quick introduction">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 lg:p-8"
            >
              <p className="text-zinc-300 text-base leading-relaxed">
                {portfolio.about}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {portfolio.core.map((c) => (
                  <Pill key={c} tone="soft" className="bg-white/5">
                    {c}
                  </Pill>
                ))}
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 lg:p-8"
            >
              <p className="text-base font-semibold text-white">What I care about</p>
              <ul className="mt-6 grid gap-4 text-sm text-zinc-300">
                {portfolio.values.map((v) => (
                  <li key={v} className="flex gap-4 items-start">
                    <span className="mt-1.5 shrink-0 inline-block size-2 rounded-full bg-violet-400/80 shadow-[0_0_8px_rgba(167,139,250,0.6)]" />
                    <span className="leading-relaxed">{v}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="Tools I use to ship"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.skills.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6"
              >
                <p className="text-base font-bold text-white border-b border-white/10 pb-3 mb-5">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Pill key={s} tone="outline" className="bg-black/20 hover:bg-white/10 transition-colors">
                      {s}
                    </Pill>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Selected work and case studies"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {portfolio.projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section
          id="education"
          title="Education"
          subtitle="Academic journey & training"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="grid gap-5">
                {portfolio.education.map((e) => (
                  <div
                    key={e.title}
                    className="group relative rounded-xl border border-white/5 bg-black/20 p-5 transition-colors hover:bg-white/5 hover:border-violet-500/30"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-violet-500/0 group-hover:bg-violet-500/50 transition-colors" />
                    <p className="text-base font-bold text-white pl-2">{e.title}</p>
                    <p className="mt-1 text-sm font-medium text-zinc-300 pl-2">{e.meta}</p>
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-400 ml-2">
                      <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {e.when}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Training & Certificates</h3>
              </div>
              <div className="grid gap-5">
                <div className="rounded-xl border border-white/5 bg-black/20 p-5 shadow-inner">
                  <p className="text-base font-bold text-white">
                    {portfolio.training.title}
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-sky-200/80">
                    {portfolio.training.meta}
                  </p>
                  {portfolio.training.period ? (
                    <p className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-400">
                      <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {portfolio.training.period}
                    </p>
                  ) : null}
                  <ul className="mt-4 grid gap-2.5 text-sm text-zinc-300">
                    {portfolio.training.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-start">
                        <span className="mt-1.5 shrink-0 inline-block size-1.5 rounded-full bg-sky-400/70" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/20 p-5">
                  <p className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-3">Certificates</p>
                  <div className="grid gap-3">
                    {portfolio.certificates.map((c) => (
                      <motion.a
                        key={`${c.title}-${c.issuer}`}
                        whileHover={{ scale: 1.02 }}
                        href={c.link || undefined}
                        target={c.link ? '_blank' : undefined}
                        rel={c.link ? 'noreferrer' : undefined}
                        className={[
                          'group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm transition-colors hover:bg-white/10 hover:border-sky-500/30',
                          c.link ? 'text-zinc-200' : 'text-zinc-300',
                        ].join(' ')}
                      >
                        <span className="font-bold text-white group-hover:text-sky-200 transition-colors">{c.title}</span>
                        <span className="text-xs font-medium text-zinc-400">
                          {c.issuer} • {c.date} {c.link ? <span className="text-sky-300 ml-1">↗</span> : ''}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        <Section
          id="achievements"
          title="Achievements"
          subtitle="Highlights that show excellence"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {(portfolio.achievements ?? []).map((a, idx) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass relative rounded-2xl p-6 lg:p-8 overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-violet-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <p className="text-lg font-bold text-white">{a.title}</p>
                  <p className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-400 shrink-0">
                    <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    {a.period}
                  </p>
                </div>
                <p className="mt-4 text-base leading-relaxed text-zinc-300">{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section
          id="competitive"
          title="Competitive Programming"
          subtitle="Problem-solving & hackathons"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500/20 text-orange-300">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Platforms</h3>
              </div>
              <div className="grid gap-4">
                {(portfolio.competitive?.platforms ?? []).map((p) => (
                  <motion.a
                    key={p.name}
                    whileHover={{ scale: 1.02 }}
                    href={p.link || undefined}
                    target={p.link ? '_blank' : undefined}
                    rel={p.link ? 'noreferrer' : undefined}
                    className={[
                      'group flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-5 py-4 text-sm transition-colors hover:bg-white/10 hover:border-orange-500/30',
                      p.link ? 'text-zinc-200' : 'text-zinc-300',
                    ].join(' ')}
                  >
                    <span className="text-base font-bold text-white group-hover:text-orange-200 transition-colors">{p.name}</span>
                    <span className="text-zinc-400 font-medium">{p.detail} {p.link ? <span className="text-orange-300 ml-1">↗</span> : ''}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-300">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white">Hackathons</h3>
              </div>
              <div className="grid gap-4">
                {(portfolio.competitive?.hackathons ?? []).map((h) => (
                  <div
                    key={`${h.name}-${h.period}`}
                    className="group relative rounded-xl border border-white/5 bg-black/20 p-5 transition-colors hover:bg-white/5 hover:border-pink-500/30"
                  >
                    <div className="absolute inset-y-0 left-0 w-1 rounded-l-xl bg-pink-500/0 group-hover:bg-pink-500/50 transition-colors" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pl-2">
                      <p className="text-base font-bold text-white group-hover:text-pink-100 transition-colors">{h.name}</p>
                      <p className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-400 shrink-0">
                        <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        {h.period}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-300 pl-2">{h.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Let’s build something together"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-6 sm:p-10"
            >
              <ContactForm />
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-6 sm:p-10 flex flex-col justify-between"
            >
               <div>
                <p className="text-xl font-bold text-white mb-6">Elsewhere</p>
                <div className="grid gap-3">
                  {portfolio.socials.map((s) => (
                    <motion.a
                      key={s.label}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={s.href}
                      className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-base font-medium text-zinc-200 transition-colors hover:bg-white/10 hover:border-violet-500/30"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="group-hover:text-violet-300 transition-colors">{s.label}</span>
                      <span className="text-zinc-500 group-hover:text-violet-400 transition-colors">↗</span>
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 rounded-2xl border border-white/5 bg-black/30 p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-violet-500/20 text-violet-400 mb-4">
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <p className="text-base text-zinc-300 font-medium">
                  Prefer direct email?
                </p>
                <a 
                  className="mt-2 block text-lg font-bold text-white hover:text-violet-400 transition-colors" 
                  href={`mailto:${portfolio.email}`}
                >
                  {portfolio.email}
                </a>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer name={portfolio.name} socials={portfolio.socials} />
    </div>
  )
}
