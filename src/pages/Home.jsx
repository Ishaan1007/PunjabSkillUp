import React from 'react'
import { courses } from '../data/courses'
import CourseRow from '../components/course/CourseRow'
import FloatingAction from '../components/common/FloatingAction'

export default function Home({ query }) {
  return (
    <div>
      <CourseRow title="Suggested" courses={courses} />
      <CourseRow title="DSA Courses" courses={courses.filter(c=>c.category==='DSA')} />
      <CourseRow title="Web Development Courses" courses={courses.filter(c=>c.category==='Web Development')} />
      <FloatingAction onClick={() => window.scrollTo({top:0,behavior:'smooth'})} />
    </div>
  )
}
