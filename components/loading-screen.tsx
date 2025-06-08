"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isZooming, setIsZooming] = useState(false)
  const [shouldShow, setShouldShow] = useState(true)

  useEffect(() => {
    // Check if this is the initial load
    const hasLoaded = sessionStorage.getItem("hasLoaded")

    if (hasLoaded) {
      // If already loaded once in this session, don't show loading screen
      setShouldShow(false)
      setIsLoading(false)
      return
    }

    // Mark as loaded for future navigations
    sessionStorage.setItem("hasLoaded", "true")

    // Start progress animation
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsZooming(true)
            setTimeout(() => {
              setIsLoading(false)
            }, 1000) // Wait 1 second after zoom animation starts before hiding
          }, 500) // Wait half a second at 100% before starting zoom
          return 100
        }
        return prevProgress + 1
      })
    }, 50) // 50ms * 100 = ~5 seconds for the progress bar

    // Cleanup
    return () => clearInterval(interval)
  }, [])

  if (!isLoading || !shouldShow) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        isZooming ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div
        className={`relative flex flex-col items-center justify-center transition-all duration-1000 ${
          isZooming ? "scale-[5] opacity-0" : "scale-100"
        }`}
      >
        <div className="animate-pulse duration-1000">
          <Image
            src="/images/logo-white-transparent.png"
            alt="Engagee Digital Logo"
            width={200}
            height={200}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="relative mt-8 h-2 w-64 overflow-hidden rounded-full bg-gray-700">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Loading... {progress}%</p>
    </div>
  )
}
