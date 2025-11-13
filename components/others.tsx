"use client"

const smallProjects = [
  {
    id: 1,
    title: "LED Matrix Display",
    description: "Custom LED matrix controller with animation library",
    tags: ["Arduino", "C++"],
  },
  {
    id: 2,
    title: "Temperature Logger",
    description: "Data logging system with cloud synchronization",
    tags: ["Python", "IoT"],
  },
  {
    id: 3,
    title: "Motor Control Interface",
    description: "PWM-based motor control with feedback systems",
    tags: ["Electronics", "Embedded C"],
  },
  {
    id: 4,
    title: "Sensor Calibration Tool",
    description: "Automated calibration toolkit for various sensors",
    tags: ["Python", "Data Processing"],
  },
  {
    id: 5,
    title: "Wireless Mesh Network",
    description: "Low-power mesh networking protocol implementation",
    tags: ["C++", "Network"],
  },
  {
    id: 6,
    title: "Real-time Dashboard",
    description: "Live data visualization and monitoring system",
    tags: ["React", "Node.js"],
  },
]

export default function Others() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <div className="space-y-3 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">Other Experiments</h2>
          <p className="text-muted-foreground text-lg">
            Smaller projects and explorations in embedded systems and IoT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
          {smallProjects.map((project, index) => (
            <div
              key={project.id}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border border-muted rounded-full text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
