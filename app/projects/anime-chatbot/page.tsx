"use client"

import { useState } from "react"

type Msg = { role: "user" | "assistant"; content: string }

async function askApi(prompt: string): Promise<string> {
  const base = process.env.NEXT_PUBLIC_CHATBOT_API
  if (base) {
    try {
      const res = await fetch(`${base.replace(/\/$/, "")}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt }),
      })
      if (!res.ok) throw new Error("bad_response")
      const data = await res.json()
      return data.reply ?? "(no reply)"
    } catch (e) {
      return "(API error — falling back to demo mode)"
    }
  }
  // Demo fallback with canned answers
  if (/recommend|suggest/i.test(prompt)) {
    return "You might enjoy: Fullmetal Alchemist: Brotherhood, Demon Slayer, and Jujutsu Kaisen."
  }
  if (/naruto|uzumaki/i.test(prompt)) {
    return "Naruto Uzumaki is the protagonist of Naruto, a shinobi from the Hidden Leaf Village with dreams of becoming Hokage."
  }
  return "I'm your anime assistant. Ask me for recommendations, character bios, or summaries!"
}

export default function AnimeChatbotDemo() {
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [busy, setBusy] = useState(false)

  const send = async () => {
    const q = input.trim()
    if (!q || busy) return
    setInput("")
    setMsgs((m) => [...m, { role: "user", content: q }])
    setBusy(true)
    const reply = await askApi(q)
    setMsgs((m) => [...m, { role: "assistant", content: reply }])
    setBusy(false)
  }

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="px-6 md:px-16 py-10 md:py-16 max-w-3xl mx-auto">
        <button onClick={() => (window.location.hash = "projects")} className="text-primary hover:text-primary/80">← Back</button>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">AI Chatbot for Anime Queries — Demo</h1>
        <p className="text-sm text-muted-foreground mt-2">C# (.NET) API + NLP service (OpenAI). This page calls your API when configured, otherwise uses a demo fallback.</p>

        <div className="mt-6 rounded-xl border border-border bg-secondary/50 overflow-hidden">
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {msgs.length === 0 ? (
              <p className="text-sm text-muted-foreground">Try: "Recommend an anime like Attack on Titan"</p>
            ) : (
              msgs.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <div className={
                    m.role === "user"
                      ? "inline-block px-3 py-2 bg-primary text-background rounded-lg"
                      : "inline-block px-3 py-2 bg-background border border-border rounded-lg"
                  }>
                    {m.content}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-3 flex gap-2 border-t border-border bg-background">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about anime..."
              className="flex-1 px-3 py-2 bg-background border border-border rounded"
            />
            <button disabled={busy} onClick={send} className="px-4 py-2 bg-primary text-background rounded">
              {busy ? "..." : "Send"}
            </button>
          </div>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          Placeholder image idea: anime collage/mascot. Replace later for branding.
        </div>
      </div>
    </div>
  )
}
