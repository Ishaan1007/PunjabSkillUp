import React, { useEffect, useMemo, useState } from 'react'
import { courses } from '../data/courses'
import CourseRow from '../components/course/CourseRow'
import { filterCourses } from '../utils/filterCourses'
import { fetchPlaylistVideos } from '../utils/youtubeApi'

export default function Home({ query }) {
  const filtered = filterCourses(courses, query)
  const [playlistVideos, setPlaylistVideos] = useState({})

  const playlists = useMemo(() => filtered.filter(c => c.type === 'playlist'), [filtered])
  const videos = useMemo(() => filtered.filter(c => c.type !== 'playlist'), [filtered])

  const categories = useMemo(() => {
    const map = new Map()
    for (const c of videos) {
      if (!c.category) continue
      if (!map.has(c.category)) map.set(c.category, [])
      map.get(c.category).push(c)
    }
    return Array.from(map.entries())
  }, [videos])

  useEffect(() => {
    let cancelled = false
    async function load() {
      const next = {}
      for (const p of playlists) {
        try {
          const items = await fetchPlaylistVideos(p.playlistId, 12)
          if (!cancelled) next[p.id] = items
        } catch {
          if (!cancelled) next[p.id] = []
        }
      }
      if (!cancelled) setPlaylistVideos(next)
    }
    load()
    return () => {
      cancelled = true
    }
  }, [playlists])
  return (
    <div>
      {playlists.map(p => {
        const items = playlistVideos[p.id] || []
        if (items.length === 0) return null
        return (
          <section key={p.id} className="my-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">{p.title}</h2>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto py-2 scrollbar-hide">
              {items.map(v => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                className="hover:opacity-95"
                aria-label={`Open ${v.title} on YouTube`}
              >
                <div className="w-64 sm:w-72 bg-[var(--card-bg)] rounded-xl p-3 shadow-md">
                  <img
                    src={v.thumbnail || `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-36 object-cover rounded-md"
                  />
                  <div className="mt-3">
                    <h3 className="font-semibold text-lg">{v.title}</h3>
                  </div>
                </div>
              </a>
              ))}
            </div>
          </section>
        )
      })}

      {categories.map(([cat, list]) => (
        <CourseRow
          key={cat}
          title={cat}
          courses={list}
        />
      ))}
    </div>
  )
}
