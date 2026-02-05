import React from 'react'

export default function FloatingAction({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="History"
      title="History"
      className="fixed bottom-6 right-6 bg-brand text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v5l3 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  )
}
