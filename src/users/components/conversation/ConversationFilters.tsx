import React from 'react'

export const ConversationFilters:React.FC = () => {
  return (
    <>
        <ul className="flex flex-row items-center justify-between">
            <li>
              <button
                 className="flex items-center pb-3 text-xs font-semibold relative text-indigo-800">
                <span>All Conversations</span>
                <span className="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
              </button>
            </li>
            <li>
              <button
                 className="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                <span>Archived</span>
              </button>
            </li>
            <li>
              <button
                 className="flex items-center pb-3 text-xs text-gray-700 font-semibold">
                <span>Starred</span>
              </button>
            </li>
        </ul>
    </>
  )
}
