"use client"

import { useEffect, useRef, useState } from "react"

const N = 40
const M = 40

function emptyGrid() {
  return Array.from({ length: N }, () => Array.from({ length: M }, () => 0))
}

function step(grid: number[][]) {
  const next = emptyGrid()
  const dirs = [-1, 0, 1]
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      let alive = 0
      for (const dr of dirs) for (const dc of dirs) {
        if (dr === 0 && dc === 0) continue
        const rr = r + dr
        const cc = c + dc
        if (rr >= 0 && rr < N && cc >= 0 && cc < M) alive += grid[rr][cc]
      }
      // Conway's Game of Life rules
      if (grid[r][c] === 1) next[r][c] = alive === 2 || alive === 3 ? 1 : 0
      else next[r][c] = alive === 3 ? 1 : 0
    }
  }
  return next
}

export default function CellularAutomataDemo() {
  const [grid, setGrid] = useState<number[][]>(emptyGrid())
  const [running, setRunning] = useState(false)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!running) return
    let last = 0
    const tick = (t: number) => {
      if (t - last > 200) {
        setGrid((g) => step(g))
        last = t
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [running])

  const toggle = (r: number, c: number) => {
    setGrid((g) => {
      const n = g.map((row) => row.slice())
      n[r][c] = n[r][c] ? 0 : 1
      return n
    })
  }

  const clear = () => setGrid(emptyGrid())

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="px-6 md:px-16 py-10 md:py-16 max-w-5xl mx-auto">
        <button onClick={() => (window.location.hash = "projects")} className="text-primary hover:text-primary/80">← Back</button>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">Cellular Automata — Demo</h1>
        <p className="text-sm text-muted-foreground mt-2">Conway's Game of Life: click cells to toggle, then run.</p>

        <div className="flex gap-2 mt-4">
          <button onClick={() => setRunning((s) => !s)} className="px-3 py-2 bg-primary text-background rounded">
            {running ? "Pause" : "Run"}
          </button>
          <button onClick={() => setGrid((g) => step(g))} className="px-3 py-2 bg-primary/70 text-background rounded">Step</button>
          <button onClick={clear} className="px-3 py-2 bg-secondary text-foreground border border-border rounded">Clear</button>
        </div>

        <div className="mt-6 grid" style={{ gridTemplateColumns: `repeat(${M}, 16px)`, gap: 2 }}>
          {grid.map((row, r) =>
            row.map((cell, c) => (
              <div
                key={`${r}-${c}`}
                onClick={() => toggle(r, c)}
                className={cell ? "bg-primary" : "bg-secondary"}
                style={{ width: 16, height: 16, border: "1px solid var(--border)" }}
              />
            )),
          )}
        </div>
      </div>
    </div>
  )
}
