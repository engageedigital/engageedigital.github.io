"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import MouseMoveEffect from "@/components/mouse-move-effect"

export default function CaseStudy() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Here you would send the email to your backend
      const emailConfig = {
        to_email: "engagee.business@gmail.com",
        subject: "Case Study Request",
        message: `New case study request from: ${email}`,
      }

      console.log("Sending email with config:", emailConfig)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setSubmitSuccess(true)

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("There was an error processing your request. Please try again.")
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

        <main className="container py-16 md:py-24">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Free Case Study</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How Our Agency Is Helping Modern Digital Brands, Info Products & E-commerce Businesses Scale Rapidly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video w-full bg-black rounded-lg overflow-hidden animate-in fade-in slide-in-from-left duration-700 delay-100">
              {/* Video embed placeholder with 16:9 aspect ratio */}
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                <p>Case Study Video</p>
              </div>
            </div>

            <Card className="p-6 animate-in fade-in slide-in-from-right duration-700 delay-100 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-4">Discover:</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>Our proven methods for generating exceptional return on investment for our clients</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>How to create a powerful brand presence that outshines your competition</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>The importance of optimizing your sales process before scaling your traffic</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-2">Enter your email to access the full case study:</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  {submitSuccess && (
                    <div className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md">
                      Thank you! Your case study has been sent to your email.
                    </div>
                  )}

                  {submitError && (
                    <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
                      {submitError}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full animate-in fade-in slide-in-from-bottom duration-500 delay-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Give Me My Free Case Study!"}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
