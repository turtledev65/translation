"use client";

import axios from "axios";
import { FormEvent, useRef, useState } from "react";
import LanguageSelect from "./comopnoents/LanguageSelect";

export default function Home() {
  const [translatedText, setTranslatedText] = useState("");
  const [translating, setTranslating] = useState(false);

  const sourceLanguageRef = useRef<HTMLSelectElement>(null);
  const targetLanguageRef = useRef<HTMLSelectElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleTranslate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const srcLanguage = sourceLanguageRef.current?.value;
    const targetLanguage = targetLanguageRef.current?.value;
    const text = textAreaRef.current?.value;

    if (srcLanguage && targetLanguage && text) {
      setTranslating(true);
      axios
        .post("/api/translate", {
          srcLanguage,
          targetLanguage,
          text
        })
        .then(res => setTranslatedText(res.data))
        .catch(err => console.log(err.message))
        .finally(() => setTranslating(false));
    }
  };

  return (
    <div className="h-screen p-5 ">
      <form
        className="flex h-full w-full flex-col items-center justify-center gap-5 lg:flex-row"
        onSubmit={handleTranslate}
      >
        <div className="w-full space-y-2">
          <LanguageSelect className="w-full" ref={sourceLanguageRef} />
          <textarea
            ref={textAreaRef}
            className="h-80 w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`rounded-md bg-blue-500 px-5 py-2 text-white ${
            translating && "bg-gray-500"
          }`}
          disabled={translating}
        >
          {translating ? "Translating..." : "Translate"}
        </button>
        <div className="w-full space-y-2">
          <LanguageSelect className="w-full" ref={targetLanguageRef} />
          <textarea
            className="h-80 w-full cursor-text resize-none rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 outline-none"
            disabled
            value={translatedText}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
