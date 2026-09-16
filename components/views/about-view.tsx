"use client"

import { Cpu, Code2, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/sections/contact-form"

interface AboutViewProps {
  onNavigate?: (view: string) => void
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const values = [
    {
      icon: Cpu,
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches",
    },
    {
      icon: Code2,
      title: "Quality",
      description: "Obsessed with clean code and robust systems",
    },
    {
      icon: Lightbulb,
      title: "Problem-Solving",
      description: "Finding elegant solutions to complex challenges",
    },
  ]

  return (
    <div className="w-full min-h-screen bg-background circuit-bg">
      <div className="section-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Fixed Bio */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="eyebrow">04. /about</p>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground uppercase tracking-tight leading-none mb-8">Bio</h2>
              <div className="fig-marker">FIG. 4 — OPERATOR INFORMATION</div>
              <p className="text-lg text-muted-foreground leading-relaxed mt-8 border-l-2 border-primary pl-6 font-light">
                Dedicated Computer Engineering student with a passion for creating innovative solutions through
                code. My journey in technology has equipped me with a diverse skill set and a problem-solving mindset.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Vision_Protocol</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Based in Accra, Ghana. Open to opportunities in software engineering, embedded systems, and game
                development. Let's connect and build something impactful.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-6 card-technical group"
                >
                  <value.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-sm font-bold text-foreground mb-2 uppercase tracking-widest">{value.title}</h4>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Timeline and Experience */}
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-8">
              <div>
                <p className="eyebrow">05. /timeline</p>
                <h3 className="text-3xl font-bold text-foreground uppercase tracking-tight">Experience</h3>
                <div className="fig-marker">FIG. 5 — PROFESSIONAL_RECORDS</div>
              </div>

              <div className="space-y-8">
                <div className="card-technical p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4">
                    <h4 className="font-bold text-lg text-foreground uppercase">Software Developer Intern</h4>
                    <span className="text-[10px] font-mono text-primary bg-primary/5 px-3 py-1 border border-primary/20">Sep 2025 – Nov 2025</span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Apex Bank, Ghana // Cheque Processing System</p>
                  <ul className="mt-4 space-y-3">
                    {["Developing a Cheque Processing System using C# and .NET to automate workflows.", "Designing modules for cheque validation, data entry, and reporting.", "Collaborating with staff to refine requirements and usability.", "Ensuring accurate and reliable transaction processing through testing."].map((item, i) => (
                      <li key={i} className="flex gap-4 text-sm text-muted-foreground font-light">
                        <span className="text-primary font-mono text-xs">[{i+1}]</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-technical p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border pb-4">
                    <h4 className="font-bold text-lg text-foreground uppercase">IoT Testing Intern</h4>
                    <span className="text-[10px] font-mono text-primary bg-primary/5 px-3 py-1 border border-primary/20">Jul 2024 – Sep 2024</span>
                  </div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">IoT Network Hub Ghana</p>
                  <ul className="mt-4 space-y-3">
                    {["Performed device functionality tests on IoT modules.", "Documented bug reports and collaborated with firmware engineers.", "Assisted in real-world deployment validation of IoT devices."].map((item, i) => (
                      <li key={i} className="flex gap-4 text-sm text-muted-foreground font-light">
                        <span className="text-primary font-mono text-xs">[{i+1}]</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="eyebrow">06. /contact</p>
                <h3 className="text-3xl font-bold text-foreground uppercase tracking-tight">Get in Touch</h3>
                <div className="fig-marker">FIG. 6 — COMMUNICATION_LINK</div>
              </div>
              <div className="card-technical p-8 bg-muted/5">
                <p className="text-sm text-muted-foreground mb-8 font-light uppercase tracking-widest">
                  Initialising secure communication channel...
                </p>
                <ContactForm toEmail="kbweeb.01@gmail.com" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-border px-5 sm:px-8 lg:px-16 py-8 mt-16 bg-card/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
          <p>&copy; 2026 Kwabena Boateng Gyau Baffour // SYSTEM_STATUS: ONLINE</p>
          <div className="flex gap-8">
            {["home", "projects", "skills"].map(view => (
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
