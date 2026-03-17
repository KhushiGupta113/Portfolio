import { useMemo, useState } from 'react'
import { portfolio } from './data/portfolio'
import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { ProjectCard } from './components/ProjectCard'
import { Pill } from './components/Pill'
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
            <div>
              <p className="text-sm text-zinc-300/80">
                {portfolio.role} • {portfolio.location}
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Hi, I’m <span className="text-gradient">{portfolio.name}</span>.
                <span className="block text-zinc-200">
                  I build clean, fast, user-friendly web experiences.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-300">
                {portfolio.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="glass inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  View projects
                </a>
                <a
                  href={`mailto:${portfolio.email}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                >
                  Contact me
                </a>
                {portfolio.resumeUrl ? (
                  <a
                    href={portfolio.resumeUrl}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-white/5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                ) : null}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {portfolio.highlights.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-zinc-100">Quick info</p>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-300/20">
                  Open to internships
                </span>
              </div>
              <dl className="mt-5 grid gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-zinc-400">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-200">
                    <a className="hover:underline" href={`mailto:${portfolio.email}`}>
                      {portfolio.email}
                    </a>
                  </dd>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-zinc-400">
                    Phone
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-200">{portfolio.phone}</dd>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs uppercase tracking-wide text-zinc-400">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm text-zinc-200">
                    Full-stack (React + Node/Express)
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Section>

        <Section id="about" title="About" subtitle="A quick introduction">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <p className="text-zinc-300 leading-relaxed">
                {portfolio.about}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {portfolio.core.map((c) => (
                  <Pill key={c} tone="soft">
                    {c}
                  </Pill>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-sm font-medium text-zinc-100">What I care about</p>
              <ul className="mt-4 grid gap-3 text-sm text-zinc-300">
                {portfolio.values.map((v) => (
                  <li key={v} className="flex gap-3">
                    <span className="mt-1 inline-block size-2 rounded-full bg-violet-300/80" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="Tools I use to ship"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.skills.map((group) => (
              <div key={group.label} className="glass rounded-2xl p-6">
                <p className="text-sm font-medium text-zinc-100">{group.label}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <Pill key={s} tone="outline">
                      {s}
                    </Pill>
                  ))}
                </div>
              </div>
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
            <div className="glass rounded-2xl p-6">
              <p className="text-sm font-medium text-zinc-100">Education</p>
              <div className="mt-4 grid gap-4">
                {portfolio.education.map((e) => (
                  <div
                    key={e.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-sm font-semibold text-white">{e.title}</p>
                    <p className="mt-1 text-sm text-zinc-300">{e.meta}</p>
                    <p className="mt-1 text-xs text-zinc-400">{e.when}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-sm font-medium text-zinc-100">Training & Certificates</p>
              <div className="mt-4 grid gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">
                    {portfolio.training.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    {portfolio.training.meta}
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm text-zinc-300">
                    {portfolio.training.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-1 inline-block size-2 rounded-full bg-sky-200/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Certificates</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {portfolio.certificates.map((c) => (
                      <Pill key={c} tone="soft">
                        {c}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Let’s build something together"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="glass rounded-2xl p-6">
              <ContactForm />
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-sm font-medium text-zinc-100">Elsewhere</p>
              <div className="mt-4 grid gap-3">
                {portfolio.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{s.label}</span>
                    <span className="text-zinc-400">↗</span>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-sm text-zinc-300">
                Prefer email? Write to{' '}
                <a className="underline decoration-white/30 hover:decoration-white" href={`mailto:${portfolio.email}`}>
                  {portfolio.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer name={portfolio.name} socials={portfolio.socials} />
    </div>
  )
}
