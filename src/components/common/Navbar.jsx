import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Navbar({ onSearch, query }) {
  const loc = useLocation()
  return (
    <header className="sticky top-0 z-40 bg-transparent backdrop-blur-sm py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo-symbol.svg" alt="logo" className="w-12 h-12" />
            <div className="text-2xl font-extrabold text-white">PunjabUpSkill</div>
          </div>
          <nav className="hidden md:flex items-center gap-3">
            <Link to="/" className={`px-4 py-2 rounded-full ${loc.pathname==='/'? 'bg-gray-800':'bg-gray-800/30'}`}>Home</Link>
            <Link to="/courses" className={`px-4 py-2 rounded-full ${loc.pathname==='/courses'? 'bg-gray-800':'bg-gray-800/30'}`}>All Courses</Link>
            <Link to="/contact" className={`px-4 py-2 rounded-full ${loc.pathname==='/contact'? 'bg-gray-800':'bg-gray-800/30'}`}>Contact</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar onSearch={onSearch} value={query} />
        </div>
      </div>
    </header>
  )
}
