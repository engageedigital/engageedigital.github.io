"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"
import Logo from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import MobileNav from "@/components/mobile-nav"

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [lastLogoClickTime, setLastLogoClickTime] = useState(0)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  // Define navigation items
  const navItems = [
    { id: "what-we-do", label: "Benefits", isSection: true },
    { id: "how-we-do-it", label: "Our Process", isSection: true },
    { id: "faq", label: "FAQ", isSection: false, href: "/faq" },
    { id: "newsletter", label: "Newsletter", isSection: false, href: "/newsletter" },
  ]

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Only check sections on home page
      if (pathname === "/") {
        // Check if we're in a section
        const whatWeDoSection = document.getElementById("what-we-do")
        const howWeDoItSection = document.getElementById("how-we-do-it")

        if (whatWeDoSection && howWeDoItSection) {
          const whatWeDoTop = whatWeDoSection.getBoundingClientRect().top
          const whatWeDoBottom = whatWeDoSection.getBoundingClientRect().bottom
          const howWeDoItTop = howWeDoItSection.getBoundingClientRect().top
          const howWeDoItBottom = howWeDoItSection.getBoundingClientRect().bottom

          const navbarHeight = 64 // 4rem or 64px

          if (whatWeDoTop <= navbarHeight && whatWeDoBottom > navbarHeight) {
            setActiveSection("what-we-do")
          } else if (howWeDoItTop <= navbarHeight && howWeDoItBottom > navbarHeight) {
            setActiveSection("how-we-do-it")
          } else {
            setActiveSection(null)
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Set active section based on current path
  useEffect(() => {
    if (pathname !== "/") {
      // Remove the leading slash to get the section name
      const section = pathname.substring(1)
      setActiveSection(section)
    } else {
      setActiveSection(null)
    }
  }, [pathname])

  const scrollToSection = (id: string) => {
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

        setActiveSection(id)
      }
    } else {
      // If we're not on the home page, navigate to home with hash
      router.push(`/#${id}`)
    }
  }

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

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex h-16 max-w-screen-2xl items-center px-3 sm:px-4 mx-auto w-full">
        <div className="flex items-center mr-6">
          <div className="flex items-center">
            <Logo size="small" className="cursor-pointer" onClick={handleLogoClick} />
            <Link
              href="/"
              className="font-bold ml-2"
              onClick={(e) => {
                e.preventDefault()
                handleLogoClick()
              }}
            >
              Engagee Digital
            </Link>
          </div>
        </div>
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.isSection ? (
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors py-1 ${
                    activeSection === item.id ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  href={item.href || "/"}
                  className={`transition-colors py-1 ${
                    activeSection === item.id ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )}

              {/* Hover indicator */}
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-muted-foreground transform origin-left transition-transform duration-300 ease-out ${
                  hoveredItem === item.id && activeSection !== item.id ? "scale-x-100" : "scale-x-0"
                }`}
              />

              {/* Active indicator */}
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ease-out ${
                  activeSection === item.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </div>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <ThemeToggle />
          <Button
            size="sm"
            onClick={() => router.push("/discovery-call")}
            className={`bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-400 focus:outline-none shadow-md animate-in fade-in slide-in-from-right duration-500 ${mounted ? "" : "opacity-0"}`}
          >
            Schedule My FREE Call
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex ml-auto md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
