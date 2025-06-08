"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Features() {
  const whatWeDoRef = useRef<HTMLDivElement>(null)
  const howWeDoItRef = useRef<HTMLDivElement>(null)

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Calculate offset to account for fixed navbar
      const navbarHeight = 56 // 3.5rem or 56px
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight - 20 // Extra 20px padding

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Set up scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const id = anchor.getAttribute("href")?.substring(1)
        if (id) scrollToSection(id)
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <section className="container space-y-16 py-24 md:py-32">
      {/* Add padding-top to account for fixed navbar */}
      <div className="mx-auto max-w-[58rem] text-center pt-16 -mt-16 border-t" id="what-we-do" ref={whatWeDoRef}>
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl animate-in fade-in slide-in-from-bottom duration-700">
          What We Do For Your Business?
        </h2>
        <p className="mt-4 text-xl font-bold text-primary sm:text-2xl animate-in fade-in slide-in-from-bottom duration-700 delay-100">
          Ads. Just Ads.
        </p>
      </div>

      <div className="mx-auto max-w-5xl text-center animate-in fade-in slide-in-from-bottom duration-700 delay-200">
        <p className="text-lg mb-8">
          We specialize in one thing and do it with unmatched focus and expertise. If you're looking for a full-service
          agency that dabbles in everything without delivering real results, we're not the right fit.
        </p>
        <p className="text-lg mb-8">
          But if you want an agency that lets you see exactly what was spent, what was earned, and your net profit—all
          in just two clicks—we're exactly what you're looking for.
        </p>

        <div className="pt-16 mt-16 border-t">
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-6 animate-in fade-in slide-in-from-bottom duration-700">
              Our Philosophy
            </h2>
          </div>
          <p className="text-lg mb-6">
            At Engagee Digital, we're dedicated to delivering results through focused and effective advertising. We
            streamline processes and avoid the inefficiencies that can slow down other agencies.
          </p>
          <p className="text-lg mb-6">We partner with clients who value transparency and measurable outcomes.</p>
          <p className="text-lg mb-8">
            If that sounds like you, we'd love to learn more. Schedule your FREE discovery call below.
          </p>
        </div>

        {/* Add proper spacing between sections with clear separation */}
        <div className="mt-16 border-t pt-16" id="how-we-do-it" ref={howWeDoItRef}>
          <div className="mx-auto max-w-[58rem] text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl mb-6 animate-in fade-in slide-in-from-bottom duration-700">
              How We Do It
            </h2>
          </div>
          <p className="text-lg mb-6">
            Our skilled media buying team is here to manage your advertising campaigns across the platforms that best
            suit your business goals. Whether it's Facebook, Instagram, Snapchat, Pinterest, TikTok, Taboola, Outbrain,
            or others, we ensure every ad dollar is spent strategically to maximize impact and return.
          </p>
          <p className="text-lg mb-8">
            We take the time to understand your audience, select the most effective platforms, and craft campaigns that
            drive measurable results. From targeting and budgeting to optimization and performance tracking, we handle
            every aspect of the process to deliver exceptional outcomes tailored to your business needs.
          </p>

          <Button size="lg" asChild className="mt-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <Link href="/case-study">View Our Case Study</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
