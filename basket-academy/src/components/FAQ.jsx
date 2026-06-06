import React, { useState } from 'react'

const items = [
  { q: 'Berapa usia minimal peserta?', a: 'Usia minimal 6 tahun.' },
  { q: 'Apa fasilitas latihan?', a: 'Lapangan, perlengkapan, dan gym ringan.' },
  { q: 'Bagaimana proses seleksi program Elite?', a: 'Melalui tryout dan evaluasi pelatih.' }
]

export default function FAQ(){
  const [open, setOpen] = useState(null)
  return (
    <div className="max-w-4xl mx-auto px-6 py-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold mb-6">FAQ</h2>
      <div className="space-y-3">
        {items.map((it, idx)=> (
          <div key={idx} className="border rounded">
            <button className="w-full text-left p-4 flex justify-between items-center" onClick={()=>setOpen(open===idx?null:idx)}>
              <span>{it.q}</span>
              <span>{open===idx?'-':'+'}</span>
            </button>
            {open===idx && (
              <div className="p-4 border-t text-gray-700">{it.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
