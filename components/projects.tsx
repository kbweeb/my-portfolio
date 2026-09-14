"use client"

import { useState } from "react"
import ProjectCard from "./project-card"

const projectsData = [
  {
    id: 1,
    name: "Smart Energy Monitor System",
    description: "Helps users reduce energy loss by identifying high-voltage patterns.",
    fullDescription:
      "A comprehensive IoT system that monitors energy consumption in real-time using Arduino-based hardware and a React web dashboard. The system analyzes voltage patterns to identify inefficiencies and provides actionable insights for energy optimization.",
    image: "/smart-energy-monitoring-system-with-circuit-boards.jpg",
    tags: ["Python", "C++", "React"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: 2,
    name: "IoT Environmental Sensor Network",
    description: "Distributed sensor network for environmental monitoring and data collection.",
    fullDescription:
      "A network of wireless sensors deployed across multiple locations to gather environmental data. Features real-time data synchronization, cloud storage, and predictive analytics for environmental trends.",
    image: "/iot-sensor-network-environmental-monitoring.jpg",
    tags: ["Arduino", "Python", "Node.js"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    id: 3,
    name: "Robotics Control Platform",
    description: "Web-based platform for controlling and monitoring autonomous robots.",
    fullDescription:
      "An integrated platform combining embedded systems programming with a React-based control interface. Enables remote operation, real-time telemetry, and autonomous task scheduling for robotic systems.",
    image: "/robotics-control-platform-autonomous-robot.jpg",
    tags: ["C++", "React", "ROS"],
    links: {
      github: "#",
      demo: "#",
    },
  },
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="space-y-3 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Showcasing hardware-software integration at its finest.</p>
        </div>

        <div className="grid gap-6 animate-slide-up">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onExpand={() => setExpandedId(expandedId === project.id ? null : project.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
