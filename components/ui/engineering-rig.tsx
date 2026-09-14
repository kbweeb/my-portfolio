"use client"

import React, { useState, useEffect, useRef } from "react"

export default function EngineeringRig() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [frame, setFrame] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    let animationId: number
    const animate = () => {
      setFrame(f => f + 1)
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const rigX = mousePos.x > 0 ? mousePos.x / (typeof window !== "undefined" ? window.innerWidth : 1) : 0.5
  const rigY = mousePos.y > 0 ? mousePos.y / (typeof window !== "undefined" ? window.innerHeight : 1) : 0.5

  const motorRotation = rigX * 360 + frame * 0.1
  const pwmValue = Math.round(rigY * 255)

  // Generate some "telemetry" data for the scope
  const scopeData = Array.from({ length: 20 }, (_, i) => {
    const x = i * 5
    const y = 20 + Math.sin((i + rigX * 10 + frame * 0.2) * 0.5) * 15 * rigY
    return `${x},${y}`
  }).join(" ")

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center p-4 md:p-8 select-none">
      {/* HUD Telemetry - Hidden on mobile */}
      <div className="hidden sm:block absolute top-4 left-4 font-mono text-[10px] text-muted-foreground space-y-1 z-10">
        <div className="flex gap-2">
          <span className="text-primary opacity-70">X-COORD:</span>
          <span>{mousePos.x.toString().padStart(4, "0")}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-primary opacity-70">Y-COORD:</span>
          <span>{mousePos.y.toString().padStart(4, "0")}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-primary opacity-70">MOTOR PWM:</span>
          <span className="text-primary">{pwmValue.toString().padStart(3, "0")}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-primary opacity-70">STATUS:</span>
          <span className="animate-pulse">SIMULATING...</span>
        </div>
      </div>

      {/* Schematic SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-md drop-shadow-[0_0_15px_rgba(239,68,68,0.1)]"
        fill="none"
        stroke="currentColor"
      >
        {/* Central Microcontroller - ATmega */}
        <rect x="70" y="70" width="60" height="60" className="text-white/20" strokeWidth="1" />
        <text x="100" y="105" textAnchor="middle" className="fill-white/40 font-mono text-[8px]" stroke="none">ATMEGA328P</text>
        
        {/* Pins */}
        {[0, 1, 2, 3].map(i => (
            <React.Fragment key={i}>
                <line x1={65} y1={75 + i * 15} x2={70} y2={75 + i * 15} className="text-white/40" strokeWidth="0.5" />
                <line x1={130} y1={75 + i * 15} x2={135} y2={75 + i * 15} className="text-white/40" strokeWidth="0.5" />
                <line x1={75 + i * 15} y1={65} x2={75 + i * 15} y2={70} className="text-white/40" strokeWidth="0.5" />
                <line x1={75 + i * 15} y1={130} x2={75 + i * 15} y2={135} className="text-white/40" strokeWidth="0.5" />
            </React.Fragment>
        ))}

        {/* Stepper Motor visualization */}
        <g transform={`translate(160, 50)`}>
          <circle cx="0" cy="0" r="25" className="text-white/10" strokeWidth="1" />
          <circle cx="0" cy="0" r="20" className="text-white/20" strokeWidth="0.5" strokeDasharray="2 2" />
          <g transform={`rotate(${motorRotation})`}>
             <line x1="0" y1="0" x2="0" y2="-18" className="text-primary" strokeWidth="2" strokeLinecap="round" />
             <circle cx="0" cy="-18" r="2" className="fill-primary" stroke="none" />
          </g>
          <text x="0" y="35" textAnchor="middle" className="fill-white/30 font-mono text-[6px]" stroke="none">STEPPER_MOTOR_V1</text>
        </g>

        {/* Oscilloscope Screen */}
        <g transform="translate(20, 140)">
           <rect x="0" y="0" width="100" height="40" className="text-white/10" strokeWidth="1" />
           <path
             d={`M ${scopeData}`}
             className="text-primary"
             strokeWidth="1"
             fill="none"
           />
           <line x1="0" y1="20" x2="100" y2="20" className="text-white/5" strokeWidth="0.5" />
           <text x="5" y="-5" className="fill-white/30 font-mono text-[6px]" stroke="none">OSCILLOSCOPE_CH1</text>
        </g>

        {/* Connections */}
        <path
          d={`M 130,100 L 160,100 L 160,75`}
          className={rigX > 0.5 ? "text-primary" : "text-white/20"}
          strokeWidth="0.5"
          strokeDasharray={rigX > 0.5 ? "none" : "2 2"}
        />
        <path
          d={`M 100,130 L 100,140 L 50,140`}
          className={rigY > 0.5 ? "text-primary" : "text-white/20"}
          strokeWidth="0.5"
        />

        {/* Floating Accents */}
        <circle cx="40" cy="40" r="2" className="fill-white/10" stroke="none" />
        <circle cx="170" cy="170" r="2" className="fill-primary/20" stroke="none" />
      </svg>

      {/* Background Grid Pattern for the rig area */}
      <div className="absolute inset-0 z-[-1] opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    </div>
  )
}
