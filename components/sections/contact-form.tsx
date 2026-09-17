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
          <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Operator_Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-border bg-black text-foreground focus:outline-none focus:border-primary transition-colors text-sm font-light"
            placeholder="NAME"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Return_Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-border bg-black text-foreground focus:outline-none focus:border-primary transition-colors text-sm font-light"
            placeholder="EMAIL@DOMAIN.COM"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Payload_Data</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full px-4 py-3 border border-border bg-black text-foreground focus:outline-none focus:border-primary transition-colors text-sm font-light resize-none"
          placeholder="ENTER MESSAGE CONTENT..."
        />
      </div>

      {error && <p className="text-xs font-mono text-red-500 uppercase tracking-widest">{error}</p>}
      {success && <p className="text-xs font-mono text-green-500 uppercase tracking-widest">Channel_Open: Email draft prepared.</p>}

      <button
        type="submit"
        disabled={sending}
        className="technical-button technical-button-active w-full md:w-auto"
      >
        {sending ? "EXECUTING..." : "TRANSMIT_MESSAGE"}
      </button>
    </form>
  )
}
