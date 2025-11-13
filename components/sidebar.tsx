"use client"

import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"

interface SidebarProps {
  currentView: string
  onNavigate: (view: string) => void
}

export default function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const navItems = [
    { id: "projects", label: "PROJECTS" },
    { id: "others", label: "OTHERS" },
    { id: "about", label: "ABOUT ME" },
  ]

  return (
    <aside className="fixed left-0 top-0 w-full md:w-80 h-screen bg-background border-r border-border hidden md:flex md:flex-col p-8 z-40">
      {/* Logo/Brand */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-foreground mb-1">Joshua Effiong</h1>
        <p className="text-sm text-muted-foreground">
          Hardware-Software Integration
          <br />
          Engineer
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-6 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-sm font-medium transition-colors block ${
              currentView === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Social Links */}
      <div className="flex gap-4 pt-8 border-t border-border">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </Link>
      </div>
    </aside>
  )
}
