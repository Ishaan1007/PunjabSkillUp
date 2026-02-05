import React from 'react'

function getThumbnail(course) {
  if (course.youtubeId) return `https://img.youtube.com/vi/${course.youtubeId}/hqdefault.jpg`
  return course.thumbnail || '/images/thumbnails/placeholder.jpg'
}

export default function CourseCard({ course }) {
  const thumb = getThumbnail(course)
  const href = course.youtubeId ? `https://www.youtube.com/watch?v=${course.youtubeId}` : null

  const card = (
    <div className="w-72 bg-[var(--card-bg)] rounded-xl p-3 shadow-md hover:scale-[1.02] transform transition">
      <img src={thumb} alt={course.title} className="w-full h-36 object-cover rounded-md" />
      <div className="mt-3">
        <h3 className="font-semibold text-lg">{course.title}</h3>
        <p className="text-sm text-gray-400">{course.category} • {course.level}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="hover:opacity-95" aria-label={`Open ${course.title} on YouTube`}>{card}</a>
    )
  }

  return card
}
