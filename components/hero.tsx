"use client"

interface HeroProps {
  onNavigate?: (view: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slide-up">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              I'm a{" "}
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                future-focused engineer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              who <span className="text-primary font-semibold">builds bridges</span> between hardware and code.
            </p>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
            Crafting intelligent systems where circuit boards meet software logic, creating seamless experiences at the
            intersection of hardware and design.
          </p>
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => onNavigate?.("projects")}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View My Work
            </button>
            <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="relative h-96 md:h-full min-h-96 animate-fade-in">
          {/* Abstract wavy background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-transparent rounded-3xl overflow-hidden">
            <svg viewBox="0 0 1024 1024" className="w-full h-full opacity-50" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#FF6A3D", stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: "#E8E8E8", stopOpacity: 0.1 }} />
                </linearGradient>
              </defs>
              <path d="M0,512 Q256,256 512,512 T1024,512 L1024,1024 L0,1024 Z" fill="url(#grad)" />
              <path d="M0,600 Q256,400 512,600 T1024,600 L1024,1024 L0,1024 Z" fill="#FF6A3D" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
