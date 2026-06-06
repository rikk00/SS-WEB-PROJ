import React from 'react'
import { stats } from '../data'

export default function About(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12" data-aos="fade-up">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">Tentang Basketball Academy</h2>
          <p className="mt-4 text-gray-700">Basketball Academy berdedikasi membentuk atlet yang beretika, disiplin, dan berprestasi melalui metode pelatihan modern.</p>
          <h3 className="mt-6 font-semibold">Visi</h3>
          <p className="text-gray-700">Menjadi pusat pembinaan basket terkemuka yang melahirkan atlet profesional.</p>
          <h3 className="mt-4 font-semibold">Misi</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Mengembangkan skill teknis dan strategi permainan.</li>
            <li>Meningkatkan kondisi fisik dan mental atlet.</li>
            <li>Membangun jalur kompetisi dan eksposur.</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(s=> (
            <div key={s.id} className="p-6 bg-white shadow rounded" data-aos="zoom-in">
              <div className="text-2xl font-bold text-academy-blue">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
