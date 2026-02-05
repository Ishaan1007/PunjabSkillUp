import React from 'react'

export default function CourseSlider({ children }) {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">{children}</div>
    </div>
  )
}
