"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface ContactDialogProps {
  buttonText: string
  buttonSize?: "default" | "sm" | "lg"
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  className?: string
}

export default function ContactDialog({
  buttonText,
  buttonSize = "lg",
  buttonVariant = "default",
  className = "",
}: ContactDialogProps) {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Update the handleSubmit function to send to Tanish's email
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real implementation, you would send this data to Tanish's email
    console.log(`Sending message to imtanish09@gmail.com:
    Email: ${email}
    Message: ${message}
  `)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail("")
        setMessage("")
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={buttonSize} variant={buttonVariant} className={className}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in Touch with Tanish</DialogTitle>
          <DialogDescription>Send a message to Tanish and he'll get back to you as soon as possible.</DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6">
            <div className="text-primary text-xl mb-2">✓</div>
            <p className="text-center">Thank you for your message! Tanish will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can Tanish help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
