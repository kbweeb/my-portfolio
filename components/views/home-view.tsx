"use client"

import Image from "next/image"

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
                Joshua Effiong
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Hardware-Software Integration Engineer
              </p>
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg font-light">
              I bring ideas to life where circuits meet code—Through smart systems, clean design, and hands-on
              engineering.
            </p>

            {/* Navigation Links */}
            <div className="flex flex-col gap-3 pt-4">
              <button
                onClick={() => onNavigate("projects")}
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                — PROJECTS
              </button>
              <button
                onClick={() => onNavigate("others")}
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors text-left"
              >
                — OTHERS
              </button>
              <button
                onClick={() => onNavigate("about")}
                className="text-xs sm:text-sm font-medium text-primary transition-colors text-left"
              >
                — ABOUT ME
              </button>
            </div>
          </div>

          {/* Right content - Profile image and bio */}
          <div className="flex-1 space-y-6 w-full">
            <div className="relative w-full max-w-[220px] sm:max-w-sm aspect-square rounded-lg overflow-hidden bg-secondary border border-border mx-auto lg:mx-0">
              <Image src="/placeholder.jpg" alt="Joshua Effiong" fill className="object-cover" />
            </div>

            {/* Bio text */}
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto lg:mx-0">
              <p>
                I&rsquo;m a <span className="text-foreground font-medium">builder at heart</span> fascinated by how
                things work and obsessed with making them better. With a background in electrical engineering and a love
                for coding, I create projects that fuse wires and logic, turning raw components into meaningful
                experiences.
              </p>
              <p>
                <span className="text-foreground font-medium">My dream?</span> To design the next generation of smart,
                connected systems that power a better future.
              </p>
              <p>
                Along the way, I&rsquo;ve built energy monitors, IoT prototypes, and interactive dashboards each one
                teaching me how to bridge physical sensors with digital intelligence. I thrive when I&rsquo;m learning,
                iterating, and getting my hands dirty with both code and hardware. Whether it&rsquo;s optimizing
                firmware, designing PCB layouts, or creating user-facing interfaces, I&rsquo;m driven by curiosity,
                impact, and the thrill of invention.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Joshua Effiong. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <button onClick={() => onNavigate("projects")} className="hover:text-foreground transition-colors">
              Projects
            </button>
            <button onClick={() => onNavigate("others")} className="hover:text-foreground transition-colors">
              Others
            </button>
            <button onClick={() => onNavigate("about")} className="hover:text-foreground transition-colors">
              About
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
