"use client"

import { Code2, Cpu, Lightbulb } from "lucide-react"

export default function About() {
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Left Sidebar */}
        <div className="md:col-span-1 animate-slide-up">
          <div className="space-y-6">
            <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-primary/30 to-secondary border border-border flex items-center justify-center">
              <div className="text-center">
                <Cpu className="w-12 h-12 text-primary mx-auto mb-2" />
                <span className="text-xs font-semibold text-muted-foreground">Joshua</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-3 space-y-8 animate-slide-up">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm a builder at heart, fascinated by how things work and obsessed with making them better. From the
              smallest microcontroller to complex distributed systems, I find joy in understanding every layer of the
              stack.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              My passion for engineering started with curiosity—taking things apart, understanding their mechanics, and
              reimagining what they could become. This evolved into a career dedicated to bridging hardware and
              software, creating intelligent systems that solve real problems.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">My Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              My dream? To design the next generation of smart, connected systems that shape a better future. I believe
              in technology that serves humanity, systems that are intuitive to use, and solutions that scale
              sustainably.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all group cursor-pointer"
              >
                <value.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-lg p-8 text-center space-y-4">
            <h3 className="text-2xl font-semibold">Let's Build Something Great</h3>
            <p className="text-muted-foreground">
              Interested in collaborating or learning more? I'd love to hear from you.
            </p>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
