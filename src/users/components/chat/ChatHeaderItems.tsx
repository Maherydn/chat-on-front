import React from 'react'
import { ChatHeaderItem } from './ChatHeaerItem'
import { AppelAudio } from '../../icon/AppelAudio'
import { AppelVideo } from '../../icon/AppelVideo'
import { Others } from '../../icon/Others'

export const ChatHeaderItems:React.FC = () => {
  return (
    <div className="ml-auto" >
        <ul className="flex flex-row items-center space-x-2">
            <ChatHeaderItem 
                icon={<AppelAudio />}
                href=''
            />
            <ChatHeaderItem 
                icon={<AppelVideo />}
                href=''
            />
            <ChatHeaderItem 
                icon={<Others />}
                href=''
            />
        </ul>
    </div>
  )
}
