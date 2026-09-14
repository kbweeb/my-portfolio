"use client"

import Image from "next/image"
import { useState } from "react"
import { sitePath } from "@/lib/site-path"

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
  demoNote?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Encrypted Bank System",
    description:
      "C++ console app with XOR-encrypted account storage and PIN auth. Includes a browser prototype for the same flows.",
    fullDescription:
      "Production logic is implemented in C++ (encrypted file storage, PIN-protected admin). The linked demo is a static browser prototype using localStorage so visitors can try deposits, withdrawals, and transfers without installing anything.",
    image: "/projects/encrypted-bank.jpg",
    tags: ["C++", "Encryption", "Security", "Banking"],
    features: ["Account + PIN", "Encrypted persistence (C++)", "Browser demo (prototype)"],
    demoPath: "/projects/encrypted-bank/",
    demoUrl: "https://encrypted-bank-system.vercel.app/web/",
    repoUrl: "https://github.com/kbweeb/Encrypted-Bank-System",
    demoNote: "Browser prototype — full C++ implementation in the repo.",
  },
  {
    id: 2,
    title: "AI Chatbot for Anime Queries",
    description:
      "Anime Q&A chatbot with a .NET / serverless API (Groq/OpenAI-compatible) and a portfolio-integrated demo UI.",
    fullDescription:
      "Backend exposes POST /api/chat with natural-language answers about anime. The portfolio hosts an embedded demo; the standalone repo includes a vanilla web UI and Vercel serverless handlers.",
    tags: ["C#", ".NET", "NLP", "AI"],
    features: ["Anime Q&A", "LLM-backed replies", "Embedded + standalone UI"],
    demoPath: "/projects/anime-chatbot/",
    demoUrl: "https://anime-chatbot-api.vercel.app/web/",
    image: "/projects/anime-chatbot.jpg",
    repoUrl: "https://github.com/kbweeb/anime-chatbot-api",
    demoNote: "Uses live API when available; offline-style fallback otherwise.",
  },
  {
    id: 3,
    title: "Cellular Automata Simulator",
    description:
      "Python grid simulator (matplotlib) plus Conway's Game of Life in the browser for quick visualization.",
    fullDescription:
      "The repository centers on a configurable Python cellular automaton engine. The public demo is a client-only Game of Life page (run, pause, step, toroidal edges) hosted from the repo's web/ folder.",
    image: "/projects/cellular-automata.jpg",
    tags: ["Python", "Algorithms", "Simulation", "Visualization"],
    features: ["Python engine", "Conway demo in browser", "Adjustable speed & grid"],
    demoPath: "/projects/cellular-automata/",
    demoUrl: "https://cellular-automata-cyan.vercel.app/web/",
    repoUrl: "https://github.com/kbweeb/Cellular-Automata",
    demoNote: "Live demo is the browser Game of Life — run Python script locally for the full simulator.",
  },
]

function projectDemoHref(project: Project): string | undefined {
  if (project.demoPath) return sitePath(project.demoPath)
  return project.demoUrl
}

function ProjectLinks({ project }: { project: Project }) {
  const demoHref = projectDemoHref(project)
  return (
    <div className="flex flex-wrap gap-3 items-center">
      {demoHref && (
        <a
          href={demoHref}
          {...(project.demoPath ? {} : { target: "_blank", rel: "noopener noreferrer" })}
          className="inline-block text-primary hover:text-primary/80 text-xs font-medium"
        >
          View Demo →
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-muted-foreground hover:text-foreground text-xs font-medium"
        >
          View Code →
        </a>
      )}
      {project.demoNote && (
        <span className="text-[11px] text-muted-foreground w-full">{project.demoNote}</span>
      )}
    </div>
  )
}

interface ProjectsViewProps {
  onNavigate?: (view: string) => void
}

export default function ProjectsView({ onNavigate }: ProjectsViewProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="w-full bg-background py-24">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        {selectedProject ? (
          <div className="space-y-12">
            <button
              onClick={() => setSelectedProject(null)}
              className="group flex items-center gap-2 text-primary font-mono text-xs tracking-widest uppercase hover:gap-4 transition-all"
            >
              <span>←</span> Back to System Index
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-8">
                <div>
                   <h2 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tighter leading-none">
                     {selectedProject.title}
                   </h2>
                   <div className="flex gap-2 mt-6 flex-wrap">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-secondary/50 text-primary border border-primary/30 text-[10px] font-mono uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                   </div>
                </div>

                <div className="relative aspect-video bg-secondary border border-border group overflow-hidden">
                   <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="p-8 bg-secondary/20 border border-border space-y-6">
                   <h3 className="font-mono text-xs text-primary uppercase tracking-widest">Technical Brief</h3>
                   <p className="text-muted-foreground leading-relaxed text-sm font-light">
                     {selectedProject.fullDescription}
                   </p>
                   
                   <div className="space-y-4">
                     <h4 className="font-mono text-[10px] text-foreground uppercase tracking-widest">System Features</h4>
                     <div className="grid grid-cols-1 gap-2">
                        {selectedProject.features.map((feature, idx) => (
                          <div key={idx} className="flex gap-3 items-start text-xs text-muted-foreground border-l border-primary/30 pl-4 py-1">
                             {feature}
                          </div>
                        ))}
                     </div>
                   </div>

                   <div className="pt-6 border-t border-border">
                      <ProjectLinks project={selectedProject} />
                   </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="space-y-4">
                <span className="text-primary font-mono text-sm tracking-widest uppercase">04. /projects</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tighter leading-none">
                  Core <br/>Infrastructure.
                </h2>
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">FIG. 4 — PROJECT REPOSITORY</p>
              </div>
              <p className="text-muted-foreground text-sm font-light max-w-sm text-right hidden md:block">
                A selection of systems developed across C++, .NET, and Python, focusing on security, AI, and algorithmic visualization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {projects.map((project, idx) => (
                <div 
                  key={project.id} 
                  className="bg-background group hover:bg-secondary/20 transition-all duration-500 p-8 flex flex-col justify-between"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="space-y-6 cursor-pointer">
                    <div className="flex justify-between items-start">
                       <span className="font-mono text-[10px] text-primary tracking-widest uppercase">SYS-{project.id.toString().padStart(3, '0')}</span>
                       <span className="font-mono text-[10px] text-muted-foreground uppercase">v1.0.4</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex gap-2 flex-wrap">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[9px] font-mono text-muted-foreground uppercase border border-border px-2 py-0.5 tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-border flex justify-between items-center group-hover:border-primary/30 transition-colors">
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors cursor-pointer">View System →</span>
                    <div className="w-1.5 h-1.5 bg-border group-hover:bg-primary transition-colors"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
