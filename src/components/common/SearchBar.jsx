import React from 'react'

export default function SearchBar({ onSearch }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
          <circle cx="11" cy="11" r="6" />
        </svg>
      </div>
      <input
        aria-label="Search courses"
        onChange={(e) => onSearch(e.target.value)}
        className="w-64 md:w-96 bg-gray-800/50 placeholder-gray-400 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand"
        placeholder="Search courses"
      />
    </div>
  )
}
