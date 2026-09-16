"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import EngineeringRig from "@/components/engineering-rig"
import Terminal from "@/components/terminal"
import TechnicalBackground from "@/components/technical-background"

interface HomeViewProps {
  onNavigate: (view: string) => void
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="w-full min-h-screen bg-background relative overflow-hidden">
      <TechnicalBackground />
      <div className="technical-background-overlay" />
      <div className="px-5 sm:px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 space-y-10 w-full">
            <div>
              <p className="eyebrow">01. /home</p>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-foreground mb-6 leading-[0.85] tracking-[-0.07em] uppercase">
                Kwabena<br />Boateng
              </h1>
              <div className="fig-marker">FIG. 0 — OPERATOR IDENTIFICATION</div>
              <p className="text-sm sm:text-lg text-primary font-mono tracking-widest mt-6 uppercase">
                [ Computer Engineering Student ]
              </p>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal border-l border-muted pl-6">
              Software Engineering Enthusiast passionate about Software Development, Game Development and
              IoT Systems. Currently exploring innovative solutions to contribute to cutting-edge projects
              in technology and interactive media.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button type="button" onClick={() => onNavigate("projects")} className="technical-button group relative overflow-hidden">
                <span className="relative z-10">02. /projects</span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button type="button" onClick={() => onNavigate("skills")} className="technical-button group relative overflow-hidden">
                <span className="relative z-10">03. /skills</span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <button type="button" onClick={() => onNavigate("about")} className="technical-button technical-button-active group relative overflow-hidden">
                <span className="relative z-10">04. /about</span>
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-muted w-fit">
              <Link href="https://github.com/kbweeb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/kwabena-boateng-gyau-baffour-00067a308" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8 w-full lg:sticky lg:top-32">
            <div className="card-technical p-1 bg-muted/20 backdrop-blur-sm">
              <EngineeringRig />
            </div>
            
            <div className="space-y-4">
              <div className="fig-marker">FIG. 1 — SYSTEM CONSOLE</div>
              <div className="backdrop-blur-sm">
                <Terminal />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-border px-5 sm:px-8 lg:px-16 py-8 mt-16 bg-card/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
          <p>&copy; 2026 Kwabena Boateng Gyau Baffour // SYSTEM_STATUS: ONLINE</p>
          <div className="flex gap-8">
            {["projects", "skills", "about"].map(view => (
              <button key={view} type="button" onClick={() => onNavigate(view)} className="hover:text-primary transition-colors cursor-pointer">
                {view}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
