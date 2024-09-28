import React from 'react'
import { useDiscussion } from '../../hooks/DiscussionContext';

interface ConversationItemProps {
    time: number | null;
    conversationId: number | null;
    title: string;
    initial: string;
    content: string | null;
    count: number | undefined;
    onclick: (event: React.MouseEvent<HTMLDivElement>) => void; 
}

export const ConversationItem:React.FC<ConversationItemProps> = ({ time, title, initial,  content, count, conversationId, onclick}) => {

    const { activeDiscussion } = useDiscussion();

  return (


    <div 
    className={`relative flex flex-row items-center p-4 ${conversationId === activeDiscussion?.id ? " bg-gradient-to-r from-blue-100 to-transparent border-l-2 " : ''}`}
        onClick={onclick}
        >
    {/* heur min sec */}
        { 
            time !== null && 
            <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
                { time } min
            </div> 
        }

        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
            { initial }
        </div>
        <div className="flex flex-col flex-grow ml-3">
            <div className="text-sm font-medium">
                { title }
            </div>
            <div className="text-xs truncate w-40">
                { content }
            </div>
        </div>
        <div className="flex-shrink-0 ml-2 self-end mb-1">

        { typeof count !== 'undefined' && <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">{ count }</span> }

        
        </div>
    </div>
  )
}
