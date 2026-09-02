"use client"

import { useState, type ReactNode } from "react"
import {
  ArrowDownToLine, ArrowRight, BriefcaseBusiness, Code2, Folder, Github,
  Globe2, Linkedin, Mail, MapPin, Moon, Sparkles, Terminal,
} from "lucide-react"

type ProjectKey = "aivora" | "dropshipping" | "github"

const projects = {
  aivora: {
    name: "Aivora", status: "Coming soon", icon: "✦", color: "text-violet-300",
    url: "https://github.com/sunnyrockk/Aivora",
    lines: ["// Aivora — product in development", "const project = {", '  status: "coming soon",', '  focus: ["AI", "great UX"],', '  builtBy: "Sunny Mall"', "}"]
  },
  dropshipping: {
    name: "Dropshipping", status: "Live on Vercel", icon: "◒", color: "text-orange-300",
    url: "https://github.com/sunnyrockk/dropshiping-", live: "https://dropshiping-theta.vercel.app",
    lines: ["// Dropshipping storefront", "const store = {", '  stack: "TypeScript",', '  experience: "commerce",', '  deployment: "Vercel"', "}"]
  },
  github: {
    name: "GitHub", status: "18 public repositories", icon: "⌘", color: "text-sky-300",
    url: "https://github.com/sunnyrockk",
    lines: ["// github.com/sunnyrockk", "const profile = {", "  repositories: 18,", '  practice: "daily coding",', '  motto: "Be curious. Be consistent."', "}"]
  },
}

const skills = {
  React: { icon: "⚛", type: "Frontend", description: "Building reusable, responsive interfaces with components, hooks, and modern React patterns.", color: "text-sky-300" },
  "Next.js": { icon: "N", type: "Frontend", description: "Creating fast production web applications with Next.js and server-rendered experiences.", color: "text-white" },
  TypeScript: { icon: "TS", type: "Language", description: "Writing safer, maintainable applications with typed JavaScript.", color: "text-blue-400" },
  JavaScript: { icon: "JS", type: "Language", description: "Developing interactive browser experiences and product features.", color: "text-yellow-300" },
  "Tailwind CSS": { icon: "≈", type: "Styling", description: "Designing polished interfaces quickly with a responsive utility-first system.", color: "text-cyan-300" },
}
type SkillKey = keyof typeof skills

