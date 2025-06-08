"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface LogoProps {
  size?: "small" | "medium" | "large" | "xlarge" | "xxlarge"
  className?: string
  onClick?: () => void
}

export default function Logo({ size = "medium", className = "", onClick }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [lastClickTime, setLastClickTime] = useState(0)
  const [imgError, setImgError] = useState(false)

  // After mounting, we can safely show the logo based on theme
  useEffect(() => {
    setMounted(true)
  }, [])

  const sizes = {
    small: { width: 30, height: 30 },
    medium: { width: 60, height: 60 },
    large: { width: 120, height: 120 },
    xlarge: { width: 180, height: 180 },
    xxlarge: { width: 480, height: 480 },
  }

  const { width, height } = sizes[size]

  // Use the appropriate logo based on the theme
  const logoSrc = mounted && theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"

  // Use placeholder if there's an error or if not mounted
  const finalSrc = imgError || !mounted ? `/placeholder.svg?height=${height}&width=${width}` : logoSrc

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <Image
        src={finalSrc || "/placeholder.svg"}
        alt="Engagee Digital Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
        onError={() => setImgError(true)}
      />
    </div>
  )
}
