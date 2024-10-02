import React from 'react'

interface ChatTitleProps {
    initial: string;
    title: string | undefined;
    status: string | boolean
}

export const ChatTitle:React.FC<ChatTitleProps> = ( { initial, title, status} ) => {
  return (
    <>
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
        { initial }
        </div>
        <div className="flex flex-col ml-3">
        <div className="font-semibold text-sm">
            { title }
        </div>
        <div className="text-xs text-green-600">
            { status }
        </div> 
        </div>

    </>
  )
}
