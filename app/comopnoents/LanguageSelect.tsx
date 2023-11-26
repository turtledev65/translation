import { forwardRef } from "react"

interface Props {
  className?: string;
}

const languages = ["English", "French", "Romanian", "German", "Turkish", "Portuguese", "Spanish", "Russian"]

const LanguageSelect = forwardRef<HTMLSelectElement, Props>(({ className }, ref) => {
  return (
    <select ref={ref} defaultValue="" className={`p-2 rounded-lg bg-gray-50 ${className}`}>
      <option value="" disabled>Language</option>
      {languages.map(language => <option value={language} key={language}>{language}</option>)}
    </select>
  )
})

export default LanguageSelect
