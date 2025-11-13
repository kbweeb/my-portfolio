"use client"

import { Cpu, Code2, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutView() {
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
              I'm a builder at heart, fascinated by how things work and obsessed with making them better. From the
              smallest microcontroller to complex distributed systems, I find joy in understanding every layer of the
              stack.
            </p>
          </div>

          {/* Journey Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My passion for engineering started with curiosity—taking things apart, understanding their mechanics, and
              reimagining what they could become. This evolved into a career dedicated to bridging hardware and
              software, creating intelligent systems that solve real problems.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">My Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              My dream? To design the next generation of smart, connected systems that shape a better future. I believe
              in technology that serves humanity, systems that are intuitive to use, and solutions that scale
              sustainably.
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

          {/* CTA Section */}
          <div className="bg-secondary border border-border rounded-lg p-8 space-y-4 mt-12">
            <h3 className="text-2xl font-semibold text-foreground">Let's Build Something Great</h3>
            <p className="text-muted-foreground">
              Interested in collaborating or learning more? I'd love to hear from you.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get in Touch</Button>
          </div>
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
