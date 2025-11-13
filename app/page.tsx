"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Navigation from "@/components/navigation"
import HomeView from "@/components/views/home-view"
import ProjectsView from "@/components/views/projects-view"
import OthersView from "@/components/views/others-view"
import AboutView from "@/components/views/about-view"

export default function Home() {
  const [currentView, setCurrentView] = useState("home")

  return (
    <main className="w-full bg-background text-foreground min-h-screen flex">
      {/* Mobile top navigation */}
      <div className="md:hidden">
        <Navigation currentView={currentView} onNavigate={setCurrentView} />
      </div>

      <Sidebar currentView={currentView} onNavigate={setCurrentView} />

      <div className="flex-1 md:ml-80 transition-all w-full md:w-auto pt-16 md:pt-0">
        {currentView === "home" && <HomeView onNavigate={setCurrentView} />}
        {currentView === "projects" && <ProjectsView />}
        {currentView === "others" && <OthersView />}
        {currentView === "about" && <AboutView />}
      </div>
    </main>
  )
}
