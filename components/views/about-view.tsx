"use client"

import { Cpu, Code2, Lightbulb, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/sections/contact-form"

interface AboutViewProps {
  onNavigate?: (view: string) => void
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Apex Bank, Ghana",
      period: "Sep 2025 – Nov 2025",
      description: "Developing a Cheque Processing System using C# and .NET to automate banking transaction workflows. Designing and implementing modules for cheque validation, data entry, and reporting.",
      points: [
        "Automated banking transaction workflows using .NET",
        "Implemented modules for cheque validation and reporting",
        "Collaborated with bank staff to refine requirements",
        "Ensured accurate and reliable transaction processing"
      ]
    },
    {
      role: "IoT Testing Intern",
      company: "IoT Network Hub Ghana",
      period: "Jul 2024 – Sep 2024",
      description: "Performed device functionality tests on IoT modules using scripts and signal monitoring tools. Documented bug reports and collaborated with firmware engineers.",
      points: [
        "Performed functionality tests on IoT modules",
        "Documented bug reports and collaborated with firmware engineers",
        "Validated real-world deployment in field environments"
      ]
    }
  ]

  return (
    <div className="w-full bg-background py-20 border-t border-border">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: About Intro */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase">02. /about</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 uppercase tracking-tighter">
                Engineering <br/> Solutions.
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-base font-light">
              I'm a Computer Engineering student (graduating 2027) focused on the intersection of software 
              development and hardware systems. I thrive on solving complex technical challenges with 
              clean, efficient code.
            </p>

            <div className="p-6 bg-secondary/30 border border-border">
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Core Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building impactful digital infrastructure and interactive experiences. 
                Based in Accra, Ghana.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="tel:+233209179715"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors font-mono"
                aria-label="Call Kwabena"
              >
                <Phone className="w-4 h-4 text-primary" />
                +233 20 917 9715
              </a>
            </div>
            
            <div className="mt-8">
               <ContactForm toEmail="kbweeb.01@gmail.com" />
            </div>
          </div>

          {/* Right: Timeline/Experience */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase">03. /journey</span>
              <h2 className="text-4xl font-bold text-foreground mt-4 uppercase tracking-tighter">Experience</h2>
              <p className="text-[10px] font-mono text-muted-foreground mt-2 uppercase tracking-widest">FIG. 2 — PROFESSIONAL TIMELINE</p>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Cpu className="w-4 h-4" />
                  </div>
                  {/* Content */}
                  <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 bg-secondary/20 border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col mb-1">
                      <time className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">{exp.period}</time>
                      <h4 className="text-lg font-bold text-foreground uppercase tracking-tight">{exp.role}</h4>
                      <span className="text-sm text-muted-foreground font-mono italic">{exp.company}</span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary font-bold">›</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
