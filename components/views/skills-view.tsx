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
    <div className="w-full min-h-screen bg-background circuit-bg">
      <div className="section-shell">
        <div className="mb-16">
          <p className="eyebrow">03. /skills</p>
          <h2 className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-tight leading-none">Stack</h2>
          <div className="fig-marker">FIG. 3 — TECHNICAL_CAPABILITIES</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="card-technical p-6 flex flex-col">
              <h3 className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-6 border-b border-border pb-4">{group.category}</h3>
              <div className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-1 h-1 bg-primary/40 group-hover:bg-primary transition-colors"></div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 card-technical p-8 border-dashed">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-lg font-bold text-foreground uppercase tracking-tighter">Ready for new challenges</h4>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-light">Current Status: Open to Collaboration</p>
            </div>
            <button 
              onClick={() => (onNavigate ? onNavigate("about") : (window.location.hash = "about"))}
              className="technical-button technical-button-active whitespace-nowrap"
            >
              INITIALIZE_CONTACT
            </button>
          </div>
        </div>
      </div>

      <footer className="border-t border-border px-5 sm:px-8 lg:px-16 py-8 mt-16 bg-card/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
          <p>&copy; 2026 Kwabena Boateng Gyau Baffour // SYSTEM_STATUS: ONLINE</p>
          <div className="flex gap-8">
            {["home", "projects", "about"].map(view => (
              <button key={view} type="button" onClick={() => (onNavigate ? onNavigate(view) : (window.location.hash = view))} className="hover:text-primary transition-colors cursor-pointer">
                {view}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
