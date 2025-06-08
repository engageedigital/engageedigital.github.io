import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import LoadingScreen from "@/components/loading-screen"
import ChatBot from "@/components/chatbot"
import BackgroundEffect from "@/components/background-effect"

export const metadata: Metadata = {
  title: "Engagee Digital",
  description: "Helping businesses generate more leads and sales through social media marketing.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LoadingScreen />
          <div className="pointer-events-none fixed inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
            <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
          </div>
          <BackgroundEffect />
          {children}
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  )
}
