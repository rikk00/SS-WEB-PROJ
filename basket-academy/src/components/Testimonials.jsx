import React from 'react'
import { testimonials } from '../data'

export default function Testimonials(){
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Testimoni</h2>
      <div className="space-y-4">
        {testimonials.map(t=> (
          <div key={t.id} className="bg-white shadow rounded p-4 flex gap-4" data-aos="fade-up">
            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover"/>
            <div>
              <div className="font-semibold">{t.name} <span className="text-sm text-gray-500">• {t.role}</span></div>
              <p className="text-gray-700 mt-1">{t.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
