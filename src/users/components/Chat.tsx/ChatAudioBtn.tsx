import React from 'react'
import { Vocal } from '../../icon/Vocal'

export const ChatAudioBtn:React.FC = () => {
  return (
    <button className="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
        <Vocal />
    </button>
  )
}
