"use client"

import { useState } from "react"
import { ArrowUpRight, CalendarDays, Check, CircleDot, Code2, Github, Globe2, Mail, Menu, MoveUpRight, Send, Sparkles, X } from "lucide-react"

type WorkKey = "aivora" | "dropshipping" | "github"
const contactEmail = "sunnypratap859@gmail.com"
const calendlyUrl = "https://calendly.com/sunnypratap859"

const work = {
  aivora: {
    number: "01", name: "Aivora", label: "IN PROGRESS", year: "2026",
    summary: "A thoughtful product currently taking shape — from early ideas to a clear, useful digital experience.",
    tags: ["JavaScript", "Product design", "Building in public"],
    url: "https://github.com/sunnyrockk/Aivora", live: undefined,
    tint: "from-[#bd9cff] to-[#7547ef]", shade: "bg-[#f0eaff]", mark: "✦"
  },
  dropshipping: {
    number: "02", name: "Dropshipping", label: "LIVE PRODUCT", year: "2025",
    summary: "A TypeScript storefront that puts products first, making the route from discovery to action simple and clear.",
    tags: ["TypeScript", "E-commerce", "Vercel"],
    url: "https://github.com/sunnyrockk/dropshiping-", live: "https://dropshiping-theta.vercel.app",
    tint: "from-[#ffb86b] to-[#ff704d]", shade: "bg-[#fff0e2]", mark: "◒"
  },
  github: {
    number: "03", name: "GitHub archive", label: "OPEN SOURCE", year: "2024—NOW",
    summary: "A living archive of 18 public repositories: experiments, learning projects, and products built one commit at a time.",
    tags: ["18 repositories", "JavaScript", "TypeScript"],
    url: "https://github.com/sunnyrockk", live: undefined,
    tint: "from-[#75ccff] to-[#3276e8]", shade: "bg-[#e1f3ff]", mark: "⌘"
  },
}

