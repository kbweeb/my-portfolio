"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

interface HomeViewProps {
  onNavigate: (view: string) => void
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="w-full min-h-[90vh] flex items-center bg-background py-20">
      <div className="px-6 md:px-16 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-primary font-mono text-sm tracking-widest">01. /home</span>
          </div>
          
          <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            {/* Left content */}
            <div className="flex-1 space-y-10 w-full">
              <div>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-foreground tracking-tighter leading-[0.9] mb-6 uppercase">
                  Kwabena<br />Boateng.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-mono">
                  Computer Engineering · Software Development · Game Dev
                </p>
              </div>

              <div className="max-w-xl space-y-6">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  Passionate about building robust systems and interactive media. Currently exploring innovative 
                  solutions in software engineering and IoT at KNUST, Ghana.
                </p>
                
                <div className="pt-4 flex flex-wrap gap-4">
                  <a href="#projects" className="px-8 py-3 bg-primary text-primary-foreground font-mono text-xs tracking-widest hover:bg-primary/90 transition-all uppercase">
                    View Projects
                  </a>
                  <a href="#about" className="px-8 py-3 border border-border text-foreground font-mono text-xs tracking-widest hover:bg-secondary transition-all uppercase">
                    About Me
                  </a>
                </div>
              </div>
            </div>

            {/* Right content - Abstract FIG marker or image */}
            <div className="lg:w-1/3 w-full">
               <div className="relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                 <div className="relative aspect-[3/4] bg-secondary border border-border overflow-hidden">
                    <Image src="/profile.jpg" alt="Kwabena Boateng" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
                 <div className="mt-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                   FIG. 1 — SYSTEM OPERATOR [KB-2027]
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
