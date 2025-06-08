import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-16 md:py-24 lg:py-32 text-center">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-transparent">
          <span className="block">We Help Businesses Generate</span>
          <span className="block">More Leads and Sales Through</span>
          <span className="block">Social Media Marketing</span>
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground text-base sm:text-lg md:text-xl sm:leading-8">
          Focused, transparent, and results-driven advertising that delivers measurable outcomes for your business.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg" asChild className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
          <Link href="/discovery-call">Scale Your Business Today</Link>
        </Button>
      </div>
    </section>
  )
}
