"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Menu, X } from "lucide-react"
import HomeView from "@/components/views/home-view"
import ProjectsView from "@/components/views/projects-view"
import AboutView from "@/components/views/about-view"
import SkillsView from "@/components/views/skills-view"

export default function Home() {
  const [currentView, setCurrentView] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  // Sync with URL hash so navigation is reliable and shareable
  useEffect(() => {
    const allowed = new Set(["home", "projects", "about", "skills"])
    const applyFromHash = () => {
      const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : ""
      if (allowed.has(hash)) setCurrentView(hash)
    }
    applyFromHash()
    window.addEventListener("hashchange", applyFromHash)
    return () => window.removeEventListener("hashchange", applyFromHash)
  }, [])

  const handleNavigate = (view: string) => {
    setCurrentView(view)
    if (typeof window !== "undefined") window.location.hash = view
    setMenuOpen(false)
  }

  return (
    <main className="w-full bg-background text-foreground min-h-screen">
      <header className="site-header">
        <div className="site-nav">
          <button onClick={() => handleNavigate("home")} className="brand-mark" aria-label="Home">
            KB<span>.</span>
          </button>
          <div className="hidden md:flex nav-links">
            {["home", "projects", "skills", "about"].map((view, index) => (
              <button
                key={view}
                onClick={() => handleNavigate(view)}
                className={currentView === view ? "nav-active" : ""}
              >
                0{index + 1}. /{view}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex nav-social">
              <a href="https://github.com/kbweeb" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
              <a href="https://linkedin.com/in/kwabena-boateng-gyau-baffour-00067a308" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
          <button className="md:hidden icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-nav">
            {["home", "projects", "skills", "about"].map((view, index) => (
              <button key={view} onClick={() => handleNavigate(view)}>
                0{index + 1}. /{view}
              </button>
            ))}
          </div>
        )}
      </header>
      <div className="w-full">
        {currentView === "home" && <HomeView onNavigate={handleNavigate} />}
        {currentView === "projects" && <ProjectsView onNavigate={handleNavigate} />}
        {currentView === "about" && <AboutView onNavigate={handleNavigate} />}
        {currentView === "skills" && <SkillsView onNavigate={handleNavigate} />}
      </div>
    </main>
  )
}
