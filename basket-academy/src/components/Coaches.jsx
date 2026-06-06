import React from 'react'
import { coaches } from '../data'

export default function Coaches(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Pelatih</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coaches.map(c=> (
          <div key={c.id} className="bg-white shadow rounded p-4 hover:scale-105 transition-transform" data-aos="fade-up">
            <img src={c.img} alt={c.name} className="w-full h-44 object-cover rounded"/>
            <div className="mt-3">
              <div className="font-semibold">{c.name}</div>
              <div className="text-sm text-gray-500">{c.position} • {c.experience}</div>
              <div className="text-xs text-gray-500 mt-1">Sertifikasi: {c.cert}</div>
              <p className="text-sm text-gray-700 mt-2">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
