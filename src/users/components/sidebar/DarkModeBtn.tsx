import React from "react"
import { DarkMode } from "../../icon/DarkMode"

export const DarkModeBtn:React.FC = () => {
  return (
    <>
        <button className="mt-auto flex items-center justify-center hover:text-indigo-100 text-indigo-500 h-10 w-10">
          <DarkMode />
        </button>
    </>
  )
}
