import inference from "@/app/huggingFace";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { text, srcLanguage, targetLanguage } = await request.json();
  if (!text.trim() || !srcLanguage.trim() || !targetLanguage.trim())
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });

  return inference
    .translation({
      model: "facebook/mbart-large-50-many-to-many-mmt",
      inputs: text,
      // @ts-ignore this is ok
      parameters: {
        src_lang: srcLanguage,
        tgt_lang: targetLanguage
      }
    })
    .then(res => NextResponse.json(res.translation_text))
    .catch(error =>
      NextResponse.json({ error: error.message }, { status: 400 })
    );
}
