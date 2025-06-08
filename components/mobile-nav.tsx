"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import Logo from "@/components/logo"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const [lastLogoClickTime, setLastLogoClickTime] = useState(0)

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleLogoClick = () => {
    const now = Date.now()
    const isDoubleClick = now - lastLogoClickTime < 500 // 500ms threshold for double click
    setLastLogoClickTime(now)

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

  const scrollToSection = (id: string) => {
    setIsOpen(false)

    // If we're on the home page, scroll to the section
    if (pathname === "/") {
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
    } else {
      // If we're not on the home page, navigate to home and then scroll
      router.push(`/#${id}`)
    }
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container h-full flex flex-col">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center" onClick={handleLogoClick}>
              <Logo size="small" className="cursor-pointer" />
              <span className="font-bold ml-2">Engagee Digital</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 space-y-8 text-center bg-background/90 backdrop-blur-md rounded-lg p-6 mt-4">
            <button onClick={() => scrollToSection("what-we-do")} className="text-xl font-medium">
              Benefits
            </button>
            <button onClick={() => scrollToSection("how-we-do-it")} className="text-xl font-medium">
              Our Process
            </button>
            <Link href="/faq" className="text-xl font-medium">
              FAQ
            </Link>
            <Link href="/newsletter" className="text-xl font-medium">
              Newsletter
            </Link>
            <Link href="/about" className="text-xl font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-xl font-medium">
              Contact Us
            </Link>
            <Link href="/case-study" className="text-xl font-medium">
              Case Studies
            </Link>
            <div className="pt-4">
              <ThemeToggle />
            </div>
            <Button
              size="lg"
              onClick={() => {
                setIsOpen(false)
                router.push("/discovery-call")
              }}
              className="mt-4"
            >
              Schedule My FREE Call
            </Button>
          </nav>
        </div>
      </div>
    </div>
  )
}
