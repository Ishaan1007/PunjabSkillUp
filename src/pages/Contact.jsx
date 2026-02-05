import React from 'react'
import { contact } from '../data/contact'

export default function Contact() {
  return (
    <div className="max-w-3xl">
      <div className="bg-gray-800/40 p-8 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">E-mail : <a className="underline text-gray-200" href={`mailto:${contact.email}`}>{contact.email}</a></h2>
        <p className="mb-3">Contact No. : <strong>{contact.phone}</strong></p>
        <p className="mb-3">Address : <br />{contact.address.map((a,i)=>(<span key={i} className="block">{a}</span>))}</p>
      </div>
    </div>
  )
}
