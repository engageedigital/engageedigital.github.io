"use client"

import React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

// Define message type
type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function ChatBot() {
  const { theme } = useTheme()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [input, setInput] = useState("")
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "👋 Hi there! I'm ED, your digital marketing assistant. How can I help you today? I can tell you about our services, share case studies, or help you book a discovery call.",
    },
  ])
  const [showContactForm, setShowContactForm] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [lastActivity, setLastActivity] = useState(Date.now())
  const [apiError, setApiError] = useState<string | null>(null)
  const [isThinking, setIsThinking] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const promptTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])
  // Custom submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsThinking(true)
    setIsLoading(true)

    try {
      // Simulate thinking for at least 1 second
      const startTime = Date.now()
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      // Ensure thinking animation shows for at least 1 second
      const elapsedTime = Date.now() - startTime
      if (elapsedTime < 1000) {
        await new Promise((resolve) => setTimeout(resolve, 1000 - elapsedTime))
      }

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to get response")
      }

      const data = await response.json()

      // Add assistant message
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: data.text,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      setApiError("Sorry, there was an error connecting to ED. Please try again later.")
    } finally {
      setIsThinking(false)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen, showContactForm])

  // Initial prompt after 20 seconds
  useEffect(() => {
    if (!hasInteracted) {
      promptTimeoutRef.current = setTimeout(() => {
        setShowPrompt(true)
        setTimeout(() => {
          setShowPrompt(false)
        }, 5000)
      }, 20000)
    }

    return () => {
      if (promptTimeoutRef.current) {
        clearTimeout(promptTimeoutRef.current)
      }
    }
  }, [hasInteracted])

  // Track user activity
  useEffect(() => {
    const handleActivity = () => {
      setLastActivity(Date.now())
      setShowPrompt(false)
      setHasInteracted(true)

      if (promptTimeoutRef.current) {
        clearTimeout(promptTimeoutRef.current)
      }
    }

    window.addEventListener("mousemove", handleActivity)
    window.addEventListener("click", handleActivity)
    window.addEventListener("keypress", handleActivity)
    window.addEventListener("scroll", handleActivity)

    return () => {
      window.removeEventListener("mousemove", handleActivity)
      window.removeEventListener("click", handleActivity)
      window.removeEventListener("keypress", handleActivity)
      window.removeEventListener("scroll", handleActivity)
    }
  }, [])

  // Check for inactivity
  useEffect(() => {
    const checkInactivity = () => {
      const now = Date.now()
      if (now - lastActivity > 120000 && hasInteracted) {
        // 2 minutes
        setShowPrompt(true)
      }
    }

    inactivityTimeoutRef.current = setInterval(checkInactivity, 10000)

    return () => {
      if (inactivityTimeoutRef.current) {
        clearInterval(inactivityTimeoutRef.current)
      }
    }
  }, [lastActivity, hasInteracted])

  const toggleChat = () => {
    if (isOpen) {
      // Start closing animation
      setIsClosing(true)
      // Wait for animation to complete before actually closing
      setTimeout(() => {
        setIsOpen(false)
        setIsClosing(false)
        setShowContactForm(false)
      }, 300) // Match this with animation duration
    } else {
      setIsOpen(true)
      setShowPrompt(false)
      setHasInteracted(true)
      setApiError(null)
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would send this data to your backend
    console.log(`Sending message to engagee.business@gmail.com:
      Email: ${email}
      Message: ${message}
    `)

    alert(`Thank you! We'll get back to you at ${email} within 24 hours.`)
    setShowContactForm(false)
    setEmail("")
    setMessage("")
  }

  const handleCaseStudy = () => {
    // Navigate to case study page and close the chat
    setIsOpen(false)
    router.push("/case-study")
  }

  const handleBookCall = () => {
    setIsOpen(false)
    router.push("/discovery-call")
  }

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  // Function to retry if there's an error
  const handleRetry = () => {
    setApiError(null)
    // You could implement a retry mechanism here if needed
  }

  // Function to format message content with proper line breaks for bullet points
  const formatMessageContent = (content: string) => {
    return content.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < content.split("\n").length - 1 && <br />}
      </React.Fragment>
    ))
  }
  if (!mounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <AnimatePresence>
          {showPrompt && !isOpen && !isClosing && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.9, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className={cn(
                "absolute bottom-full right-full mb-2 mr-2 p-2 rounded-lg shadow-md text-sm max-w-[400px]",
                theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800",
              )}
            >
              <p className="leading-tight">Need Help? ED has got you covered!</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isOpen || isClosing ? (
            <motion.div
              key="chatbot"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <Card
                className={cn("w-80 sm:w-96 shadow-lg border-0", theme === "dark" ? "bg-gray-900 border-gray-800" : "")}
              >
                {/* Chatbot header with theme support */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex flex-row justify-between items-center rounded-t-lg">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8 bg-white overflow-hidden flex items-center justify-center">
                      <span className="text-lg font-bold text-indigo-600">ED</span>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">ED</h3>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-white/20">
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <AnimatePresence mode="wait">
                  {!showContactForm ? (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 1, height: "auto" }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className={theme === "dark" ? "text-gray-200" : ""}
                    >
                      <ScrollArea className={cn("h-[350px] p-4", theme === "dark" ? "bg-gray-900" : "")}>
                        <div className="space-y-4">
                          <AnimatePresence initial={false}>
                            {messages.map((message) => (
                              <motion.div
                                key={message.id}
                                initial="hidden"
                                animate="visible"
                                variants={messageVariants}
                                className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                              >
                                <div
                                  className={cn(
                                    "max-w-[80%] rounded-lg p-3",
                                    message.role === "user"
                                      ? "bg-indigo-600 text-white"
                                      : theme === "dark"
                                        ? "bg-gray-800 text-gray-200"
                                        : "bg-gray-100 text-gray-800",
                                  )}
                                >
                                  {formatMessageContent(message.content)}
                                </div>
                              </motion.div>
                            ))}
                          </AnimatePresence>

                          {/* Show typing indicator when loading or thinking */}
                          {(isLoading || isThinking) && (
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              variants={messageVariants}
                              className="flex justify-start"
                            >
                              <div
                                className={cn(
                                  "max-w-[80%] rounded-lg p-3",
                                  theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800",
                                )}
                              >
                                <div className="flex space-x-1">
                                  <div
                                    className={cn(
                                      "w-2 h-2 rounded-full animate-bounce",
                                      theme === "dark" ? "bg-gray-500" : "bg-gray-400",
                                    )}
                                    style={{ animationDelay: "0ms" }}
                                  ></div>
                                  <div
                                    className={cn(
                                      "w-2 h-2 rounded-full animate-bounce",
                                      theme === "dark" ? "bg-gray-500" : "bg-gray-400",
                                    )}
                                    style={{ animationDelay: "150ms" }}
                                  ></div>
                                  <div
                                    className={cn(
                                      "w-2 h-2 rounded-full animate-bounce",
                                      theme === "dark" ? "bg-gray-500" : "bg-gray-400",
                                    )}
                                    style={{ animationDelay: "300ms" }}
                                  ></div>
                                </div>
                              </div>
                            </motion.div>
                          )}

                          {/* Show error message if there's an API error */}
                          {apiError && (
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              variants={messageVariants}
                              className="flex justify-center"
                            >
                              <div
                                className={cn(
                                  "max-w-[90%] rounded-lg p-3 text-sm",
                                  theme === "dark" ? "bg-red-900 text-red-200" : "bg-red-50 text-red-500",
                                )}
                              >
                                <p>{apiError}</p>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className={cn(
                                    "mt-2 text-xs",
                                    theme === "dark" ? "border-red-700 text-red-200 hover:bg-red-800" : "",
                                  )}
                                  onClick={handleRetry}
                                >
                                  Try Again
                                </Button>
                              </div>
                            </motion.div>
                          )}

                          <div ref={messagesEndRef} />
                        </div>
                      </ScrollArea>

                      <div className={cn("p-3 border-t", theme === "dark" ? "border-gray-800 bg-gray-900" : "")}>
                        <div className="flex space-x-2 mb-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className={cn(
                              "text-xs flex items-center",
                              theme === "dark" ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200" : "",
                            )}
                            onClick={handleBookCall}
                          >
                            <Calendar className="h-3 w-3 mr-1" />
                            Book a Call
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className={cn(
                              "text-xs flex items-center",
                              theme === "dark" ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200" : "",
                            )}
                            onClick={handleCaseStudy}
                          >
                            <span className="h-3 w-3 mr-1">📄</span>
                            Case Study
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className={cn(
                              "text-xs flex items-center",
                              theme === "dark" ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200" : "",
                            )}
                            onClick={() => setShowContactForm(true)}
                          >
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Contact Us
                          </Button>
                        </div>
                      </div>

                      <div className={cn("p-3 pt-0", theme === "dark" ? "bg-gray-900" : "")}>
                        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
                          <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className={cn(
                              "flex-grow",
                              theme === "dark"
                                ? "bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500"
                                : "",
                            )}
                            disabled={isLoading || isThinking}
                          />
                          <Button
                            type="submit"
                            size="icon"
                            disabled={isLoading || isThinking}
                            className={theme === "dark" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </form>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className={cn("p-4", theme === "dark" ? "bg-gray-900 text-gray-200" : "")}
                    >
                      <h3 className="font-medium mb-2">Contact Our Team</h3>
                      <p className={cn("text-sm mb-4", theme === "dark" ? "text-gray-400" : "text-gray-500")}>
                        Leave your message and email, and we'll get back to you within 24 hours.
                      </p>
                      <form onSubmit={handleContactSubmit} className="space-y-3">
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className={
                            theme === "dark"
                              ? "bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500"
                              : ""
                          }
                        />
                        <textarea
                          className={cn(
                            "w-full p-2 border rounded-md text-sm",
                            theme === "dark"
                              ? "bg-gray-800 border-gray-700 text-gray-200 placeholder:text-gray-500"
                              : "",
                          )}
                          rows={4}
                          placeholder="Your message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                        <div className="flex space-x-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setShowContactForm(false)}
                            className={
                              theme === "dark" ? "border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-200" : ""
                            }
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className={theme === "dark" ? "bg-indigo-600 hover:bg-indigo-700" : ""}>
                            Send Message
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ) : (
            <motion.button
              key="chatButton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleChat}
              className={cn(
                "h-14 w-14 rounded-full shadow-lg",
                "bg-gradient-to-r from-purple-600 to-indigo-600",
                "flex items-center justify-center",
              )}
            >
              <MessageCircle className="h-6 w-6 text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
