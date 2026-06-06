import React from 'react'
import { programs } from '../data'

export default function Programs(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Program Latihan</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {programs.map(p=> (
          <div key={p.id} className="bg-white shadow rounded overflow-hidden" data-aos="fade-up">
            <img src={p.img} alt={p.title} className="h-36 w-full object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              <div className="text-xs text-gray-500 mt-3">Jadwal: {p.schedule}</div>
              <div className="mt-4">
                <button className="btn-primary">Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
