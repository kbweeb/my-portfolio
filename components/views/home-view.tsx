"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

interface HomeViewProps {
  onNavigate: (view: string) => void
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Main content section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left content */}
          <div className="flex-1 space-y-6 w-full">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight text-balance">
                Kwabena Boateng
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Computer Engineering Student
              </p>
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg font-light">
              And I'm a Software Engineering Enthusiast. Passionate about Software Development, Game Development and
              IoT Systems. Exploring innovative solutions to refine my skills and contribute to cutting-edge projects
              in technology and interactive media. Expected graduation: November 2027.
            </p>

            {/* Navigation Links */}
            <div className="flex flex-col gap-3 pt-4">
              <button type="button"
                onClick={() => onNavigate("projects")}
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                — PROJECTS
              </button>
              <button type="button"
                onClick={() => onNavigate("skills")}
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                — SKILLS & TECHNOLOGIES
              </button>
              <button type="button"
                onClick={() => onNavigate("about")}
                className="text-xs sm:text-sm font-medium text-primary transition-colors text-left"
              >
                — ABOUT ME
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 pt-6">
              <Link
                href="https://github.com/kbweeb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/kwabena-boateng-gyau-baffour-00067a308"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right content - Profile image and bio */}
          <div className="flex-1 space-y-6 w-full">
            <div className="relative w-full max-w-[220px] sm:max-w-sm aspect-square rounded-lg overflow-hidden bg-secondary border border-border mx-auto lg:mx-0">
              <Image src="/profile.jpg" alt="Profile photo" fill className="object-cover" />
            </div>

            {/* Bio text */}
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto lg:mx-0">
              <p>
                I'm a dedicated Computer Engineering student with a passion for creating innovative solutions through
                code. My journey in technology has equipped me with a diverse skill set and a problem-solving mindset.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Kwabena Boateng Gyau Baffour. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <button type="button" onClick={() => onNavigate("projects")} className="hover:text-foreground transition-colors">
              Projects
            </button>
            <button type="button" onClick={() => onNavigate("skills")} className="hover:text-foreground transition-colors">
              Skills
            </button>
            <button type="button" onClick={() => onNavigate("about")} className="hover:text-foreground transition-colors">
              About
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
