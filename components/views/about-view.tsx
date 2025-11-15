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
    <div className="w-full min-h-screen bg-background">
      <div className="px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-4xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              I'm a dedicated Computer Engineering student with a passion for creating innovative solutions through
              code. My journey in technology has equipped me with a diverse skill set and a problem-solving mindset.
            </p>
            {/* Quick nav */}
            <div className="flex gap-4 text-sm pt-2">
              <button type="button" onClick={() => onNavigate?.("home")} className="text-muted-foreground hover:text-primary">Home</button>
              <button type="button" onClick={() => onNavigate?.("projects")} className="text-muted-foreground hover:text-primary">Projects</button>
              <button type="button" onClick={() => onNavigate?.("others")} className="text-muted-foreground hover:text-primary">Others</button>
            </div>
          </div>

          {/* Journey Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about Software Development, Game Development and IoT Systems. Exploring innovative solutions
              to refine my skills and contribute to cutting-edge projects in technology and interactive media.
              Expected graduation: November 2027.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">My Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Based in Accra, Ghana. Open to opportunities in software engineering, embedded systems, and game
              development. Let's connect and build something impactful.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-all group cursor-pointer"
              >
                <value.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Get in Touch Section from NEW UI with OLD functionality */}
          <div className="bg-secondary border border-border rounded-lg p-8 space-y-6 mt-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
              <p className="text-muted-foreground">Send me a message — it opens your email with a prefilled draft.</p>
            </div>
            <ContactForm toEmail="kbweeb.01@gmail.com" />
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
