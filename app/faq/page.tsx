"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Minus } from "lucide-react"
import MouseMoveEffect from "@/components/mouse-move-effect"

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  // Set mounted state to avoid hydration issues and scroll to top
  useEffect(() => {
    setMounted(true)
    window.scrollTo(0, 0)

    if (mounted) {
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
    }
  }, [mounted])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs: FAQItem[] = [
    {
      question: "What makes Engagee Digital different from other marketing agencies?",
      answer:
        "Unlike agencies that spread themselves thin across multiple services, we focus exclusively on paid advertising. This specialization allows us to develop deep expertise and deliver exceptional results in our area of focus. We also provide complete transparency, showing you exactly what was spent, what was earned, and your net profit.",
    },
    {
      question: "Which social media platforms do you work with?",
      answer:
        "We work with all major advertising platforms including Facebook, Instagram, TikTok, Snapchat, Pinterest, LinkedIn, Google Ads, YouTube, Taboola, and Outbrain. We select the platforms that best align with your business goals and target audience.",
    },
    {
      question: "How much do I need to spend on advertising?",
      answer:
        "Advertising budgets vary based on your business goals, industry, and target audience. During our discovery call, we'll discuss your objectives and recommend an appropriate budget that balances reach with return on investment. We're focused on generating positive ROI regardless of budget size.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "While some clients see initial results within days, building a consistently profitable advertising campaign typically takes 4-8 weeks. This timeline allows for proper testing, optimization, and scaling. We focus on sustainable long-term growth rather than quick but temporary wins.",
    },
    {
      question: "Do you require long-term contracts?",
      answer:
        "No, we don't lock clients into lengthy contracts. We operate on a month-to-month basis because we believe our results should earn your continued business. That said, the most successful advertising campaigns are those given sufficient time to optimize and scale.",
    },
    {
      question: "How do you measure and report on campaign performance?",
      answer:
        "We provide comprehensive, transparent reporting that shows exactly what was spent, what was earned, and your net profit. Our reports include key metrics like ROAS (Return on Ad Spend), CPA (Cost Per Acquisition), and conversion rates. We also offer real-time dashboards so you can monitor performance anytime.",
    },
    {
      question: "Will I need to create my own ad content?",
      answer:
        "While we can work with your existing creative assets, we also offer guidance on ad creative development. We can advise on what types of content perform best for your specific goals and audience, helping you create high-converting ads.",
    },
    {
      question: "Is my business a good fit for your services?",
      answer:
        "We work best with businesses that have a clear product or service offering, a defined target audience, and are committed to growth. Our approach is particularly effective for e-commerce, info products, SaaS, and service-based businesses. The best way to determine fit is through our free discovery call.",
    },
    {
      question: "How involved will I need to be in the advertising process?",
      answer:
        "After the initial onboarding and strategy development, our goal is to minimize the time you need to spend on advertising. We handle the day-to-day management, optimization, and reporting. We'll check in regularly to discuss performance and strategy, but the heavy lifting is done by our team.",
    },
    {
      question: "What happens during the free discovery call?",
      answer:
        "During the 15-minute call, we'll discuss your business goals, current marketing efforts, and challenges. We'll audit your current setup and provide initial recommendations. By the end of the call, you'll have a clearer understanding of how our approach can help your business and what next steps might look like.",
    },
  ]

  return (
    <div className="relative min-h-screen">
      {/* Remove duplicate background elements since they're now in layout */}
      <MouseMoveEffect />

      <div className="relative z-10">
        <Navbar />

        <main className="container max-w-3xl py-16 md:py-24">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">Everything you need to know about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden animate-on-scroll ${
                  openIndex === index ? "bg-card/50" : ""
                }`}
                style={{ opacity: mounted ? "1" : "0", transitionDelay: `${index * 50}ms` }}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-medium text-lg">{faq.question}</h3>
                  <div className="transition-transform duration-300">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-primary" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 p-4" : "max-h-0"
                  }`}
                >
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-on-scroll" style={{ opacity: mounted ? "1" : "0" }}>
            <p className="mb-6 text-lg">Still have questions? We're here to help.</p>
            <Button size="lg" asChild>
              <Link href="/discovery-call">Schedule Your Free Call</Link>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
