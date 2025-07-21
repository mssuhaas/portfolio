import { NextResponse } from "next/server"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = formSchema.parse(body)

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID!

    const message = `
📬 *New Contact Form Message*
👤 Name: ${data.name}
📧 Email: ${data.email}
📝 Subject: ${data.subject}

💬 Message:
${data.message}
    `.trim()

    const telegramRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    })

    if (!telegramRes.ok) {
      return NextResponse.json({ error: "Failed to send Telegram message." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Invalid form data." }, { status: 400 })
  }
}
