import React from 'react'

export default function PageWrapper({ children }) {
  return (
    <main className="container mx-auto px-6 py-8 max-w-6xl">
      <div className="rounded-2xl p-6 bg-transparent">{children}</div>
    </main>
  )
}