export function MacShowcase() {
  const [active, setActive] = useState<ProjectKey>("aivora")
  const [closed, setClosed] = useState(false)
  const [activeSkill, setActiveSkill] = useState<SkillKey>("React")
  const project = projects[active]

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070d] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(0,151,167,.15),transparent_27%),radial-gradient(circle_at_75%_22%,rgba(65,49,168,.25),transparent_30%),radial-gradient(circle_at_80%_90%,rgba(100,35,130,.16),transparent_28%)]" />
      <div className="relative mx-auto min-h-screen max-w-[1540px] px-5 py-5 lg:px-10">
        <header className="flex items-center justify-between border-b border-white/10 pb-4 lg:pb-5">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/25 bg-white/[.035] text-[#4a9fff]"><Code2 className="h-7 w-7" /></span>
            <span className="hidden text-2xl font-semibold tracking-[-.07em] sm:block">sunny<span className="bg-gradient-to-r from-sky-300 to-violet-400 bg-clip-text text-transparent">/</span>dev</span>
          </a>
          <nav className="hidden rounded-full border border-white/10 bg-white/[.055] p-1 text-sm font-semibold text-white/65 md:flex">
            {[["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]].map(([label, href], index) => <a key={label} href={href} className={`rounded-full px-6 py-2.5 transition hover:bg-white/10 hover:text-white ${index === 0 ? "bg-[#aabbd7] text-slate-950" : ""}`}>{label}</a>)}
          </nav>
          <div className="flex gap-2">
            <a aria-label="GitHub" href="https://github.com/sunnyrockk" target="_blank" rel="noreferrer" className="social"><Github /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/sunny-mall-5aa4a8314" target="_blank" rel="noreferrer" className="social hidden sm:grid"><Linkedin /></a>
            <a aria-label="Email" href="mailto:sunny@email.com" className="social"><Mail /></a>
            <button aria-label="Theme" className="social hidden sm:grid"><Moon className="text-yellow-300" /></button>
          </div>
        </header>

        <section id="home" className="grid min-h-[calc(100vh-106px)] items-center gap-10 py-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-12 lg:py-16">
          <div className="pl-1 lg:pl-4">
            <div className="mb-11 inline-flex items-center gap-3 rounded-full border border-[#1375d2]/55 bg-[#0a315f]/45 px-5 py-3 text-sm text-[#63aaff]"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_3px_rgba(52,211,153,.45)]" />Open to Internships • Freelance • Full-Time</div>
            <p className="mb-5 text-2xl font-medium text-white/65">I&apos;m</p>
            <h1 className="max-w-xl text-[clamp(4rem,8vw,8.5rem)] font-black leading-[.78] tracking-[-.12em]">
              <span className="block bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">Sunny</span>
              <span className="block pt-5 text-white">Mall<span className="text-[#377ded]">|</span></span>
            </h1>
            <p className="mt-12 text-2xl font-semibold text-white/65"><span className="mr-3 text-[#3c8cff]">&gt;</span>Full Stack Developer<span className="animate-pulse">_</span></p>
            <div className="mt-11 flex flex-wrap gap-x-7 gap-y-4 text-sm text-white/55"><span className="flex items-center gap-2"><MapPin className="h-4 w-4" />Lucknow, India</span><span className="flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4" />Building web products</span></div>
            <div className="mt-14 flex flex-wrap gap-4"><a href="#projects" className="inline-flex items-center gap-3 rounded-2xl bg-[#aabbd7] px-7 py-4 font-bold text-slate-950 shadow-[0_10px_28px_rgba(68,132,236,.28)] transition hover:-translate-y-1">View Projects <ArrowRight className="h-5 w-5" /></a><a href="https://github.com/sunnyrockk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[.035] px-7 py-4 font-bold text-white/85 transition hover:bg-white/10">GitHub Profile <ArrowDownToLine className="h-5 w-5" /></a></div>
          </div>

          <div className="relative mx-auto w-full max-w-[800px] pb-20 lg:pb-16">
            <div className="absolute left-[12%] top-[2%] grid h-20 w-20 place-items-center rounded-full border border-white/15 bg-white/[.06] text-3xl shadow-2xl backdrop-blur">👨🏻‍💻</div>
            {!closed ? <div className="relative mx-auto max-w-[700px] rounded-[2rem] border-[10px] border-[#77777e] bg-[#16151f] pb-9 pt-1 shadow-[0_24px_70px_rgba(0,0,0,.65)]">
              <div className="flex h-9 items-center justify-between border-b border-white/10 px-4 text-[10px] text-white/65"><div className="flex gap-2"><button aria-label="Close editor" onClick={() => setClosed(true)} className="h-3 w-3 rounded-full bg-[#ff5f57]" /><span className="h-3 w-3 rounded-full bg-[#febc2e]" /><span className="h-3 w-3 rounded-full bg-[#28c840]" /></div><span className="hidden sm:block">⌘　◉　◌　Thu, 03 Sept　01:54 am</span></div>
              <div className="grid min-h-[365px] grid-cols-[44px_132px_1fr] sm:grid-cols-[48px_180px_1fr]">
                <aside className="flex flex-col items-center gap-6 border-r border-white/10 bg-[#191a20] pt-5 text-white/40"><Folder className="h-5 w-5 text-[#46a1f4]" /><Code2 className="h-5 w-5" /><Github className="h-5 w-5" /><Sparkles className="mt-auto mb-5 h-5 w-5" /></aside>
                <aside className="overflow-hidden border-r border-white/10 bg-[#202127] p-3 text-[10px] text-white/45"><p className="mb-4 font-bold tracking-[.15em] text-white/55">EXPLORER</p><p className="mb-3 flex items-center gap-2 text-white/75"><Folder className="h-3.5 w-3.5 text-[#e6c83d]" /> SUNNY&apos;S-PORTFOLIO</p><p className="mb-3 flex items-center gap-2"><Folder className="h-3.5 w-3.5 text-[#46a1f4]" /> app</p><p className="mb-3 flex items-center gap-2"><Folder className="h-3.5 w-3.5 text-[#e6c83d]" /> components</p>{(["aivora.tsx", "dropshipping.tsx", "github.tsx"] as const).map((file, index) => <button onClick={() => setActive((["aivora", "dropshipping", "github"] as ProjectKey[])[index])} className={`mb-2 flex w-full items-center gap-1.5 rounded px-2 py-1 text-left ${active === (["aivora", "dropshipping", "github"] as ProjectKey[])[index] ? "bg-white/10 text-white" : "hover:bg-white/5"}`} key={file}><Code2 className="h-3 w-3 text-[#32b0f5]" />{file}</button>)}</aside>
                <section className="overflow-hidden bg-[#1c1c1f]"><div className="border-b border-white/10 bg-[#27272a] px-4 py-2 text-xs text-white/65">{project.name.toLowerCase()}.tsx</div><div className="p-5 font-mono text-xs leading-7 sm:p-8 sm:text-sm">{project.lines.map((line, index) => <div key={line} className="grid grid-cols-[24px_1fr]"><span className="select-none text-right text-white/20">{index + 1}</span><span className={`${index === 0 ? project.color : "text-[#d2d2d8]"} pl-5 whitespace-pre`}>{line}</span></div>)}</div><div className="absolute bottom-[38px] left-[48px] right-0 hidden bg-[#087fd0] px-4 py-1 text-[10px] sm:block">⌘ main　　◌ 0 warnings　　{project.status}</div></section>
              </div>
              <div className="absolute -bottom-14 left-1/2 flex -translate-x-1/2 items-end gap-2 rounded-[1.6rem] border border-white/15 bg-[#484254]/90 px-3 py-3 shadow-2xl backdrop-blur-xl"><DockIcon icon="◎" active /><DockIcon icon="◉" /><DockIcon icon="◌" /><DockIcon icon="✦" /><DockIcon icon="♫" /><DockIcon icon="◫" /><DockIcon icon="⌘" /><DockIcon icon="𝕏" /><DockIcon icon="f" /></div>
            </div> : <button onClick={() => setClosed(false)} className="mx-auto grid h-[400px] w-full max-w-[700px] place-items-center rounded-[2rem] border border-dashed border-white/25 bg-white/[.03] text-white/60 transition hover:bg-white/[.07]"><Terminal className="mb-3 h-9 w-9" />Reopen code workspace</button>}
          </div>
        </section>

        <section id="skills" className="border-t border-white/10 py-20"><div className="mx-auto mb-10 max-w-3xl text-center"><p className="font-mono text-sm text-[#298de8]">~/portfolio/skills</p><h2 className="mt-3 text-4xl font-bold tracking-[-.06em] sm:text-5xl">Developer Skills</h2><p className="mt-4 text-white/55">An interactive workspace showing the tools I use to build modern web products.</p></div><div className="overflow-hidden rounded-3xl border border-white/15 bg-[#1a1a1c] shadow-2xl"><div className="flex h-16 items-center gap-4 border-b border-white/10 px-5"><div className="flex gap-2"><span className="h-4 w-4 rounded-full bg-[#ff5f57]" /><span className="h-4 w-4 rounded-full bg-[#febc2e]" /><span className="h-4 w-4 rounded-full bg-[#28c840]" /></div><div className="hidden flex-1 rounded-xl bg-white/[.06] px-4 py-2 text-sm text-white/45 sm:block">⌕　{activeSkill}.ts</div></div><div className="grid min-h-[520px] md:grid-cols-[250px_1fr_280px]"><aside className="border-r border-white/10 bg-black/10 p-5"><p className="mb-5 text-xs font-bold tracking-[.16em] text-white/55">EXPLORER</p><p className="mb-4 flex items-center gap-2 text-sm text-white/75"><Folder className="h-4 w-4 text-yellow-300" /> skills</p><p className="mb-3 text-xs text-white/40">⌄　Frontend</p>{(Object.keys(skills) as SkillKey[]).map((skill) => <button key={skill} onClick={() => setActiveSkill(skill)} className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${activeSkill === skill ? "bg-[#3a3a42] text-white" : "text-white/55 hover:bg-white/[.06]"}`}><span className={skills[skill].color}>{skills[skill].icon}</span>{skill}.ts</button>)}<p className="mt-5 text-xs text-white/40">⌄　Deployment</p><p className="mt-3 flex items-center gap-2 text-sm text-white/55"><Folder className="h-4 w-4 text-yellow-300" /> Vercel</p></aside><div className="border-r border-white/10 bg-[#1c2028]"><div className="border-b border-white/10 px-6 py-4 text-sm text-white/65">{activeSkill}.ts</div><div className="p-7 font-mono text-sm leading-8 sm:p-10"><CodeLine number="1" code={<><span className="text-sky-300">export const</span> <span className="text-[#55d6c2]">{activeSkill.toLowerCase().replace(".", "")}</span> = {'{'}</>} /><CodeLine number="2" code={<>　name: <span className="text-orange-300">&quot;{activeSkill}&quot;</span>,</>} /><CodeLine number="3" code={<>　category: <span className="text-orange-300">&quot;{skills[activeSkill].type}&quot;</span>,</>} /><CodeLine number="4" code={<>　status: <span className="text-orange-300">&quot;actively building with&quot;</span>,</>} /><CodeLine number="5" code={<>　description: <span className="text-white/70">&quot;{skills[activeSkill].description}&quot;</span></>} /><CodeLine number="6" code={"}"} /></div><div className="mt-auto border-t border-white/10 bg-[#171a20] px-6 py-3 text-xs text-white/45">⌘ main　　✓ No Problems　　　　　　　　　　　　　　　　　TypeScript</div></div><aside className="bg-black/10 p-6"><p className="text-xs font-bold tracking-[.16em] text-white/55">SKILL DETAILS</p><div className="mt-6 flex items-center gap-4 border-b border-white/10 pb-6"><span className={`grid h-14 w-14 place-items-center rounded-2xl border border-sky-400/50 bg-sky-400/10 text-2xl ${skills[activeSkill].color}`}>{skills[activeSkill].icon}</span><div><h3 className="text-xl font-bold">{activeSkill}</h3><p className="text-sm text-white/50">{skills[activeSkill].type}</p></div></div><h4 className="mt-7 font-bold">Description</h4><p className="mt-3 text-sm leading-7 text-white/55">{skills[activeSkill].description}</p><h4 className="mt-8 font-bold">Current focus</h4>{["UI craft", "Performance", "Real products"].map((label, i) => <div key={label} className="mt-4"><div className="mb-1 flex justify-between text-xs text-white/55"><span>{label}</span><span>{92 - i * 3}%</span></div><div className="h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: `${92 - i * 3}%` }} /></div></div>)}</aside></div></div></section>
        <section id="about" className="border-t border-white/10 py-20"><div className="mb-10 text-center"><p className="font-mono text-sm text-[#37c66a]">~/about</p><h2 className="mt-3 text-4xl font-bold tracking-[-.06em] sm:text-5xl">About the developer</h2><p className="mt-4 text-white/55">Navigate through my profile using terminal commands.</p></div><div className="grid overflow-hidden rounded-3xl border border-white/15 bg-[#10151f] md:grid-cols-[280px_1fr]"><aside className="border-b border-white/10 p-6 md:border-b-0 md:border-r"><div className="mb-10 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-xl border border-white/15 text-[#3bc967]">⌘</span><div><p className="font-mono font-bold">~/about</p><p className="text-xs text-white/45">Interactive profile</p></div></div>{["education", "tech-stack", "experience", "projects", "contact"].map((item, i) => <button key={item} className={`mb-3 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-mono text-sm ${i === 0 ? "bg-[#11203a] text-[#43c96f]" : "text-white/55 hover:bg-white/5"}`}><span>›</span>{item}</button>)}<div className="mt-12 border-t border-white/10 pt-5 font-mono text-xs text-white/45">Portfolio v2.0.0<br /><span className="text-[#43c96f]">● Terminal ready</span></div></aside><div className="m-4 rounded-2xl border border-white/15 bg-[#0a1018] font-mono text-sm leading-8 text-white/70 sm:m-8"><div className="flex items-center gap-3 border-b border-white/10 px-5 py-4"><span className="h-4 w-4 rounded-full bg-[#ff5f57]" /><span className="h-4 w-4 rounded-full bg-[#febc2e]" /><span className="h-4 w-4 rounded-full bg-[#28c840]" /><span className="ml-3 rounded-lg border border-white/15 px-3 py-1 text-white/55">About.tsx</span><span className="ml-auto text-xs text-[#43c96f]">● Running</span></div><div className="p-6 sm:p-8"><p className="text-white/35">Last login: Today on portfolio</p><p className="mt-6"><span className="text-[#43c96f]">sunny@portfolio</span> <span className="text-[#4b9df2]">~/about</span> % cat profile.json</p><p className="mt-6 text-[#4b9df2]">Opening profile.json</p><pre className="mt-6 overflow-auto text-sm leading-8 text-white/75">{`{
  "name": "Sunny Mall",
  "location": "Lucknow, India",
  "focus": [
    "Full Stack Development",
    "Product UI",
    "Problem Solving",
    "System Design"
  ],
  "github": "github.com/sunnyrockk"
}`}</pre></div></div></div></section>
        <section id="projects" className="border-t border-white/10 py-20"><p className="text-xs font-bold tracking-[.25em] text-[#65a5ff]">FEATURED PROJECTS</p><h2 className="mt-3 text-4xl font-bold tracking-[-.06em]">Built in public.</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{(Object.keys(projects) as ProjectKey[]).map((key) => { const item = projects[key]; return <a key={key} href={item.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[.035] p-6 transition hover:-translate-y-1 hover:bg-white/[.07]"><span className={`text-2xl ${item.color}`}>{item.icon}</span><h3 className="mt-8 text-xl font-bold">{item.name}</h3><p className="mt-2 text-sm text-white/50">{item.status}</p>{item.live && <span className="mt-5 inline-flex items-center gap-1 text-xs text-sky-300">Open live site <Globe2 className="h-3 w-3" /></span>}</a>})}</div></section>
        <section id="contact" className="border-t border-white/10 py-8 text-sm text-white/45">© {new Date().getFullYear()} Sunny Mall · <a className="hover:text-white" href="mailto:sunny@email.com">Let&apos;s work together</a></section>
      </div>
    </main>
  )
}

function DockIcon({ icon, active = false }: { icon: string; active?: boolean }) {
  return <span className={`grid h-10 w-10 place-items-center rounded-xl text-lg ${active ? "bg-[#ec3b8a] text-white" : "bg-white/10 text-white/75"}`}>{icon}</span>
}

function CodeLine({ number, code }: { number: string; code: ReactNode }) {
  return <div className="grid grid-cols-[32px_1fr] gap-4"><span className="select-none text-right text-white/20">{number}</span><span>{code}</span></div>
}
