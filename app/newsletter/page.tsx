"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MouseMoveEffect from "@/components/mouse-move-effect"

export default function Newsletter() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // Set mounted state to avoid hydration issues and scroll to top
  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Here you would send the email to your backend or newsletter service
      const emailConfig = {
        to_email: "engagee.business@gmail.com",
        subject: "Newsletter Subscription",
        message: `New newsletter subscription: ${email}`,
      }

      console.log("Sending email with config:", emailConfig)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setSubmitSuccess(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("There was an error subscribing to the newsletter. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Remove duplicate background elements since they're now in layout */}
      <MouseMoveEffect />

      <div className="relative z-10">
        <Navbar />

        <main className="container max-w-3xl py-16 md:py-24">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl">
              Get Free Growth Tactics Delivered Weekly
            </h1>
            <p className="text-lg text-muted-foreground">
              Want to scale your business smarter, faster, and with confidence?
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg border text-center animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <p className="text-lg mb-8">
              Subscribe to our free newsletter and get proven digital marketing strategies, growth hacks, and industry
              insights—straight to your inbox.
            </p>

            <p className="text-lg font-semibold mb-8">No fluff. Just actionable tactics to help your brand grow.</p>

            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>

              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md">
                  Thank you for subscribing! You'll receive our next newsletter soon.
                </div>
              )}

              {submitError && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
                  {submitError}
                </div>
              )}
            </form>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
