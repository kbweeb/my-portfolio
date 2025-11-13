"use client"

import Image from "next/image"
import { useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
  features: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Energy Monitor System",
    description: "Real-time monitoring of energy consumption patterns with intelligent tracking",
    fullDescription:
      "This real-time energy monitoring tracker designed to help users monitor and optimize their energy consumption. The system has built-in anomaly detection for tracking energy consumption patterns and allowing users to pinpoint areas where energy is being wasted.",
    image: "/smart-energy-monitoring-system-with-circuit-boards.jpg",
    tags: ["PYTHON", "C++", "REACT"],
    features: ["You can add alarms", "You can add rules", "You can add alarms"],
  },
  {
    id: 2,
    title: "IoT Weather Station",
    description: "Comprehensive weather monitoring with real-time data tracking and forecasting",
    fullDescription:
      "Building an IoT weather station that collects environmental data and provides real-time insights. The project integrates hardware sensors with cloud connectivity and a responsive web interface.",
    image: "/placeholder.jpg",
    tags: ["EMBEDDED C", "NODEJS", "REACT"],
    features: ["Real-time updates", "Cloud sync", "Mobile responsive"],
  },
]

export default function ProjectsView() {
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Joshua Effiong</h2>
                <p className="text-sm text-muted-foreground max-w-md">
                  Hardware-Software Integration Engineer
                </p>
                <div className="mt-6 h-px w-40 bg-primary/60 rounded" />
                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <p className="text-primary font-semibold">PROJECTS</p>
                  <p>— OTHERS</p>
                  <p>— ABOUT ME</p>
                </div>
              </div>

              {/* Right: hero image and pills */}
              <button
                onClick={() => setSelectedProject(projects[0])}
                className="text-left group cursor-pointer"
              >
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
                </div>
              </button>
            </div>

            {/* Other projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(1).map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="text-left group cursor-pointer"
                >
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
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-16 py-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Joshua Effiong. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
