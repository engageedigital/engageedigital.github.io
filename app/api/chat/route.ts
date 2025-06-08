import { NextResponse } from "next/server"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 })
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API key not configured" }, { status: 500 })
    }

    // Format the last user message
    const lastUserMessage = messages[messages.length - 1]
    if (lastUserMessage.role !== "user") {
      return NextResponse.json({ error: "Last message must be from user" }, { status: 400 })
    }

    // Update the prompt to suggest using the buttons in the chatbot interface

    const prompt = `You are ED, an AI assistant for a digital marketing agency called Engage Digital. Your primary goals are:

1. Guide users toward booking discovery calls
2. Answer questions about the agency's services based on website content
3. Suggest requesting the free case study when appropriate
4. Redirect users to relevant website sections (with their permission)

IMPORTANT INSTRUCTIONS:
- Keep your responses concise and conversational (2-3 short paragraphs maximum)
- Use simple formatting only (no markdown asterisks)
- If bullet points are needed, use proper line breaks and dashes (-)
- If the user's question can be answered with a case study example, suggest they click the Case Study button below
- NEVER say "click here" or "link to..." or "[link]" - instead refer to the buttons available in the chat interface
- Be friendly but professional

When users ask about services, provide a brief overview of what we do.
If users ask how the agency works, briefly explain the process and suggest checking out the case study using the button below.
If users ask about scheduling a call, suggest using the Book a Call button below.

If a user asks a question that's irrelevant to digital marketing or the agency (e.g., "What color is an apple?"), 
politely inform them that you're focused on helping with digital marketing inquiries and redirect the conversation.

Previous messages:
${messages
  .slice(0, -1)
  .map((m) => `${m.role}: ${m.content}`)
  .join("\n")}

User query: ${lastUserMessage.content}

Your response (remember to be concise and conversational):`

    // Make request to Gemini API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topP: 0.8,
            topK: 40,
            maxOutputTokens: 1024, // Reduced token limit for shorter responses
          },
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Gemini API error:", errorText)
      return NextResponse.json({ error: "Gemini API Error", detail: errorText }, { status: 500 })
    }

    // Parse the response
    const data = await response.json()

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
      console.error("Unexpected Gemini API response format:", JSON.stringify(data))
      return NextResponse.json({ error: "Invalid response format from Gemini API" }, { status: 500 })
    }

    // Get the text and clean up any markdown formatting issues
    let text = data.candidates[0].content.parts[0].text

    // Clean up formatting
    text = text
      .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold markdown
      .replace(/\*(.*?)\*/g, "$1") // Remove italic markdown
      .replace(/\n\s*\*\s*/g, "\n- ") // Convert * bullet points to - bullet points
      .replace(/\[link to.*?\]/gi, "") // Remove [link to...] text
      .replace(/\[.*?link.*?\]/gi, "") // Remove any other [something link something] text
      .replace(/you can request it here:/gi, "check out our case study button below.") // Replace request text
      .replace(/click here/gi, "use the buttons below") // Replace click here text

    // Return the response directly without streaming
    return NextResponse.json({ text })
  } catch (error: any) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error.message || "Unknown error",
        detail: error.stack || "No stack trace available",
      },
      { status: 500 },
    )
  }
}
