"use client"

import { useEffect, useState } from "react"
import HomeView from "@/components/views/home-view"
import ProjectsView from "@/components/views/projects-view"
import OthersView from "@/components/views/others-view"
import AboutView from "@/components/views/about-view"

export default function Home() {
  const [currentView, setCurrentView] = useState("home")

  // Sync with URL hash so navigation is reliable and shareable
  useEffect(() => {
    const allowed = new Set(["home", "projects", "others", "about"])
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
  }

  return (
    <main className="w-full bg-background text-foreground min-h-screen">
      <div className="w-full">
        {currentView === "home" && <HomeView onNavigate={handleNavigate} />}
        {currentView === "projects" && <ProjectsView />}
        {currentView === "others" && <OthersView />}
        {currentView === "about" && <AboutView />}
      </div>
    </main>
  )
}
