"use client"

import { useState, useEffect, useRef } from "react"

export default function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "System initialized...",
    "Loading operator profile...",
    "Welcome, visitor. Type 'help' for available commands."
  ])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    if (!cmd) return

    let response = ""
    switch (cmd) {
      case "help":
        response = "Available commands: about, projects, skills, contact, clear"
        break
      case "about":
        response = "Kwabena Boateng - Computer Engineering Student at KNUST."
        break
      case "projects":
        response = "Redirecting to projects section..."
        setTimeout(() => window.location.hash = "projects", 1000)
        break
      case "skills":
        response = "React, Next.js, C++, Python, IoT, Game Dev."
        break
      case "contact":
        response = "Email: kbweeb@example.com (Mock)"
        break
      case "clear":
        setHistory([])
        setInput("")
        return
      default:
        response = `Command not found: ${cmd}. Type 'help' for assistance.`
    }

    setHistory([...history, `user@portfolio:~$ ${input}`, response])
    setInput("")
  }

  return (
    <div className="terminal-box w-full max-w-2xl mx-auto h-64 flex flex-col mt-8">
      <div className="terminal-header">
        <div className="terminal-dot red"></div>
        <div className="terminal-dot yellow"></div>
        <div className="terminal-dot green"></div>
        <span className="text-[10px] text-muted-foreground ml-2 uppercase tracking-widest">Interactive Terminal v1.0.4</span>
      </div>
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto text-xs space-y-1 scrollbar-hide"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith("user@") ? "text-primary" : "text-muted-foreground"}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex">
          <span className="text-primary mr-2">user@portfolio:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-foreground p-0 m-0"
            autoFocus
          />
        </form>
      </div>
    </div>
  )
}
