"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${theme === "dark" ? "text-muted-foreground" : "text-foreground"}`}
      />
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} aria-label="Toggle theme" />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${theme === "light" ? "text-muted-foreground" : "text-foreground"}`}
      />
    </div>
  )
}
