import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageWrapper from './components/layout/PageWrapper'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import AllCourses from './pages/AllCourses'
import Contact from './pages/Contact'

export default function App() {
  const [query, setQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar onSearch={setQuery} query={query} />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home query={query} />} />
          <Route path="/courses" element={<AllCourses query={query} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageWrapper>
    </div>
  )
}
