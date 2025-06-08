"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Logo from "@/components/logo"
import ContactDialog from "@/components/contact-dialog"
import MouseMoveEffect from "@/components/mouse-move-effect"
import Image from "next/image"

export default function About() {
  const [mounted, setMounted] = useState(false)

  // Set mounted state to avoid hydration issues and scroll to top
  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom", "duration-700")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [mounted])

  return (
    <div className="relative min-h-screen">
      {/* Remove duplicate background elements since they're now in layout */}
      <MouseMoveEffect />

      <div className="relative z-10">
        <Navbar />

        <main className="container max-w-4xl py-16 md:py-24">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl text-foreground">
              About Engagee Digital
            </h1>
            <p className="text-xl text-muted-foreground">Our story, mission, and the people behind the results</p>
          </div>

          <div className="space-y-12">
            <section className="animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="relative">
                {/* Logo floated to the right */}
                <div className="float-right ml-6 mb-4 w-64 h-64 flex-shrink-0 animate-in fade-in duration-700 delay-300">
                  <Logo size="xxlarge" className="w-full h-full" />
                </div>

                <div className="text-lg text-foreground space-y-4">
                  <p>
                    Engagee Digital began as a passion project in 2022 when Tanish Chhabra, then a first-year
                    Information Technology student, noticed a significant gap in the digital marketing landscape. While
                    most agencies were offering a wide range of services with mediocre results, Tanish envisioned a
                    specialized agency that would excel in one critical area: generating measurable returns through
                    strategic paid advertising.
                  </p>
                  <p>
                    Starting with just a laptop and a determination to prove his concept, Tanish began working with
                    small local businesses, demonstrating how focused, data-driven advertising could transform their
                    online presence. The results spoke for themselves, and through word-of-mouth, what began as a side
                    project quickly grew into a full-fledged agency with a clear mission: to deliver transparent,
                    results-focused advertising that clients could actually measure.
                  </p>
                  <p>
                    In 2022, while juggling his studies, Tanish launched Engagee Digital with a revolutionary approach:
                    focus exclusively on what drives real business results—paid advertising that generates measurable
                    returns. His vision was to create an agency that valued transparency above all else, where clients
                    could see exactly what they were spending and exactly what they were earning.
                  </p>
                  <p>
                    What began as a one-person operation driven by passion and technical expertise has grown into a
                    specialized team of media buying experts who share Tanish's philosophy: do one thing exceptionally
                    well rather than many things adequately.
                  </p>
                </div>

                {/* Clear float */}
                <div className="clear-both"></div>
              </div>
            </section>

            <section className="animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-lg mb-4 text-foreground">
                At Engagee Digital, our mission is simple: to help businesses generate more leads and sales through
                focused, transparent, and results-driven social media advertising. We believe in cutting through the
                noise and delivering what matters most—real, measurable outcomes that impact your bottom line.
              </p>
              <p className="text-lg text-foreground">
                We're committed to maintaining complete transparency in our processes and results, ensuring our clients
                always know exactly what they're getting for their investment.
              </p>
            </section>

            <section className="animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Meet Tanish</h2>
              <div className="bg-card rounded-lg p-6 border flex flex-col md:flex-row gap-6 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/tanish-photo.jpg"
                    alt="Tanish Chhabra - Founder & CEO"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Tanish Chhabra</h3>
                  <p className="text-muted-foreground mb-2">Founder & CEO</p>
                  <p className="mb-4 text-foreground">
                    At just 19 years old, Tanish is revolutionizing the digital marketing landscape. As an Information
                    Technology student from India, he combines technical expertise with marketing acumen to deliver
                    exceptional results for clients. His data-driven approach and commitment to transparency have
                    established him as a rising star in the industry.
                  </p>
                  <p className="text-foreground">
                    "I founded Engagee Digital with a simple premise: businesses deserve better than vague promises and
                    mediocre results. They deserve an agency that's fully accountable and focused on delivering real,
                    measurable growth."
                  </p>
                </div>
              </div>
            </section>

            <div className="text-center pt-8 animate-on-scroll opacity-0">
              <ContactDialog buttonText="Get in Touch with Tanish" />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
