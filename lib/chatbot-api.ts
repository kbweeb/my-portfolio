const DEFAULT_CHATBOT_API = "https://anime-chatbot-api.vercel.app"

export function getChatbotApiBase(): string {
  const base = process.env.NEXT_PUBLIC_CHATBOT_API || DEFAULT_CHATBOT_API
  return base.replace(/\/$/, "")
}

/** POST /api/chat (preferred) or /chat; accepts { reply } or { message } from upstream. */
export async function askAnimeChatbot(prompt: string): Promise<string> {
  const base = getChatbotApiBase()
  const paths = ["/api/chat", "/chat"]

  for (const path of paths) {
    try {
      const res = await fetch(`${base}${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt }),
      })
      if (!res.ok) continue
      const data = (await res.json()) as { reply?: string; message?: string }
      const text = data.reply ?? data.message
      if (text) return String(text)
    } catch {
      // try next path
    }
  }

  return ""
}

export function demoAnimeReply(prompt: string): string {
  if (/recommend|suggest/i.test(prompt)) {
    return "You might enjoy: Fullmetal Alchemist: Brotherhood, Demon Slayer, and Jujutsu Kaisen."
  }
  if (/naruto|uzumaki/i.test(prompt)) {
    return "Naruto Uzumaki is the protagonist of Naruto, a shinobi from the Hidden Leaf Village with dreams of becoming Hokage."
  }
  return "I'm your anime assistant. Ask me for recommendations, character bios, or summaries!"
}
