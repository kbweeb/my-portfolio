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
    <div className="w-full bg-background py-24 border-t border-border">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: title and local nav */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase">03. /skills</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 uppercase tracking-tighter">Stack & <br/>Technologies.</h2>
              <p className="text-[10px] font-mono text-muted-foreground mt-2 uppercase tracking-widest">FIG. 3 — TECHNICAL CAPABILITIES</p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-base font-light max-w-md">
              A comprehensive mapping of my technical expertise across software engineering, 
              embedded systems, and creative development.
            </p>
            
            <div className="pt-4 flex flex-col gap-4">
               <div className="flex items-center gap-4 group">
                 <div className="w-1 h-8 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                 <span className="text-xs font-mono tracking-widest text-muted-foreground group-hover:text-foreground transition-colors uppercase">System Architecture</span>
               </div>
               <div className="flex items-center gap-4 group">
                 <div className="w-1 h-8 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                 <span className="text-xs font-mono tracking-widest text-muted-foreground group-hover:text-foreground transition-colors uppercase">Full-Stack Development</span>
               </div>
               <div className="flex items-center gap-4 group">
                 <div className="w-1 h-8 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                 <span className="text-xs font-mono tracking-widest text-muted-foreground group-hover:text-foreground transition-colors uppercase">Embedded Systems Testing</span>
               </div>
            </div>
          </div>

          {/* Right: skills grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
            {skills.map((group) => (
              <div key={group.category} className="p-8 bg-background hover:bg-secondary/20 transition-colors group">
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-6 group-hover:translate-x-1 transition-transform">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1 text-[10px] font-mono uppercase tracking-tighter border border-border bg-secondary/30 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
