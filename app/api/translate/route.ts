import inference from "@/app/huggingFace";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { text, srcLanguage, targetLanguage } = await request.json()
  if (!text.trim() || !srcLanguage.trim() || !targetLanguage.trim()) return NextResponse.json({ error: "Invalid request" }, { status: 400 })

  return inference.translation({ model: "t5-large", inputs: `translate ${srcLanguage} to ${targetLanguage}:  ${text}` })
    .then(res => NextResponse.json(res.translation_text))
    .catch(error => NextResponse.json({ error: error.message }, { status: 400 }))
}
