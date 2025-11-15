"use client"

import Image from "next/image"

interface OtherProject {
  id: number
  title: string
  description: string
  image: string
}

const otherProjects: OtherProject[] = [
  {
    id: 1,
    title: "Designing a Smart Energy Monitor From Scratch",
    description: "Integrating hardware and software components to build a real-time energy monitoring system.",
    image: "/smart-energy-monitoring-system-with-circuit-boards.jpg",
  },
  {
    id: 2,
    title: "How I Built An IoT Weather Station In A Weekend",
    description: "Building an IoT weather station that collects environmental data and provides real-time insights.",
    image: "/iot-sensor-network-environmental-monitoring.jpg",
  },
  {
    id: 3,
    title: "Robotics Control Platform",
    description: "Autonomous control systems and robotics integration.",
    image: "/robotics-control-platform-autonomous-robot.jpg",
  },
]

interface OthersViewProps {
  onNavigate?: (view: string) => void
}

export default function OthersView({ onNavigate }: OthersViewProps) {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left title/intro and nav mimic */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kwabena Boateng</h2>
            <p className="text-sm text-muted-foreground max-w-md">Computer Engineering Student</p>
            <div className="mt-6 h-px w-40 bg-primary/60 rounded" />
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <button
                type="button"
                onClick={() => (onNavigate ? onNavigate("projects") : (window.location.hash = "projects"))}
                className="hover:text-primary transition-colors text-left"
              >
                — PROJECTS
              </button>
              <p className="text-primary font-semibold">OTHERS</p>
              <button
                type="button"
                onClick={() => (onNavigate ? onNavigate("about") : (window.location.hash = "about"))}
                className="hover:text-primary transition-colors text-left"
              >
                — ABOUT ME
              </button>
            </div>
          </div>

          {/* Right: list style cards */}
          <div className="space-y-4">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-secondary/50 hover:border-primary/60 transition-colors"
              >
                <div className="relative w-28 h-20 rounded-md overflow-hidden shrink-0">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                  <p className="text-xs text-muted-foreground max-w-md">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