export function MacShowcase() {
  const [active, setActive] = useState<WorkKey>("aivora")
  const [menuOpen, setMenuOpen] = useState(false)
  const project = work[active]

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#151515] selection:bg-[#c9b6ff]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f7f6f2]/90 px-5 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-[-.04em]"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#171717] text-white"><Code2 className="h-5 w-5" /></span><span>sunny<span className="text-[#7953e8]">.</span>mall</span></a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-black/60 md:flex"><a href="#work" className="hover:text-black">Selected work</a><a href="#skills" className="hover:text-black">Skills</a><a href="#about" className="hover:text-black">About</a><a href="#contact" className="hover:text-black">Contact</a></nav>
          <div className="flex items-center gap-2"><a href="https://github.com/sunnyrockk" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-black/10 hover:bg-black hover:text-white"><Github className="h-4 w-4" /></a><a href={`mailto:${contactEmail}`} className="hidden rounded-full bg-[#171717] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#7953e8] sm:block">Let&apos;s talk</a><button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden">{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div>
        </div>
        {menuOpen && <nav className="mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-black/10 py-5 text-sm font-medium md:hidden"><a onClick={() => setMenuOpen(false)} href="#work">Selected work</a><a onClick={() => setMenuOpen(false)} href="#skills">Skills</a><a onClick={() => setMenuOpen(false)} href="#about">About</a><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></nav>}
      </header>

      <section id="home" className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8 lg:pb-24 lg:pt-24">
        <div className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] rounded-full bg-[#d9ccff] blur-[130px]" />
        <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div><div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold"><span className="h-2 w-2 rounded-full bg-[#4cbd78]" />AVAILABLE FOR NEW OPPORTUNITIES</div><h1 className="max-w-4xl text-balance text-[clamp(3.8rem,8.8vw,9rem)] font-semibold leading-[.84] tracking-[-.095em]">I&apos;m <span className="text-[#7953e8]">Sunny.</span><br />I build for the web.</h1><p className="mt-9 max-w-xl text-lg leading-8 text-black/60">A full-stack developer based in Lucknow, turning curious ideas into fast, considered web experiences.</p><div className="mt-10 flex flex-wrap gap-3"><a href="#work" className="inline-flex items-center gap-3 rounded-full bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#7953e8]">Explore the work <ArrowUpRight className="h-4 w-4" /></a><a href="https://github.com/sunnyrockk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-black/15 bg-white px-6 py-4 text-sm font-semibold transition hover:-translate-y-1">View GitHub <Github className="h-4 w-4" /></a></div></div>
          <div className="relative mx-auto w-full max-w-[520px]"><div className="absolute -inset-8 -rotate-6 rounded-[3rem] bg-[#171717]" /><div className="relative min-h-[440px] overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#eae7ff] p-7 shadow-[0_24px_70px_rgba(40,26,97,.2)]"><div className="flex items-center justify-between"><span className="font-mono text-xs text-black/45">SUNNY.OS / 01</span><span className="grid h-9 w-9 place-items-center rounded-full bg-white"><Sparkles className="h-4 w-4 text-[#7953e8]" /></span></div><div className="mt-12 grid h-52 place-items-center rounded-[2rem] bg-[#151515] shadow-2xl"><div className="relative grid h-32 w-32 place-items-center rounded-[2rem] bg-gradient-to-br from-[#b89aff] to-[#6843dd] text-5xl text-white shadow-[0_18px_45px_rgba(114,72,226,.55)]">S<div className="absolute -right-4 -top-4 grid h-11 w-11 place-items-center rounded-full bg-[#e7ff8a] text-base text-black">✦</div></div></div><div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl bg-white p-4"><p className="text-xs text-black/45">Public repos</p><p className="mt-2 text-3xl font-semibold tracking-[-.08em]">18</p></div><div className="rounded-2xl bg-white p-4"><p className="text-xs text-black/45">Focus</p><p className="mt-2 text-lg font-semibold tracking-[-.05em]">Full stack</p></div></div></div></div>
        </div>
      </section>

      <section id="work" className="border-y border-black/10 bg-white px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-[1400px]"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold tracking-[.2em] text-[#7953e8]">SELECTED WORK / 2024—NOW</p><h2 className="mt-3 text-5xl font-semibold tracking-[-.08em] sm:text-6xl">A few things<br />I&apos;m making.</h2></div><p className="max-w-sm text-sm leading-6 text-black/55">Choose a project to explore its story, stack, and live destination.</p></div><div className="grid gap-5 lg:grid-cols-[.75fr_1.25fr]">
        <div className="flex flex-col gap-2">{(Object.keys(work) as WorkKey[]).map((key) => <button key={key} onClick={() => setActive(key)} className={`group flex items-center justify-between rounded-2xl border p-5 text-left transition ${active === key ? "border-black bg-[#171717] text-white" : "border-black/10 bg-[#fafafa] hover:border-black/30"}`}><span className="flex items-center gap-4"><span className="font-mono text-xs opacity-50">{work[key].number}</span><span><span className="block text-lg font-semibold tracking-[-.04em]">{work[key].name}</span><span className="mt-1 block text-xs opacity-55">{work[key].label}</span></span></span><MoveUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></button>)}</div>
        <article className={`relative overflow-hidden rounded-[2rem] ${project.shade} p-7 sm:p-10`}><div className={`absolute -right-12 -top-14 h-64 w-64 rounded-full bg-gradient-to-br ${project.tint} opacity-80 blur-[1px]`} /><div className="relative flex min-h-[380px] flex-col"><div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-3xl shadow-sm">{project.mark}</span><span className="rounded-full border border-black/10 bg-white/70 px-3 py-2 font-mono text-[11px]">{project.year}</span></div><div className="mt-auto max-w-xl"><p className="text-xs font-bold tracking-[.16em] text-black/50">{project.label}</p><h3 className="mt-2 text-5xl font-semibold tracking-[-.08em]">{project.name}</h3><p className="mt-5 max-w-lg text-base leading-7 text-black/60">{project.summary}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-medium">{tag}</span>)}</div><div className="mt-8 flex flex-wrap gap-3"><a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white hover:bg-[#7953e8]"><Github className="h-4 w-4" />Source code</a>{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-5 py-3 text-sm font-semibold hover:bg-white"><Globe2 className="h-4 w-4" />Live preview</a>}</div></div></div></article></div></div></section>

      <section id="about" className="px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-bold tracking-[.2em] text-[#7953e8]">ABOUT ME</p><h2 className="mt-4 text-5xl font-semibold leading-[.9] tracking-[-.08em] sm:text-6xl">Curious by default.</h2></div><div className="grid gap-5 sm:grid-cols-2"><div className="rounded-3xl bg-[#171717] p-7 text-white"><CircleDot className="h-7 w-7 text-[#d6ff66]" /><p className="mt-16 text-xl font-semibold tracking-[-.04em]">Be curious.<br />Be consistent.</p><p className="mt-4 text-sm leading-6 text-white/55">The principle behind every repository and every iteration.</p></div><div className="rounded-3xl border border-black/10 bg-[#e7ff8a] p-7"><Check className="h-7 w-7" /><p className="mt-16 text-xl font-semibold tracking-[-.04em]">Built for the web.</p><p className="mt-4 text-sm leading-6 text-black/60">Full-stack development, product UI, and performance-minded interfaces.</p></div></div></div></section>
      <section id="skills" className="border-y border-black/10 bg-[#171717] px-5 py-20 text-white sm:px-8 lg:py-28"><div className="mx-auto max-w-[1400px]"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold tracking-[.2em] text-[#c7b1ff]">TOOLS I USE</p><h2 className="mt-3 text-5xl font-semibold tracking-[-.08em] sm:text-6xl">Skills that ship.</h2></div><p className="max-w-sm text-sm leading-6 text-white/55">A practical toolkit for taking an idea from interface to deployed product.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["01", "Frontend", "React · Next.js · Tailwind CSS"], ["02", "Language", "TypeScript · JavaScript · HTML/CSS"], ["03", "Product", "Responsive UI · UX · Performance"], ["04", "Delivery", "Vercel · GitHub · Iteration"]].map(([number, title, details]) => <div key={title} className="rounded-2xl border border-white/10 bg-white/[.055] p-6 transition hover:-translate-y-1 hover:bg-white/[.1]"><span className="font-mono text-xs text-[#c7b1ff]">{number}</span><h3 className="mt-12 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{details}</p></div>)}</div></div></section>

      <section id="contact" className="px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#7953e8] text-white"><div className="grid gap-10 px-7 py-12 sm:px-12 sm:py-16 lg:grid-cols-[.95fr_1.05fr] lg:gap-16"><div><p className="text-xs font-bold tracking-[.2em] text-white/65">HAVE A PROJECT IN MIND?</p><h2 className="mt-5 text-5xl font-semibold leading-[.88] tracking-[-.08em] sm:text-7xl">Let&apos;s make it happen.</h2><p className="mt-7 max-w-md text-base leading-7 text-white/75">Book a short meeting or send a note. I&apos;ll get back to you as soon as I can.</p><a href={calendlyUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#171717] transition hover:-translate-y-1"><CalendarDays className="h-4 w-4" />Book a Calendly meeting <ArrowUpRight className="h-4 w-4" /></a></div><ContactForm /></div></div><footer className="flex flex-col gap-3 py-7 text-xs text-black/45 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Sunny Mall</span><a href="https://github.com/sunnyrockk" target="_blank" rel="noreferrer" className="hover:text-black">github.com/sunnyrockk</a></footer></section>
    </main>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)

  return <form action={`https://formsubmit.co/${contactEmail}`} method="POST" onSubmit={() => setSent(true)} className="rounded-3xl bg-white p-6 text-[#171717] shadow-2xl sm:p-8">
    <input type="hidden" name="_subject" value="New message from sunnyabc.vercel.app" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <p className="text-xs font-bold tracking-[.16em] text-[#7953e8]">SEND A MESSAGE</p>
    <h3 className="mt-3 text-2xl font-semibold tracking-[-.05em]">Tell me about it.</h3>
    <div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="text-sm font-medium">Name<input required name="name" placeholder="Your name" className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f6f2] px-4 py-3 outline-none transition focus:border-[#7953e8]" /></label><label className="text-sm font-medium">Email<input required type="email" name="email" placeholder="you@email.com" className="mt-2 w-full rounded-xl border border-black/10 bg-[#f7f6f2] px-4 py-3 outline-none transition focus:border-[#7953e8]" /></label></div>
    <label className="mt-4 block text-sm font-medium">Message<textarea required name="message" rows={4} placeholder="How can I help?" className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-[#f7f6f2] px-4 py-3 outline-none transition focus:border-[#7953e8]" /></label>
    <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-semibold text-white hover:bg-[#7953e8]"><Send className="h-4 w-4" />{sent ? "Opening secure sender…" : "Send message"}</button>
    <p className="mt-4 text-xs leading-5 text-black/45">Messages are delivered securely to Sunny&apos;s inbox.</p>
  </form>
}
