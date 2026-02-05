export function filterCourses(courses, query) {
  if (!query) return courses
  const q = query.toLowerCase()
  return courses.filter(c =>
    c.title.toLowerCase().includes(q) ||
    (c.category && c.category.toLowerCase().includes(q))
  )
}
