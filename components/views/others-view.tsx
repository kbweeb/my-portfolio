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

export default function OthersView() {
  return (
    <div className="w-full min-h-screen md:ml-80 bg-background">
      <div className="px-6 md:px-16 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-foreground mb-12">Other Projects & Experiments</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="space-y-4">
                {/* Project image */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-secondary border border-border group-hover:border-primary transition-colors">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project info */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
