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
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-none border border-border bg-secondary/20 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
            placeholder="OPERATOR NAME"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-none border border-border bg-secondary/20 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors"
            placeholder="CONTACT@SECURE.NET"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-none border border-border bg-secondary/20 text-foreground font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="ENTER TRANSMISSION DETAILS..."
        />
      </div>

      {error && <p className="text-[10px] font-mono text-primary uppercase tracking-widest">{error}</p>}
      {success && <p className="text-[10px] font-mono text-green-500 uppercase tracking-widest">TRANSMISSION READY IN BUFFER.</p>}

      <button
        type="submit"
        disabled={sending}
        className="w-full sm:w-auto inline-flex items-center justify-center bg-primary px-8 py-3 text-primary-foreground font-mono text-xs tracking-widest uppercase hover:bg-primary/90 disabled:opacity-60 transition-all"
      >
        {sending ? "BUFFERING…" : "Initialize Transmission"}
      </button>
    </form>
  )
}
