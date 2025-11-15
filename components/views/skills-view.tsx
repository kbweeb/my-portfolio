"use client"

interface SkillsViewProps {
  onNavigate?: (view: string) => void
}

const skills = [
  { category: "Languages", items: ["Python", "C++", "C#", "JavaScript", "TypeScript"] },
  { category: "Frameworks & Tools", items: ["React", "Next.js", "Node.js", "Unity (2D)", ".NET"] },
  { category: "Technologies", items: ["IoT Device Testing", "Embedded Systems", "Git"] },
  { category: "Soft Skills", items: ["Technical Documentation", "Agile Collaboration", "Problem Solving"] },
]

export default function SkillsView({ onNavigate }: SkillsViewProps) {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="px-6 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: title and local nav */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
            <p className="text-sm text-muted-foreground max-w-md">A snapshot of the tools and stacks I use.</p>
            <div className="mt-6 h-px w-40 bg-primary/60 rounded" />
            <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
              <button type="button" className="text-primary font-semibold text-left">— SKILLS & TECHNOLOGIES</button>
              <button
                type="button"
                onClick={() => (onNavigate ? onNavigate("projects") : (window.location.hash = "projects"))}
                className="hover:text-primary transition-colors text-left"
              >
                — PROJECTS
              </button>
              <button
                type="button"
                onClick={() => (onNavigate ? onNavigate("about") : (window.location.hash = "about"))}
                className="hover:text-primary transition-colors text-left"
              >
                — ABOUT ME
              </button>
            </div>
          </div>

          {/* Right: skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="p-5 rounded-lg border border-border bg-secondary/50">
                <h3 className="font-semibold text-foreground mb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item}
                    </span>
                  ))}
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
