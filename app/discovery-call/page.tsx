"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MouseMoveEffect from "@/components/mouse-move-effect"

export default function DiscoveryCall() {
  const [showForm, setShowForm] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companyNiche: "",
    companyWebsite: "",
    date: "",
    time: "",
  })

  // Set mounted state and scroll to top
  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  // Generate dates for the next 30 days
  const generateDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 0; i < 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      dates.push(formattedDate)
    }

    return dates
  }

  // Generate time slots from 12pm to 6pm IST in local time
  const generateTimeSlots = () => {
    const slots = []
    // Convert IST times to local time
    // IST is UTC+5:30
    const istOffset = 5.5 * 60 * 60 * 1000
    const localOffset = new Date().getTimezoneOffset() * 60 * 1000
    const difference = istOffset + localOffset

    // Start at 12pm IST
    let startTime = new Date()
    startTime.setHours(12, 0, 0, 0)
    startTime = new Date(startTime.getTime() + difference)

    // End at 6pm IST
    let endTime = new Date()
    endTime.setHours(18, 0, 0, 0)
    endTime = new Date(endTime.getTime() + difference)

    // Generate 30-minute slots
    let currentTime = new Date(startTime)
    while (currentTime <= endTime) {
      const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      slots.push(formattedTime)
      currentTime = new Date(currentTime.getTime() + 30 * 60 * 1000)
    }

    return slots
  }

  const dates = generateDates()
  const timeSlots = generateTimeSlots()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Here you would send the form data to your backend or email service
      const emailConfig = {
        to_email: "imtanish09@gmail.com", // This form goes to Tanish's personal email
        subject: "Discovery Call Request",
        message: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Company: ${formData.companyName}
        Niche: ${formData.companyNiche}
        Website: ${formData.companyWebsite}
        Preferred Date: ${formData.date}
        Preferred Time: ${formData.time}
      `,
      }

      console.log("Sending email with config:", emailConfig)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message
      setSubmitSuccess(true)

      // Reset form and hide it after a delay
      setTimeout(() => {
        setShowForm(false)
        setSubmitSuccess(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          companyNiche: "",
          companyWebsite: "",
          date: "",
          time: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitError("There was an error scheduling your call. Please try again.")
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

        <main className="container max-w-4xl py-16 md:py-24">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
              Book Your FREE 15-Minute Strategy Call
            </h1>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg border animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <p className="text-lg mb-6">
              Ready to unlock consistent, scalable growth for your business using high-converting funnels and paid
              advertising? During this no-obligation strategy call, we'll audit your current setup and provide you with
              a clear, actionable roadmap to increase your revenue online — even if you're starting from scratch.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Here's what you'll walk away with:</h2>
            <ul className="space-y-3 mb-8 list-disc pl-6">
              <li className="text-lg">Clarity on the bottlenecks holding your business back from scaling online.</li>
              <li className="text-lg">
                A custom game plan for turning your website (or lack thereof) into a sales-generating funnel.
              </li>
              <li className="text-lg">
                Key insights into how paid ads and conversion rate optimization can unlock predictable revenue growth.
              </li>
              <li className="text-lg">Recommendations tailored to your business model and goals.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">This call is perfect for:</h2>
            <ul className="space-y-3 mb-8 list-disc pl-6">
              <li className="text-lg">
                Businesses looking to transform their website into a streamlined, high-converting sales funnel.
              </li>
              <li className="text-lg">
                Entrepreneurs wanting to bring their offline business online with a solid digital strategy.
              </li>
              <li className="text-lg">
                Brands aiming to boost their ROI through strategic funnel design and advertising.
              </li>
              <li className="text-lg">
                Companies seeking a committed, results-driven marketing partner that treats their business like its own.
              </li>
            </ul>

            <p className="text-lg mb-8">
              👉 Spots are limited — book your call on Tanish's calendar today. We're excited to learn more about your
              business and help you move forward with confidence.
            </p>

            <div className="text-center">
              {!showForm ? (
                <Button
                  size="lg"
                  className="px-8 py-6 text-lg animate-in fade-in slide-in-from-bottom duration-700 delay-200"
                  onClick={() => setShowForm(true)}
                >
                  Book Your Free Call Now
                </Button>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto text-left animate-in fade-in slide-in-from-bottom duration-700"
                >
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="companyNiche">Company Niche</Label>
                      <Input
                        id="companyNiche"
                        name="companyNiche"
                        value={formData.companyNiche}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="companyWebsite">Company Website (Optional)</Label>
                      <Input
                        id="companyWebsite"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Select onValueChange={(value) => handleSelectChange("date", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a date" />
                        </SelectTrigger>
                        <SelectContent>
                          {dates.map((date, index) => (
                            <SelectItem key={index} value={date}>
                              {date}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select onValueChange={(value) => handleSelectChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time, index) => (
                            <SelectItem key={index} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {submitSuccess && (
                      <div className="p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md">
                        Thank you! Your call has been scheduled. We'll send you a confirmation email shortly.
                      </div>
                    )}

                    {submitError && (
                      <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
                        {submitError}
                      </div>
                    )}

                    <div className="pt-4 flex gap-4">
                      <Button type="submit" className="flex-1 animate-in fade-in duration-500" disabled={isSubmitting}>
                        {isSubmitting ? "Scheduling..." : "Schedule My Call"}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="flex-1">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
