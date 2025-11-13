"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

interface NavigationProps {
  currentView: string
  onNavigate: (view: string) => void
}

export default function Navigation({ currentView, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
              JE
            </div>
            <span className="text-lg font-semibold ml-2 hidden sm:inline">Joshua</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate("home")}
              className={`text-sm transition-colors ${
                currentView === "home" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className={`text-sm transition-colors ${
                currentView === "projects"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate("others")}
              className={`text-sm transition-colors ${
                currentView === "others" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Others
            </button>
            <button
              onClick={() => onNavigate("about")}
              className={`text-sm transition-colors ${
                currentView === "about" ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3 animate-slide-down">
            <button
              onClick={() => {
                onNavigate("home")
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                currentView === "home"
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate("projects")
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                currentView === "projects"
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => {
                onNavigate("others")
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                currentView === "others"
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              Others
            </button>
            <button
              onClick={() => {
                onNavigate("about")
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                currentView === "about"
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              About Me
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
