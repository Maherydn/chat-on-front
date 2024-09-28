import React from 'react'

interface ChatInputBntProps {
  icon: React.ReactNode; 
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}

export const ChatInputBtn:React.FC<ChatInputBntProps> = ({ icon, onclick}) => {
  return (
    <button 
      className="flex items-center justify-center h-10 w-8 text-gray-400"
      onClick={onclick}
      >
        { icon }
    </button>
  )
}
