import React from "react"
import { Home } from "../../icon/Home"
import { Journal } from "../../icon/Journal"
import { Message } from "../../icon/Message"
import { Parametre } from "../../icon/Parametre"
import { NavLink } from "./NavLink"

export const NavLinks:React.FC = () => {
  return (
    <>
    <ul className="flex flex-col space-y-2 mt-12">
          <NavLink
            icon={<Home/>}
            href=""
          />
          <NavLink
            icon={<Message/>}
            href=""
          />
          <NavLink
            icon={<Journal/>}
            href=""
          />
          <NavLink
            icon={<Parametre/>}
            href=""
          />
        </ul>
    </>
  )
}
