"use client"

import { ChevronRight, ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  name: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
  links: {
    github: string
    demo: string
  }
}

interface ProjectCardProps {
  project: Project
  isExpanded: boolean
  onExpand: () => void
  index: number
}

export default function ProjectCard({ project, isExpanded, onExpand, index }: ProjectCardProps) {
  return (
    <div
      className={`bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:border-primary/50 ${
        isExpanded ? "ring-2 ring-primary/50" : ""
      }`}
      style={{
        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Collapsed View */}
      {!isExpanded && (
        <div
          onClick={onExpand}
          className="p-6 flex items-center justify-between hover:bg-secondary/30 transition-colors"
        >
          <div className="flex items-center gap-6 flex-1">
            <div className="w-24 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border border-primary/30 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <ChevronRight className="w-6 h-6 text-muted-foreground flex-shrink-0 ml-4" />
        </div>
      )}

      {/* Expanded View */}
      {isExpanded && (
        <div className="animate-slide-down">
          <div className="relative w-full h-96 overflow-hidden bg-secondary">
            <img src={project.image || "/placeholder.svg"} alt={project.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-8 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground tracking-wider">Overview</h4>
              <p className="text-foreground leading-relaxed">{project.fullDescription}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase text-muted-foreground tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium border border-primary text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <a
                href={project.links.github}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary hover:bg-secondary/80 rounded-lg font-medium transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
              <a
                href={project.links.demo}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            </div>

            <button
              onClick={onExpand}
              className="w-full px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Show Less
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
