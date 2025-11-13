"use client"

import { Github, Linkedin, Mail, Code2, Cpu, Zap } from "lucide-react"

interface ProfileProps {
  onNavigate: (sectionId: string) => void
}

export default function Profile({ onNavigate }: ProfileProps) {
  const skills = [
    { icon: Cpu, label: "Hardware Design", color: "text-primary" },
    { icon: Code2, label: "Software Development", color: "text-primary" },
    { icon: Zap, label: "IoT Systems", color: "text-primary" },
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Left Sidebar Navigation */}
        <div className="md:col-span-1 space-y-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Navigation</h2>
          <nav className="space-y-2 flex flex-col">
            <button
              onClick={() => onNavigate("projects")}
              className="text-left px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate("others")}
              className="text-left px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
            >
              Others
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="text-left px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
            >
              About Me
            </button>
          </nav>

          {/* Social Icons */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">Connect</p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Profile Content */}
        <div className="md:col-span-3 space-y-8 animate-slide-up">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold">Joshua Effiong</h1>
            <p className="text-xl text-primary font-semibold">Hardware–Software Integration Engineer</p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            I bridge the gap between circuit board and software logic, creating systems where hardware, design, and
            human experience work in harmony. Passionate about building intelligent systems that solve real-world
            problems.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-primary transition-colors group cursor-pointer"
              >
                <skill.icon className={`w-6 h-6 mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                <p className="font-medium text-sm">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
