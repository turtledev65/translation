"use client"


export default function Home() {
  return (
    <div className="h-screen p-5 ">
      <form className="w-full h-full gap-5 flex flex-col lg:flex-row items-center justify-center" >
        <div className="w-full space-y-2">
          <select className="w-full p-2 rounded-lg bg-gray-50">
            <option value={"English"}>Language</option>
          </select>
          <textarea className="w-full h-80 bg-gray-50 rounded-lg border border-gray-300 outline-none p-3 text-gray-900 resize-none">HI</textarea>
        </div>
        <button type="submit" className=" py-2 px-5 bg-cyan-100 rounded-md">Translate</button>
        <div className="w-full space-y-2">
          <select className="w-full p-2 rounded-lg bg-gray-50">
            <option value={"English"}>Language</option>
          </select>
          <textarea className="w-full h-80 bg-gray-50 rounded-lg border border-gray-300 outline-none p-3 text-gray-900 resize-none">HI</textarea>
        </div>
      </form>
    </div>
  )
}
