import React from 'react'
import { ChatInputBtn } from './ChatInputBtn'
import { Picture } from '../../icon/Picture'

export const ChatInputBtns:React.FC = () => {
  return (
    
    <div className="flex flex-row">
      <ChatInputBtn 
        icon={<Picture />}
        onclick={()=> null}
      />
    </div>
   
  )
}
