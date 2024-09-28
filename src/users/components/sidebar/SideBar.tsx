
import React from "react"
import { Logo } from "../../icon/Logo"
import { DarkModeBtn } from "./DarkModeBtn"
import { NavLinks } from "./NavLinks"

export const SideBar:React.FC = () => {
  return (
      <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-indigo-800 rounded-3xl">
        <a href="#"
           className="flex items-center justify-center h-12 w-12 bg-indigo-100 text-indigo-800 rounded-full">
          <Logo />
        </a>

        <NavLinks />

        <DarkModeBtn />
      </div>
  )
}
