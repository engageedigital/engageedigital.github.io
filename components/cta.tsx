import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-t bg-primary/5">
      <div className="container flex flex-col items-center gap-4 py-16 md:py-24 lg:py-32 text-center px-4">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.1]">
          Ready to generate more leads and sales?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground text-base sm:text-lg md:text-xl sm:leading-8">
          Join businesses who trust Engagee Digital to drive their social media marketing and deliver measurable
          results.
        </p>
        <Button size="lg" className="mt-4 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base" asChild>
          <Link href="/discovery-call">Scale Your Business Today</Link>
        </Button>
      </div>
    </section>
  )
}
