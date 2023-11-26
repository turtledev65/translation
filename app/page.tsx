"use client"

import axios from "axios"
import { FormEvent, useRef, useState } from "react"
import LanguageSelect from "./comopnoents/LanguageSelect"


export default function Home() {
  const [translatedText, setTranslatedText] = useState("")
  const [translating, setTranslating] = useState(false)

  const sourceLanguageRef = useRef<HTMLSelectElement>(null)
  const targetLanguageRef = useRef<HTMLSelectElement>(null)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const handleTranslate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const srcLanguage = sourceLanguageRef.current?.value;
    const targetLanguage = targetLanguageRef.current?.value;
    const text = textAreaRef.current?.value;

    if (srcLanguage && targetLanguage && text) {
      setTranslating(true)
      axios.post("/api/translate", {
        srcLanguage,
        targetLanguage,
        text
      }).then(res => setTranslatedText(res.data))
        .catch(err => console.log(err.message))
        .finally(() => setTranslating(false))
    }
  }


  return (
    <div className="h-screen p-5 ">
      <form className="w-full h-full gap-5 flex flex-col lg:flex-row items-center justify-center" onSubmit={handleTranslate}>
        <div className="w-full space-y-2">
          <LanguageSelect className="w-full" ref={sourceLanguageRef} />
          <textarea ref={textAreaRef} className="w-full h-80 bg-gray-50 rounded-lg border border-gray-300 outline-none p-3 text-gray-900 resize-none"></textarea>
        </div>
        <button type="submit" className={`py-2 px-5 bg-blue-500 text-white rounded-md ${translating && "bg-gray-500"}`} disabled={translating}>{translating ? "Translating..." : "Translate"}</button>
        <div className="w-full space-y-2">
          <LanguageSelect className="w-full" ref={targetLanguageRef} />
          <textarea className="w-full h-80 bg-gray-50 rounded-lg border border-gray-300 outline-none p-3 text-gray-900 resize-none cursor-text" disabled value={translatedText}></textarea>
        </div>
      </form>
    </div>
  )
}
