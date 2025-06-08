"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import MouseMoveEffect from "@/components/mouse-move-effect"
// Remove this import since it's now in layout
// import BackgroundEffect from "@/components/background-effect"

export default function Home() {
  // Add page load animation and scroll to section if hash exists
  useEffect(() => {
    document.body.classList.add("animate-in", "fade-in", "duration-700")

    // Always scroll to top first
    window.scrollTo(0, 0)

    // Check if there's a hash in the URL and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          // Calculate offset to account for fixed navbar
          const navbarHeight = 64 // 4rem or 64px
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - navbarHeight - 20 // Extra 20px padding

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 500) // Delay to allow page to render
    }

    return () => {
      document.body.classList.remove("animate-in", "fade-in", "duration-700")
    }
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Remove duplicate background elements since they're now in layout */}
      <MouseMoveEffect />

      <div className="relative z-50">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
