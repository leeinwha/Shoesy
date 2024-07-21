import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button 
      className='bg-gray-900 text-white py-2 px-4 rounded-sm hover:brightness-200' 
      onClick={onClick}
    >{text}</button>
  )
}