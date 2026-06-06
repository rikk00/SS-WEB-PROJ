import React, { useState } from 'react'
import { gallery } from '../data'

export default function Gallery(){
  const [open, setOpen] = useState(null)
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Galeri</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map(g=> (
          <button key={g.id} onClick={()=>setOpen(g)} className="overflow-hidden rounded shadow">
            <img src={g.src} alt={g.alt} className="w-full h-40 object-cover"/>
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={()=>setOpen(null)}>
          <img src='logo.jpeg' alt={open.alt} className="max-w-3xl max-h-[80vh] rounded" />
        </div>
      )}
    </div>
  )
}
