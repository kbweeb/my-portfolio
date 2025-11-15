"use client"

import { useEffect, useMemo, useState } from "react"

type Tx = { id: string; type: "deposit" | "withdraw" | "transfer"; amount: number; note?: string; date: string }
type Account = { username: string; balance: number; txs: Tx[] }

const STORAGE_KEY = "demo_encrypted_bank_accounts_v1"

function loadAccounts(): Record<string, Account> {
  if (typeof window === "undefined") return {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, Account>) : {}
  } catch {
    return {}
  }
}

function saveAccounts(db: Record<string, Account>) {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db))
}

export default function EncryptedBankDemo() {
  const [db, setDb] = useState<Record<string, Account>>({})
  const [current, setCurrent] = useState<string>("")
  const [username, setUsername] = useState("")
  const [amount, setAmount] = useState<string>("")
  const [note, setNote] = useState<string>("")

  useEffect(() => setDb(loadAccounts()), [])

  useEffect(() => {
    saveAccounts(db)
  }, [db])

  const acct = useMemo(() => (current ? db[current] : undefined), [db, current])

  const createOrLogin = () => {
    if (!username.trim()) return
    setDb((prev) => {
      if (!prev[username]) {
        return { ...prev, [username]: { username, balance: 0, txs: [] } }
      }
      return prev
    })
    setCurrent(username)
  }

  const deposit = () => {
    const val = Number(amount)
    if (!acct || !Number.isFinite(val) || val <= 0) return
    setDb((prev) => {
      const next = { ...prev }
      const a = next[acct.username]
      a.balance += val
      a.txs.unshift({ id: crypto.randomUUID(), type: "deposit", amount: val, note, date: new Date().toISOString() })
      return next
    })
    setAmount("")
    setNote("")
  }

  const withdraw = () => {
    const val = Number(amount)
    if (!acct || !Number.isFinite(val) || val <= 0 || val > acct.balance) return
    setDb((prev) => {
      const next = { ...prev }
      const a = next[acct.username]
      a.balance -= val
      a.txs.unshift({ id: crypto.randomUUID(), type: "withdraw", amount: val, note, date: new Date().toISOString() })
      return next
    })
    setAmount("")
    setNote("")
  }

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="px-6 md:px-16 py-10 md:py-16 max-w-5xl mx-auto">
        <button onClick={() => (window.location.hash = "projects")} className="text-primary hover:text-primary/80">← Back</button>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">Encrypted Bank System — Demo</h1>
        <p className="text-sm text-muted-foreground mt-2">In-browser prototype: create an account, then deposit/withdraw. Data stored locally.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="p-5 rounded-lg border border-border bg-secondary/50">
            <h2 className="font-semibold mb-3">Login / Create Account</h2>
            <div className="flex gap-2">
              <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" className="flex-1 px-3 py-2 bg-background border border-border rounded" />
              <button onClick={createOrLogin} className="px-3 py-2 bg-primary text-background rounded">Enter</button>
            </div>

            {acct && (
              <div className="mt-5 space-y-2 text-sm">
                <div><span className="text-muted-foreground">Account:</span> <span className="font-medium">{acct.username}</span></div>
                <div><span className="text-muted-foreground">Balance:</span> <span className="font-semibold">GHS {acct.balance.toFixed(2)}</span></div>
              </div>
            )}
          </div>

          <div className="p-5 rounded-lg border border-border bg-secondary/50">
            <h2 className="font-semibold mb-3">Transaction</h2>
            <div className="flex flex-col gap-2">
              <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" min="0" placeholder="amount" className="px-3 py-2 bg-background border border-border rounded" />
              <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="note (optional)" className="px-3 py-2 bg-background border border-border rounded" />
              <div className="flex gap-2">
                <button onClick={deposit} className="px-3 py-2 bg-primary text-background rounded">Deposit</button>
                <button onClick={withdraw} className="px-3 py-2 bg-primary/70 text-background rounded">Withdraw</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-5 rounded-lg border border-border bg-secondary/50">
          <h2 className="font-semibold mb-3">Transactions</h2>
          {!acct ? (
            <p className="text-sm text-muted-foreground">No account selected.</p>
          ) : acct.txs.length === 0 ? (
            <p className="text-sm text-muted-foreground">No transactions yet.</p>
          ) : (
            <div className="space-y-2">
              {acct.txs.map((t) => (
                <div key={t.id} className="flex justify-between text-sm border border-border rounded px-3 py-2 bg-background">
                  <div className="flex gap-2">
                    <span className="uppercase font-semibold">{t.type}</span>
                    <span className="text-muted-foreground">{t.note}</span>
                  </div>
                  <div className="font-medium">GHS {t.amount.toFixed(2)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
