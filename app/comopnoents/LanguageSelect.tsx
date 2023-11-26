import { forwardRef } from "react"

interface Props {
  className?: string;
}

const LanguageSelect = forwardRef<HTMLSelectElement, Props>(({ className }, ref) => {
  return (
    <select ref={ref} className={`p-2 rounded-lg bg-gray-50 ${className}`}>
      <option value="">Language</option>
      <option value="English">English</option>
    </select>
  )
})

export default LanguageSelect
