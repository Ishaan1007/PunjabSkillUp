import React from 'react'
import CourseCard from './CourseCard'

export default function CourseRow({ title, courses = [] }) {
  return (
    <section className="my-6">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">
        {courses.map(c => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  )
}
