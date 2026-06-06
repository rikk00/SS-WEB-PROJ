import React from 'react'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-academy-blue text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-bold text-lg">Basketball Academy</div>
          <div className="mt-2 text-sm">Membangun Generasi Atlet Basket Berprestasi</div>
        </div>
        <div>
          <div className="font-semibold">Kontak</div>
          <div className="mt-2 text-sm flex items-center gap-2"><Phone size={16}/> +62 812-3456-7890</div>
          <div className="mt-1 text-sm flex items-center gap-2"><Mail size={16}/> info@basketacademy.id</div>
          <div className="mt-1 text-sm flex items-center gap-2"><MapPin size={16}/> Jl. Olahraga No.1, Kota</div>
        </div>
        <div>
          <div className="font-semibold">Ikuti Kami</div>
          <div className="flex gap-3 mt-3">
            <a href="#" className="bg-white/10 p-2 rounded"><Instagram size={18}/></a>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4 text-center text-sm">&copy; {new Date().getFullYear()} Basketball Academy</div>
    </footer>
  )
}
