"use client"

import { useState } from "react"

interface ContactFormProps {
  toEmail: string
}

export default function ContactForm({ toEmail }: ContactFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email and message.")
      return
    }

    setSending(true)
    try {
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        toEmail
      )}&su=${subject}&body=${body}`
      // Open Gmail compose in new tab
      const win = window.open(gmailUrl, "_blank")
      if (!win) {
        // Fallback to mailto if popup blocked
        window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`
      }
      setSuccess(true)
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      console.error(err)
      setError("Could not open your email client. Please try again.")
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="Enter your name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm text-muted-foreground">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full px-3 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Write your message..."
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}
      {success && <p className="text-sm text-green-500">Your email draft is ready in a new tab.</p>}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
      >
        {sending ? "Opening…" : "Send Message"}
      </button>
    </form>
  )
}
