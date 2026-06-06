import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  ['Home', '#home'],
  ['Tentang', '#about'],
  ['Program', '#programs'],
  ['Pelatih', '#coaches'],
  ['Galeri', '#gallery'],
  ['Sertifikat', '#certificates'],
  ['Testimoni', '#testimonials'],
  ['Daftar', '#registration'],
  ['FAQ', '#faq']
]

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed w-full z-50 top-0 sticky-nav">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-academy-orange flex items-center justify-center text-white font-bold">BA</div>
          <div className="hidden md:block">
            <div className="font-bold text-lg">Basketball Academy</div>
            <div className="text-xs text-gray-300">Membangun Generasi Atlet</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l=> (
            <a key={l[0]} href={l[1]} className="text-sm text-gray-700 hover:text-academy-blue">{l[0]}</a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} className="p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col p-4 gap-3">
            {links.map(l=> <a key={l[0]} href={l[1]} onClick={()=>setOpen(false)} className="py-2">{l[0]}</a>)}
          </div>
        </div>
      )}
    </header>
  )
}
