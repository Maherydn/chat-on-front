import React from 'react'


interface ChatHeaderItemProps {
  icon: React.ReactNode; // Icône SVG à passer en tant que propriété
  href: string; // Lien de navigation
}

export const ChatHeaderItem:React.FC<ChatHeaderItemProps> = ({ icon, href}) => {
  return (
    <li>
      <a href={href}
          className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full">
          <span>
            { icon }
          </span>
      </a>
    </li>
  )
}
