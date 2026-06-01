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
    <div className="w-full min-h-screen bg-background">
      <div className="px-6 md:px-16 py-16 md:py-24">
        {selectedProject ? (
          <div className="space-y-8">
            <button
              onClick={() => setSelectedProject(null)}
              className="text-primary hover:text-primary/80 transition-colors mb-6"
            >
              ← Back to Projects
            </button>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground uppercase">{selectedProject.title}</h2>
              <div className="flex gap-3 flex-wrap">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-secondary border border-border">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              {selectedProject.fullDescription}
            </p>

            <ProjectLinks project={selectedProject} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
              {selectedProject.features.map((feature, idx) => (
                <div key={idx} className="p-4 bg-secondary rounded-lg border border-border text-center">
                  <p className="text-sm text-muted-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kwabena Boateng</h2>
                <p className="text-sm text-muted-foreground max-w-md">Computer Engineering Student</p>
                <div className="mt-6 h-px w-40 bg-primary/60 rounded" />
                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="button"
                    className="text-xs sm:text-sm font-medium text-primary text-left"
                    aria-current="page"
                  >
                    — PROJECTS
                  </button>
                  <button
                    type="button"
                    onClick={() => (onNavigate ? onNavigate("skills") : (window.location.hash = "skills"))}
                    className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    — SKILLS & TECHNOLOGIES
                  </button>

                  <button
                    type="button"
                    onClick={() => (onNavigate ? onNavigate("about") : (window.location.hash = "about"))}
                    className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    — ABOUT ME
                  </button>
                </div>
              </div>

              <div className="text-left group">
                <div className="space-y-4">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-secondary border border-border group-hover:border-primary transition-colors">
                    <Image
                      src={projects[0].image || "/placeholder.svg"}
                      alt={projects[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {projects[0].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground max-w-md">{projects[0].description}</p>
                  <ProjectLinks project={projects[0]} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(1).map((project) => (
                <div key={project.id} className="text-left group">
                  <div className="space-y-4">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-secondary border border-border group-hover:border-primary transition-colors">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="flex gap-2 flex-wrap pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ProjectLinks project={project} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <footer className="border-t border-border px-6 md:px-16 py-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Kwabena Boateng Gyau Baffour. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
