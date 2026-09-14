"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import TechnicalBackground from "@/components/ui/technical-background"
import EngineeringRig from "@/components/ui/engineering-rig"

interface HomeViewProps {
  onNavigate: (view: string) => void
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="w-full min-h-[90vh] flex items-center py-20 relative overflow-hidden">
      <TechnicalBackground />
      <div className="px-6 md:px-16 w-full relative z-10">
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
                  solutions in software engineering and IoT at KNUST, Ghana. Expected graduation: November 2027.
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

            {/* Right content - Virtual Engineering Rig */}
            <div className="lg:w-1/2 w-full h-[400px] lg:h-[500px]">
               <EngineeringRig />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
