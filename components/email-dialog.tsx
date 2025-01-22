'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

interface EmailDialogProps {
  trigger: React.ReactNode
  subject: string
  body: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export function EmailDialog({ trigger, subject, body }: EmailDialogProps) {
  const [email, setEmail] = useState("")
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage("")
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'seancorcoran45@gmail.com',
          from: email,
          subject,
          body: `From: ${email}\n\n${body}`
        }),
      })

      if (response.ok) {
        setStatus('success')
        setTimeout(() => {
          setOpen(false)
          setEmail("")
          setStatus('idle')
        }, 2500)
      } else {
        throw new Error('Failed to send email')
      }
    } catch {
      setStatus('error')
      setErrorMessage("Sorry, something went wrong. Please try again or email me directly at seancorcoran45@gmail.com")
    }
  }

  const statusDisplay = {
    idle: null,
    loading: <Loader2 className="h-5 w-5 animate-spin" />,
    success: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>We&apos;ll be in touch soon</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Your email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            disabled={status === 'loading' || status === 'success'}
          />
          <div className="space-y-2">
            <Button 
              type="submit" 
              className="w-full"
              disabled={status === 'loading' || status === 'success'}
            >
              <span className="flex items-center gap-2">
                Send
                {statusDisplay[status]}
              </span>
            </Button>
            {status === 'error' && (
              <p className="text-sm text-red-500 text-center">
                {errorMessage}
              </p>
            )}
            {status === 'success' && (
              <p className="text-sm text-green-500 text-center">
                Thanks! We&apos;ll be in touch soon.
              </p>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
} 