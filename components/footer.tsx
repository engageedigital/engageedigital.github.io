"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import Logo from "@/components/logo"

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()

  // Track if the logo was clicked and if we're at the top
  let lastLogoClickTime = 0

  const handleLogoClick = () => {
    const now = Date.now()
    const isDoubleClick = now - lastLogoClickTime < 500 // 500ms threshold for double click
    lastLogoClickTime = now

    if (pathname === "/" && window.scrollY === 0) {
      // If on home page and at the top, refresh the page
      window.location.reload()
    } else if (pathname === "/") {
      // If on home page but not at the top
      if (isDoubleClick) {
        // If double clicked, refresh the page
        window.location.reload()
      } else {
        // If single clicked, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } else {
      // If on another page
      if (window.scrollY === 0) {
        // If at the top, navigate to home
        router.push("/")
      } else if (isDoubleClick) {
        // If double clicked and not at the top, navigate to home
        router.push("/")
      } else {
        // If single clicked and not at the top, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center md:items-start md:w-3/4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Logo size="medium" className="cursor-pointer md:self-center -mt-9" onClick={handleLogoClick} />
              <div className="flex flex-col gap-4">
                <p className="text-sm text-muted-foreground max-w-2xl text-center md:text-left">
                  Empowering businesses to achieve sustainable growth through strategic, data-driven social media
                  marketing and advertising. We specialize in creating high-converting campaigns that deliver measurable
                  results and exceptional ROI for our clients. Our focused approach ensures that every dollar spent on
                  advertising contributes directly to your business growth, with complete transparency and
                  accountability at every step of the process.
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a
                    href="https://www.linkedin.com/company/engageedigital"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/engagee.digital/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 items-center md:items-end md:w-1/4">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-3 text-sm text-center md:text-right">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/case-study" className="text-muted-foreground transition-colors hover:text-primary">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal links in a single row with separators */}
      <div className="container border-t py-4">
        <div className="text-center text-sm text-muted-foreground mb-2">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/terms-of-service" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <span className="mx-2">|</span>
          <Link href="/earnings-disclaimer" className="hover:text-primary transition-colors">
            Earnings Disclaimer
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Engagee Digital. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
