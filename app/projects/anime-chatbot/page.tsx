"use client"

import { useState } from "react"
import { askAnimeChatbot, demoAnimeReply } from "@/lib/chatbot-api"
import { sitePath } from "@/lib/site-path"

type Msg = { role: "user" | "assistant"; content: string }

async function askApi(prompt: string): Promise<string> {
  const fromApi = await askAnimeChatbot(prompt)
  if (fromApi) return fromApi
  return demoAnimeReply(prompt)
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

  const backHref = `${sitePath("/")}#projects`

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="px-6 md:px-16 py-10 md:py-16 max-w-3xl mx-auto">
        <a href={backHref} className="text-primary hover:text-primary/80">
          ← Back to Projects
        </a>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">AI Chatbot for Anime Queries — Demo</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Calls the live API at <code className="text-xs">/api/chat</code> when available (Groq/OpenAI-compatible).
          Falls back to canned answers if the API is unreachable or misconfigured.
        </p>

        <div className="mt-6 rounded-xl border border-border bg-secondary/50 overflow-hidden">
          <div className="h-96 overflow-y-auto p-4 space-y-3">
            {msgs.length === 0 ? (
              <p className="text-sm text-muted-foreground">Try: &quot;Recommend an anime like Attack on Titan&quot;</p>
            ) : (
              msgs.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <div
                    className={
                      m.role === "user"
                        ? "inline-block px-3 py-2 bg-primary text-background rounded-lg"
                        : "inline-block px-3 py-2 bg-background border border-border rounded-lg"
                    }
                  >
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

        <p className="mt-6 text-xs text-muted-foreground">
          Standalone UI and API source:{" "}
          <a
            href="https://github.com/kbweeb/anime-chatbot-api"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            github.com/kbweeb/anime-chatbot-api
          </a>
        </p>
      </div>
    </div>
  )
}
