"use client"

import { useEffect, useState, useCallback } from "react"

type Telemetry = { x: number; y: number; normX: number; normY: number }

export default function EngineeringRig() {
  const [telemetry, setTelemetry] = useState<Telemetry>({ x: 0, y: 0, normX: 0.5, normY: 0.5 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const update = (event: PointerEvent) => {
      setTelemetry({
        x: Math.round(event.clientX),
        y: Math.round(event.clientY),
        normX: event.clientX / window.innerWidth,
        normY: event.clientY / window.innerHeight,
      })
    }
    window.addEventListener("pointermove", update, { passive: true })
    return () => window.removeEventListener("pointermove", update)
  }, [])

  const rotation = (telemetry.normX - 0.5) * 360
  const pwm = Math.round(telemetry.normY * 255)
  
  // Oscilloscope waveform simulation
  const generateWaveform = useCallback(() => {
    const points = []
    for (let i = 0; i <= 50; i++) {
      const x = (i / 50) * 100
      // Frequency and amplitude affected by mouse position
      const freq = 0.5 + telemetry.normX * 2
      const amp = 10 + telemetry.normY * 20
      const y = 25 + Math.sin(i * freq + Date.now() * 0.01) * amp
      points.push(`${x},${y}`)
    }
    return points.join(" ")
  }, [telemetry.normX, telemetry.normY])

  const [waveform, setWaveform] = useState("")

  useEffect(() => {
    let frameId: number
    const loop = () => {
      setWaveform(generateWaveform())
      frameId = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(frameId)
  }, [generateWaveform])

  if (!isMounted) return <div className="rig-shell h-[350px] bg-black/80" />

  return (
    <div className="rig-shell border-0 bg-transparent group" aria-label="Interactive embedded system simulation">
      <div className="rig-topline bg-black/40 border-b border-border">
        <span>FIG. 01 — VIRTUAL ENGINEERING RIG</span>
        <span className="rig-live flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          SYSTEM_LIVE
        </span>
      </div>
      
      <svg viewBox="0 0 480 350" className="rig-diagram bg-black/20" role="img">
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="480" height="350" fill="url(#grid)" />

        {/* Central Microcontroller - ATmega328P */}
        <g transform="translate(160, 100)">
          <rect x="0" y="0" width="80" height="100" fill="#050505" stroke="currentColor" strokeWidth="1.5" />
          <text x="40" y="45" textAnchor="middle" fill="white" className="text-[7px] font-mono tracking-tighter">ATmega328P</text>
          <text x="40" y="60" textAnchor="middle" fill="var(--primary)" className="text-[6px] font-mono tracking-widest opacity-80">MCU_CORE</text>
          
          {/* Pins */}
          {[0, 1, 2, 3, 4].map(i => (
            <g key={i}>
              <line x1="-10" y1={20 + i * 15} x2="0" y2={20 + i * 15} stroke="currentColor" strokeWidth="1" />
              <line x1="80" y1={20 + i * 15} x2="90" y2={20 + i * 15} stroke="currentColor" strokeWidth="1" />
            </g>
          ))}
        </g>

        {/* Stepper Motor Driver Circuit */}
        <g transform="translate(280, 110)">
          <rect x="0" y="0" width="60" height="80" fill="#080808" stroke="currentColor" strokeWidth="1" />
          <text x="30" y="35" textAnchor="middle" fill="white" className="text-[6px] font-mono uppercase">A4988</text>
          <text x="30" y="50" textAnchor="middle" fill="currentColor" className="text-[5px] font-mono opacity-60">DRIVER</text>
          
          {/* Status LED on driver */}
          <circle cx="50" cy="10" r="2" fill={telemetry.normX > 0.5 ? "var(--primary)" : "#222"} />
        </g>

        {/* Stepper Motor Visualization */}
        <g transform="translate(400, 150)">
          <circle r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" className="opacity-20" />
          <g transform={`rotate(${rotation})`}>
            <circle r="35" fill="#050505" stroke="currentColor" strokeWidth="1.5" />
            <rect x="-2" y="-30" width="4" height="30" fill="var(--primary)" />
            <circle r="8" fill="currentColor" />
          </g>
          <text y="60" textAnchor="middle" fill="currentColor" className="text-[6px] font-mono tracking-widest uppercase">NEMA_17</text>
        </g>

        {/* Digital Oscilloscope Screen */}
        <g transform="translate(40, 230)">
          <rect x="0" y="0" width="180" height="80" fill="#020202" stroke="currentColor" strokeWidth="1.5" />
          <rect x="5" y="5" width="130" height="70" fill="#050505" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          
          {/* Grid lines for scope */}
          {[1, 2, 3].map(i => (
            <line key={`h${i}`} x1="5" y1={5 + i * 17.5} x2="135" y2={5 + i * 17.5} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          ))}
          {[1, 2, 3, 4, 5, 6].map(i => (
            <line key={`v${i}`} x1="5 + i * 18.5" y1="5" x2="5 + i * 18.5" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
          ))}

          {/* Simulated Waveform */}
          <polyline
            points={waveform}
            transform="translate(5, 5) scale(1.3, 1)"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.5"
            className="filter drop-shadow-[0_0_2px_var(--primary)]"
          />

          {/* Scope Text */}
          <text x="142" y="25" fill="white" className="text-[6px] font-mono">CH1</text>
          <text x="142" y="40" fill="var(--primary)" className="text-[6px] font-mono">{pwm}mV</text>
          <text x="142" y="55" fill="white" className="text-[5px] font-mono opacity-50">10ms/div</text>
        </g>

        {/* Connecting Wires (Abstract) */}
        <g className="opacity-30" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M 240 150 L 280 150" />
          <path d="M 340 150 L 365 150" />
          <path d="M 130 230 L 130 200 L 160 150" />
        </g>
      </svg>

      <div className="rig-hud bg-black/60 backdrop-blur-sm border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 py-3">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] uppercase text-muted-foreground tracking-tighter">X-COORD</span>
          <span className="text-[10px] font-mono text-foreground">{String(telemetry.x).padStart(4, "0")} px</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[8px] uppercase text-muted-foreground tracking-tighter">Y-COORD</span>
          <span className="text-[10px] font-mono text-foreground">{String(telemetry.y).padStart(4, "0")} px</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[8px] uppercase text-muted-foreground tracking-tighter">MOTOR PWM</span>
          <span className="text-[10px] font-mono text-primary">{pwm} Units</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[8px] uppercase text-muted-foreground tracking-tighter">STATUS</span>
          <span className="text-[10px] font-mono text-primary">SIMULATING...</span>
        </div>
      </div>
    </div>
  )
}
