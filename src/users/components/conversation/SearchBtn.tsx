import React from 'react'
import { Search } from '../../icon/Search'

export const SearchBtn:React.FC = () => {
  return (
    <>
        <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
            <Search />
        </button>
    </>
  )
}
