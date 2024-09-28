import React from 'react'
import { Add } from '../../icon/Add'

export const AddBtn:React.FC = () => {
  return (
    <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
        <Add />
    </button>
  )
}
