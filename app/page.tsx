"use client"

import { useEffect, useState } from "react"
import { sitePath } from "@/lib/site-path"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Terminal as TerminalIcon } from "lucide-react"

import HomeView from "@/components/views/home-view"
import ProjectsView from "@/components/views/projects-view"
import AboutView from "@/components/views/about-view"
import SkillsView from "@/components/views/skills-view"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "terminal"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "SKILLS", href: "#skills", id: "skills" },
    { name: "PROJECTS", href: "#projects", id: "projects" },
    { name: "TERMINAL", href: "#terminal", id: "terminal" },
  ]

  return (
    <main className="w-full bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-bold text-primary-foreground">
              K
            </div>
            <span className="font-mono text-sm tracking-tighter hidden sm:block uppercase">KB.DEV</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] font-mono tracking-widest hover:text-primary transition-colors ${
                  activeSection === link.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/kbweeb" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </Link>
            <Link href="https://linkedin.com/in/kwabena-boateng-gyau-baffour-00067a308" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <section id="home" className="scroll-mt-16">
          <HomeView onNavigate={() => {}} />
        </section>
        
        <section id="about" className="scroll-mt-16">
          <AboutView onNavigate={() => {}} />
        </section>

        <section id="skills" className="scroll-mt-16 border-t border-border">
          <SkillsView onNavigate={() => {}} />
        </section>

        <section id="projects" className="scroll-mt-16 border-t border-border">
          <ProjectsView onNavigate={() => {}} />
        </section>

        <section id="terminal" className="scroll-mt-16 border-t border-border bg-black/50 py-20 px-4">
           <div className="max-w-4xl mx-auto">
             <div className="mb-8">
               <span className="text-primary font-mono text-sm">05. /terminal</span>
               <h2 className="text-3xl font-bold mt-2 uppercase tracking-tighter">Live Terminal</h2>
               <p className="text-muted-foreground text-sm mt-2 font-mono">FIG. 5 — INTERACTIVE CLI SHELL</p>
             </div>
             
             <div className="w-full bg-[#0a0a0a] border border-border rounded-lg overflow-hidden shadow-2xl shadow-primary/5">
                <div className="bg-secondary/80 px-4 py-2 border-b border-border flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">bash — 80x24</span>
                  <div></div>
                </div>
                <div className="p-6 font-mono text-sm min-h-[400px]">
                   <div className="text-primary mb-2">Welcome to Kwabena's Portfolio Terminal v1.0.0</div>
                   <div className="text-muted-foreground mb-4 italic text-xs">Type 'help' to see available commands.</div>
                   <div className="flex gap-2 text-foreground">
                      <span className="text-primary font-bold">user@portfolio:~$</span>
                      <span className="animate-pulse bg-primary w-2 h-5"></span>
                   </div>
                </div>
             </div>
           </div>
        </section>
      </div>

      <footer className="border-t border-border py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center font-bold text-[10px] text-primary-foreground">
                K
              </div>
              <span className="font-mono text-xs tracking-tighter uppercase">KB.DEV</span>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
              Designed & Built by Kwabena Boateng · 2026
            </p>
          </div>
          <div className="flex gap-8">
             {navLinks.map(link => (
               <a key={link.id} href={link.href} className="text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors tracking-widest">
                 {link.name}
               </a>
             ))}
          </div>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            &copy; 2026 ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </main>
  )
}
