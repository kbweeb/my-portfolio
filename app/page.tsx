"use client"

import { useState } from "react"
import HomeView from "@/components/views/home-view"
import ProjectsView from "@/components/views/projects-view"
import OthersView from "@/components/views/others-view"
import AboutView from "@/components/views/about-view"

export default function Home() {
  const [currentView, setCurrentView] = useState("home")

  return (
    <main className="w-full bg-background text-foreground min-h-screen">
      <div className="w-full">
        {currentView === "home" && <HomeView onNavigate={setCurrentView} />}
        {currentView === "projects" && <ProjectsView />}
        {currentView === "others" && <OthersView />}
        {currentView === "about" && <AboutView />}
      </div>
    </main>
  )
}
