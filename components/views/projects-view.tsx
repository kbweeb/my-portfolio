"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
  features: string[]
  demoPath?: string
  demoUrl?: string
  repoUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Encrypted Bank System",
    description:
      "A secure banking system built with C++ featuring encryption protocols, user authentication, and transaction management.",
    fullDescription:
      "A secure banking system built with C++ featuring encryption protocols, user authentication, and transaction management for safe financial operations.",
    image: "/projects/encrypted-bank.jpg",
    tags: ["C++", "Encryption", "Security", "Banking"],
    features: ["User authentication", "Encrypted storage", "Transaction logs"],
    demoPath: undefined,
    demoUrl: "https://encrypted-bank-system.vercel.app/web/",
    repoUrl: "https://github.com/kbweeb/Encrypted-Bank-System",
  },
  {
    id: 2,
    title: "AI Chatbot for Anime Queries",
    description:
      "An AI-powered chatbot that answers questions about anime series, characters, and recommendations.",
    fullDescription:
      "Built with C# (.NET) and Python, integrated with an NLP API (like GPT) to handle natural language queries. Supports searching anime databases, providing summaries, and suggesting similar shows based on user preferences.",
    tags: ["C#", ".NET", "Python", "NLP", "AI"],
    features: ["Anime search", "Summaries", "Recommendations"],
    demoPath: undefined,
    image: "/projects/anime-chatbot.jpg",
    demoUrl: "https://anime-chatbot-api.vercel.app",
    repoUrl: "https://github.com/kbweeb/anime-chatbot-api",
  },
  {
    id: 3,
    title: "Cellular Automata Simulator",
    description:
      "A 2D cellular automaton simulator with adjustable rulesets for modeling complex systems and emergent patterns.",
    fullDescription:
      "A 2D cellular automaton simulator with adjustable rulesets for modeling complex systems and visualizing emergent patterns in computational biology.",
    image: "/projects/cellular-automata.jpg",
    tags: ["C++", "Algorithms", "Simulation", "Modeling"],
    features: ["Configurable rules", "Visualization", "Fast iteration"],
    demoPath: undefined,
    demoUrl: "https://cellular-automata-cyan.vercel.app/web/",
    repoUrl: "https://github.com/kbweeb/Cellular-Automata",
  },
]

interface ProjectsViewProps {
  onNavigate?: (view: string) => void
}

export default function ProjectsView({ onNavigate }: ProjectsViewProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="w-full min-h-screen bg-background circuit-bg">
      <div className="section-shell">
        <div className="mb-16">
          <p className="eyebrow">02. /projects</p>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-tight">Works</h2>
          <div className="fig-marker">FIG. 2 — DEPLOYED ARTIFACTS</div>
        </div>

        {selectedProject ? (
          <div className="space-y-12 animate-fade-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="technical-button mb-8"
            >
              ← RETURN_TO_GALLERY
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-foreground uppercase leading-none">{selectedProject.title}</h2>
                  <div className="flex gap-2 flex-wrap">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="p-4 card-technical flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-primary"></div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 pt-6">
                  {selectedProject.demoUrl && (
                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="technical-button technical-button-active">
                      LIVE_DEMO.EXE
                    </a>
                  )}
                  {selectedProject.repoUrl && (
                    <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer" className="technical-button">
                      SOURCE_CODE.TXT
                    </a>
                  )}
                </div>
              </div>

              <div className="card-technical p-1 bg-muted/20">
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="card-technical group cursor-pointer flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-border">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
                </div>
                
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[9px] uppercase tracking-tighter text-muted-foreground border border-muted px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>OPEN_RECORD</span>
                      <span>[+]</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-border px-5 sm:px-8 lg:px-16 py-8 mt-16 bg-card/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
          <p>&copy; 2026 Kwabena Boateng Gyau Baffour // SYSTEM_STATUS: ONLINE</p>
          <div className="flex gap-8">
            {["home", "skills", "about"].map(view => (
              <button key={view} type="button" onClick={() => (onNavigate ? onNavigate(view) : (window.location.hash = view))} className="hover:text-primary transition-colors cursor-pointer">
                {view}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
