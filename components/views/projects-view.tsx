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
    image: "/placeholder.jpg",
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
    image: "/placeholder.jpg",
    tags: ["C#", ".NET", "Python", "NLP", "AI"],
    features: ["Anime search", "Summaries", "Recommendations"],
    demoPath: undefined,
    demoUrl: "https://kbweeb.github.io/anime-chatbot",
    repoUrl: "https://github.com/kbweeb/anime-chatbot-api",
  },
  {
    id: 3,
    title: "Cellular Automata Simulator",
    description:
      "A 2D cellular automaton simulator with adjustable rulesets for modeling complex systems and emergent patterns.",
    fullDescription:
      "A 2D cellular automaton simulator with adjustable rulesets for modeling complex systems and visualizing emergent patterns in computational biology.",
    image: "/placeholder.jpg",
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

            {/* Project header */}
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

            {/* Project image */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-secondary border border-border">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              {selectedProject.fullDescription}
            </p>

            {/* Features */}
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
            {/* Hero project card */}
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

              {/* Right: hero image and pills */}
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
                  <p className="text-xs text-muted-foreground max-w-md">
                    {projects[0].description}
                  </p>
                  <div className="flex gap-3">
                    {projects[0].demoUrl && (
                      <a href={projects[0].demoUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-primary hover:text-primary/80 text-xs font-medium">
                        View Demo →
                      </a>
                    )}
                    {projects[0].repoUrl && (
                      <a href={projects[0].repoUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-muted-foreground hover:text-foreground text-xs font-medium">
                        View Code →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Other projects grid */}
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
                          <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-primary hover:text-primary/80 text-xs font-medium">
                            View Demo →
                          </a>
                        )}
                        {project.repoUrl && (
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-muted-foreground hover:text-foreground text-xs font-medium">
                            View Code →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-16 py-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Kwabena Boateng Gyau Baffour. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
