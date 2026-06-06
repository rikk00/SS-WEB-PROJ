import React from 'react'
import { certificates } from '../data'

export default function Certificates(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Sertifikat & Prestasi</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map(c=> (
          <div key={c.id} className="bg-white shadow rounded overflow-hidden" data-aos="fade-up">
            <img src={c.img} alt={c.title} className="h-36 w-full object-cover"/>
            <div className="p-4">
              <div className="font-semibold">{c.title}</div>
              <div className="text-sm text-gray-600 mt-2">{c.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
