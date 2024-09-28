import React from 'react'

interface ChatMessageProps {
  currentUserId: number | undefined;
  senderId: number;
  content: string;
  initial: string
}

export const ChatMessage:React.FC<ChatMessageProps> = ({ initial, currentUserId, senderId, content}) => {

  const isSender = senderId !== currentUserId;

  return (
    <>
    <div className={ isSender ? "col-start-1 col-end-8 p-3 rounded-lg" : "col-start-6 col-end-13 p-3 rounded-lg"}>
        <div className={ isSender ? "flex flex-row items-center" : "flex items-center justify-start flex-row-reverse"}>
          <div
              className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
          >
            { initial }
          </div>
          <div
              className={`relative ${ isSender ? 'ml-3 bg-white' : 'mr-3 bg-indigo-100' } text-sm py-2 px-4 shadow rounded-xl`}
          >
          <div>
            { content }
          </div>
          </div>
        </div>
      </div>

    </>
  )
}
